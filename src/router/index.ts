import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Produtos from '../views/Produtos.vue'
import ProdutoViews from '../views/ProdutoViews.vue'
import Carrinho from '../views/Carrinho.vue'
import DetalhesProduto from '../views/DetalhesProduto.vue'
import Cadastro from '../views/Cadastro.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/produtos', name: 'Produtos', component: Produtos },
  { path: '/produtoviews', name: 'ProdutoViews', component: ProdutoViews },
  { path: '/carrinho', name: 'Carrinho', component: Carrinho },
  { path: '/produto/:id', name: 'DetalhesProduto', component: DetalhesProduto },
  { path: '/cadastro', name: 'Cadastro', component: Cadastro },
  { path: '/login', name: 'Login', component: Login },
  { path: '/perfil', name: 'Perfil', component: Perfil }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
