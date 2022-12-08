import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import AuthView from '@/views/AuthView.vue'
import BasketView from '@/views/BasketView.vue'
import OrdersView from '@/views/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/signup',
    name: 'signup',
    component: AuthView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
