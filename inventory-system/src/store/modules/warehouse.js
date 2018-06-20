const state = {
  warehouses: [],
  warehouseId: ''
};

const getters = {
      getWarehouse: (state)=> (warehouseId)=>{
        return state.warehouses.find(e => e.id === warehouseId);
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
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

