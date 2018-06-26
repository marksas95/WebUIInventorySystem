import Vue from 'vue'

const actions ={
  STOCK_IN:({commit}, {warehouseId,productId, quantity}) => {
    Vue.axios.post('/api/stockquantity/stockInGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
  },
  STOCK_OUT:({commit},{warehouseId,productId,quantity}) => {
    return new Promise((resolve, reject) => {
    Vue.axios.post('/api/stockquantity/stockOutGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
    })
  },
  TRANSFER_STOCKS:({commit},transferForm) =>{
    Vue.axios.post('/api/stockquantity/transferStocks?warehouseIdFrom='+transferForm.warehouseIdFrom+
                    '&warehouseIdTo='+transferForm.warehouseIdTo+'&productId='+transferForm.productId+'&quantity='+transferForm.quantity)
  },
}

export default {
  actions
}
