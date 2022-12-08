<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click="decrement">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" :key="page" v-for="page in pages">
        <a class="page-link" href="#" :class="{active: currentPage === page}" @click="setCurrentPage(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click="increment">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    pages: Number,
    currentPage: Number,
    decrement: Function,
    increment: Function,
    setCurrentPage: Function
  },
  methods: {

  }
}
</script>
