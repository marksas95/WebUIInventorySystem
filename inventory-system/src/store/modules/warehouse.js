const state = {
  warehouses: [],
  warehouseId: '',
  filteredWarehouses:[]
};

const getters = {
      getWarehouse: (state)=> (warehouseId)=>{
        return state.warehouses.find(e => e.id === warehouseId);
      },
  GET_FILTERED_WAREHOUSES_TO_VIEW: (state) => {
    return state.filteredWarehouses.map(o => {
        return {
          id: o.id,
          data: [o.name, o.address, o.description, o.active==true? 'Active':'Not Active']
        }
      }
    )
  },
      FILTER_WAREHOUSES: (state) => (status) =>{
        switch (status) {
          case 'Active Only':
            debugger
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
;

const mutations = {
  SET_WAREHOUSES: (state, warehouses) => {
    state.warehouses = warehouses;
  },
  setWarehouseId:(state, warehouseId) => {
    state.warehouseId = warehouseId;
  }
};

const actions = {
  setWarehouses: ({commit}, warehouses) => {
    commit('SET_WAREHOUSES', warehouses);
  },
  setWarehouseId: ({commit}, warehouseId) =>{
    commit('setWarehouseId', warehouseId);
  },

  DELETE_WAREHOUSE: ({commit}, warehouseId)=>{
    if(confirm('Delete?')){
      Vue.axios.delete('/api/warehouse/delete?id=' + warehouseId).then((response)=>{
        Vue.axios.get(('/api/warehouse/list')).then((response)=>{
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

