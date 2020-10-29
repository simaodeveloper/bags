const MESSAGES = {
  NATIVE_RESOURCE_NOT_FOUND: () => 'The environment don\'t have a localStorage API!',
  INVALID_VALUE: () => 'The function value is invalid!'
}

const hasLocalStorage = () => 'localStorage' in window

class Bags {
  constructor () {
    this.initialize()
    this.store = localStorage
  }

  initialize () {
    if (!hasLocalStorage()) throw MESSAGES.NATIVE_RESOURCE_NOT_FOUND()
  }

  add (key, value) {
    if (typeof value === 'function') throw MESSAGES.INVALID_VALUE()
    this.store.setItem(key, JSON.stringify(value))
    return true
  }

  remove (key) {
    this.store.removeItem(key)
    return true
  }

  fetch (key) {
    return JSON.parse(this.store.getItem(key))
  }

  has (key) {
    return this.store.getItem(key) !== null
  }

  clear (key) {
    if (key) return this.remove(key)

    this.store.clear()
    return true
  }
}

export default Bags
