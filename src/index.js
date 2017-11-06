export default class {
  /**
   * initialize
   * Use at LocalStorage in case of string isn't 'session'
   * @param {string} use - 'local' or 'session'
   */
  constructor (use) {
    switch (use) {
      case 'session':
        this._storage = sessionStorage
        return this
      default:
        this._storage = localStorage
        return this
    }
  }

  /**
   * saved json style
   * @param {string} key
   * @param {string|Array|object} val
   */
  save (key, val) {
    this._storage.setItem(key, JSON.stringify(val, null, 0))
    return this
  }

  /**
   * NULL at not exist, parse of JSON at exist
   * @param {string} key
   * @returns {null|string|Array|object}
   */
  get (key) {
    const item = this._storage.getItem(key)
    return item === undefined ? null : JSON.parse(item)
  }

  /**
   * delete for item
   * @param {string} key
   */
  remove (key) {
    this._storage.removeItem(key)
    return this
  }

  /**
   * all clear
   */
  clear () {
    this._storage.clear()
  }
}