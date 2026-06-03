import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CommandPage from '@/pages/CommandPage.vue'
import DirectoriesPage from '@/pages/DirectoriesPage.vue'
import DirectoryPage from '@/pages/DirectoryPage.vue'

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
  {
    path: '/directories',
    name: 'directories',
    component: DirectoriesPage,
  },
  {
    path: '/directory/:shortName',
    name: 'directory',
    component: DirectoryPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
