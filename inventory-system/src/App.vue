<template>
  <div>
    <appNavigationBar></appNavigationBar>
    <div class="container">

      <router-view></router-view>
    </div>
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
