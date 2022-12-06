<template>
  <orders-item v-for="order in orders" :key="order" />
</template>

<script>
import OrdersItem from '@/components/OrdersItem'

export default {
  data () {
    return {}
  },
  components: {
    OrdersItem
  },
  props: {
    orders: Array
  }
}
</script>

<style scoped>

</style>
