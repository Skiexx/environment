<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Каталог товаров</h1>
  </div>
  <div>
    <products-list :items='$store.getters.getCatalog' />
    <div class="container d-flex justify-content-center">
      <pagination-component
        :pages="pages()"
        :current-page="currentPage()"
        :increment="incrementPage"
        :decrement="decrementPage"
        :set-current-page="setCurrentPage"
        @click="fetchProducts"
        v-show="!isProductsLoading()"
      />
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import PaginationComponent from '@/components/PaginationComponent'

export default {
  data () {
    return {
    }
  },
  components: {
    ProductsList,
    PaginationComponent
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchUser: 'fetchUser'
    }),
    ...mapGetters({
      pages: 'getPages',
      currentPage: 'getCurrentPage',
      isProductsLoading: 'getIsProductsLoading'
    }),
    ...mapMutations({
      incrementPage: 'incrementCurrentPage',
      decrementPage: 'decrementCurrentPage',
      setCurrentPage: 'setCurrentPage'
    })
  },
  mounted () {
    this.fetchProducts()
    this.fetchUser()
  }
}
</script>

<style scoped>

</style>
