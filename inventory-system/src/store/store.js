import Vue from 'vue';
import Vuex from 'vuex';

import product from './modules/product.js';
import warehouse from './modules/warehouse.js';
import supplier from './modules/supplier.js';
import category from './modules/category.js';
import stock from './modules/stock'
import reconciledProduct from './modules/reconciled-product'

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
    supplier,
    category,
    stock,
    reconciledProduct
  }
});
