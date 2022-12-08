<template>
  <div>
    <nav-bar></nav-bar>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterComponent from '@/components/FooterComponent'
import { mapActions } from 'vuex'

export default {
  components: {
    NavBar,
    FooterComponent
  },
  methods: {
    ...mapActions({
      fetchUser: 'fetchUser',
      fetchOrders: 'fetchOrders',
      fetchProducts: 'fetchProducts',
      fetchBasket: 'fetchBasket'
    })
  },
  mounted () {
    this.fetchUser()
    this.fetchOrders()
    this.fetchBasket()
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
