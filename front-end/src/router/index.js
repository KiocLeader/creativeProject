import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Runs from '../components/Runs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/runs',
    name: 'Runs',
    component: Runs
  }
]

const router = new VueRouter({
  routes
})

export default router
