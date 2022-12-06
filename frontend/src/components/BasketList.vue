<template>
  <div v-if="!isBasketLoading()" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <basket-item :item="item" v-for="item in items" :key="item.id"/>
  </div>
  <div v-else-if="items.length === 0" class="container d-flex justify-content-center">
    <h2 class="mt-5 text-danger">Список продуктов пуст</h2>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="spinner-border" role="status" v-show="isBasketLoading()">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import BasketItem from '@/components/BasketItem'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      count: 0
    }
  },
  components: {
    BasketItem
  },
  props: {
    items: Array
  },
  methods: {
    getCount () {
      console.log(this.items)
      // this.count = this.items.filter((item, index) => item.product_id === item[index + 1].product_id)
    },
    ...mapGetters({
      isBasketLoading: 'getIsBasketLoading'
    })
  },
  mounted () {
    if (!this.isBasketLoading()) {
      setTimeout(() => this.getCount(), 3000)
    }
  }
}
</script>

<style scoped>

</style>
