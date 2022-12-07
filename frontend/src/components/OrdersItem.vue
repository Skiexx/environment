<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light w-100">
    <h2 class="w-100">Заказ №1</h2>

    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{{ order }}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">200р.<small class="text-muted fw-light"> &times; 2 шт.</small></h1>
          <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    order: Object
  }
}
</script>

<style scoped>

</style>
