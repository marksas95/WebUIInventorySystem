import Vue from 'vue'

const state = {
  products: [],
  productId: '',
  counter: 0
};

const getters = {
    getActiveProducts: state => {
      return state.products.filter((val) => val.active);
    },
    getCategories: (state) => (productId) => {
      return state.products.find((e) => e.id === productId).category;
    },
    GET_PRODUCT: (state) => (productId) => {
      return state.products.find((e) => e.id === productId)
    }
  }
;

const mutations = {
  addProduct: (state, product) => {
    state.products.push(product)
  },
  setProducts: (state, products) => {
    state.products = products;
  }
};

const actions = {
  INIT_PRODUCTS: ({commit}) => {
    return Vue.axios.get('/api/product/list').then((response) => {
        commit('setProducts', response.data);
        return (response.data)
      })


  },
  UPDATE_PRODUCT: ({commit}, product) => {
    return new Promise((resolve, reject) => {
      console.log(product)
      Vue.axios.post('/api/product/update', product).then((response) => {
        console.log(response.data)
        this.INIT_PRODUCTS
        resolve(response.data)
      })

    })
  },
  CREATE_PRODUCT: ({commit}, product) => {
    return Vue.axios.post('/api/product/create', product).then((response) => {
        console.log(response.data)
        commit('addProduct', response.data)
      return (response.data)
      })
  },
  DELETE_PRODUCT: ({commit}, productId) => {
    return new Promise((resolve, reject) => {
      Vue.axios.delete('/api/product/delete?id=' + productId).then((response) => {
        Vue.axios.get('/api/product/list').then((response) => {
          commit('setProducts', response.data)
          resolve(response.data)
        })
      })
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

