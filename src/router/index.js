import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
