import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Uploader from '../components/Uploader.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/uploader',
    name: 'Uploader',
    component: Uploader
  }
]

const router = new VueRouter({
  routes
})

export default router
