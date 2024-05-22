<template>
  <div class="container">
    <h1>Book List</h1>
    <BookList />
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'

export default {
  name: 'BookListPage',
  components: {
    BookList,
  }
}
</script>
