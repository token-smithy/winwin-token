import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      } else{
        return { top: 0 };
      }
  },
})

export default router
