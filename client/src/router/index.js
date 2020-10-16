import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Default routes imports
import Home from '@/components/Home'

// Advertisement routes imports
import AdvertisementCreate from '@/components/advertisement/Create'
import AdvertisementIndex from '@/components/advertisement/Index'
import AdvertisementShow from '@/components/advertisement/Show'

// Candidacy routes imports
import CandidacyCreate from '@/components/candidacy/Create'
import CandidacyIndex from '@/components/candidacy/Index'
import CandidacyShow from '@/components/candidacy/Show'

// Company routes imports 
import CompanyCreate from '@/components/company/Create'
import CompanyIndex from '@/components/company/Index'
import CompanyShow from '@/components/company/Show'

// People routes imports
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import PeopleShow from '@/components/user/Show'
//import Dashboard from '@/components/user/Dashboard'

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
      path: '/advertisement/create/:id',
      name: 'Advertisement_create',
      component: AdvertisementCreate,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/candidacy/create/:id',
      name: 'Candidacy_create',
      component: CandidacyCreate,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/advertisement/index',
      name: 'Advertisement_index',
      component: AdvertisementIndex
    },
    {
      path: '/company/index',
      name: 'Company_index',
      component: CompanyIndex
    },
    {
      path: '/advertisement/show/:id',
      name: 'Advertisement_show',
      component: AdvertisementShow,
      props: true
    },
    {
      path: '/candidacy/show/:id',
      name: 'Candidacy_show',
      component: CandidacyShow,
      props: true
    },
    {
      path: '/company/show/:id',
      name: 'Company_show',
      component: CompanyShow,
      props: true
    },
    {
      path: '/user/show/:id',
      name: 'People_show',
      component: PeopleShow,
      props: true
    },
    {
      path: '/candidacy/index',
      name: 'Candidacy_index',
      component: CandidacyIndex
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
