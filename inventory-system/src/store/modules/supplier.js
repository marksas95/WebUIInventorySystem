import Vue from "vue";

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
  },
  DELETE_SUPPLIERS: ({commit}, supplierId) =>{
    if(confirm ('Delete?')){
      Vue.axios.delete('/api/supplier/delete?id='+ supplierId ).then((response)=>{
        Vue.axios.get('/api/supplier/list').then((response)=>{
          console.log(response.data)
          commit('SET_SUPPLIER',response.data)
          resolve(response.data)
        })
      })
    }
    
  }
};


export default{
	state,
	getters,
	mutations,
	actions
}
