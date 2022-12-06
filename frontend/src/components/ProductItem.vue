<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm w-auto" style="height: 400px">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ item.price }} р.</h1>
        <p>{{ item.description }}</p>
        <button
          type="button"
          class="w-100 btn btn-lg btn-outline-success"
          @click="add()"
          v-if="!addedToBasket && isAuth()"
        >
          Добавить в корзину
        </button>
        <button
          type="button"
          class="w-100 btn btn-lg btn-danger"
          v-else-if="addedToBasket"
          disabled
        >
          Товар добавлен в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      addedToBasket: false
    }
  },
  props: {
    item: Object
  },
  methods: {
    ...mapActions({
      addToBasket: 'addToBasket'
    }),
    ...mapGetters({
      isAuth: 'getUserIsAuth'
    }),
    add () {
      this.addToBasket(this.item.id)
      this.addedToBasket = true
    }
  }
}
</script>

<style scoped>
  .card{
    width: 18rem;
  }
</style>
