<template>
  <div class="container">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
      <span class="navbar-brand">Book Management</span>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
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
