import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/Login.vue'
import RegisterPage from '../components/Reg.vue'
import CreditcrdPage from '../components/Creditcrd.vue'
import DelivaryPage from '../components/Delivary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/creditcrd',
      name: 'creditcrd',
      component: CreditcrdPage
    },
    {
      path: '/delivary',
      name: 'delivary',
      component: DelivaryPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
