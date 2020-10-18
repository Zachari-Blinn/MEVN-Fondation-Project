import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    people: JSON.parse(localStorage.getItem('people')) || ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, people) {
      state.status = 'success'
      state.token = token
      state.people = people
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    set_people(state, people) {
      state.people = people;
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    people: state => state.people,
    isAdmin: state => state.people.isAdmin
  },
  actions: {
    login({
      commit
    }, people) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:8081/people/login',
          data: people,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const people = resp.data.people

            console.log(resp.data.people)

            localStorage.setItem('token', token)
            localStorage.setItem('people', JSON.stringify(people))

            axios.defaults.headers.common['Authorization'] = token

            commit('auth_success', token, people)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register({
      commit
    }, people) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:8081/people/register',
          data: people,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const people = resp.data.people
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, people)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('people')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
})
