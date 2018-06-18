const state = {
  warehouses: [],
  warehouseId: ''
};

const getters = {

  }
;

const mutations = {
  SET_WAREHOUSES: (state, warehouses) => {
    state.warehouses = warehouses;
  }
};

const actions = {
  setWarehouses: ({commit}, warehouses) => {
    commit('SET_WAREHOUSES', warehouses);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

