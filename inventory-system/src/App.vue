<template>
  <div class="container">
    <h1>Inventory System</h1>
    <appNavigationBar></appNavigationBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navigationBar from './components/NavigationBar.vue'
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      appNavigationBar: navigationBar
    }
  }
</script>

<style>
</style>
