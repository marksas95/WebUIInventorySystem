import Vue from 'vue'

const state = {
  reconciledProducts:[]
}

const mutations ={
  setReconciledProducts: (state, reconciledProducts) => {
    state.reconciledProducts = reconciledProducts;
  },
}

const  actions = {
  INIT_RECONCILED_PRODUCTS: ({commit}) => {
    return new Promise((resolve, reject) => {
      return Vue.axios.get('/api/reconcileproduct/list').then((response) => {
        commit('setReconciledProducts', response.data);
        resolve(response.data)
        console.log(response.data)
      })
    })
  }
}

const getters ={
  GET_RECONCILED_PRODUCTS: state => {
    return state.reconciledProducts.map(p =>{
      return {
        id: p.id,
        data: [

        ]
      }
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
