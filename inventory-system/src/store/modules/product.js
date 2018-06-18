const state = {
  products: [],
  productId:'',
  counter: 0
};

const getters = {
    getActiveProducts: state => {
      return state.products.filter((val) => val.active);
    },
    getCategory: (state) => (productId) => {
        return state.products.find((e) => e.id === productId).category;
    }
  }
;

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  setProductId: (state, productId) => {
    state.productId = productId;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  setProductId: ({commit}, productId) => {
    commit('setProductId', productId);
  },
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

