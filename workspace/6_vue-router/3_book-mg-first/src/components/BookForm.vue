<template>
    <div>
      <h2>Add a new book</h2>
      <form @submit.prevent="addBook">
        <div class="form-group">
          <input v-model="title" class="form-control" placeholder="Title" required />
        </div>
        <div class="form-group">
          <input v-model="author" class="form-control" placeholder="Author" required />
        </div>
        <button type="submit" class="btn btn-primary">Add Book</button>
      </form>
    </div>
  </template>
  
  <script>
  import emitter from '@/eventBus'
  
  export default {
    name: 'BookForm',
    data() {
      return {
        title: '',
        author: ''
      }
    },
    methods: {
      addBook() {
        const newBook = {
          title: this.title,
          author: this.author
        }
        emitter.emit('add-book', newBook)
        this.title = ''
        this.author = ''
      }
    }
  }
  </script>
  