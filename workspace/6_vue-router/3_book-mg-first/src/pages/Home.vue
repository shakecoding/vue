<template>
    <div>
      <h1>Book Management</h1>
      <BookForm />
      <BookList />
    </div>
  </template>
  
  <script>
  import BookForm from '@/components/BookForm.vue'
  import BookList from '@/components/BookList.vue'
  
  export default {
    name: 'Home',
    components: {
      BookForm,
      BookList,
    }
  }
  </script>
  