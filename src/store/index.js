import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    authUser: null
  },
  getters: {
    isAuth : state => state.isAuth
  },
  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user;
      state.isAuth = true
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  },
  modules: {
  }
})
