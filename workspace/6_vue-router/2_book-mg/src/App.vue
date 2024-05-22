<template>
  <div class="container">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
      <span class="navbar-brand">Book Management</span>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-book" class="nav-link">Add Book</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/book-list" class="nav-link">Book List</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.container { text-align: center; margin-top:10px; }
.navbar { margin-bottom: 20px; }
</style>
