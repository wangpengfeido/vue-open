module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/openInstance.js
/**
 * Append element of a Vue instance to a dom
 * @param {Element} appendTo An element appended to.
 * @param {Vue} instance A Vue instance.
 * @return {Object} {el,instance,close}
 *     el: the element of the Vue instance
 *     instance: the Vue instance
 *     close: a function call to remove the element from dom
 */
function openInstance(_ref) {
  var _ref$appendTo = _ref.appendTo,
      appendTo = _ref$appendTo === void 0 ? document.body : _ref$appendTo,
      instance = _ref.instance;

  if (!instance.$el) {
    instance.$mount(document.createElement('div'));
  }

  var el = instance.$el;
  appendTo.appendChild(el);

  function close() {
    appendTo.removeChild(el);
  }

  return {
    el: el,
    instance: instance,
    close: close
  };
}
// CONCATENATED MODULE: ./src/openComponent.js

/**
 * instantiate a Vue component and append it to a dom
 * @param {Element} appendTo An element appended to.
 * @param {typeof Vue} component A Vue component.
 * @return {Object}
 */

function openComponent(_ref) {
  var appendTo = _ref.appendTo,
      component = _ref.component;
  var instance = new component({
    el: document.createElement('div')
  });
  var res = openInstance({
    appendTo: appendTo,
    instance: instance
  });
  var close = res.close;

  res.close = function () {
    instance.$destroy();
    close();
  };

  return res;
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/openComponentOptions.js


/**
 * use Vue options to create a Vue Component.Then instantiate it and append to a dom
 * @param {Element} appendTo An element appended to.
 * @param {Object} options Vue options.
 * @return {Object}
 */

function openComponentOptions(_ref) {
  var appendTo = _ref.appendTo,
      options = _ref.options;
  var component = external_vue_default.a.extend(options);
  return openComponent({
    appendTo: appendTo,
    component: component
  });
}
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * Open Vue at anywhere.Append Vue to any dom.
 * @param {Element} appendTo An element that Vue append to.
 * @param {Vue|typeof Vue|Object} toOpen
 *     it could be three possibilities:
 *         1. A Vue instance.
 *         2. A Vue component(function). 
 *         3. Vue options(object).
 * @return {Object} {el,instance,close}
 *     el: the element of the Vue instance
 *     instance: the Vue instance
 *     close: a function call to remove the element from dom.If "toOpen" in params is not a Vue instance,the Vue instance auto created will be destroyed.
 */

function src_open(_ref) {
  var appendTo = _ref.appendTo,
      toOpen = _ref.toOpen;

  if (toOpen._isVue) {
    return openInstance({
      appendTo: appendTo,
      instance: toOpen
    });
  } else if (typeof toOpen === 'function') {
    return openComponent({
      appendTo: appendTo,
      component: toOpen
    });
  } else if (_typeof(toOpen) === 'object') {
    return openComponentOptions({
      appendTo: appendTo,
      options: toOpen
    });
  } else {
    throw new Error('vue-open:params of "open" function is not valid');
  }
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  open: src_open
});

/***/ })
/******/ ])["default"];