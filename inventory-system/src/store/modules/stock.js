import Vue from 'vue'

const actions ={
  STOCK_IN_GOOD_PRODUCT:({commit}, {warehouseId,productId, quantity}) => {
    Vue.axios.post('/api/stockquantity/stockInGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
  },
  STOCK_OUT_GOOD_PRODUCT:({commit},{warehouseId,productId,quantity}) => {
    return new Promise((resolve, reject) => {
    Vue.axios.post('/api/stockquantity/stockOutGoodQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
    })
  },
  TRANSFER_STOCKS:({commit},transferForm) =>{
    Vue.axios.post('/api/stockquantity/transferStocks?warehouseIdFrom='+transferForm.warehouseIdFrom+
                    '&warehouseIdTo='+transferForm.warehouseIdTo+'&productId='+transferForm.productId+'&quantity='+transferForm.quantity)
  },
  STOCK_IN_DAMAGE_PRODUCT:({commit}, transferForm) => {
    Vue.axios.post('/api/stockquantity/stockInDamageQuantityProduct?warehouseIdFrom='+transferForm.warehouseIdFrom+
      '&warehouseIdTo='+transferForm.warehouseIdTo+'&productId='+transferForm.productId+'&quantity='+transferForm.quantity)
  },
  STOCK_OUT_DAMAGE_PRODUCT:({commit},{warehouseId,productId,quantity}) => {
    return new Promise((resolve, reject) => {
      Vue.axios.post('/api/stockquantity/stockOutDamageQuantityProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
    })
  },
  REPLACE_PRODUCT:({commit},{warehouseId,productId, quantity}) =>{
  Vue.axios.post('/api/stockquantity/replaceProduct?warehouseId='+warehouseId+'&productId='+productId+'&quantity='+quantity)
  }
}

export default {
  actions
}
