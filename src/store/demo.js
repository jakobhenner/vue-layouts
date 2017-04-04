import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

/**
 * Modules
 */
import breakpoints from './breakpoints'

const store = new Vuex.Store({
  modules: {
    breakpoints
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})

export default store
