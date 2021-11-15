import PageIndex from '@/views/pages/Index.vue'
import PageError404 from '@/views/Error404.vue'

export const routes = [
  {
    path: '/',
    component: PageIndex,
  },
  {
    path: '/:pathMatch(.*)*',
    // component: PageError404,
    redirect: '/',
  },
]
