<template>
    <div>
      <h2>Book List</h2>
      <ul class="list-group">
        <li v-for="(book, index) in books" :key="index" class="list-group-item">
          <strong>{{ book.title }}</strong> by {{ book.author }}
          <button @click="removeBook(index)" class="btn btn-danger btn-sm float-right">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import emitter from '@/eventBus'
  
  export default {
    name: 'BookList',
    data() {
      return {
        books: []
      }
    },
    created() {
      emitter.on('add-book', this.addBook)
    },
    beforeUnmount() {
      emitter.off('add-book', this.addBook)
    },
    methods: {
      addBook(book) {
        this.books.push(book)
      },
      removeBook(index) {
        this.books.splice(index, 1)
      }
    }
  }
  </script>
  
  <style scoped>
  .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  