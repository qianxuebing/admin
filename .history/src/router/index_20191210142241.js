import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Layout from '@/views/layout/Layout'
import Home from '@/views/home/Home'
import Table from '@/views/table/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/Layout/Table',
          name: 'Table',
          component: Table
        }
      ]
    }
  ]
})
