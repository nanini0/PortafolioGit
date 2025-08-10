import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Aboutme from '../views/Aboutme.vue'
import Project from '../views/Project.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'sobre mi',
    component: Aboutme
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contact
  },
  {
    path: '/Project',
    name: 'projectos',
    component: Project
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router