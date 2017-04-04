
export const SET_VIEWPORT_SIZE = 'SET_VIEWPORT_SIZE'

export default {
  namespaced: true,
  state: {
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoints: [
      {
        name: 'xs',
        size: 0,
        matches: false
      },
      // Small screen / phone
      {
        name: 'sm',
        size: 544,
        matches: false
      },
      // Medium screen / tablet
      {
        name: 'md',
        size: 768,
        matches: false
      },
      // Large screen / desktop
      {
        name: 'lg',
        size: 1280,
        matches: false
      },
      // Extra large screen / wide desktop
      {
        name: 'xl',
        size: 1920,
        matches: false
      }
    ],
  },
  mutations: {
    [SET_VIEWPORT_SIZE] (state, payload) {
      state.width = payload.width
      state.height = payload.height

      state.breakpoints.forEach((breakpoint, i) => {
        /** Check whether there's a next breakpoint */
        const hasNextBreakpoint = state.breakpoints.length > i + 1

        /** If that's the case, use the next breakpoint as reference */
        const index = hasNextBreakpoint ? i + 1 : i

        /** Determine width, if next breakpoint is available, minus with one */
        const width = state.breakpoints[index].size - (hasNextBreakpoint ? 1 : 0)

        /**
         * Create media query string
         */
        let query
        if (hasNextBreakpoint) {
          query = `(min-width: ${breakpoint.size}px) and (max-width: ${width}px)`
        } else {
          query = `(min-width: ${width}px)`
        }

        /**
         * Check if breakpoint matches
         */
        breakpoint.matches = window.matchMedia(query).matches
        // breakpoint.active = window.matchMedia(`(min-width: ${width}px)`).matches
        // console.log('%c' + breakpoint.name, 'font-weight: bold', query, breakpoint.matches)
      })
    },
  },
  actions: {
    setViewport ({ state, commit }, payload) {
      commit(SET_VIEWPORT_SIZE, payload)
    }
  },
  getters: {
    width: state => state.width,
    height: state => state.height,
    breakpoints: state => state.breakpoints,
    breakpoint: state => state.breakpoints.find(breakpoint => breakpoint.matches) || {}
  }
}
