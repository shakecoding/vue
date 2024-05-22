<template>
  <div>
    <ul class="list-group">
      <li v-for="(book, index) in books" :key="index" class="list-group-item">
        <strong>{{ book.title }}</strong> by {{ book.author }}
        <button @click="removeBook(index)" class="btn btn-danger btn-sm float-right">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      books: []
    }
  },
  created() {
    this.emitter.on('add-book', this.addBook)
    this.loadBooks()
  },
  methods: {
    addBook(book) {
      this.books.push(book)
      this.saveBooks()
    },
    removeBook(index) {
      this.books.splice(index, 1)
      this.saveBooks()
    },
    saveBooks() {
      localStorage.setItem('books', JSON.stringify(this.books))
    },
    loadBooks() {
      const savedBooks = localStorage.getItem('books')
      if (savedBooks) {
        this.books = JSON.parse(savedBooks)
      } 
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
