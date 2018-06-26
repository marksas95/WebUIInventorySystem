import Vue from 'vue'

const state = {
  warehouses: [],
  warehouseId: '',
  filteredWarehouses: []
};

const getters = {
    GET_ACTIVE_WAREHOUSE: (state) => {
      return state.warehouses.filter((val) => val.active)
    },
    GET_WAREHOUSE: (state) => (warehouseId) => {
      let p = state.warehouses.find(e => e.id === warehouseId)
      return {
        'Name': p.name,
        'Location': p.address,
        'Description': p.description
      }
    },
    GET_FILTERED_WAREHOUSES_TO_VIEW: (state) => {
      return state.filteredWarehouses.map(o => {
          return {
            id: o.id,
            data: [o.name, o.address, o.description, o.active == true ? 'Active' : 'Not Active']
          }
        }
      )
    },
    FILTER_WAREHOUSES: (state) => (status) => {
      switch (status) {
        case 'Active Only':
          state.filteredWarehouses = state.warehouses.filter((val) => val.active)
          break;
        case 'Inactive Only':
          state.filteredWarehouses = state.warehouses.filter((val) => !val.active);
          break;
        default:
          state.filteredWarehouses = state.warehouses
      }
    }
  }


const mutations = {
  SET_WAREHOUSES: (state, warehouses) => {
    state.warehouses = warehouses;
  },
  setWarehouseId: (state, warehouseId) => {
    state.warehouseId = warehouseId;
  }
};

const actions = {
  INIT_WAREHOUSES: ({commit}) => {
    Vue.axios.get('/api/warehouse/list').then(response => {
      commit('SET_WAREHOUSES', response.data)
      console.log(response.data)
    })
  },
  FIND_BY_WAREHOUSE_ID: ({commit}, warehouseId) => {
    return new Promise((resolve, reject) => {
      Vue.axios.get('/api/warehouse/findById?id=' + warehouseId).then(o => {
        resolve(o)
      })
    })
  },
  setWarehouses: ({commit}, warehouses) => {
    commit('SET_WAREHOUSES', warehouses);
  },
  setWarehouseId: ({commit}, warehouseId) => {
    commit('setWarehouseId', warehouseId);
  },
  SET_STATUS_OF_WAREHOUSE: ({commit}, warehouseId) => {
    let p = state.warehouses.find(e => e.id === warehouseId)
    p.active = !p.active
    Vue.axios.post('/api/warehouse/update', p).then((response) => {
      Vue.axios.get(('/api/warehouse/list')).then((response) => {
        commit('SET_WAREHOUSES', response.data);
      })
    })
  },
  DELETE_WAREHOUSE: ({commit}, warehouseId) => {
    if (confirm('Delete?')) {
      Vue.axios.delete('/api/warehouse/delete?id=' + warehouseId).then((response) => {
        Vue.axios.get(('/api/warehouse/list')).then((response) => {
          console.log(response.data)

        })
      })
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

