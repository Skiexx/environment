<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">«Самоход»</span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link to="signup" class="me-3 py-2 text-dark text-decoration-none" v-show="!isAuth()">Регистрация</router-link>
        <router-link to="login" class="me-3 py-2 text-dark text-decoration-none" v-show="!isAuth()">Авторизация</router-link>
        <router-link to="/" class="me-3 py-2 text-dark text-decoration-none" v-show="isAuth()" @click="logout">Выйти из аккаунта</router-link>
        <router-link to="orders" class="me-3 py-2 text-dark text-decoration-none" v-show="isAuth()">Мои заказы</router-link>
        <router-link to="basket" class="me-3 py-2 text-dark text-decoration-none" v-show="isAuth()">Корзина</router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapGetters({
      isAuth: 'getUserIsAuth'
    }),
    ...mapActions({
      logout: 'logout'
    })
  }
}
</script>

<style scoped>

</style>
