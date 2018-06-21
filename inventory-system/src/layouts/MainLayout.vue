<template>
  <div>
    <appNavigationBar></appNavigationBar>
    <div class="container">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>

      </transition>
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

<style scoped>
  .face-enter {
    opacity: 0;
  }

  .fade-enter-alive {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
