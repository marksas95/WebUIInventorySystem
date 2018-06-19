const state = {
	suppliers:[],
  supplierId:''
};



const getters ={

  getSupplier: (state) => (supplierId) => {
    return state.suppliers.find(e => e.id === supplierId);
  }
};

const mutations = {
  SET_SUPPLIER: (state, suppliers) => {
    state.suppliers = suppliers;
  }
};


const actions = {
  setSuppliers: ({commit}, suppliers) => {
    commit('SET_SUPPLIER', suppliers);
  }
};


export default{
	state,
	getters,
	mutations,
	actions
}
