<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ price }}<small class="text-muted fw-light"> &times; {{ count }}шт.</small></h1>
        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание
          товара</p>

        <button type="button" class="btn btn-lg btn-info mb-3">+</button>
        <button type="button" class="btn btn-lg btn-warning mb-3">&minus;</button>
        <button type="button" class="btn btn-lg btn-outline-danger mb-3">Удалить из корзины</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 2,
      price: this.item.price * 2
    }
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>
