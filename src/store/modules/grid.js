import { SET_FLUID_GRID, SET_MAX_WIDTH_GRID } from '../mutation-types'

export default {
  state: {
    fluid: false,
    maxWidth: true
  },
  mutations: {
    [SET_FLUID_GRID] (state, val) {
      state.fluid = val
    },
    [SET_MAX_WIDTH_GRID] (state, val) {
      state.maxWidth = val
    }
  }
}
