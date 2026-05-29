import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CommandPage from '@/pages/CommandPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/command/:name',
    name: 'command',
    component: CommandPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
