import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import AddBook from '@/pages/AddBook.vue'
import BookListPage from '@/pages/BookListPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/add-book', component: AddBook },
  { path: '/book-list', component: BookListPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
