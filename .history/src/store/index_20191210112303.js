import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isActive: false,
    loginForm: {
      name: '',
      pass: ''
    }
  },
  getters: {

  },
  mutations: {
    TOGGLE_SIDEBAR (state) {
      state.isActive = !state.isActive
    },
    LOGIN (state, form) {
      state.loginForm = form
    }
  },
  actions: {
    toggleSideBar ({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    login ({commit}) {
      commit('LOGIN')
    }
  }
})

export default store
