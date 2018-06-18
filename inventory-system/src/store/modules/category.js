const state = {
  categories: [],
  categoryId: '',

}



const getters = {
  // getCategory: (state) => (categoryId) => {
  //   return state.category.find((e) === categoryId);
  // }
};


const mutations = {
  setCategory: (state, categories) => {
    state.categories = categories;
  },
  setCategoryId: (state, categories) =>{
	  state.categoryId = categoryId;
  }
};



const actions = {
	setCategory: ({commit},categories) => {
		commit('setCategory', categories );
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