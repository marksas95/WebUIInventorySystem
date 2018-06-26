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
      var dt = new Date(p.createdDate);
      var date = dt.getMonth()+'/'+dt.getDate()+'/'+dt.getFullYear()
      console.log(date)
      return {
        id: p.id,
        data: [
            date,
            p.goodQuantityProduct.product.itemCode,
            p.warehouse.name,
            p.remarks,
            p.physicalCount,
            p.systemCount]
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
