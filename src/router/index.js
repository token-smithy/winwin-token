import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/presale',
      name: 'presale',
      component: () => import('../views/PresaleView.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log("scrollBehavior", {to, from, savedPosition});
    if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 100
        }
      }
  },
})

export default router
