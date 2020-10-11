import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompanyCreate from '@/components/company/Create'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import AdvertisementCreate from '@/components/advertisement/Create'
import CandidacyCreate from '@/components/candidacy/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
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
    },
    {
      path: '/advertisement/create',
      name: 'Advertisement_create',
      component: AdvertisementCreate
    },
    {
      path: '/candidacy/create',
      name: 'Candidacy_create',
      component: CandidacyCreate
    }
  ]
})
