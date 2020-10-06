import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompanyCreate from '@/components/company/Create'
import Login from '@/components/user/Login'
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
      name: 'Company_create',
      component: CompanyCreate
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
