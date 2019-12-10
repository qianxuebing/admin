import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isActive: false,
    loginForm: {
      name: 'admin',
      pass: 'admin123'
    }
  },
  getters: {

  },
  mutations: {
    TOGGLE_SIDEBAR (state) {
      state.isActive = !state.isActive
    }
  },
  actions: {
    toggleSideBar ({commit}) {
      commit('TOGGLE_SIDEBAR')
    }
  }
})

export default store
