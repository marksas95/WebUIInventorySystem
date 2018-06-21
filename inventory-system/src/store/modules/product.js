import Vue from 'vue'

const state = {
  products: [],
  productId:'',
  counter: 0
};

const getters = {
    getActiveProducts: state => {
      return state.products.filter((val) => val.active);
    },
    getCategories: (state) => (productId) => {
        return state.products.find((e) => e.id === productId).category;
    },
    getProduct: (state) => (productId) => {
      return state.products.find((e) => e.id === productId)
    }
  }
;

const mutations = {
  addProduct:(state,product) =>{
    state.products.push(product)
  },
  setProducts: (state, products) => {
    state.products = products;
  }
};

const actions = {
  // axios
  initProducts: ({commit}) => {
    // axios
    Vue.axios.get('/api/product/list').then((response) => {
      commit('setProducts', response.data);
    })
  },
  createProduct: ({commit},product) => {
    return new Promise((resolve, reject) => {
      console.log(product)
      Vue.axios.post('/api/product/create',product).then((response) =>{
        console.log(response.data)
        commit('addProduct',response.data)
        resolve(response.data)
      })
    })


  },

};

export default {
  state,
  mutations,
  actions,
  getters
}

