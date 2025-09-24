import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Produtos from '../views/Produtos.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/produtos', name: 'Produtos', component: Produtos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
