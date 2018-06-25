import Vue from 'vue'

const actions ={
  STOCK_IN:({commit}, {warehouseId,productId, quantity}) => {
    Vue.axios.post('/api/stockquantity/stockInGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
  },
  STOCK_OUT:({commit},{warehouseId,productId,quantity}) => {
    return new Promise((resolve, reject) => {
    Vue.axios.post('/api/stockquantity/stockOutGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)

    })
  }
}

export default {
  actions
}
