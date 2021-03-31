import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    item: null, //görs till null pga att det än så länge inte ska stå som något alls förrän vi har hämtat. Sätts den som objekt/array så har det skapats något.
    cart: [],
    
    
  },
  getters: {
    items: state => state.items, //returnerar state.items
    item: state => state.item,
    CART: state => state.cart,
    
  },
  mutations: {
    SET_ITEMS: (state, items) => { //vi har tillgång till states och sätter res.data som items
      state.items = items //sätter items[] som vi har i vårt state till items som kommer från res.data
    },
    SET_ONE_ITEM: (state, item) => {  //
      state.item = item
    },
    TO_CART: (state, { item, quantity }) => {
      state.cart.push({ item, quantity })
    },
    
  },
  actions: { //här sker hämtningen 
    GET_ITEMS: async ({ commit }) => { //hämtar alla posts
      const res = await axios.get('http://localhost:9090/api/items/') //hämtas från länken
      commit('SET_ITEMS', res.data) //funktion skapas, res.data innehåller alla hämtade objekt
    },
    GET_ONE_ITEM: async ({ commit }, id) => {
      const res = await axios.get('http://localhost:9090/api/items/' + id)
      commit('SET_ONE_ITEM', res.data)
    },
    ITEM_TO_CART: ({ commit }, { item, quantity }) => {
      commit('TO_CART', { item, quantity })
    },
    



  },

  modules: {
  }
})
