import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import { routes } from './routes'
import { store } from '@/store'

export const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
  // Simulate native-like scroll behavior when navigating to a new route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  },
})

if (import.meta.hot) {
  let removeRoutes = []

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (const removeRoute of removeRoutes) {
      removeRoute()
    }

    removeRoutes = []
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route))
    }

    router.replace('')
  })
}

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  function redirectToLogin() {
    // Pass the original route to the login component
    return next({ name: 'AuthLogin', query: { redirectFrom: routeTo.fullPath } })
  }

  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start()
  }

  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  const onlyLoggedOut = routeTo.matched.some((route) => route.meta.onlyLoggedOut)

  // If auth isn't required for the route, just continue.
  if (!authRequired && !onlyLoggedOut) {
    return next()
  }

  // If auth is required check if cookies are set and/or valid...
  const validUser = await store.dispatch('auth/validate')
  if (!validUser && authRequired && routeTo.name !== 'AuthLogin') {
    return redirectToLogin()
  }

  if (validUser && onlyLoggedOut) {
    return next({ name: 'AdminDashboard' })
  }

  // await store.dispatch('userSettings/fetchUserSettings')

  // Check if activated account is required on this route:
  // const activationRequired = routeTo.matched.some((route) => route.meta.activationRequired)
  // // If activation is not required move forward to the requested page
  // if (!activationRequired) return next()

  // If activation is required...
  // if (!store.getters['auth/activated']) return next({ name: 'notActivated', replace: true })

  return next()
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...

    for (const route of routeTo.matched) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length > 0) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done()
              }

              // Complete the redirect.
              next(...args)
              reject(new Error('redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    if (error.message !== 'redirected') {
      console.error('beforeResolve hook error:', error)
    }

    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
