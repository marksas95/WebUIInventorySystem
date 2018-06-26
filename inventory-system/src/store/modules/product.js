import Vue from 'vue'
import Warehouse from './warehouse'

const state = {
  products: [],
  productId: '',
  counter: 0,
  filteredProduct: [],
  searchedProduct: []
};

const getters = {
    GET_ACTIVE_PRODUCT: state => {
      return state.products.filter((val) => val.active === true)
    },
    GET_INACTIVE_PRODUCT: state => {
      return state.products.filter((val) => val.active === false);
    },
    GET_FILTERED_PRODUCTS_TO_VIEW: (state) => {
      return state.filteredProduct.map(p => {
        return {
          id: p.id,
          data: [
            p.category === null ? '' : p.category.name,
            p.itemCode,
            p.description,
            p.unitOfMeasurement,
            p.serialNumber,
            p.active === true ? 'Active' : 'Not Active']
        }
      })
    },
    FILTER_PRODUCTS: (state) => (status, categoryId) => {
      let o = {}
      switch (status) {
        case 'Active Only':
          o = state.products.filter((val) => val.active)
          break;
        case 'Inactive Only':
          o = state.products.filter((val) => !val.active);
          break;
        default:
          o = state.products
      }
      state.filteredProduct = categoryId == 0 ? o : o.filter((val) => val.category.id == categoryId)
    },
    GET_PRODUCT: (state) => (productId) => {
      return state.products.find((e) => e.id === productId)
    },
    GET_PRODUCT_DETAILS: (state) => (productId) => {
      let p = state.products.find((e) => e.id === productId)
      var totalQuantity = 0
      var warehousesThatHasStock = []
      Warehouse.state.warehouses.forEach(o => {
        let i = o.goodQuantityProducts.find((x) => x.product.id === productId)
        if (i != null) {
          totalQuantity += i.quantity
          warehousesThatHasStock.push({name: o.name, address: o.address, quantity: i.quantity})
        }
      })
      return {
        'Category': p.category == null ? '' : p.category.name,
        'Item Code': p.itemCode,
        'Description': p.description,
        'Unit Of Measurement': p.unitOfMeasurement,
        'Serial Number': p.serialNumber,
        'MinimumStocks': p.minimumStocks,
        'Vatable': p.vatable === true ? 'Vatable' : 'Not Vatable',
        'Remarks': p.remarks,
        'Total Stocks': totalQuantity,
        'Warehouse': warehousesThatHasStock,
      }
    },
    GET_PRODUCT_STOCK_DETAILS: (state) => (productId) => {
      var p = state.products.find((e) => e.id === productId)
      var totalQuantity = 0
      Warehouse.state.warehouses.forEach(o => {
        let i = o.goodQuantityProducts.find((x) => x.product.id === productId)
        if (i != null) {
          totalQuantity += i.quantity
        }
      })

      return [
        {
          'Category': p.category == null ? '' : p.category.name,
          'Item Code': p.itemCode,
          'Description': p.description,
          'Current Unit Price': 'To Be Implemented in History',
          'Current Capital Cost': 'To Be Implemented in History',
          'Supplier Name': 'To Be Implemented in History',
          'Total Quantity':totalQuantity
        },
      ]
    },
    GET_PRODUCT_STOCK:(state) => (productId) => {
      var totalQuantity = 0
      var warehousesThatHasStock = []
      Warehouse.state.warehouses.forEach(o => {
        let i = o.goodQuantityProducts.find((x) => x.product.id === productId)
        if (i != null) {
          totalQuantity += i.quantity
          warehousesThatHasStock.push({'name': o.name, 'address': o.address, 'quantity': i.quantity})
        }
      })

      return warehousesThatHasStock
    }
  }

const mutations = {
  addProduct: (state, product) => {
    state.products.push(product)
  },
  setProducts: (state, products) => {
    state.products = products;
  },
  getProductsByCategory: (state, products, categoryId) => {
    return products.filter((val) => val.category.id == categoryId);
  }
};

const actions = {
  INIT_PRODUCTS: ({commit}) => {
    return new Promise((resolve, reject) => {
      return Vue.axios.get('/api/product/list').then((response) => {
        commit('setProducts', response.data);
        resolve(response.data)
      })
    })


  },
  UPDATE_PRODUCT: ({commit}, product) => {
    return new Promise((resolve, reject) => {
      console.log(product)
      Vue.axios.post('/api/product/update', product).then((response) => {
        Vue.axios.get('/api/product/list').then((response) => {
          commit('setProducts', response.data)
          resolve(response.data)
        })
      })

    })
  },
  UPDATE_PRODUCT_STATUS: ({commit}, productId) => {
    return new Promise((resolve, reject) => {
      let product = state.products.find((e) => e.id === productId)
      product.active = !product.active
      Vue.axios.post('/api/product/update', product).then((response) => {
        Vue.axios.get('/api/product/list').then((response) => {
          commit('setProducts', response.data)
          resolve(response.data)
        })
      })

    })
  },
  CREATE_PRODUCT: ({commit}, product) => {
    return new Promise((resolve, reject) => {
      return Vue.axios.post('/api/product/create', product).then((response) => {
        console.log(response.data)
        commit('addProduct', response.data)
        Vue.axios.get('/api/product/list').then((response) => {
          commit('setProducts', response.data)
          resolve(response.data)
        })
        resolve(response.data)
      })
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
  },
  SEARCH_FILTERED_PRODUCTS: ({commit}, {keyword, searchBy}) => {
    console.log('keyword: ' + keyword)
    console.log('searchBy: ' + searchBy)
    switch (searchBy) {
      case 'Item Code':
        Vue.axios.get('/api/product/searchByItemCode?itemCode=' + keyword.toLowerCase()).then((response) => {
          commit('setProducts', response.data);
        })
        break
      case 'Description':
        Vue.axios.get('/api/product/searchByDescription?description=' + keyword.toLowerCase()).then((response) => {
          commit('setProducts', response.data);
        })
        break
      case 'Unit of measurement':
        Vue.axios.get('/api/product/searchByUnitOfMeasurement?unitOfMeasurement=' + keyword.toLowerCase()).then((response) => {
          commit('setProducts', response.data);
        })
        break
      default:
        Vue.axios.get('/api/product/list').then((response) => commit('setProducts', response.data))
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

