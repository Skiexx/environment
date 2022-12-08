<template>
  <div>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Корзина</h1>
    </div>
    <basket-list :items="basket()"></basket-list>
    <div>

    </div>
    <div class="row justify-content-center gap-1">
      <h2 class="mb-5">Итоговая стоимость: 600р.</h2>
      <button class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</button>
      <button type="button" class="col-6 btn btn-lg btn-primary mb-3">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import BasketList from '@/components/BasketList'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    BasketList
  },
  methods: {
    ...mapActions({
      fetchBasket: 'fetchBasket'
    }),
    ...mapGetters({
      basket: 'getBasket'
    })
  },
  beforeMount () {
    this.fetchBasket()
  }
}
</script>

<style scoped>

</style>
