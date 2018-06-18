const state = {
  category: [],
  categoryId: '',

}



const getters = {
  getCategory: (state) => (categoryId) => {
    return state.category.find((e) === categoryId);
  }
};


const mutations = {
  setCategory: (state, category) => {
    state.category = category;
  },
  setCategoryId: (state, category) =>{
	  state.categoryId = categoryId;
  }
};



const actions = {
	setCategory: ({commit},category) => {
		commit('setCategory', category );
	},
	setCategoryId: ({commit},categoryId) => {
		commit('setCategory', categoryId );
	}
}


export default{
	state,
	mutations,
	actions,
	getters
}