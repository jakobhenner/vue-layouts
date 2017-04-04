import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

/**
 * Modules
 */
import grid from './modules/grid.js'
import breakpoints from './modules/breakpoints.js'

const store = new Vuex.Store({
  modules: {
    grid,
    breakpoints
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})

export default store
