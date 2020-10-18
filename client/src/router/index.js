import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Default routes imports
import Home from '@/components/Home'

// Advertisement routes imports
import AdvertisementCreate from '@/components/advertisement/Create'
import AdvertisementIndex from '@/components/advertisement/Index'
import AdvertisementShow from '@/components/advertisement/Show'
// Admin routes imports
import AdminAdvertisement from '@/components/advertisement/admin/Index'
import AdminAdvertisementEdit from '@/components/advertisement/admin/Edit'

// Candidacy routes imports
import CandidacyCreate from '@/components/candidacy/Create'
import CandidacyIndex from '@/components/candidacy/Index'
import CandidacyShow from '@/components/candidacy/Show'
// Admin routes imports
import AdminCandidacy from '@/components/candidacy/admin/Index'

// Company routes imports 
import CompanyCreate from '@/components/company/Create'
import CompanyIndex from '@/components/company/Index'
import CompanyShow from '@/components/company/Show'
import CompanyDashboard from '@/components/company/Dashboard'
// Admin routes imports
import AdminCompany from '@/components/company/admin/Index'
import AdminCompanyEdit from '@/components/company/admin/Edit'

// People routes imports
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import PeopleShow from '@/components/user/Show'
import PeopleDashboard from '@/components/user/Dashboard'
// Admin routes imports
<<<<<<< HEAD
import AdminPeople from '@/components/user/admin/Index'
import AdminPeopleEdit from '@/components/user/admin/Edit'
=======
import AdminAdvertisement from '@/components/advertisement/Admin'
import AdminCandidacy from '@/components/candidacy/Admin'
import AdminCompany from '@/components/company/Admin'
import AdminPeople from '@/components/user/Admin'
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc

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
      props: true,
      meta: {
        requiresAuth: true
      }
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
    },
    {
      path: '/admin/advertisement',
      name: 'Admin_advertisement',
      component: AdminAdvertisement,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/admin/candidacy',
      name: 'Admin_candidacy',
      component: AdminCandidacy,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/admin/company',
      name: 'Admin_company',
      component: AdminCompany,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/admin/people',
      name: 'Admin_people',
      component: AdminPeople,
      meta: {
        requiresAdmin: true
      }
<<<<<<< HEAD
    },
    {
      path: '/admin/people/edit/:id',
      name: 'Admin_People_Edit',
      component: AdminPeopleEdit,
      props: true,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/admin/company/edit/:id',
      name: 'Admin_Company_Edit',
      component: AdminCompanyEdit,
      props: true,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/admin/advertisement/edit/:id',
      name: 'Admin_Advertisement_Edit',
      component: AdminAdvertisementEdit,
      props: true,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/company/dashboard/:id',
      name: 'Company_dashboard',
      component: CompanyDashboard,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/dashboard/:id',
      name: 'People_dashboard',
      component: PeopleDashboard,
      props: true,
      meta: {
        requiresAuth: true
      }
=======
>>>>>>> a7a9a89971a3b90153883ecc5d45cfd8f61cd8fc
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
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if(store.getters.isAdmin){
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
