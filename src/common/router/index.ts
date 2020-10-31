import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '/@views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) || createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
