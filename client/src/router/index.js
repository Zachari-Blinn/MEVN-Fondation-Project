import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompanyCreate from '@/components/company/Create'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import AdvertisementCreate from '@/components/advertisement/Create'
import CandidacyCreate from '@/components/candidacy/Create'
import store from '../store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/company/create',
      name: 'Company_create',
      component: CompanyCreate,
      meta: {
        requiresAuth: true
      }
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
      component: AdvertisementCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/candidacy/create',
      name: 'Candidacy_create',
      component: CandidacyCreate,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
