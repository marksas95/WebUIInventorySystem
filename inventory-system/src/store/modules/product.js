

const state = {
  products:[],
  counter: 0
};

const getters = {
  getProducts: state => {
    return state.products;
  }
};

const mutations = {
  setProducts: (state,products) => {
    state.products=products;
  },
  decrement: (state,payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: ({commit}, payload) => {
    commit('increment', payload);
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

