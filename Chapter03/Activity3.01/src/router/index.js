import { createRouter, createWebHistory } from 'vue-router'
import Activity from '../components/Activity3-01.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //  зачем это ?
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // динамический импорт (с использованием import()) загружает компонент только тогда, когда он нужен —
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    }
  ]
})

export default router
