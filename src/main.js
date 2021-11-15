import { createApp } from 'vue'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css'
// import './styles/tailwind.css' // importing pre rendered tailwind.css file (build with `npm run build:tailwind`)
// import './styles/tailwind.index.css' // importing tailwind via official PostCSS wupport
import 'tailwindcss/tailwind.css' // importing tailwind official css file?
import 'nprogress/nprogress.css'
import '@/styles/global.css'

import VueClickAway from 'vue3-click-away'

// Application Logic Imports
import { sync } from 'vuex-router-sync'
import App from '@/App.vue'
import { router } from '@/router'
import { store } from '@/store'

sync(store, router, { moduleName: 'currentRoute' })

const app = createApp(App)

// NOTE: could possibly be used to reduce loggin in produciton
// app.config.errorHandler = () => null
// app.config.warnHandler = () => null

// Loading App Logic
app.use(store)
app.use(router)
app.use(VueClickAway)

// Mounting the App
app.mount('#app')
