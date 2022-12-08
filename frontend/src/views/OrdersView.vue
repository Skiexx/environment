<template>
  <orders-list :orders="orders()"/>
</template>

<script>
import OrdersList from '@/components/OrdersList'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapGetters({
      orders: 'getOrders'
    })
  },
  components: {
    OrdersList
  }
}
</script>

<style scoped>

</style>
