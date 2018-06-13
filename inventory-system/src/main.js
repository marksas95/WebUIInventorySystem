import Vue from 'vue'
import App from './App.vue'
import VueRouter from'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes';

Vue.use(VueAxios,Axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
