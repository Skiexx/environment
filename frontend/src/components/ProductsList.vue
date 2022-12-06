<template>
  <div>
    <div v-if="items.length !== 0" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <product-item v-for="item in items" :item="item" :key="item.id"/>
    </div>
    <div v-else-if="!isProductsLoading() && items.length === 0" class="container d-flex justify-content-center">
      <h2 class="mt-5 text-danger">Список продуктов пуст</h2>
    </div>
    <div class="container d-flex justify-content-center">
      <div class="spinner-border" role="status" v-show="isProductsLoading()">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  props: {
    items: Array,
    items_name: String
  },
  components: {
    ProductItem
  },
  methods: {
    ...mapGetters({
      isProductsLoading: 'getIsProductsLoading'
    })
  }
}
</script>

<style scoped>

</style>
