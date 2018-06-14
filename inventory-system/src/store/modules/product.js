const state = {
  products: [],
  counter: 0
};

const getters = {
    getActiveProducts: state => {
      return state.products.filter((val) => val.active);
    },
    getCategory: (state) => (productId) => {


        console.log( state.products)
        let gg = state.products.find((e) => e.id === productId);

        console.log(productId)
        return state.products.find((e) => e.id === productId).category;

    }
  }
;

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  setProducts: ({commit}, products) => {
    commit('setProducts', products);
  },
  decrement: ({commit}, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

