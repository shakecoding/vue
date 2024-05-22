<template>
    <div class="container">
      <h1>Add a new Book</h1>
      <BookForm />
    </div>
  </template>
  
  <script>
  import BookForm from '@/components/BookForm.vue'
  
  export default {
    name: 'AddBook',
    components: {
      BookForm,
    }
  }
  </script>
  