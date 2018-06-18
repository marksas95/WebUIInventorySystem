import Vue from 'vue';
import Vuex from 'vuex';

import category from './modules/category.js'
import product from './modules/product.js';
import warehouse from './modules/warehouse.js';
import supplier from './modules/supplier.js';
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
    warehouse,
    category,
    supplier
  }
});
