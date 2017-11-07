/*!
WebStorage Control v0.0.1
web storage (local or session) control library
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/storage-control
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.StorageControl = factory());
}(this, (function () { 'use strict';

  var asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap: function (fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function (value) {
        return new AwaitValue(value);
      }
    };
  }();





  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _class = function () {
    /**
     * initialize
     * Use at LocalStorage in case of string isn't 'session'
     * @param {string} use - 'local' or 'session'
     */
    function _class(use) {
      classCallCheck(this, _class);

      switch (use) {
        case 'session':
          this._storage = sessionStorage;
          return this;
        default:
          this._storage = localStorage;
          return this;
      }
    }

    /**
     * saved json style
     * @param {string} key
     * @param {number|string|Array|object} val
     */


    _class.prototype.save = function save(key, val) {
      this._storage.setItem(key, JSON.stringify(val, null, 0));
      return this;
    };

    /**
     * NULL at not exist, parse of JSON at exist
     * @param {string} key
     * @returns {null|number|string|Array|object}
     */


    _class.prototype.get = function get$$1(key) {
      var item = this._storage.getItem(key);
      return item === undefined ? null : JSON.parse(item);
    };

    /**
     * delete for item
     * @param {string} key
     */


    _class.prototype.remove = function remove(key) {
      this._storage.removeItem(key);
      return this;
    };

    /**
     * all clear
     */


    _class.prototype.clear = function clear() {
      this._storage.clear();
    };

    return _class;
  }();

  return _class;

})));
