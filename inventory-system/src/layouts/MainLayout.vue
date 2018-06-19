<template>
  <div>
    <appNavigationBar></appNavigationBar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import navigationBar from '../components/NavigationBar.vue'
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
    background-color: snow;
    animation: step-start;
    animation-duration: 1s;
  }
</style>
