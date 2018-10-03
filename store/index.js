import Vuex from 'vuex'
import {getMenuFromShopId, getShops} from '~/services/api'

const state = {
  shops: [],
  menu: [],
  cart: [],
  orders: []
}

const findForId = (arr, id) => arr.find(i => i.id === id)

const mutations = {
  LOAD_SHOPS: function (state, shops) {
    state.shops = shops
  },
  LOAD_MENU: function (state, menu) {
    state.menu = menu
  },
  UPDATE_CART: function (state, {productId, quantity}) {
    const item = findForId(state.cart, productId)
    if (item) {
      if (quantity) {
        item.quantity = quantity
      } else {
        state.cart.splice(state.cart.indexOf(item), 1)
      }
    } else {
      state.cart.push({id: productId, quantity})
    }
    // storageSet('user', user)
  },
  EMPTY_CART: function () {
    state.cart = []
  },
  LOAD_ORDERS: function (state, orders) {
    state.orders = orders
  }
}

const actions = {
  async loadShops ({ commit }) {
    commit('LOAD_SHOPS', await getShops())
  },
  async loadShopMenu ({ commit }, shopId) {
    commit('LOAD_MENU', await getMenuFromShopId(shopId))
  }
}

const createStore = () => new Vuex.Store({state, mutations, actions})

export default createStore
