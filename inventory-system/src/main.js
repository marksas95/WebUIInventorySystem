import Vue from 'vue'
import App from './App.vue'
import VueRouter from'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes';
import { store } from './store/store.js';


Vue.use(VueAxios,Axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
