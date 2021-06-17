import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import User from '../views/User.vue'
import Global from '../views/Global.vue'
import Resource from '../views/Resource.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/global',
    name: 'Global',
    component: Global
  },
  {
    path: '/resource',
    name: 'Resource',
    component: Resource
  }
]

const router = new VueRouter({
  routes
})

export default router
