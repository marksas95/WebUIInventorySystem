const state = {
  categories: [],
  categoryId: '',

};



const getters = {
  // getCategory: (state) => (categoryId) => {
  //   return state.category.find((e) === categoryId);
  // }
};


const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setCategoryId: (state, categories) =>{
	  state.categoryId = categoryId;
  }
};



const actions = {
	setCategories: ({commit},categories) => {
		commit('setCategories', categories );
	},
	setCategoryId: ({commit},categoryId) => {
		commit('setCategories', categoryId );
	}
}


export default{
	state,
	mutations,
	actions,
	getters
}
