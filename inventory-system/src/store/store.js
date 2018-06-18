import Vue from 'vue';
import Vuex from 'vuex';

import product from './modules/product.js';
import warehouse from './modules/warehouse.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations:{},
  actions:{},
  modules: {
    product,
    warehouse
  }
});
