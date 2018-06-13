<template>
  <div class="container">
    <div clas = "row">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/Header.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader:header
  }
}
</script>

<style>
</style>
