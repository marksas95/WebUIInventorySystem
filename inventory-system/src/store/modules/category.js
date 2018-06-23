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
  addCategory: (state, category) => {
    state.categories.push(category)
  }


  // removeCategory: (state, categoryId) =>{
  // 	state.categories.delete(categoryId)
  // }
  // setCategoryId: (state, categories) =>{
  //   state.categoryId = categoryId;
  // }
};


const actions = {

  INIT_CATEGORY: ({commit}) => {
    return Vue.axios.get('/api/category/list').then((response) => {
      commit('setCategories', response.data);
      return (response.data)
    })
  },

  setCategories: ({commit}, categories) => {
    commit('setCategories', categories);
  },

  DELETE_CATEGORY: ({commit}, categoryId) => {
    if (confirm('Delete?')) {
      return new Promise((resolve, reject) => {
        Vue.axios.delete('/api/category/delete?id=' + categoryId).then((response) => {
          Vue.axios.get('/api/category/list').then((response) => {
            console.log(response.data)
            commit('setCategories', response.data)
            resolve(response.data)
          })
        })
      })
    }
  },
  UPDATE_CATEGORY: ({commit}, category)=>{
    return new Promise ((resolve, reject)=>{
    console.log(category)
    console.log('updateCategory')
    let data = new FormData()
        data.append('id', category.id)
        data.append('name',category.name)
      Vue.axios.post('/api/category/update', data).then((response)=> {
        


        console.log('response')
        console.log(response.data)
        resolve(response.data)
      })
    })
  },
  CREATE_CATEGORY: ({commit}, category )=>{
    return new Promise((resolve, reject)=>{
      Vue.axios.post('/api/category/create', category).then((response)=>{
        Vue.axios.get('/api/category/list').then((response)=>{
          console.log(response.data)
          commit('addCategory',response.data)
        })
      })
    })
  }
  
}


export default {
  state,
  mutations,
  actions,
  getters
}
