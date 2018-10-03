import _get from 'lodash/fp/get'
const LOCAL_STORAGE_KEY = '_tpic'

let cache

const persist = () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cache))
const load = () => {
  const stringified = localStorage.getItem(LOCAL_STORAGE_KEY)
  return stringified? JSON.parse(stringified) : {}
}

// init cache (read from localStorage)
if (process.client) {
  cache = load()
}

// cached read
export const get = key => _get(key, cache)
export const set = (key, value) => {
  if(value === undefined) {
    delete cache[key]
  } else {
    cache[key] = value
  }
  persist()
}

export const clear = () => {
  cache = {}
  persist()
}

export const logStorage = () => console.warn('current storage:', load())
