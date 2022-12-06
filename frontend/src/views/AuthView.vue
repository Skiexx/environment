<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal" v-if="this.$route.path === '/login'">Авторизация</h1>
    <h1 class="display-4 fw-normal" v-else>Регистрация</h1>
  </div>
  <login-form v-if="this.$route.path === '/login'"></login-form>
  <sign-up-form v-else></sign-up-form>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import SignUpForm from '@/components/SignUpForm'

export default {
  data () {
    return {

    }
  },
  components: {
    LoginForm,
    SignUpForm
  }
}
</script>

<style scoped>

</style>
