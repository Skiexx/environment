import { $host } from '@/http'

export const catalogModule = {
  state: () => ({
    catalog: [],
    pages: 0,
    currentPage: 1,
    isProductsLoading: true,
    limit: 6
  }),
  getters: {
    getCatalog (state) {
      return state.catalog
    },
    getCurrentPage (state) {
      return state.currentPage
    },
    getPages (state) {
      return state.pages
    },
    getIsProductsLoading (state) {
      return state.isProductsLoading
    }
  },
  mutations: {
    setCatalog (state, newValue) {
      state.catalog = newValue
    },
    setPages (state, newValue) {
      state.pages = newValue
    },
    incrementCurrentPage (state) {
      if (state.currentPage <= state.pages) {
        state.currentPage++
      }
    },
    decrementCurrentPage (state) {
      if (state.currentPage > 1) {
        state.currentPage--
      }
    },
    setIsProductsLoading (state, bool) {
      state.isProductsLoading = bool
    },
    setLimit (state, newValue) {
      state.limit = newValue
    },
    setCurrentPage (state, newValue) {
      state.currentPage = newValue
    }
  },
  actions: {
    async fetchProducts ({ state, commit }) {
      try {
        const response = await $host.get(process.env.VUE_APP_API_URL + '/products')
        const data = response.data.content

        commit('setLimit', state.limit)
        commit('setPages', Math.ceil(response.data.content.length / state.limit))

        const startItem = (state.currentPage - 1) * state.limit
        const lastItem = startItem + state.limit

        commit('setCatalog', data.slice(startItem, lastItem)
        )
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsProductsLoading', false)
      }
    }
  }
}
