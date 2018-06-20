<template>
  <router-view></router-view>
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
  body {
    background-image: url("./assets/background.jpg");
    height: 100vh;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  h1{
    color: white;
  }

</style>
