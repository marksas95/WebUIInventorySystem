import Vue from 'vue'
const state = {
  categories: [],
  categoryId: '',

};


const getters = {
  getCategory: (state) => (categoryId) => {
    return state.categories.find((e) => e.id === categoryId)
  }
};


const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
	},
	// removeCategory: (state, categoryId) =>{
	// 	state.categories.delete(categoryId)
	// }
  // setCategoryId: (state, categories) =>{
	//   state.categoryId = categoryId;
  // }
};



const actions = {

	initCategory: ({commit}) => {
		return Vue.axios.get('/api/category/list').then((response)=>{
			commit('setCategories', response.data);
			return (response.data)
	})
	},

	setCategories: ({commit},categories) => {
		commit('setCategories', categories );
	},

	deleteCategory: ({commit}, categoryId)=>{
		return new Promise((resolve, reject)=> {
			Vue.axios.delete('/api/category/delete?id='+ categoryId).then((response) =>{
				Vue.axios.get('/api/category/list').then((response)=>{
					console.log(response.data)
					commit('setCategories', response.data)
					resolve(response.data)
				})	
			})
		})
	}
};


export default{
	state,
	mutations,
	actions,
	getters
}
