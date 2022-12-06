import { $authHost } from '@/http'

export const ordersModule = {
  store: () => ({
    orders: [],
    isOrdersLoading: true
  }),
  getters: {
    getOrders (state) {
      return state.orders
    }
  },
  mutations: {
    setOrders (state, newValue) {
      state.orders = [...newValue]
    }
  },
  actions: {
    async fetchOrders (store) {
      try {
        const response = await $authHost.get(process.env.VUE_APP_API_URL + '/order')
        console.log(response)
        store.commit('setOrders', response.data.content)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
