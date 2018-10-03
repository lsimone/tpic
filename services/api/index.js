// mocked api

import _pipe from 'lodash/fp/pipe'
import _curry from 'lodash/fp/curry'
import _omit from 'lodash/fp/omit'
import {get, set, clear, logStorage} from '~/services/storage'
import dbInit from './mocks/dbInit.json'

const FAKE_TIMEOUT = 500

/**
 * pipes functions to a main function and creates a new function taking as arguments the ones taken by the main.
 * main function has to return a Promise
 *
 * @return {Function}
 */
function pipeP() {
  const [first, ...fns] = arguments
  return function () {
    return fns.reduce((acc, fn) => acc.then(fn), first(...arguments))
  }
  // return () => fns.reduce((acc, fn) => acc.then(fn), first())
}

const mockedGet = key => () => new Promise((resolve, reject) => {
  setTimeout(resolve.bind(this, get(key)), FAKE_TIMEOUT)
})

const mset = (key, value) => () => new Promise((resolve, reject) => {
  setTimeout(() => {
    set(key, value)
    resolve()
  }, FAKE_TIMEOUT)
})

export const resetMocks = () => {
  clear()
  set('db', dbInit)
  logStorage()
}

const _getShops = mockedGet('db.shops')
export const getShops = pipeP(_getShops, s => s.map(_omit('menu')))

const findShop = shopId => shops => shops.find(s => s.id === shopId)
export const getShop = shopId => pipeP(getShops, findShop(shopId))()

export const getMenuFromShopId = shopId => pipeP(_getShops, findShop(shopId) , s => s.menu)()

export const addShop = () => {
  // TODO
}

export const addShopMenu = (shopId) => {
  // TODO
}

export const patchProduct = (productId) => {
  // TODO
}

export const patchShop = (shopId) => {
  // TODO
}


if(process.client) {
  resetMocks()
  // // console.warn('1')
  // getShops()
  // getMenuFromShopId(4)
  //   .then(console.warn)
}
