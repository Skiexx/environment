import { $host, $authHost } from '@/http'

export const userModule = {
  store: () => ({
    isAuth: false
  }),
  getters: {
    getUserIsAuth (state) {
      return state.isAuth
    }
  },
  mutations: {
    setUserIsAuth (state, bool) {
      state.isAuth = bool
    }
  },
  actions: {
    async login (store, { email, password }) {
      try {
        const response = await $host.post(process.env.VUE_APP_API_URL + '/login', {
          email: email,
          password: password
        })
        localStorage.setItem('token', `Bearer ${response.data.content.user_token}`)
        store.commit('setUserIsAuth', true)
      } catch (e) {
        console.log(e)
      }
    },
    async signup (store, { email, password, username }) {
      try {
        const response = await $host.post(process.env.VUE_APP_API_URL + '/signup', {
          fio: username,
          email: email,
          password: password
        })
        localStorage.setItem('token', `Bearer ${response.data.content.user_token}`)
        store.commit('setUserIsAuth', true)
      } catch (e) {
        console.log(e)
      }
    },
    async logout (store) {
      try {
        const response = await $authHost.get(process.env.VUE_APP_API_URL + '/logout')
        localStorage.removeItem('token')
        store.commit('setUserIsAuth', false)
        console.log(response.data.content)
      } catch (e) {
        console.log(e)
      }
    },
    fetchUser (store) {
      if (localStorage.getItem('token')) {
        store.commit('setUserIsAuth', true)
      } else {
        store.commit('setUserIsAuth', false)
      }
    }
  }
}
