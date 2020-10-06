import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompanyCreate from '@/components/company/CompanyCreate'
import Login from '@/components/user/login'
import Register from '@/components/user/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/company/create',
      name: 'CompanyCreate',
      component: CompanyCreate
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
