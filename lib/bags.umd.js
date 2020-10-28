(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var MESSAGES = {
    NATIVE_RESOURCE_NOT_FOUND: function NATIVE_RESOURCE_NOT_FOUND() {
      return 'The environment don\'t have a localStorage API!';
    },
    INVALID_VALUE: function INVALID_VALUE() {
      return 'The function value is invalid!';
    }
  };

  var hasLocalStorage = function hasLocalStorage() {
    return 'localStorage' in window;
  };

  var Bags = /*#__PURE__*/function () {
    function Bags() {
      _classCallCheck(this, Bags);

      this.initialize();
      this.store = localStorage;
    }

    _createClass(Bags, [{
      key: "initialize",
      value: function initialize() {
        if (!hasLocalStorage()) throw MESSAGES.NATIVE_RESOURCE_NOT_FOUND();
      }
    }, {
      key: "add",
      value: function add(key, value) {
        if (typeof value === 'function') throw MESSAGES.INVALID_VALUE();
        this.store.setItem(key, JSON.stringify(value));
        return true;
      }
    }, {
      key: "remove",
      value: function remove(key) {
        this.store.removeItem(key);
        return true;
      }
    }, {
      key: "fetch",
      value: function fetch(key) {
        return JSON.parse(this.store.getItem(key));
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.store.getItem(key) !== null;
      }
    }, {
      key: "clear",
      value: function clear(key) {
        if (key) return this.remove(key);
        this.store.clear();
        return true;
      }
    }]);

    return Bags;
  }();

  module.exports = Bags;

})));
