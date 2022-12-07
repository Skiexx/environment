import { $authHost } from '@/http'

export const basketModule = {
  store: () => ({
    basket: [],
    isBasketLoading: true
  }),
  getters: {
    getBasket (state) {
      return state.basket
    },
    getIsBasketLoading (state) {
      return state.isBasketLoading
    }
  },
  mutations: {
    setBasket (state, newValue) {
      state.basket = [...newValue]
    },
    setIsBasketLoading (state, bool) {
      state.isBasketLoading = bool
    }
  },
  actions: {
    async addToBasket (state, productId) {
      try {
        const response = $authHost.post(process.env.VUE_APP_API_URL + `/cart/${productId}`)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchBasket (state) {
      try {
        const response = await $authHost.get(process.env.VUE_APP_API_URL + '/cart')
        console.log(response)
        state.commit('setBasket', response.data.content)
        state.commit('setIsBasketLoading', false)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
