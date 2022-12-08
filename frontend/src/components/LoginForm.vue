<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
    <div class="col">
      <div class="row">
        <form>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             v-model="user.email"
            >
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="user.password"
            >
            <label for="floatingPassword">Password</label>
          </div>

          <router-link class="w-100 btn btn-lg btn-primary mb-3" @click="sendData" to="/">
            Войти
          </router-link>
          <router-link class="w-100 btn btn-lg btn-outline-info" to="/">
            Назад
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    sendData (e) {
      e.preventDefault()

      this.login(this.user)
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>

<style scoped>

</style>
