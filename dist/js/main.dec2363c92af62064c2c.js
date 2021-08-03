/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + chunkId + "." + {"2":"0c1c6bf1020b84b96c9e","3":"a9292673d3825bd0a900"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([181,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return displayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return displayMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayActionMessage; });
var displayDate = function displayDate(timestamp) {
  var date = new Date(timestamp);
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear(); // return day + ' ' + monthNames[monthIndex] + ' ' + year;

  return "".concat(monthNames[monthIndex], " ").concat(day, ", ").concat(year);
};
var displayMoney = function displayMoney(n) {
  var format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN'
  }); // or use toLocaleString()

  return format.format(n);
};
var displayActionMessage = function displayActionMessage(msg) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var div = document.createElement('div');
  var span = document.createElement('span');
  div.className = "toast ".concat(status === 'info' ? 'toast-info' : status === 'success' ? 'toast-success' : 'toast-error');
  span.className = 'toast-msg';
  span.textContent = msg;
  div.appendChild(span);

  if (document.querySelector('.toast')) {
    document.body.removeChild(document.querySelector('.toast'));
    document.body.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  setTimeout(function () {
    try {
      document.body.removeChild(div);
    } catch (e) {}
  }, 3000);
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(182);
module.exports = __webpack_require__(400);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var CircularProgress = function CircularProgress(_ref) {
  var style = _ref.style,
      visible = _ref.visible,
      theme = _ref.theme;

  var className = function className() {
    return theme === 'light' ? 'circular-progress-light' : theme === 'dark' ? 'circular-progress-dark' : null;
  };

  return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className(),
    style: style
  }) : null;
};

CircularProgress.defaultProps = {
  visible: true,
  theme: 'light',
  style: {}
};
CircularProgress.propType = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (CircularProgress);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCOUNT_EDIT; });
/* unused harmony export ADMIN_DASHBOARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADMIN_PRODUCTS; });
/* unused harmony export ADMIN_USERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_PRODUCT; });
/* unused harmony export SEARCH */
/* unused harmony export SIGNIN */
/* unused harmony export SIGNOUT */
/* unused harmony export SIGNUP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FORGOT_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHECKOUT_STEP_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHECKOUT_STEP_2; });
/* unused harmony export CHECKOUT_STEP_3 */
var HOME = '/';
var ACCOUNT = '/account';
var ACCOUNT_EDIT = '/account/edit';
var ADMIN_DASHBOARD = '/admin/dashboard';
var ADMIN_PRODUCTS = '/admin/products';
var ADMIN_USERS = '/admin/users';
var ADD_PRODUCT = '/admin/add';
var EDIT_PRODUCT = '/admin/edit';
var SEARCH = '/search';
var SIGNIN = '/signin';
var SIGNOUT = '/signup';
var SIGNUP = '/signup';
var FORGOT_PASSWORD = '/forgot_password';
var CHECKOUT_STEP_1 = '/checkout/step1';
var CHECKOUT_STEP_2 = '/checkout/step2';
var CHECKOUT_STEP_3 = '/checkout/step3';

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ImageLoader = function ImageLoader(props) {
  var _loaded = {};
  var spinnerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_loaded[props.src]),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var onLoad = function onLoad() {
    _loaded[props.src] = true;
    setLoaded(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: spinnerStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: props.alt || '',
    className: "".concat(props.className || '', " ").concat(loaded ? 'is-img-loaded' : 'is-img-loading'),
    onLoad: onLoad,
    src: props.src
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ImageLoader);

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/integration/react.js
var integration_react = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(7);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/actions/basketActions.js
var addToBasket = function addToBasket(product) {
  return {
    type: 'ADD_TO_BASKET',
    payload: product
  };
};
var removeFromBasket = function removeFromBasket(id) {
  return {
    type: 'REMOVE_FROM_BASKET',
    payload: id
  };
};
var clearBasket = function clearBasket() {
  return {
    type: 'CLEAR_BASKET'
  };
};
var addQtyItem = function addQtyItem(id) {
  return {
    type: 'ADD_QTY_ITEM',
    payload: id
  };
};
var minusQtyItem = function minusQtyItem(id) {
  return {
    type: 'MINUS_QTY_ITEM',
    payload: id
  };
};
// CONCATENATED MODULE: ./src/components/basket/BasketItemControl.jsx




var BasketItemControl_BasketItemControl = function BasketItemControl(_ref) {
  var product = _ref.product,
      dispatch = _ref.dispatch;

  var onAddQty = function onAddQty() {
    if (product.quantity < product.maxQuantity) {
      dispatch(addQtyItem(product.id));
    }
  };

  var onMinusQty = function onMinusQty() {
    if (product.maxQuantity >= product.quantity && product.quantity !== 0) {
      dispatch(minusQtyItem(product.id));
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-control"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-add",
    disabled: product.maxQuantity === product.quantity,
    onClick: onAddQty
  }, "+"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-minus",
    disabled: product.quantity === 1,
    onClick: onMinusQty
  }, "-"));
};

BasketItemControl_BasketItemControl.propType = {
  action: prop_types_default.a.objectOf(prop_types_default.a.func).isRequired,
  product: prop_types_default.a.object.isRequired
};
/* harmony default export */ var basket_BasketItemControl = (BasketItemControl_BasketItemControl);
// CONCATENATED MODULE: ./src/components/ui/Badge.jsx



var Badge_Badge = function Badge(_ref) {
  var count = _ref.count,
      children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "badge"
  }, children, count >= 1 && /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge-count"
  }, count));
};

Badge_Badge.propType = {
  count: prop_types_default.a.number.isRequired
};
/* harmony default export */ var ui_Badge = (Badge_Badge);
// EXTERNAL MODULE: ./src/components/ui/ImageLoader.jsx
var ImageLoader = __webpack_require__(37);

// EXTERNAL MODULE: ./src/helpers/utils.js
var utils = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/basket/BasketItem.jsx








var BasketItem_BasketItem = function BasketItem(_ref) {
  var basket = _ref.basket,
      dispatch = _ref.dispatch,
      product = _ref.product;

  var onRemoveFromBasket = function onRemoveFromBasket() {
    return dispatch(removeFromBasket(product.id));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item"
  }, /*#__PURE__*/react_default.a.createElement(basket_BasketItemControl, {
    dispatch: dispatch,
    product: product
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-img-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "basket-item-img",
    src: product.image
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-details"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-item-name"
  }, product.name), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-item-price"
  }, Object(utils["c" /* displayMoney */])(product.price * product.quantity), /*#__PURE__*/react_default.a.createElement("span", null, " (x ".concat(product.quantity, ") ")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "position-relative margin-right-l"
  }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
    count: product.quantity
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-item-remove button button-border button-border-gray button-small",
    onClick: onRemoveFromBasket
  }, "delete")));
};

BasketItem_BasketItem.propType = {
  product: prop_types_default.a.object.isRequired,
  basket: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
/* harmony default export */ var basket_BasketItem = (BasketItem_BasketItem);
// CONCATENATED MODULE: ./src/components/basket/BasketToggle.jsx


var BasketToggle = function BasketToggle(props) {
  var onClickToggle = function onClickToggle(e) {
    if (document.body.classList.contains('is-basket-open')) {
      document.body.classList.remove('is-basket-open');
    } else {
      document.body.classList.add('is-basket-open');
    }
  };

  document.addEventListener('click', function (e) {
    var closest = e.target.closest('.basket');
    var toggle = e.target.closest('.basket-toggle');
    var closeToggle = e.target.closest('.basket-item-remove');

    if (!closest && document.body.classList.contains('is-basket-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-basket-open');
    }
  });
  return props.children({
    onClickToggle: onClickToggle
  });
};

/* harmony default export */ var basket_BasketToggle = (BasketToggle);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(127);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/components/ui/Modal.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Modal_Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose,
      afterOpenModal = _ref.afterOpenModal,
      overrideStyle = _ref.overrideStyle,
      children = _ref.children;
  var defaultStyle = {
    content: _objectSpread({
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      position: 'fixed',
      padding: '50px 20px',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, .1)',
      animation: 'scale .3s ease'
    }, overrideStyle)
  };
  lib_default.a.setAppElement('#app');
  return /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    isOpen: isOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: onRequestClose,
    shouldCloseOnOverlayClick: true,
    style: defaultStyle,
    contentLabel: "Product Modal"
  }, children);
};

Modal_Modal.defaultProps = {
  overrideStyle: {}
};
/* harmony default export */ var ui_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/components/ui/Boundary.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Boundary_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Boundary_Boundary = /*#__PURE__*/function (_Component) {
  _inherits(Boundary, _Component);

  var _super = _createSuper(Boundary);

  function Boundary() {
    var _this;

    _classCallCheck(this, Boundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Boundary_defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    return _this;
  }

  _createClass(Boundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.log(error);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "loader"
        }, /*#__PURE__*/react_default.a.createElement("h3", null, ":( Something went wrong."));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return Boundary;
}(react["Component"]);

/* harmony default export */ var ui_Boundary = (Boundary_Boundary);
// CONCATENATED MODULE: ./src/components/basket/Basket.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Basket_Basket = function Basket(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var basket = Object(es["d" /* useSelector */])(function (state) {
    return state.basket;
  });
  var dispatch = Object(es["c" /* useDispatch */])();

  var calculateTotal = function calculateTotal() {
    var total = 0;

    if (basket.length !== 0) {
      var result = basket.map(function (product) {
        return product.price * product.quantity;
      }).reduce(function (a, b) {
        return a + b;
      });
      total = result.toFixed(2);
    }

    return Object(utils["c" /* displayMoney */])(total);
  };

  var onOpenModal = function onOpenModal() {
    return setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    return setModalOpen(false);
  };

  var onCheckOut = function onCheckOut() {
    if (basket.length !== 0 && props.isAuth) {
      document.body.classList.remove('is-basket-open');
      props.history.push('/checkout/step1');
    } else {
      onOpenModal();
    }
  };

  var onSignInClick = function onSignInClick() {
    onCloseModal();
    document.body.classList.remove('basket-open');
    props.history.push(CHECKOUT_STEP_1);
  };

  var onClearBasket = function onClearBasket() {
    basket.length !== 0 && dispatch(clearBasket());
  };

  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isModalOpen,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-center"
  }, "You must sign in to continue checking out"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small",
    onClick: onCloseModal
  }, "Continue shopping"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: onSignInClick
  }, "Sign in to checkout"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-list"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-header"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "basket-header-title"
  }, "My Basket \xA0", /*#__PURE__*/react_default.a.createElement("span", null, "(", " ".concat(basket.length, " ").concat(basket.length > 1 ? 'items' : 'item'), ")")), /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("span", {
      className: "basket-toggle button button-border button-border-gray button-small",
      onClick: onClickToggle
    }, "Close");
  }), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-clear button button-border button-border-gray button-small",
    disabled: basket.length === 0,
    onClick: onClearBasket
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Clear Basket"))), basket.length <= 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-empty"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-empty-msg"
  }, "Your basket is empty")), basket.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(basket_BasketItem, {
      key: product.id,
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-checkout"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-total"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "basket-total-title"
  }, "Subtotal Amout:"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount"
  }, calculateTotal())), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-checkout-button button",
    disabled: basket.length === 0 || props.location.pathname === '/checkout',
    onClick: onCheckOut
  }, "Check Out"))));
};

/* harmony default export */ var basket_Basket = (Object(react_router["g" /* withRouter */])(Basket_Basket));
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(19);

// CONCATENATED MODULE: ./src/actions/authActions.js
var signIn = function signIn(email, password) {
  return {
    type: 'SIGNIN',
    payload: {
      email: email,
      password: password
    }
  };
};
var signInWithGoogle = function signInWithGoogle() {
  return {
    type: 'SIGNIN_WITH_GOOGLE'
  };
};
var signUp = function signUp(user) {
  return {
    type: 'SIGNUP',
    payload: user
  };
};
var signInSuccess = function signInSuccess(auth) {
  return {
    type: 'SIGNIN_SUCCESS',
    payload: auth
  };
};
var setAuthPersistence = function setAuthPersistence() {
  return {
    type: 'SET_AUTH_PERSISTENCE'
  };
};
var signOut = function signOut() {
  return {
    type: 'SIGNOUT'
  };
};
var signOutSuccess = function signOutSuccess() {
  return {
    type: 'SIGNOUT_SUCCESS'
  };
};
var setAuthStatus = function setAuthStatus(status) {
  return {
    type: 'SET_AUTH_STATUS',
    payload: status
  };
};
var onAuthStateChanged = function onAuthStateChanged() {
  return {
    type: 'ON_AUTHSTATE_CHANGED'
  };
};
var onAuthStateSuccess = function onAuthStateSuccess(user) {
  return {
    type: 'ON_AUTHSTATE_SUCCESS',
    payload: user
  };
};
var onAuthStateFail = function onAuthStateFail(error) {
  return {
    type: 'ON_AUTHSTATE_Fail',
    payload: error
  };
};
var resetPassword = function resetPassword(email) {
  return {
    type: 'RESET_PASSWORD',
    payload: email
  };
};
var authActions_isAuthenticating = function isAuthenticating() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: 'IS_AUTHENTICATING',
    payload: bool
  };
};
// CONCATENATED MODULE: ./src/components/auth/SignOut.jsx




var SignOut_SignOut = function SignOut(props) {
  var dispatch = Object(es["c" /* useDispatch */])();

  var onSignOut = function onSignOut() {
    dispatch(signOut());
  };

  return props.children({
    onSignOut: onSignOut
  });
};

/* harmony default export */ var auth_SignOut = (SignOut_SignOut);
// EXTERNAL MODULE: ./src/components/ui/CircularProgress.jsx
var CircularProgress = __webpack_require__(23);

// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(27);

// CONCATENATED MODULE: ./src/views/account/components/UserAvatar.jsx







var UserAvatar_UserNav = function UserNav(_ref) {
  var profile = _ref.profile,
      isAuthenticating = _ref.isAuthenticating;
  Object(react["useEffect"])(function () {
    document.addEventListener('click', toggleDropdown);
    return function () {
      return document.addEventListener('click', toggleDropdown);
    };
  }, []);
  var userNav = Object(react["useRef"])(null);

  var onClickNav = function onClickNav() {
    userNav.current.classList.toggle('user-sub-open');
  };

  var toggleDropdown = function toggleDropdown(e) {
    var closest = e.target.closest('div.user-nav');

    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (e) {}
  };

  return isAuthenticating ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Signing Out"), /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null)) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav",
    onClick: onClickNav,
    ref: userNav
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-overflow-ellipsis"
  }, profile.fullname && profile.fullname.split(' ')[0]), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav-img-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    alt: "",
    className: "user-nav-img",
    src: profile.avatar
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "icon-caret user-caret"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav-sub"
  }, profile.role !== 'ADMIN' && /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["a" /* ACCOUNT */],
    className: "user-nav-sub-link"
  }, "View Account", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-user"
  })), /*#__PURE__*/react_default.a.createElement(auth_SignOut, null, function (_ref2) {
    var onSignOut = _ref2.onSignOut;
    return /*#__PURE__*/react_default.a.createElement("h6", {
      className: "user-nav-sub-link margin-0 d-flex",
      onClick: onSignOut
    }, "Sign Out", /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-sign-out-alt"
    }));
  })));
};

UserAvatar_UserNav.PropType = {
  profile: prop_types_default.a.object.isRequired
};
/* harmony default export */ var UserAvatar = (Object(react_router["g" /* withRouter */])(UserAvatar_UserNav));
// CONCATENATED MODULE: ./src/actions/filterActions.js
var setTextFilter = function setTextFilter(keyword) {
  return {
    type: 'SET_TEXT_FILTER',
    payload: keyword
  };
};
var setBrandFilter = function setBrandFilter(brand) {
  return {
    type: 'SET_BRAND_FILTER',
    payload: brand
  };
};
var setMinPriceFilter = function setMinPriceFilter(min) {
  return {
    type: 'SET_MIN_PRICE_FILTER',
    payload: min
  };
};
var setMaxPriceFilter = function setMaxPriceFilter(max) {
  return {
    type: 'SET_MAX_PRICE_FILTER',
    payload: max
  };
};
var resetFilter = function resetFilter() {
  return {
    type: 'RESET_FILTER'
  };
};
var clearRecentSearch = function clearRecentSearch() {
  return {
    type: 'CLEAR_RECENT_SEARCH'
  };
};
var removeSelectedRecent = function removeSelectedRecent(keyword) {
  return {
    type: 'REMOVE_SELECTED_RECENT',
    payload: keyword
  };
};
var applyFilter = function applyFilter(filters) {
  return {
    type: 'APPLY_FILTER',
    payload: filters
  };
};
// CONCATENATED MODULE: ./src/components/ui/SearchBar.jsx
function SearchBar_slicedToArray(arr, i) { return SearchBar_arrayWithHoles(arr) || SearchBar_iterableToArrayLimit(arr, i) || SearchBar_unsupportedIterableToArray(arr, i) || SearchBar_nonIterableRest(); }

function SearchBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchBar_arrayLikeToArray(o, minLen); }

function SearchBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchBar_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SearchBar_SearchBar = function SearchBar(_ref) {
  var filter = _ref.filter,
      isLoading = _ref.isLoading,
      productsLength = _ref.productsLength,
      history = _ref.history;

  var _useState = Object(react["useState"])(filter.keyword),
      _useState2 = SearchBar_slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var searchbarRef = Object(react["useRef"])(null);
  Object(react["useEffect"])(function () {
    setSearchInput(filter.keyword);
  }, [filter.keyword]);
  var dispatch = Object(es["c" /* useDispatch */])();
  var isMobile = window.screen.width <= 480 ? true : false;

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trimStart();
    setSearchInput(val);
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13 && productsLength !== 0) {
      dispatch(setTextFilter(searchInput));
      e.target.blur();
      searchbarRef.current.classList.remove('is-open-recent-search');
      isMobile && history.push('/');
    }
  };

  var onFocusInput = function onFocusInput(e) {
    e.target.select();

    if (filter.recent.length !== 0) {
      searchbarRef.current.classList.add('is-open-recent-search');
      document.addEventListener('click', recentSearchClickHandler);
    }
  };

  var recentSearchClickHandler = function recentSearchClickHandler(e) {
    var searchBar = e.target.closest('.searchbar');

    if (!searchBar) {
      searchbarRef.current.classList.remove('is-open-recent-search');
      document.removeEventListener('click', recentSearchClickHandler);
    }
  };

  var onClickRecentSearch = function onClickRecentSearch(keyword) {
    dispatch(setTextFilter(keyword));
    searchbarRef.current.classList.remove('is-open-recent-search');
  };

  var onClearRecent = function onClearRecent() {
    dispatch(clearRecentSearch());
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar",
    ref: searchbarRef
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "search-input searchbar-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    onFocus: onFocusInput,
    placeholder: "Search Products By Name",
    readOnly: isLoading,
    type: "text",
    value: searchInput
  }), filter.recent.length !== 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-recent"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-recent-header"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Recent Search"), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "searchbar-recent-clear text-subtle",
    onClick: onClearRecent
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "searchbar-recent-wrapper",
      key: "search-".concat(item, "-").concat(index)
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "searchbar-recent-keyword margin-0",
      onClick: function onClick() {
        return onClickRecentSearch(item);
      }
    }, item), /*#__PURE__*/react_default.a.createElement("span", {
      className: "searchbar-recent-button text-subtle",
      onClick: function onClick() {
        return dispatch(removeSelectedRecent(item));
      }
    }, "X"));
  }))));
};

/* harmony default export */ var ui_SearchBar = (SearchBar_SearchBar);
// CONCATENATED MODULE: ./src/selectors/selector.js
var selectFilter = function selectFilter(products, filter) {
  if (!products || products.length === 0) return [];
  var keyword = filter.keyword.toLowerCase();
  return products.filter(function (product) {
    var isInRange = filter.maxPrice ? product.price >= filter.minPrice && product.price <= filter.maxPrice : true;
    var matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;
    var matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
    var matchDescription = product.description ? product.description.toLowerCase().includes(keyword) : true;
    var matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;
    return (matchKeyword || matchName || matchDescription) && matchBrand && isInRange;
  }).sort(function (a, b) {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    } else if (filter.sortBy === 'price-asc') {
      return a.price > b.price ? 1 : -1;
    }
  });
}; // Select product with highest price

var selectMax = function selectMax(products) {
  if (!products || products.length === 0) return 0;
  var high = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price > high.price) {
      high = products[i];
    }
  }

  return Math.floor(high.price);
}; // Select product with lowest price

var selectMin = function selectMin(products) {
  if (!products || products.length === 0) return 0;
  var low = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price < low.price) {
      low = products[i];
    }
  }

  return Math.floor(low.price);
};
// CONCATENATED MODULE: ./src/components/ui/PriceRange.jsx
function PriceRange_slicedToArray(arr, i) { return PriceRange_arrayWithHoles(arr) || PriceRange_iterableToArrayLimit(arr, i) || PriceRange_unsupportedIterableToArray(arr, i) || PriceRange_nonIterableRest(); }

function PriceRange_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PriceRange_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PriceRange_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PriceRange_arrayLikeToArray(o, minLen); }

function PriceRange_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PriceRange_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PriceRange_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var PriceRange_PriceRange = function PriceRange(props) {
  var _useState = Object(react["useState"])(props.initMin ? props.initMin : props.min),
      _useState2 = PriceRange_slicedToArray(_useState, 2),
      minState = _useState2[0],
      setMinState = _useState2[1];

  var _useState3 = Object(react["useState"])(props.initMax ? props.initMax : props.max),
      _useState4 = PriceRange_slicedToArray(_useState3, 2),
      maxState = _useState4[0],
      setMaxState = _useState4[1];

  var slider = Object(react["useRef"])(null);
  var inputMin = Object(react["useRef"])(null);
  var inputMax = Object(react["useRef"])(null);
  var rangeMin = Object(react["useRef"])(null);
  var rangeMax = Object(react["useRef"])(null);
  Object(react["useEffect"])(function () {
    setMinState(props.initMin ? props.initMin : props.min);
    setMaxState(props.initMax ? props.initMax : props.max);
  }, [props.initMin, props.initMax]);

  var onRangeChange = function onRangeChange() {
    var slide1 = +rangeMin.current.value;
    var slide2 = +rangeMax.current.value;

    if (slide1 > slide2) {
      var _ref = [slide2, slide1];
      slide1 = _ref[0];
      slide2 = _ref[1];
    }

    setMinState(slide1);
    setMaxState(slide2);
    props.onPriceChange(slide1, slide2);
  };

  var onInputChange = function onInputChange() {
    var valMin = +inputMin.current.value;
    var valMax = +inputMax.current.value;

    if (valMin > valMax) {
      var tmp = valMin;
      inputMin.current.value = valMax;
      inputMax.current.value = tmp;
    }

    setMinState(valMin);
    setMaxState(valMax);
    props.onPriceChange(valMin, valMax);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "price-range",
    ref: slider
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "price-range-control"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "price-range-input",
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    onChange: onInputChange,
    ref: inputMin,
    type: "number",
    value: minState
  }), "\u2014", /*#__PURE__*/react_default.a.createElement("input", {
    className: "price-range-input",
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    onChange: onInputChange,
    ref: inputMax,
    type: "number",
    value: maxState
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "price-range-control"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "price-range-slider",
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    onChange: onRangeChange,
    ref: rangeMin,
    step: "50",
    type: "range",
    value: minState
  }), /*#__PURE__*/react_default.a.createElement("input", {
    className: "price-range-slider",
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    onChange: onRangeChange,
    ref: rangeMax,
    step: "20",
    type: "range",
    value: maxState
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "price-range-scale"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "price-range-price"
  }, Object(utils["c" /* displayMoney */])(props.min)), /*#__PURE__*/react_default.a.createElement("span", {
    className: "price-range-price"
  }, Object(utils["c" /* displayMoney */])(props.max))));
};

PriceRange_PriceRange.propType = {
  min: prop_types_default.a.number,
  max: prop_types_default.a.number,
  initMin: prop_types_default.a.number,
  initMax: prop_types_default.a.number,
  productsLength: prop_types_default.a.number,
  onPriceChange: prop_types_default.a.func
};
/* harmony default export */ var ui_PriceRange = (PriceRange_PriceRange);
// CONCATENATED MODULE: ./src/components/ui/Filters.jsx
function Filters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Filters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Filters_ownKeys(Object(source), true).forEach(function (key) { Filters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Filters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Filters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Filters_slicedToArray(arr, i) { return Filters_arrayWithHoles(arr) || Filters_iterableToArrayLimit(arr, i) || Filters_unsupportedIterableToArray(arr, i) || Filters_nonIterableRest(); }

function Filters_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Filters_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Filters_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Filters_arrayLikeToArray(o, minLen); }

function Filters_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Filters_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Filters_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Filters_Filters = function Filters(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = Filters_slicedToArray(_useState, 2),
      isMounted = _useState2[0],
      setMounted = _useState2[1];

  var _useState3 = Object(react["useState"])({
    brand: props.filter.brand,
    minPrice: props.filter.minPrice,
    maxPrice: props.filter.maxPrice,
    sortBy: props.filter.sortBy
  }),
      _useState4 = Filters_slicedToArray(_useState3, 2),
      field = _useState4[0],
      setFilter = _useState4[1];

  var dispatch = Object(es["c" /* useDispatch */])();
  var max = selectMax(props.products);
  var min = selectMin(props.products);
  Object(react["useEffect"])(function () {
    if (isMounted && window.screen.width <= 480) {
      props.history.push('/');
    }

    if (isMounted && props.closeModal) props.closeModal();
    setFilter(props.filter);
    console.log('sdfasf', field.brand);
    setMounted(true);
    window.scrollTo(0, 0);
  }, [props.filter]);

  var onPriceChange = function onPriceChange(min, max) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      minPrice: min,
      maxPrice: max
    }));
  };

  var onBrandFilterChange = function onBrandFilterChange(e) {
    console.log(e.target.value);
    var val = e.target.value;
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      brand: val
    }));
  };

  var onSortFilterChange = function onSortFilterChange(e) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      sortBy: e.target.value
    }));
  };

  var onApplyFilter = function onApplyFilter() {
    var isChanged = Object.keys(field).some(function (key) {
      return field[key] !== props.filter[key];
    });

    if (isChanged) {
      dispatch(applyFilter(field));
    }
  };

  var onResetFilter = function onResetFilter() {
    if (Object.keys(field).some(function (key) {
      return !!props.filter[key];
    })) {
      dispatch(resetFilter());
    }
  };

  console.log(props.filter.brand);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Sort By"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("select", {
    className: "filters-sort-by d-block",
    value: field.sortBy,
    disabled: props.isLoading || props.productsLength === 0,
    onChange: onSortFilterChange
  }, /*#__PURE__*/react_default.a.createElement("option", {
    value: ""
  }, "None"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "name-asc"
  }, "Name Ascending A - Z"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "name-desc"
  }, "Name Descending Z - A"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "price-desc"
  }, "Price High - Low"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "price-asc"
  }, "Price Low - High"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Price Range"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), props.productsLength === 0 && props.isLoading ? /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : /*#__PURE__*/react_default.a.createElement(ui_PriceRange, {
    min: min,
    max: max,
    initMin: field.minPrice,
    initMax: field.maxPrice,
    isLoading: props.isLoading,
    onPriceChange: onPriceChange,
    productsLength: props.productsLength
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "filters-button button button-small",
    disabled: props.isLoading || props.productsLength === 0,
    onClick: onApplyFilter
  }, "Apply filters"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "filters-button button button-border button-small",
    disabled: props.isLoading || props.productsLength === 0,
    onClick: onResetFilter
  }, "Reset filters")));
};

/* harmony default export */ var ui_Filters = (Object(react_router["g" /* withRouter */])(Filters_Filters));
// CONCATENATED MODULE: ./src/components/ui/FiltersToggle.jsx
function FiltersToggle_slicedToArray(arr, i) { return FiltersToggle_arrayWithHoles(arr) || FiltersToggle_iterableToArrayLimit(arr, i) || FiltersToggle_unsupportedIterableToArray(arr, i) || FiltersToggle_nonIterableRest(); }

function FiltersToggle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FiltersToggle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FiltersToggle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FiltersToggle_arrayLikeToArray(o, minLen); }

function FiltersToggle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FiltersToggle_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function FiltersToggle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var FiltersToggle_FiltersToggle = function FiltersToggle(_ref) {
  var filter = _ref.filter,
      isLoading = _ref.isLoading,
      products = _ref.products,
      productsLength = _ref.productsLength,
      children = _ref.children;

  var _useState = Object(react["useState"])(false),
      _useState2 = FiltersToggle_slicedToArray(_useState, 2),
      isOpenModal = _useState2[0],
      setModalOpen = _useState2[1];

  var dispatch = Object(es["c" /* useDispatch */])();

  var onOpenModal = function onOpenModal() {
    setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    setModalOpen(false);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-toggle",
    onClick: onOpenModal
  }, children), /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-toggle-sub"
  }, /*#__PURE__*/react_default.a.createElement(ui_Filters, {
    dispatch: dispatch,
    products: products,
    productsLength: productsLength,
    filter: filter,
    closeModal: onCloseModal,
    isLoading: isLoading
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: "modal-close-button",
    onClick: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))));
};

/* harmony default export */ var ui_FiltersToggle = (FiltersToggle_FiltersToggle);
// CONCATENATED MODULE: ./src/components/ui/MobileNavigation.jsx





 // import logo from '../../../static/logo_horizontal.png';

var MobileNavigation_Navigation = function Navigation(props) {
  var onClickLink = function onClickLink(e) {
    if (props.isAuthenticating) e.preventDefault();
  };

  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "mobile-navigation"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "mobile-navigation-main"
  }, /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      onClick: onClickToggle,
      disabled: props.disabledPaths.includes(props.path)
    }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
      count: props.basketLength
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-shopping-basket",
      style: {
        fontSize: '2rem'
      }
    })));
  }), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "mobile-navigation-menu"
  }, props.isAuth ? /*#__PURE__*/react_default.a.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: props.isAuthenticating,
    profile: props.profile
  })) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, props.path !== '/signin' && /*#__PURE__*/react_default.a.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    className: "navigation-menu-link",
    onClick: onClickLink,
    to: "/signin"
  }, "Sign In")))), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-link",
    onClick: function onClick(e) {
      if (props.isAuthenticating) e.preventDefault();
      props.history.push('/search');
    }
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-search"
  }))));
};

MobileNavigation_Navigation.propType = {
  path: prop_types_default.a.string.isRequired,
  disabledPaths: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired
};
/* harmony default export */ var MobileNavigation = (Object(react_router["g" /* withRouter */])(MobileNavigation_Navigation));
// CONCATENATED MODULE: ./static/projectlogo.png
/* harmony default export */ var projectlogo = (__webpack_require__.p + "images/projectlogo.316f19231e85205757f84394692e215c.png");
// CONCATENATED MODULE: ./src/components/ui/Navigation.jsx











var Navigation_Navigation = function Navigation(_ref) {
  var isAuth = _ref.isAuth,
      path = _ref.path,
      history = _ref.history;
  Object(react["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      store: {
        filter: state.filter,
        products: state.products.items,
        basketLength: state.basket.length,
        profile: state.profile,
        isLoading: state.app.loading,
        isAuthenticating: state.app.isAuthenticating,
        productsLength: state.products.items.length
      }
    };
  }),
      store = _useSelector.store;

  var navbar = Object(react["useRef"])(null);

  var scrollHandler = function scrollHandler() {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  var onClickLink = function onClickLink(e) {
    if (store.isAuthenticating) e.preventDefault();
  }; // disable the basket toggle to these paths


  var basketDisabledPaths = ['/checkout/step1', '/checkout/step2', '/checkout/step3', '/signin', '/signup', '/forgot_password'];
  return window.screen.width <= 480 ? /*#__PURE__*/react_default.a.createElement(MobileNavigation, {
    basketLength: store.basketLength,
    profile: store.profile,
    isAuth: isAuth,
    isAuthenticating: store.isAuthenticating,
    path: path,
    disabledPaths: basketDisabledPaths
  }) : /*#__PURE__*/react_default.a.createElement("nav", {
    className: "navigation",
    ref: navbar
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    onClick: onClickLink,
    to: "/"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: projectlogo
  }))), path === '/' && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_SearchBar, {
    isLoading: store.isLoading,
    filter: store.filter,
    history: history,
    productsLength: store.productsLength
  }), "\xA0", /*#__PURE__*/react_default.a.createElement(ui_FiltersToggle, {
    filter: store.filter,
    isLoading: store.isLoading,
    products: store.products,
    productsLength: store.productsLength,
    history: history
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-muted button-small"
  }, "Filters \xA0", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-chevron-right"
  })))), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref2) {
    var onClickToggle = _ref2.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      disabled: basketDisabledPaths.includes(path),
      onClick: onClickToggle
    }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
      count: store.basketLength
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-cart-plus",
      style: {
        fontSize: '2rem'
      }
    })));
  })), isAuth ? /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: store.isAuthenticating,
    profile: store.profile
  })) : /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-action"
  }, (path === '/signin' || path === '/') && /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "navigation-menu-active",
    className: "button button-small",
    exact: true,
    onClick: onClickLink,
    to: "/signup"
  }, "Sign Up"), (path === '/signup' || path === '/forgot_password' || path === '/') && /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "navigation-menu-active",
    className: "button button-small button-muted margin-left-s",
    exact: true,
    onClick: onClickLink,
    to: "/signin"
  }, "Sign In"))));
};

/* harmony default export */ var ui_Navigation = (Object(react_router["g" /* withRouter */])(Navigation_Navigation));
// CONCATENATED MODULE: ./src/components/ui/Footer.jsx




var Footer_Footer = function Footer(_ref) {
  var path = _ref.path;
  // hide the footer to these routes
  var hiddenPaths = ['/signin', '/signup', '/forgot_password', '/account', '/account/edit', '/checkout/step1', '/checkout/step2', '/checkout/step3'];
  return hiddenPaths.includes(path) ? null : /*#__PURE__*/react_default.a.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer-col-2"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: projectlogo
  }), /*#__PURE__*/react_default.a.createElement("h5", null, "\xA9\xA0", new Date().getFullYear())));
};

/* harmony default export */ var ui_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/routers/clientRoute.js
var _excluded = ["isAuth", "userType", "component", "path"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var clientRoute_PrivateRoute = function PrivateRoute(_ref) {
  var isAuth = _ref.isAuth,
      userType = _ref.userType,
      Component = _ref.component,
      path = _ref.path,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], _extends({}, rest, {
    component: function component(props) {
      return isAuth && userType === 'USER' ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_Navigation, {
        path: path,
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement(basket_Basket, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)), /*#__PURE__*/react_default.a.createElement(ui_Footer, {
        path: path
      })) : isAuth && userType === "ADMIN" ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: '/admin/dashboard'
      }) : /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: {
          pathname: '/signin',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
  };
};

/* harmony default export */ var clientRoute = (Object(es["b" /* connect */])(mapStateToProps)(clientRoute_PrivateRoute));
// CONCATENATED MODULE: ./src/components/ui/AdminNavigation.jsx






var AdminNavigation_AdminNavigation = function AdminNavigation() {
  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      profile: state.profile
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      profile = _useSelector.profile;

  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "navigation navigation-admin"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/admin/dashboard"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "ADMIN PANEL"))), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: isAuthenticating,
    profile: profile
  }))));
};

/* harmony default export */ var ui_AdminNavigation = (AdminNavigation_AdminNavigation);
// CONCATENATED MODULE: ./src/components/ui/AdminSidePanel.jsx



var AdminSidePanel_SideNavigation = function SideNavigation() {
  return /*#__PURE__*/react_default.a.createElement("aside", {
    className: "sidenavigation"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "sidenavigation-menu-active",
    className: "sidenavigation-menu",
    to: "/admin/products"
  }, "Products")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "sidenavigation-menu"
  }), /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "sidenavigation-menu-active",
    className: "sidenavigation-menu",
    to: "/dashboard/users"
  }, "Orders"))));
};

/* harmony default export */ var AdminSidePanel = (AdminSidePanel_SideNavigation);
// CONCATENATED MODULE: ./src/routers/AdminRoute.js
var AdminRoute_excluded = ["component"];

function AdminRoute_extends() { AdminRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdminRoute_extends.apply(this, arguments); }

function AdminRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AdminRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AdminRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var AdminRoute_AdminRoute = function AdminRoute(_ref) {
  var Component = _ref.component,
      rest = AdminRoute_objectWithoutProperties(_ref, AdminRoute_excluded);

  var isAuth = Object(es["d" /* useSelector */])(function (state) {
    return !!state.auth.id && state.auth.role === "ADMIN";
  });
  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], AdminRoute_extends({}, rest, {
    component: function component(props) {
      return isAuth ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_AdminNavigation, null), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content-admin"
      }, /*#__PURE__*/react_default.a.createElement(AdminSidePanel, null), /*#__PURE__*/react_default.a.createElement("div", {
        className: "content-admin-wrapper"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)))) : /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/"
      });
    }
  }));
};

/* harmony default export */ var routers_AdminRoute = (AdminRoute_AdminRoute);
// CONCATENATED MODULE: ./src/routers/PublicRoute.js
var PublicRoute_excluded = ["userType", "isAuth", "component", "path"];

function PublicRoute_extends() { PublicRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PublicRoute_extends.apply(this, arguments); }

function PublicRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PublicRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PublicRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var PublicRoute_PublicRoute = function PublicRoute(_ref) {
  var userType = _ref.userType,
      isAuth = _ref.isAuth,
      Component = _ref.component,
      path = _ref.path,
      rest = PublicRoute_objectWithoutProperties(_ref, PublicRoute_excluded);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], PublicRoute_extends({}, rest, {
    component: function component(props) {
      var _ref2 = props.location.state || {
        from: {
          pathname: '/'
        }
      },
          from = _ref2.from;

      return isAuth && userType === 'ADMIN' ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/admin/dashboard"
      }) : isAuth && userType === "USER" && (path === '/signin' || path === '/signup') ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: from
      }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_Navigation, {
        path: path,
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement(basket_Basket, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)), /*#__PURE__*/react_default.a.createElement(ui_Footer, {
        path: path
      }));
    }
  }));
};

var PublicRoute_mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
  };
};

/* harmony default export */ var routers_PublicRoute = (Object(es["b" /* connect */])(PublicRoute_mapStateToProps)(PublicRoute_PublicRoute));
// EXTERNAL MODULE: ./node_modules/firebase/dist/index.esm.js + 13 modules
var index_esm = __webpack_require__(94);

// CONCATENATED MODULE: ./src/views/admin/dashboard/index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || dashboard_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dashboard_arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function dashboard_slicedToArray(arr, i) { return dashboard_arrayWithHoles(arr) || dashboard_iterableToArrayLimit(arr, i) || dashboard_unsupportedIterableToArray(arr, i) || dashboard_nonIterableRest(); }

function dashboard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function dashboard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dashboard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dashboard_arrayLikeToArray(o, minLen); }

function dashboard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dashboard_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function dashboard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var dashboard_Dashboard = function Dashboard() {
  var _useState = Object(react["useState"])([]),
      _useState2 = dashboard_slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = dashboard_slicedToArray(_useState3, 2),
      productname = _useState4[0],
      setProductName = _useState4[1];

  var _useState5 = Object(react["useState"])([]),
      _useState6 = dashboard_slicedToArray(_useState5, 2),
      address = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = Object(react["useState"])([]),
      _useState8 = dashboard_slicedToArray(_useState7, 2),
      email = _useState8[0],
      setEmail = _useState8[1];

  var _useState9 = Object(react["useState"])([]),
      _useState10 = dashboard_slicedToArray(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  var _useState11 = Object(react["useState"])([]),
      _useState12 = dashboard_slicedToArray(_useState11, 2),
      mobile = _useState12[0],
      setMobile = _useState12[1];

  var getListUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var name, email, productName, address, price, mobile, result, orders;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = [];
              email = [];
              productName = [];
              address = [];
              price = [];
              mobile = [];
              _context.next = 8;
              return index_esm["a" /* default */].firestore().collection("orders").get();

            case 8:
              result = _context.sent;

              if (result.docs.length > 0) {
                orders = [];
                orders = _toConsumableArray(result.docs);
                orders.forEach(function (doc, index) {
                  name.push(doc.data().fullname);
                  email.push(doc.data().email);
                  address.push(doc.data().address);
                  productName.push(doc.data().ProductName);
                  price.push(doc.data().price);
                  mobile.push(doc.data().mobile.value);
                });
              }

              setName(name);
              setProductName(productName);
              setAddress(address);
              setEmail(email);
              setPrice(price);
              setMobile(mobile);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getListUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react["useEffect"])(function () {
    getListUsers();
  }, []);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-inputsadmin"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field1"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Name"), /*#__PURE__*/react_default.a.createElement("h5", null, name.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "admin-product-details"
    }, item);
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-fieldemail"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Phone"), /*#__PURE__*/react_default.a.createElement("h5", null, mobile.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "admin-product-details"
    }, item);
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-fieldemail"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Product"), /*#__PURE__*/react_default.a.createElement("h5", null, productname.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "admin-product-details"
    }, item);
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-fieldaddress"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Address"), /*#__PURE__*/react_default.a.createElement("h5", null, address.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "admin-product-details"
    }, item);
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field1"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Price"), /*#__PURE__*/react_default.a.createElement("h5", null, price.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "admin-product-details"
    }, item);
  })))));
};

/* harmony default export */ var dashboard = (dashboard_Dashboard);
// CONCATENATED MODULE: ./src/components/ui/MessageDisplay.jsx


var MessageDisplay_MessageDisplay = function MessageDisplay(_ref) {
  var message = _ref.message,
      desc = _ref.desc,
      buttonLabel = _ref.buttonLabel,
      action = _ref.action;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center"
  }, message || 'Message'), desc && /*#__PURE__*/react_default.a.createElement("span", null, desc), /*#__PURE__*/react_default.a.createElement("br", null), action && /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: action
  }, buttonLabel || 'Okay'));
};

/* harmony default export */ var ui_MessageDisplay = (MessageDisplay_MessageDisplay);
// CONCATENATED MODULE: ./src/actions/productActions.js
var getProducts = function getProducts(lastRef) {
  return {
    type: 'GET_PRODUCTS',
    payload: lastRef
  };
};
var getProductsSuccess = function getProductsSuccess(products) {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload: products
  };
};
var cancelGetProducts = function cancelGetProducts() {
  return {
    type: 'CANCEL_GET_PRODUCTS'
  };
};
var addProduct = function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  };
};
var addProductSuccess = function addProductSuccess(product) {
  return {
    type: 'ADD_PRODUCT_SUCCESS',
    payload: product
  };
};
var removeProduct = function removeProduct(id) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: id
  };
};
var removeProductSuccess = function removeProductSuccess(id) {
  return {
    type: 'REMOVE_PRODUCT_SUCCESS',
    payload: id
  };
};
var editProduct = function editProduct(id, updates) {
  return {
    type: 'EDIT_PRODUCT',
    payload: {
      id: id,
      updates: updates
    }
  };
};
var editProductSuccess = function editProductSuccess(updates) {
  return {
    type: 'EDIT_PRODUCT_SUCCESS',
    payload: updates
  };
};
// CONCATENATED MODULE: ./src/actions/appActions.js
var appActions_isLoading = function isLoading() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: 'LOADING',
    payload: bool
  };
};
// CONCATENATED MODULE: ./src/components/product/ProductList.jsx
function ProductList_slicedToArray(arr, i) { return ProductList_arrayWithHoles(arr) || ProductList_iterableToArrayLimit(arr, i) || ProductList_unsupportedIterableToArray(arr, i) || ProductList_nonIterableRest(); }

function ProductList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductList_arrayLikeToArray(o, minLen); }

function ProductList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProductList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ProductList_ProductList = function ProductList(_ref) {
  var isLoading = _ref.isLoading,
      requestStatus = _ref.requestStatus,
      productsLength = _ref.productsLength,
      filteredProductsLength = _ref.filteredProductsLength,
      lastRefKey = _ref.lastRefKey,
      totalItems = _ref.totalItems,
      dispatch = _ref.dispatch,
      location = _ref.location,
      children = _ref.children;

  var _useState = Object(react["useState"])(0),
      _useState2 = ProductList_slicedToArray(_useState, 2),
      lastScrollPos = _useState2[0],
      setLastScrollPos = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = ProductList_slicedToArray(_useState3, 2),
      isFetching = _useState4[0],
      setFetching = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = ProductList_slicedToArray(_useState5, 2),
      scrolledAtBottom = _useState6[0],
      setScrolledAtBottom = _useState6[1];

  var _useState7 = Object(react["useState"])(6),
      _useState8 = ProductList_slicedToArray(_useState7, 2),
      columnCount = _useState8[0],
      setColumnCount = _useState8[1];

  Object(react["useEffect"])(function () {
    if (productsLength === 0) {
      fetchProducts();
    }

    return function () {
      return dispatch(appActions_isLoading(false));
    };
  }, []);
  Object(react["useEffect"])(function () {
    window.scrollTo(0, lastScrollPos);
    setFetching(false);
  }, [lastRefKey]); // watch for changes on lastRefKey, if it changes that means new products have been fetched.

  Object(react["useEffect"])(function () {
    window.addEventListener('scroll', watchForScroll);
    return function () {
      return window.removeEventListener('scroll', watchForScroll);
    };
  }, [lastRefKey, isLoading]); // re-add event listener since the height of the window has increased for fetching new items.

  var watchForScroll = function watchForScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = winScroll / height; // value of 1 means it's at the bottom

    if (scrolled === 1 && !!lastRefKey && !isLoading && productsLength < totalItems) {
      setLastScrollPos(window.pageYOffset);
      setScrolledAtBottom(true);
      window.removeEventListener('scroll', watchForScroll);
    }
  };

  var fetchProducts = function fetchProducts() {
    setFetching(true);
    dispatch(getProducts(lastRefKey));
  };

  return filteredProductsLength === 0 && !isLoading && !requestStatus ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: "The are no items found.",
    desc: "Try using correct filters or keyword."
  }) : requestStatus ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: requestStatus,
    action: fetchProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, children, (scrolledAtBottom || location.pathname === '/admin/products') && productsLength < totalItems && /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center padding-l"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    disabled: isFetching,
    onClick: fetchProducts
  }, isFetching ? 'Fetching Items...' : 'Fetch More Items')));
};

ProductList_ProductList.propType = {
  isLoading: prop_types_default.a.bool.isRequired,
  requestStatus: prop_types_default.a.string.isRequired,
  productsLength: prop_types_default.a.number.isRequired,
  filteredProductsLength: prop_types_default.a.number.isRequired,
  dispatch: prop_types_default.a.func.isRequired
};
/* harmony default export */ var product_ProductList = (ProductList_ProductList);
// CONCATENATED MODULE: ./src/components/product/ProductAppliedFilters.jsx





var ProductAppliedFilters_ProductAppliedFilters = function ProductAppliedFilters(_ref) {
  var filter = _ref.filter;
  var dispatch = Object(es["c" /* useDispatch */])();
  var fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];

  var onRemoveKeywordFilter = function onRemoveKeywordFilter() {
    dispatch(applyFilter({
      keyword: ''
    }));
  };

  var onRemovePriceRangeFilter = function onRemovePriceRangeFilter() {
    dispatch(applyFilter({
      minPrice: 0,
      maxPrice: 0
    }));
  };

  var onRemoveBrandFilter = function onRemoveBrandFilter() {
    dispatch(applyFilter({
      brand: ''
    }));
  };

  var onRemoveSortFilter = function onRemoveSortFilter() {
    dispatch(applyFilter({
      sortBy: ''
    }));
  };

  return !fields.some(function (key) {
    return !!filter[key];
  }) ? null : /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-applied-filters"
  }, filter.keyword && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Keyword"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.keyword), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveKeywordFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), filter.brand && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Brand"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.brand), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveBrandFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), (!!filter.minPrice || !!filter.maxPrice) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Price Range"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, "$", filter.minPrice, " - $", filter.maxPrice), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemovePriceRangeFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), filter.sortBy && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Sort By"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.sortBy === 'price-desc' ? 'Price High - Low' : filter.sortBy === 'price-asc' ? 'Price Low - High' : filter.sortBy === 'name-desc' ? 'Name Z - A' : 'Name A - Z'), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveSortFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))));
};

ProductAppliedFilters_ProductAppliedFilters.propType = {
  filter: prop_types_default.a.shape({
    brand: prop_types_default.a.string,
    keyword: prop_types_default.a.string,
    minPrice: prop_types_default.a.number,
    maxPrice: prop_types_default.a.number
  })
};
/* harmony default export */ var product_ProductAppliedFilters = (ProductAppliedFilters_ProductAppliedFilters);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/bundle.js
var bundle = __webpack_require__(34);
var bundle_default = /*#__PURE__*/__webpack_require__.n(bundle);

// CONCATENATED MODULE: ./src/views/admin/components/ProductItem.jsx








var ProductItem_ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      dispatch = _ref.dispatch,
      history = _ref.history;
  var productRef = Object(react["useRef"])(null);

  var onClickEdit = function onClickEdit() {
    history.push("".concat(routes["g" /* EDIT_PRODUCT */], "/").concat(product.id));
  };

  var onDeleteProduct = function onDeleteProduct() {
    productRef.current.classList.toggle("item-active");
  };

  var onConfirmDelete = function onConfirmDelete() {
    dispatch(removeProduct(product.id));
    Object(utils["a" /* displayActionMessage */])('Item successfully Deleted');
    productRef.current.classList.remove('item-active');
  };

  var onCancelDelete = function onCancelDelete() {
    productRef.current.classList.remove('item-active');
  };

  return /*#__PURE__*/react_default.a.createElement(bundle["SkeletonTheme"], {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "item item-products ".concat(!product.id && 'item-loading'),
    ref: productRef
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid grid-count-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col item-img-wrapper"
  }, product.image ? /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: product.name,
    className: "item-img",
    src: product.image
  }) : /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 50,
    height: 30
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-overflow-ellipsis"
  }, product.name || /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 50
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.brand || /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 50
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.price ? Object(utils["c" /* displayMoney */])(product.price) : /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 30
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.dateAdded ? Object(utils["b" /* displayDate */])(product.dateAdded) : /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 30
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.maxQuantity || /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 20
  })))), product.id && /*#__PURE__*/react_default.a.createElement("div", {
    className: "item-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-small",
    onClick: onClickEdit
  }, "Edit"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-small",
    onClick: onDeleteProduct
  }, "Delete"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item-action-confirm"
  }, /*#__PURE__*/react_default.a.createElement("h", null, "Are you sure you want to delete this?"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border",
    onClick: onCancelDelete
  }, "No"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border",
    onClick: onConfirmDelete
  }, "Yes")))));
};

/* harmony default export */ var components_ProductItem = (Object(react_router["g" /* withRouter */])(ProductItem_ProductItem));
// CONCATENATED MODULE: ./src/views/admin/products/index.js












var products_Products = function Products(_ref) {
  var history = _ref.history,
      location = _ref.location;

  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      store: {
        productsLength: state.products.items.length,
        filter: state.filter,
        products: state.products.items,
        isLoading: state.app.loading,
        lastRefKey: state.products.lastRefKey,
        totalItems: state.products.total,
        filteredProducts: selectFilter(state.products.items, state.filter),
        requestStatus: state.app.requestStatus
      }
    };
  }),
      store = _useSelector.store;

  var dispatch = Object(es["c" /* useDispatch */])();

  var onClickAddProduct = function onClickAddProduct() {
    history.push(routes["c" /* ADD_PRODUCT */]);
  };

  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-admin-header"
  }, /*#__PURE__*/react_default.a.createElement(ui_SearchBar, {
    isLoading: store.isLoading,
    filter: store.filter,
    history: history,
    productsLength: store.productsLength
  }), "\xA0", /*#__PURE__*/react_default.a.createElement(ui_FiltersToggle, {
    filter: store.filter,
    isLoading: store.isLoading,
    products: store.products,
    productsLength: store.productsLength,
    history: history
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-muted button-small"
  }, "Filters")), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: onClickAddProduct
  }, "Add New Products")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-admin-items"
  }, /*#__PURE__*/react_default.a.createElement(product_ProductList, {
    dispatch: dispatch,
    filteredProducts: store.filteredProducts,
    isLoading: store.isLoading,
    location: location,
    productsLength: store.productsLength,
    lastRefKey: store.lastRefKey,
    totalItems: store.totalItems,
    requestStatus: store.requestStatus
  }, /*#__PURE__*/react_default.a.createElement(product_ProductAppliedFilters, {
    filter: store.filter
  }), store.filteredProducts.length > 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid grid-product grid-count-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "admin-head"
  }, "Name")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "admin-head"
  }, "Brand")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "admin-head"
  }, "Price")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "admin-head"
  }, "Date Added")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "admin-head"
  }, "Qty"))), store.filteredProducts.length === 0 ? new Array(10).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(components_ProductItem, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : store.filteredProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(components_ProductItem, {
      key: product.id,
      product: product,
      dispatch: dispatch
    });
  }))));
};

/* harmony default export */ var admin_products = (Object(react_router["g" /* withRouter */])(products_Products));
// CONCATENATED MODULE: ./src/components/ui/Input.jsx
var Input_excluded = ["className", "type", "field", "label", "showError", "showLabel", "isRequired", "onInputChange", "validate"];

function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_slicedToArray(arr, i) { return Input_arrayWithHoles(arr) || Input_iterableToArrayLimit(arr, i) || Input_unsupportedIterableToArray(arr, i) || Input_nonIterableRest(); }

function Input_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Input_arrayLikeToArray(o, minLen); }

function Input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Input_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Input_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var InputField = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      type = _ref.type,
      field = _ref.field,
      label = _ref.label,
      showError = _ref.showError,
      showLabel = _ref.showLabel,
      isRequired = _ref.isRequired,
      onInputChange = _ref.onInputChange,
      validate = _ref.validate,
      rest = Input_objectWithoutProperties(_ref, Input_excluded);

  var _useState = Object(react["useState"])(''),
      _useState2 = Input_slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react["useState"])(''),
      _useState4 = Input_slicedToArray(_useState3, 2),
      errorField = _useState4[0],
      setErrorField = _useState4[1];

  var onFieldChange = function onFieldChange(e) {
    var val = e.target.value;
    var error = '';
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var nameRegex = /[^a-zA-Z\s]/g;
    var passwordRegex = /[A-Z\W]/g;
    var key = field.substr(0, 1).toUpperCase().concat(field.substr(1));

    if (validate) {
      var testResult = validate(val, e);

      if (testResult) {
        setErrorField(testResult);
        error = testResult;
      } else {
        setErrorField('');
        error = testResult;
      }
    } else if ((type === 'email' || field === 'email') && !regex.test(val)) {
      setErrorField("".concat(key, " is invalid"));
      error = "".concat(key, " is invalid");
    } else if ((type === 'password' || field === 'password') && showError) {
      if (val.length < 8) {
        setErrorField("".concat(key, " should be 8 characters long."));
        error = "".concat(key, " should be 8 characters long.");
      } else if (!passwordRegex.test(val)) {
        setErrorField("".concat(key, " should contain uppercase or special character."));
        error = "".concat(key, " should contain uppercase or special character.");
      } else {
        setErrorField('');
        error = '';
      }
    } else if (field === 'fullname') {
      val = val.replace(/[^a-zA-Z\s]/g, '').trimStart();

      if (val.length < 5) {
        setErrorField("".concat(key, " must be at least 5 letters"));
        error = "".concat(key, " must be at least 5 letters");
      } else if (nameRegex.test(val)) {
        setErrorField("".concat(key, " must not include special characters"));
        error = "".concat(key, " must not include special characters");
      } else {
        setErrorField('');
        error = '';
      }
    } else {
      setErrorField('');
      error = '';
    }

    if (val.length === 0 && isRequired) {
      setErrorField("".concat(key, " is required"));
      error = "".concat(key, " is required");
    }

    onInputChange(e, val, error);
    setValue(val);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, errorField && showLabel ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, errorField) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, label), type === 'textarea' ? /*#__PURE__*/react_default.a.createElement("textarea", Input_extends({}, rest, {
    className: "".concat(className, " ").concat(errorField ? 'input-error' : ''),
    required: isRequired,
    onChange: onFieldChange,
    ref: ref
  })) : /*#__PURE__*/react_default.a.createElement("input", Input_extends({}, rest, {
    className: "".concat(className, " ").concat(errorField ? 'input-error' : ''),
    required: isRequired,
    onChange: onFieldChange,
    type: type,
    ref: ref
  })));
});
InputField.defaultProps = {
  className: 'input-form d-block',
  type: 'text',
  showLabel: true,
  showError: true,
  isRequired: false,
  onInputChange: function onInputChange() {}
};
/* harmony default export */ var Input = (InputField);
// CONCATENATED MODULE: ./src/hooks/useFileHandler.js
function useFileHandler_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function useFileHandler_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useFileHandler_ownKeys(Object(source), true).forEach(function (key) { useFileHandler_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useFileHandler_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useFileHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useFileHandler_slicedToArray(arr, i) { return useFileHandler_arrayWithHoles(arr) || useFileHandler_iterableToArrayLimit(arr, i) || useFileHandler_unsupportedIterableToArray(arr, i) || useFileHandler_nonIterableRest(); }

function useFileHandler_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFileHandler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFileHandler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFileHandler_arrayLikeToArray(o, minLen); }

function useFileHandler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFileHandler_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFileHandler_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useFileHandler_useFileHandler = function useFileHandler(initState) {
  var _useState = Object(react["useState"])(initState),
      _useState2 = useFileHandler_slicedToArray(_useState, 2),
      imageFile = _useState2[0],
      setImageFile = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = useFileHandler_slicedToArray(_useState3, 2),
      isFileLoading = _useState4[0],
      setFileLoading = _useState4[1];

  var onFileChange = function onFileChange(e, prop) {
    var val = e.target.value;
    var img = e.target.files[0];
    var size = img.size / 1024 / 1024;
    var regex = /(\.jpg|\.jpeg|\.png)$/i;
    setFileLoading(true);

    if (!regex.exec(val)) {
      alert('File type must be JPEG or PNG', 'error');
      setFileLoading(false);
    } else if (size > 0.5) {
      alert('File size exceeded 500kb, consider optimizing your image', 'error');
      setFileLoading(false);
    } else {
      var reader = new FileReader();
      reader.addEventListener('load', function (e) {
        setImageFile(useFileHandler_objectSpread(useFileHandler_objectSpread({}, imageFile), {}, useFileHandler_defineProperty({}, prop, {
          file: img,
          url: e.target.result
        })));
        setFileLoading(false);
      });
      reader.readAsDataURL(img);
    }
  };

  return {
    imageFile: imageFile,
    setImageFile: setImageFile,
    isFileLoading: isFileLoading,
    onFileChange: onFileChange
  };
};

/* harmony default export */ var hooks_useFileHandler = (useFileHandler_useFileHandler);
// CONCATENATED MODULE: ./src/views/admin/components/ProductForm.jsx
function ProductForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ProductForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductForm_ownKeys(Object(source), true).forEach(function (key) { ProductForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProductForm_slicedToArray(arr, i) { return ProductForm_arrayWithHoles(arr) || ProductForm_iterableToArrayLimit(arr, i) || ProductForm_unsupportedIterableToArray(arr, i) || ProductForm_nonIterableRest(); }

function ProductForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductForm_arrayLikeToArray(o, minLen); }

function ProductForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProductForm_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ProductForm_ProductForm = function ProductForm(_ref) {
  var product = _ref.product,
      onSubmit = _ref.onSubmit,
      isLoading = _ref.isLoading;

  var _useState = Object(react["useState"])({
    name: {
      value: product ? product.name : ''
    },
    brand: {
      value: product ? product.brand : ''
    },
    price: {
      value: product ? product.price : 0
    },
    maxQuantity: {
      value: product ? product.maxQuantity : 0
    },
    description: {
      value: product ? product.description : ''
    },
    keywords: {
      value: product ? product.keywords : ['']
    },
    imageUrl: {
      value: product ? product.image : ''
    }
  }),
      _useState2 = ProductForm_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var _useFileHandler = hooks_useFileHandler({
    image: {}
  }),
      imageFile = _useFileHandler.imageFile,
      setImageFile = _useFileHandler.setImageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange;

  var onProductNameInput = function onProductNameInput(e, value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      name: {
        value: value,
        error: error
      }
    }));
  };

  var onProductBrandInput = function onProductBrandInput(e, value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      brand: {
        value: value,
        error: error
      }
    }));
  };

  var onProductPriceInput = function onProductPriceInput(e, value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      price: {
        value: sanitizeNumber(value),
        error: error
      }
    }));
  };

  var onProductDescriptionInput = function onProductDescriptionInput(e, value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      description: {
        value: value,
        error: error
      }
    }));
  };

  var onProductMaxQuantityInput = function onProductMaxQuantityInput(e, value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      maxQuantity: {
        value: sanitizeNumber(value),
        error: error
      }
    }));
  };

  var sanitizeNumber = function sanitizeNumber(num) {
    return Number(num.toString().replace(/^0*/, ''));
  };

  var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var noError = Object.keys(field).every(function (key) {
      return !!!field[key].error;
    });

    if (field.name.value && field.price.value && field.maxQuantity.value && (imageFile.image.file || field.imageUrl.value) && noError) {
      var _product = {};

      for (var i in field) {
        _product[i] = field[i].value;
      }

      onSubmit(ProductForm_objectSpread(ProductForm_objectSpread({}, _product), {}, {
        quantity: 1,
        dateAdded: new Date().getTime(),
        image: imageFile.image.file ? imageFile.image.file : field.imageUrl.value
      }));
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
    class: "back"
  }, /*#__PURE__*/react_default.a.createElement("form", {
    className: "product-form",
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-inputs"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Product Name",
    maxLength: 60,
    readOnly: isLoading,
    placeholder: "Name",
    onInputChange: onProductNameInput,
    isRequired: true,
    field: "name",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.name.value
  })), "\xA0", /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Product Brand Name",
    maxLength: 40,
    readOnly: isLoading,
    placeholder: "Brand",
    onInputChange: onProductBrandInput,
    isRequired: true,
    field: "brand",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.brand.value
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field product-textarea"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Product Description",
    maxLength: 200,
    cols: 37,
    rows: 5,
    readOnly: isLoading,
    placeholder: "Description",
    onInputChange: onProductDescriptionInput,
    isRequired: false,
    field: "description",
    type: "textarea",
    value: field.description.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Price",
    readOnly: isLoading,
    placeholder: "Product Price",
    onInputChange: onProductPriceInput,
    isRequired: true,
    field: "price",
    type: "number",
    value: field.price.value
  })), "\xA0", /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Stock Total",
    readOnly: isLoading,
    placeholder: "Stock Total",
    onInputChange: onProductMaxQuantityInput,
    isRequired: true,
    field: "maxQuantity",
    type: "number",
    value: field.maxQuantity.value
  }))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field product-form-submit"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    disabled: isLoading,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: isLoading,
    theme: "light"
  }), isLoading ? 'Saving Product' : 'Save Product'))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-file"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "* Image"), /*#__PURE__*/react_default.a.createElement("input", {
    disabled: isLoading,
    hidden: true,
    id: "product-input-file",
    onChange: function onChange(e) {
      return onFileChange(e, 'image');
    },
    readOnly: isLoading,
    type: "file"
  }), !isFileLoading && /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "product-input-file"
  }, "Choose Image")), (imageFile.image.url || field.imageUrl.value) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-img-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "",
    className: "product-form-image-preview",
    src: imageFile.image.url || field.imageUrl.value
  }))))));
};

/* harmony default export */ var components_ProductForm = (ProductForm_ProductForm);
// CONCATENATED MODULE: ./src/views/admin/edit_product/index.js






var edit_product_EditProduct = function EditProduct(props) {
  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      product: state.products.items.find(function (product) {
        return product.id === props.match.params.id;
      }),
      isLoading: state.app.loading
    };
  }),
      product = _useSelector.product,
      isLoading = _useSelector.isLoading;

  var dispatch = Object(es["c" /* useDispatch */])();

  var onSubmitForm = function onSubmitForm(updates) {
    dispatch(editProduct(product.id, updates));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-container"
  }, !product && /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
    to: "/dashboard/products"
  }), /*#__PURE__*/react_default.a.createElement("h2", null, "Edit Product"), /*#__PURE__*/react_default.a.createElement(components_ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmitForm,
    product: product
  }));
};

/* harmony default export */ var edit_product = (Object(react_router["g" /* withRouter */])(edit_product_EditProduct));
// CONCATENATED MODULE: ./src/views/admin/add_product/index.js






var add_product_AddProduct = function AddProduct() {
  var isLoading = Object(es["d" /* useSelector */])(function (state) {
    return state.app.loading;
  });
  var dispatch = Object(es["c" /* useDispatch */])();

  var onSubmit = function onSubmit(product) {
    dispatch(addProduct(product));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-container"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Add New Product"), /*#__PURE__*/react_default.a.createElement(components_ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmit
  }));
};

/* harmony default export */ var add_product = (Object(react_router["g" /* withRouter */])(add_product_AddProduct));
// CONCATENATED MODULE: ./src/components/product/ProductSearch.jsx






var ProductSearch_ProductSearch = function ProductSearch(props) {
  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      filter: state.filter,
      products: state.products.items,
      isLoading: state.app.loading,
      productsLength: state.products.length
    };
  }),
      productsLength = _useSelector.productsLength,
      filter = _useSelector.filter,
      products = _useSelector.products,
      isLoading = _useSelector.isLoading;

  var dispatch = Object(es["c" /* useDispatch */])();
  var searchInput = Object(react["useRef"])(null);
  var input = '';
  Object(react["useEffect"])(function () {
    searchInput.current.focus();
  }, []);

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trim();
    input = val;

    if (val === '' && productsLength !== 0) {
      dispatch(setTextFilter(val));
      props.history.push('/');
    }
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13 && productsLength !== 0) {
      dispatch(setTextFilter(input));
      props.history.push('/');
    }
  };

  var onClearRecentSearch = function onClearRecentSearch() {
    dispatch(clearRecentSearch());
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-header"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    onClick: props.history.goBack
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "product-search-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    placeholder: "Search for product...",
    ref: searchInput,
    type: "text"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-icon"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-body"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-recent"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-recent-header"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Recent Searches"), /*#__PURE__*/react_default.a.createElement("h5", {
    onClick: onClearRecentSearch,
    style: {
      color: 'red'
    }
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill-wrapper",
      key: "".concat(item).concat(index)
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill padding-right-l"
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "pill-content margin-0",
      onClick: function onClick() {
        dispatch(setTextFilter(item));
        props.history.push('/');
      }
    }, item), /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill-remove",
      onClick: function onClick() {
        return dispatch(removeSelectedRecent(item));
      }
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "text-subtle margin-0"
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-times-circle"
    })))));
  }), filter.recent.length === 0 && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "No recent searches")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-filter"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0"
  }, "Choose Filters")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-filter-sub"
  }, /*#__PURE__*/react_default.a.createElement(ui_Filters, {
    products: products,
    dispatch: dispatch,
    isLoading: isLoading,
    productsLength: productsLength,
    filter: filter
  }))));
};

/* harmony default export */ var product_ProductSearch = (Object(react_router["g" /* withRouter */])(ProductSearch_ProductSearch));
// CONCATENATED MODULE: ./src/hooks/useDidMount.js
function useDidMount_slicedToArray(arr, i) { return useDidMount_arrayWithHoles(arr) || useDidMount_iterableToArrayLimit(arr, i) || useDidMount_unsupportedIterableToArray(arr, i) || useDidMount_nonIterableRest(); }

function useDidMount_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useDidMount_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDidMount_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDidMount_arrayLikeToArray(o, minLen); }

function useDidMount_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useDidMount_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDidMount_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useDidMount_useDidMount = function useDidMount() {
  var _useState = Object(react["useState"])(false),
      _useState2 = useDidMount_slicedToArray(_useState, 2),
      didMount = _useState2[0],
      setDidMount = _useState2[1];

  Object(react["useEffect"])(function () {
    setDidMount(true);
  }, []);
  return didMount;
};

/* harmony default export */ var hooks_useDidMount = (useDidMount_useDidMount);
// CONCATENATED MODULE: ./src/views/auth/signup/index.js
function signup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function signup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { signup_ownKeys(Object(source), true).forEach(function (key) { signup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { signup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function signup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function signup_slicedToArray(arr, i) { return signup_arrayWithHoles(arr) || signup_iterableToArrayLimit(arr, i) || signup_unsupportedIterableToArray(arr, i) || signup_nonIterableRest(); }

function signup_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function signup_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return signup_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return signup_arrayLikeToArray(o, minLen); }

function signup_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function signup_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function signup_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var signup_SignUp = function SignUp(props) {
  var _useState = Object(react["useState"])(true),
      _useState2 = signup_slicedToArray(_useState, 2),
      PasswordHidden = _useState2[0],
      setPasswordHidden = _useState2[1];

  var _useState3 = Object(react["useState"])({}),
      _useState4 = signup_slicedToArray(_useState3, 2),
      signUpStatus = _useState4[0],
      setSignUpStatus = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = signup_slicedToArray(_useState5, 2),
      isSigninUp = _useState6[0],
      setIsSigninUp = _useState6[1];

  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      authStatus: state.app.authStatus
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      authStatus = _useSelector.authStatus;

  var _useState7 = Object(react["useState"])({}),
      _useState8 = signup_slicedToArray(_useState7, 2),
      field = _useState8[0],
      setField = _useState8[1];

  var didMount = hooks_useDidMount();
  var dispatch = Object(es["c" /* useDispatch */])();
  var passwordField = Object(react["useRef"])(null);
  Object(react["useEffect"])(function () {
    if (didMount) {
      setSignUpStatus(authStatus);
      setIsSigninUp(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onFullnameInput = function onFullnameInput(e, value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onEmailInput = function onEmailInput(e, value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onPasswordInput = function onPasswordInput(e, value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      password: {
        value: value,
        error: error
      }
    }));
  };

  var onTogglePasswordVisibility = function onTogglePasswordVisibility() {
    return setPasswordHidden(!PasswordHidden);
  };

  var onClickSignIn = function onClickSignIn() {
    return props.history.push('/signin');
  };

  var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var noError = Object.keys(field).every(function (key) {
      return !!field[key].value && !field[key].error;
    });

    if (noError) {
      dispatch(signUp({
        fullname: field.fullname.value.trim(),
        email: field.email.value.trim().toLowerCase(),
        password: field.password.value.trim()
      }));
    }
  };

  var isSuccess = !!authStatus.success && authStatus.type === 'auth';
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup"
  }, isSuccess && /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "toast-success signin-success"
  }, authStatus.message, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null))), signUpStatus.message && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus.message), !isSuccess && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-wrapper ".concat(signUpStatus.message && !authStatus.success && 'input-error')
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Sign up to MobShop"), /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Full Name",
    maxLength: 40,
    readOnly: isSigninUp,
    placeholder: "Your Full Name",
    onInputChange: onFullnameInput,
    isRequired: true,
    field: "fullname",
    style: {
      textTransform: 'capitalize'
    },
    type: "text"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Email",
    maxLength: 40,
    readOnly: isSigninUp,
    placeholder: "test@example.com",
    onInputChange: onEmailInput,
    isRequired: true,
    field: "email",
    type: "email"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup=field"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Password",
    maxLength: 40,
    readOnly: isSigninUp,
    placeholder: "Password",
    onInputChange: onPasswordInput,
    isRequired: true,
    field: "password",
    ref: passwordField,
    type: PasswordHidden ? 'password' : 'text',
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-muted",
    disbaled: isSigninUp,
    onClick: onTogglePasswordVisibility,
    type: "button"
  }, PasswordHidden ? /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-eye"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-eye-splash"
  }), ";"))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field signup-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signup-button",
    disabled: isSigninUp,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: isSigninUp,
    theme: "light"
  }), isSigninUp ? 'signing Up' : 'sign Up')))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-message"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "signin-info"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, "Already have an account?")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border button-border-gray",
    disabled: isSigninUp,
    onClick: onClickSignIn
  }, "Sign In"))));
};

/* harmony default export */ var signup = (signup_SignUp);
// CONCATENATED MODULE: ./src/views/auth/signin/index.js
function signin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function signin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { signin_ownKeys(Object(source), true).forEach(function (key) { signin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { signin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function signin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function signin_slicedToArray(arr, i) { return signin_arrayWithHoles(arr) || signin_iterableToArrayLimit(arr, i) || signin_unsupportedIterableToArray(arr, i) || signin_nonIterableRest(); }

function signin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function signin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return signin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return signin_arrayLikeToArray(o, minLen); }

function signin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function signin_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function signin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var signin_SignIn = function SignIn(props) {
  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      authStatus: state.app.authStatus,
      isAuthenticating: state.app.isAuthenticating
    };
  }),
      authStatus = _useSelector.authStatus,
      isAuthenticating = _useSelector.isAuthenticating;

  var _useState = Object(react["useState"])(undefined),
      _useState2 = signin_slicedToArray(_useState, 2),
      providerSelected = _useState2[0],
      setProviderSelected = _useState2[1]; //we need to add two different stated for signup and forgot password


  var _useState3 = Object(react["useState"])({}),
      _useState4 = signin_slicedToArray(_useState3, 2),
      signInStatus = _useState4[0],
      setSignInStatus = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = signin_slicedToArray(_useState5, 2),
      isSigningIn = _useState6[0],
      setIsSigningIn = _useState6[1];

  var _useState7 = Object(react["useState"])({}),
      _useState8 = signin_slicedToArray(_useState7, 2),
      field = _useState8[0],
      setField = _useState8[1];

  var dispatch = Object(es["c" /* useDispatch */])();
  var didMount = hooks_useDidMount();
  Object(react["useEffect"])(function () {
    if (didMount) {
      setSignInStatus(authStatus);
      setIsSigningIn(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var noError = Object.keys(field).every(function (key) {
      return !!field[key].value && !field[key].error;
    });

    if (noError) {
      dispatch(signIn(field.email.value, field.password.value));
      setProviderSelected('signin');
    }
  };

  var onEmailInput = function onEmailInput(e, value, error) {
    setField(signin_objectSpread(signin_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onPasswordInput = function onPasswordInput(e, value, error) {
    setField(signin_objectSpread(signin_objectSpread({}, field), {}, {
      password: {
        value: value,
        error: error
      }
    }));
  };

  var onClickLink = function onClickLink(e) {
    if (isSigningIn) e.preventDefault();
  };

  var onSigningWithGoogle = function onSigningWithGoogle() {
    dispatch(signInWithGoogle());
    setProviderSelected('google');
  };

  var isSuccess = !!authStatus.success && authStatus.type === 'auth';
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-content"
  }, isSuccess && /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "toast-success signin-success"
  }, authStatus.message, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null))), signInStatus.message && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus.message), !isSuccess && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin ".concat(signInStatus.message && !authStatus.success && 'input-error')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-main"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, " Sign in to DealHunter"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Email",
    readOnly: isSigningIn,
    placeholder: "abc@gmail.com",
    onInputChange: onEmailInput,
    isRequired: true,
    field: "email",
    type: "email"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Password",
    readOnly: isSigningIn,
    placeholder: "Your Password",
    onInputChange: onPasswordInput,
    isRequired: true,
    showError: true,
    field: "password",
    type: "password"
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field signin-action"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    onClick: onClickLink,
    style: {
      textDecoration: 'underline'
    },
    to: routes["h" /* FORGOT_PASSWORD */]
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Forot password?")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-button",
    disabled: isSigningIn,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light",
    visible: isSigningIn && providerSelected === 'signin'
  }), isSigningIn && providerSelected === 'signin' ? 'signing In' : 'Sign In'))), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-provider-button provider-google",
    disabled: isSigningIn,
    onClick: onSigningWithGoogle
  }, isSigningIn && providerSelected === 'google' ? /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "dark"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-google-plus"
  }), /*#__PURE__*/react_default.a.createElement("span", null, "Sign in with Google")))))));
};

/* harmony default export */ var signin = (signin_SignIn);
// CONCATENATED MODULE: ./src/views/auth/forgot_password/index.js


var forgot_password_ForgotPassword = function ForgotPassword() {
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h1", null, "ForgotPassword"));
};

/* harmony default export */ var forgot_password = (forgot_password_ForgotPassword);
// CONCATENATED MODULE: ./src/views/account/tab/UserTab.jsx
function UserTab_slicedToArray(arr, i) { return UserTab_arrayWithHoles(arr) || UserTab_iterableToArrayLimit(arr, i) || UserTab_unsupportedIterableToArray(arr, i) || UserTab_nonIterableRest(); }

function UserTab_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UserTab_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UserTab_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UserTab_arrayLikeToArray(o, minLen); }

function UserTab_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UserTab_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UserTab_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var UserTab_UserTab = function UserTab(props) {
  var _useState = Object(react["useState"])(props.children[0].props.index || 0),
      _useState2 = UserTab_slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var onClickTabItem = function onClickTabItem(index) {
    return setActiveTab(index);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab-nav"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "user-tab-menu"
  }, props.children.map(function (child) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      className: "user-tab-item ".concat(child.props.index === activeTab ? 'user-tab-active' : ''),
      key: child.props.label,
      onClick: function onClick() {
        return onClickTabItem(child.props.index);
      }
    }, child.props.label);
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab-content"
  }, props.children.map(function (child) {
    if (child.props.index !== activeTab) return undefined;
    return child.props.children;
  }))));
};

/* harmony default export */ var tab_UserTab = (UserTab_UserTab);
// CONCATENATED MODULE: ./src/views/account/user_account/index.js




var UserAccountTab = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 401));
});
var UserOrdersTab = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 402));
});

var user_account_UserAccount = function UserAccount() {
  var Loader = function Loader() {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "loader",
      style: {
        minHeight: '80vh'
      }
    }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null), /*#__PURE__*/react_default.a.createElement("h6", null, "Loading....."));
  };

  return /*#__PURE__*/react_default.a.createElement(tab_UserTab, null, /*#__PURE__*/react_default.a.createElement("div", {
    index: 0,
    label: "Account"
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(Loader, null)
  }, /*#__PURE__*/react_default.a.createElement(UserAccountTab, null))), /*#__PURE__*/react_default.a.createElement("div", {
    index: 2,
    label: "My Orders"
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(Loader, null)
  }, /*#__PURE__*/react_default.a.createElement(UserOrdersTab, null))));
};

/* harmony default export */ var user_account = (user_account_UserAccount);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/lib.js
var lib_lib = __webpack_require__(95);
var lib_lib_default = /*#__PURE__*/__webpack_require__.n(lib_lib);

// CONCATENATED MODULE: ./src/actions/profileActions.js
var setProfile = function setProfile(user) {
  return {
    type: 'SET_PROFILE',
    payload: user
  };
};
var clearProfile = function clearProfile() {
  return {
    type: 'CLEAR_PROFILE'
  };
};
var updateEmail = function updateEmail(password, newEmail) {
  return {
    type: 'UPDATE_EMAIL',
    payload: {
      password: password,
      newEmail: newEmail
    }
  };
};
var updateProfile = function updateProfile(newProfile) {
  return {
    type: 'UPDATE_PROFILE',
    payload: {
      updates: newProfile.updates,
      files: newProfile.files,
      credentials: newProfile.credentials
    }
  };
};
var updateProfileSuccess = function updateProfileSuccess(updates) {
  return {
    type: 'UPDATE_PROFILE_SUCCESS',
    payload: updates
  };
};
// CONCATENATED MODULE: ./src/views/account/edit_account/index.js
function edit_account_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function edit_account_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_account_ownKeys(Object(source), true).forEach(function (key) { edit_account_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_account_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function edit_account_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function edit_account_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { edit_account_typeof = function _typeof(obj) { return typeof obj; }; } else { edit_account_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return edit_account_typeof(obj); }

function edit_account_slicedToArray(arr, i) { return edit_account_arrayWithHoles(arr) || edit_account_iterableToArrayLimit(arr, i) || edit_account_unsupportedIterableToArray(arr, i) || edit_account_nonIterableRest(); }

function edit_account_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function edit_account_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return edit_account_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return edit_account_arrayLikeToArray(o, minLen); }

function edit_account_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function edit_account_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function edit_account_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var edit_account_EditProfile = function EditProfile(props) {
  Object(react["useEffect"])(function () {
    return function () {
      dispatch(appActions_isLoading(false));
    };
  }, []);

  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      profile: state.profile,
      auth: state.auth,
      isLoading: state.app.loading
    };
  }),
      profile = _useSelector.profile,
      auth = _useSelector.auth,
      isLoading = _useSelector.isLoading;

  var dispatch = Object(es["c" /* useDispatch */])();

  var _useState = Object(react["useState"])({
    fullname: {
      value: profile.fullname ? profile.fullname : ''
    },
    email: {
      value: profile.email ? profile.email : ''
    },
    address: {
      value: profile.address ? profile.address : ''
    },
    mobile: profile.mobile.value ? profile.mobile : {
      value: '',
      data: {}
    },
    avatar: profile.avatar ? profile.avatar : '',
    banner: profile.banner ? profile.banner : ''
  }),
      _useState2 = edit_account_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = edit_account_slicedToArray(_useState3, 2),
      isOpenModal = _useState4[0],
      setModalOpen = _useState4[1];

  var _useState5 = Object(react["useState"])(null),
      _useState6 = edit_account_slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useFileHandler = hooks_useFileHandler({
    avatar: {},
    banner: {}
  }),
      imageFile = _useFileHandler.imageFile,
      setImageFile = _useFileHandler.setImageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange;

  var areFieldsChanged = function areFieldsChanged() {
    var fieldsChanged = Object.keys(field).some(function (key) {
      if (edit_account_typeof(profile[key]) === 'object' && edit_account_typeof(field[key]) === 'object') {
        return profile[key].value !== field[key].value;
      } else if (edit_account_typeof(field[key]) === 'object') {
        return field[key].value !== profile[key];
      } else {
        return field[key] !== profile[key];
      }
    });
    var filesUpdated = imageFile.banner.file || imageFile.avatar.file;
    return fieldsChanged || filesUpdated;
  };

  var onEmailChange = function onEmailChange(e, value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onFullNameChange = function onFullNameChange(e, value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onAddressChange = function onAddressChange(e, value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      address: {
        value: value,
        error: error
      }
    }));
  };

  var onMobileChange = function onMobileChange(value, data) {
    var obj = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      num: value
    };
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      mobile: {
        value: value.replace(/[^0-9]+/g, '').slice(data.dialCode.length),
        data: obj
      }
    }));
  };

  var onCloseModal = function onCloseModal() {
    return setModalOpen(false);
  };

  var onPasswordInput = function onPasswordInput(e) {
    return setPassword(e.target.value.trim());
  };

  var update = function update() {
    var credentials = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch(updateProfile({
      updates: {
        fullname: field.fullname.value,
        email: field.email.value,
        address: field.address.value,
        mobile: field.mobile,
        avatar: field.avatar,
        banner: field.banner
      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      credentials: credentials
    }));
  };

  var onConfirmUpdate = function onConfirmUpdate() {
    if (password) {
      update({
        email: field.email.value,
        password: password
      });
      setModalOpen(false);
    }
  };

  var onSubmitUpdate = function onSubmitUpdate() {
    var noError = Object.keys(field).every(function (key) {
      return !!!field[key].error;
    });

    if (noError) {
      if (field.email.value !== profile.email) {
        setModalOpen(true);
      } else if (areFieldsChanged()) {
        update();
      }
    }
  };

  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "edit-user"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Edit Account Details"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: imageFile.banner.url || field.banner
  }), /*#__PURE__*/react_default.a.createElement("input", {
    accept: "image/x-png,image/jpeg",
    disabled: isLoading,
    id: "edit-banner",
    hidden: true,
    onChange: function onChange(e) {
      return onFileChange(e, 'banner');
    },
    type: "file"
  }), isFileLoading ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: true,
    theme: "light"
  })) : /*#__PURE__*/react_default.a.createElement("label", {
    className: "edit-button edit-banner-button",
    htmlFor: "edit-banner"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-pen"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "",
    className: "user-profile-img",
    src: imageFile.avatar.url || field.avatar
  }), /*#__PURE__*/react_default.a.createElement("input", {
    accept: "image/x-png,image/jpeg",
    id: "edit-avatar",
    disabled: isLoading,
    hidden: true,
    onChange: function onChange(e) {
      return onFileChange(e, 'avatar');
    },
    type: "file"
  }), isFileLoading ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: true,
    theme: "light"
  })) : /*#__PURE__*/react_default.a.createElement("label", {
    className: "edit-button edit-avatar-button",
    htmlFor: "edit-avatar"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-pen"
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Full Name",
    maxLength: 40,
    readOnly: isLoading,
    placeholder: "Your Full Name",
    onInputChange: onFullNameChange,
    isRequired: true,
    field: "fullname",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.fullname.value
  }), /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Email",
    maxLength: 40,
    readOnly: auth.provider !== 'password' || isLoading,
    placeholder: "test@example.com",
    onInputChange: onEmailChange,
    isRequired: true,
    field: "email",
    type: "email",
    value: field.email.value
  }), /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Address",
    maxLength: 120,
    readOnly: isLoading,
    placeholder: "eg.st#, house#, infront..",
    onInputChange: onAddressChange,
    isRequired: false,
    field: "address",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.address.value
  }), field.mobile.error ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, field.mobile.error) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Mobile"), /*#__PURE__*/react_default.a.createElement(lib_lib_default.a, {
    country: 'ng',
    inputExtraProps: {
      required: true
    },
    inputClass: "input-form d-block ".concat(field.mobile.error ? 'input-error' : ''),
    masks: {
      'ng': '... .... ... ....'
    },
    onChange: onMobileChange,
    disabled: isLoading,
    readOnly: isLoading,
    placeholder: "Enter your mobile number",
    value: field.mobile.data.num
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "edit-user-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-muted w-100-mobile",
    disabled: isLoading,
    onClick: function onClick() {
      return props.history.push(routes["a" /* ACCOUNT */]);
    }
  }, "Back to Profile"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button w-100-mobile",
    disabled: isLoading || !areFieldsChanged(),
    onClick: onSubmitUpdate
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: isLoading,
    theme: "light"
  }), isLoading ? 'Updating Profile' : 'Update Profile')))), /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-center padding-l"
  }, /*#__PURE__*/react_default.a.createElement("h4", null, "Please Confirm Update"), /*#__PURE__*/react_default.a.createElement("p", null, "To Update \xA0", /*#__PURE__*/react_default.a.createElement("strong", null, "email"), ",", /*#__PURE__*/react_default.a.createElement("br", null), "please confirm your password first"), /*#__PURE__*/react_default.a.createElement("input", {
    className: "input-form d-block",
    onChange: onPasswordInput,
    placeholder: "Enter your password",
    type: "password"
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    onClick: onConfirmUpdate
  }, "Confirm")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "modal-close-button button button-border button-border-gray button-small",
    onClick: onCloseModal
  }, "X")));
};

/* harmony default export */ var edit_account = (edit_account_EditProfile);
// CONCATENATED MODULE: ./src/components/product/ProductItem.jsx







var product_ProductItem_ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      onOpenModal = _ref.onOpenModal,
      displaySelected = _ref.displaySelected,
      dispatch = _ref.dispatch,
      foundOnBasket = _ref.foundOnBasket;

  var onClickItem = function onClickItem() {
    if (product.id) {
      onOpenModal();
      displaySelected(product);
    }
  };

  var onAddToBasket = function onAddToBasket() {
    if (foundOnBasket(product.id)) {
      dispatch(removeFromBasket(product.id));
      Object(utils["a" /* displayActionMessage */])('Item removed from basket', 'info');
    } else {
      dispatch(addToBasket(product));
      Object(utils["a" /* displayActionMessage */])('Item added to basket', 'success');
    }
  };

  return /*#__PURE__*/react_default.a.createElement(bundle["SkeletonTheme"], {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card ".concat(!product.id ? 'product-loading' : ''),
    style: {
      border: foundOnBasket(product.id) ? '1px solid #cacaca' : '',
      boxShadow: foundOnBasket(product.id) ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
    }
  }, foundOnBasket(product.id) && /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-check product-card-check"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card-content",
    onClick: onClickItem
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card-img-wrapper"
  }, product.image ? /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: '100%',
    height: '90%'
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "product-card-name text-overflow-ellipsis margin-auto"
  }, product.name || /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 80
  })), /*#__PURE__*/react_default.a.createElement("p", {
    className: "product-card-brand"
  }, product.brand || /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 60
  })), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "product-card-price"
  }, product.price ? Object(utils["c" /* displayMoney */])(product.price) : /*#__PURE__*/react_default.a.createElement(bundle_default.a, {
    width: 40
  })))), product.id && /*#__PURE__*/react_default.a.createElement("button", {
    className: "product-card-button button-small button button-block ".concat(foundOnBasket(product.id) ? 'button-border button-border-gray' : ''),
    onClick: onAddToBasket
  }, foundOnBasket(product.id) ? 'Remove from basket' : 'Add to basket')));
};

product_ProductItem_ProductItem.propType = {
  onClickItem: prop_types_default.a.func,
  dispatch: prop_types_default.a.func.isRequired,
  product: prop_types_default.a.object.isRequired,
  onOpenModal: prop_types_default.a.func,
  foundOnBasket: prop_types_default.a.func.isRequired
};
/* harmony default export */ var product_ProductItem = (product_ProductItem_ProductItem);
// CONCATENATED MODULE: ./src/components/product/ProductModalDetails.jsx






var ProductModalDetails_ProductModalDetails = function ProductModalDetails(_ref) {
  var product = _ref.product,
      dispatch = _ref.dispatch,
      foundOnBasket = _ref.foundOnBasket;

  var onAddToBasket = function onAddToBasket() {
    if (foundOnBasket(product.id)) {
      dispatch(removeFromBasket(product.id));
      Object(utils["a" /* displayActionMessage */])('Item removed from basket', 'info');
    } else {
      dispatch(addToBasket(product));
      Object(utils["a" /* displayActionMessage */])('Item added to basket', 'success');
    }
  };

  return !product ? null : /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-image-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: product.name,
    className: "product-modal-image",
    src: product.image
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-details"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, product.name), /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, "Brand: \xA0"), /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement("strong", null, product.brand)), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", null, product.description), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("h1", null, Object(utils["c" /* displayMoney */])(product.price)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small ".concat(foundOnBasket(product.id) ? 'button-border button-border-gray' : ''),
    onClick: onAddToBasket
  }, foundOnBasket(product.id) ? 'Remove From Basket' : 'Add To Basket'))));
};

ProductModalDetails_ProductModalDetails.propType = {
  product: prop_types_default.a.object.isRequired,
  addToBasket: prop_types_default.a.func.isRequired,
  foundOnBasket: prop_types_default.a.func.isRequired
};
/* harmony default export */ var product_ProductModalDetails = (ProductModalDetails_ProductModalDetails);
// CONCATENATED MODULE: ./src/views/home/index.js
function home_slicedToArray(arr, i) { return home_arrayWithHoles(arr) || home_iterableToArrayLimit(arr, i) || home_unsupportedIterableToArray(arr, i) || home_nonIterableRest(); }

function home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return home_arrayLikeToArray(o, minLen); }

function home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function home_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var home_Home = function Home(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = home_slicedToArray(_useState, 2),
      isOpenModal = _useState2[0],
      setModalOpen = _useState2[1];

  var _useState3 = Object(react["useState"])(null),
      _useState4 = home_slicedToArray(_useState3, 2),
      productSelected = _useState4[0],
      setProductSelected = _useState4[1];

  var _useState5 = Object(react["useState"])(6),
      _useState6 = home_slicedToArray(_useState5, 2),
      columnCount = _useState6[0],
      setColumnCount = _useState6[1];

  var _useSelector = Object(es["d" /* useSelector */])(function (state) {
    return {
      store: {
        productsLength: state.products.items.length,
        products: state.products.items,
        filter: state.filter,
        basket: state.basket,
        lastRefKey: state.products.lastRefKey,
        totalItems: state.products.total,
        isLoading: state.app.loading,
        filteredProducts: selectFilter(state.products.items, state.filter),
        requestStatus: state.app.requestStatus
      }
    };
  }),
      store = _useSelector.store;

  Object(react["useEffect"])(function () {
    onProductsLengthChanged();
  }, [store.filteredProducts]);
  var dispatch = Object(es["c" /* useDispatch */])();
  var productListWrapper = Object(react["useRef"])(null);

  var onProductsLengthChanged = function onProductsLengthChanged() {
    var width = window.screen.width - 250; // minus 250px padding

    setColumnCount(Math.floor(width / 160));

    if (columnCount >= store.filteredProducts.length && store.filteredProducts.length !== 0) {
      setColumnCount(store.filteredProducts.length);
    }
  };

  var isFiltered = ['keyword', 'brand', 'minPrice', 'maxPrice', 'sortBy'].some(function (key) {
    return !!store.filter[key];
  });

  var displaySelected = function displaySelected(product) {
    return setProductSelected(product);
  };

  var foundOnBasket = function foundOnBasket(id) {
    return !!store.basket.find(function (item) {
      return item.id === id;
    });
  };

  var onOpenModal = function onOpenModal() {
    return setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    return setModalOpen(false);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("section", {
    className: "product-list-wrapper"
  }, !store.requestStatus && /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header-title"
  }, isFiltered && /*#__PURE__*/react_default.a.createElement("h5", null, store.filteredProducts.length > 0 && "Found ".concat(store.filteredProducts.length, " ").concat(store.filteredProducts.length > 1 ? 'products' : 'product')))), /*#__PURE__*/react_default.a.createElement(product_ProductAppliedFilters, {
    filter: store.filter
  }), /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement(product_ProductList, {
    dispatch: dispatch,
    productsLength: store.productsLength,
    filteredProductsLength: store.filteredProducts.length,
    foundOnBasket: foundOnBasket,
    isLoading: store.isLoading,
    location: props.location,
    lastRefKey: store.lastRefKey,
    totalItems: store.totalItems,
    requestStatus: store.requestStatus
  }, /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal,
    overrideStyle: {
      padding: 0
    }
  }, /*#__PURE__*/react_default.a.createElement(product_ProductModalDetails, {
    product: productSelected,
    dispatch: dispatch,
    foundOnBasket: foundOnBasket
  }), /*#__PURE__*/react_default.a.createElement("button", {
    className: "modal-close-button",
    onClick: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list",
    ref: productListWrapper,
    style: {
      gridTemplateColumns: "repeat(6, 160px)"
    }
  }, store.filteredProducts.length === 0 ? new Array(12).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductItem, {
      foundOnBasket: foundOnBasket,
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : store.filteredProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductItem, {
      foundOnBasket: foundOnBasket,
      dispatch: dispatch,
      key: product.id,
      onOpenModal: onOpenModal,
      displaySelected: displaySelected,
      product: product
    });
  }))))));
};

/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./src/views/checkout/components/StepTracker.jsx


var StepTracker_StepTracker = function StepTracker(_ref) {
  var current = _ref.current;

  var className = function className(step) {
    return current === step ? "is-active-step" : step < current ? "is-done-step" : '';
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "checkout-header-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "checkout-header-list ".concat(className(1))
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "checkout-header-step"
  }, "1")), /*#__PURE__*/react_default.a.createElement("h6", {
    className: "checkout-header-subtitle"
  }, " Order Summary"))), /*#__PURE__*/react_default.a.createElement("li", {
    className: "checkout-header-list ".concat(className(2))
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "checkout-header-step"
  }, "2")), /*#__PURE__*/react_default.a.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Shipping Details and Confirm Order")))));
};

/* harmony default export */ var components_StepTracker = (StepTracker_StepTracker);
// CONCATENATED MODULE: ./src/views/checkout/hoc/withAuth.js
function withAuth_extends() { withAuth_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withAuth_extends.apply(this, arguments); }





var withAuth_withAuth = function withAuth(Component) {
  return Object(react_router["g" /* withRouter */])(function (props) {
    var _useSelector = Object(es["d" /* useSelector */])(function (state) {
      return {
        isAuth: !!state.auth.id && !!state.auth.role,
        basket: state.basket,
        shipping: state.checkout.shipping,
        payment: state.checkout.payment,
        profile: state.profile
      };
    }),
        isAuth = _useSelector.isAuth,
        basket = _useSelector.basket,
        profile = _useSelector.profile,
        shipping = _useSelector.shipping,
        payment = _useSelector.payment;

    var dispatch = Object(es["c" /* useDispatch */])();

    var calculateSubTotal = function calculateSubTotal() {
      var total = 0;

      if (basket.length !== 0) {
        var result = basket.map(function (product) {
          return product.price * product.quantity;
        }).reduce(function (a, b) {
          return a + b;
        });
        total = result;
      }

      return total;
    };

    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !isAuth ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/signin"
    }) : basket.length === 0 ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/"
    }) : null, /*#__PURE__*/react_default.a.createElement(Component, withAuth_extends({}, props, {
      basket: basket,
      subtotal: calculateSubTotal(),
      dispatch: dispatch,
      profile: profile,
      payment: payment,
      shipping: shipping
    })));
  });
};

/* harmony default export */ var hoc_withAuth = (withAuth_withAuth);
// CONCATENATED MODULE: ./src/views/checkout/step1/index.js







var step1_OrderSummary = function OrderSummary(_ref) {
  var basket = _ref.basket,
      subtotal = _ref.subtotal,
      dispatch = _ref.dispatch,
      history = _ref.history;

  var onClickPrevious = function onClickPrevious() {
    return history.push('/');
  };

  var onClickNext = function onClickNext() {
    return history.push(routes["f" /* CHECKOUT_STEP_2 */]);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react_default.a.createElement(components_StepTracker, {
    current: 1
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-step-1"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, " You have selected following items to purchase."), /*#__PURE__*/react_default.a.createElement("br", null), basket.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(basket_BasketItem, {
      key: product.id,
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-center"
  }, "Subtotal:"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center"
  }, Object(utils["c" /* displayMoney */])(subtotal))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-muted",
    onClick: onClickPrevious,
    type: "button"
  }, "back"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    onClick: onClickNext
  }, "Next Step"))));
};

/* harmony default export */ var step1 = (hoc_withAuth(step1_OrderSummary));
// CONCATENATED MODULE: ./src/views/checkout/components/Pagination.jsx


var Pagination_Pagination = function Pagination(_ref) {
  var nextStepLabel = _ref.nextStepLabel,
      previousLabel = _ref.previousLabel,
      disabledNext = _ref.disabledNext,
      previousPathName = _ref.previousPathName,
      onClickNext = _ref.onClickNext,
      onClickPrevious = _ref.onClickPrevious,
      previousVisible = _ref.previousVisible,
      history = _ref.history;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-action"
  }, previousVisible && /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-muted",
    onClick: onClickPrevious,
    type: "button"
  }, previousLabel), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    disabled: disabledNext,
    onClick: onClickNext
  }, nextStepLabel));
};

Pagination_Pagination.defaultProps = {
  nextStepLabel: 'Confirm',
  previousLabel: "Go Back",
  previousVisible: true
};
/* harmony default export */ var components_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingForm.jsx
function ShippingForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ShippingForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ShippingForm_ownKeys(Object(source), true).forEach(function (key) { ShippingForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ShippingForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ShippingForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ShippingForm_slicedToArray(arr, i) { return ShippingForm_arrayWithHoles(arr) || ShippingForm_iterableToArrayLimit(arr, i) || ShippingForm_unsupportedIterableToArray(arr, i) || ShippingForm_nonIterableRest(); }

function ShippingForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ShippingForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ShippingForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ShippingForm_arrayLikeToArray(o, minLen); }

function ShippingForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ShippingForm_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ShippingForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ShippingForm_ShippingForm = function ShippingForm(_ref) {
  var setField = _ref.setField,
      field = _ref.field,
      profile = _ref.profile,
      shipping = _ref.shipping,
      subtotal = _ref.subtotal,
      history = _ref.history;

  var _useState = Object(react["useState"])(''),
      _useState2 = ShippingForm_slicedToArray(_useState, 2),
      errorMobile = _useState2[0],
      setErrorMobile = _useState2[1];

  var onEmailInput = function onEmailInput(e, value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onFullNameInput = function onFullNameInput(e, value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onAddressInput = function onAddressInput(e, value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      address: {
        value: value,
        error: error
      }
    }));
  };

  var onMobileInput = function onMobileInput(value, data) {
    var obj = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      num: value
    };

    if (value.length === 0) {
      setErrorMobile("mobile number is required");
    } else {
      setErrorMobile('');
    }

    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      mobile: {
        value: value.replace(/[^0-9]+/g, '').slice(data.dialCode.length),
        error: errorMobile,
        data: obj
      }
    }));
  };

  var errorClassName = function errorClassName(key) {
    return errorMobile ? 'input-error' : '';
  };

  var onShippingOptionChange = function onShippingOptionChange(e) {
    return setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      isInternational: !field.isInternational
    }));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-form"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Full Name",
    maxLength: 40,
    placeholder: "Your Full Name",
    onInputChange: onFullNameInput,
    isRequired: true,
    field: "fullname",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.fullname.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Email",
    maxLength: 40,
    placeholder: "Your Email",
    onInputChange: onEmailInput,
    isRequired: true,
    field: "email",
    type: "email",
    value: field.email.value
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block ckeckout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Shipping Address",
    maxLength: 120,
    placeholder: "Full Shipping Address",
    onInputChange: onAddressInput,
    isRequired: true,
    field: "address",
    type: "text",
    value: field.address.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, errorMobile ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, errorMobile) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Mobile Number"), /*#__PURE__*/react_default.a.createElement(lib_lib_default.a, {
    country: 'ng',
    inputExtraProps: {
      required: true
    },
    inputClass: "input-form d-block ".concat(errorClassName('mobile')),
    masks: {
      'ph': '+.. .... ... ....'
    },
    onChange: onMobileInput,
    placeholder: "Enter your mobile number",
    value: field.mobile.data.num
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Shipping Option"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-checkbox-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "",
    checked: field.isInternational,
    id: "shipping-option-checkbox",
    onChange: onShippingOptionChange,
    type: "checkbox"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "shipping-option-checkbox"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "d-flex-grow-1 margin-0"
  }, "\xA0 Interstate Shipping \xA0", /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, "2-7 days")), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "margin-0"
  }, "NGN 2,500.00")))))));
};

/* harmony default export */ var step2_ShippingForm = (ShippingForm_ShippingForm);
// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingTotal.jsx



var ShippingTotal_ShippingTotal = function ShippingTotal(_ref) {
  var field = _ref.field,
      subtotal = _ref.subtotal;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-total d-flex-end padding-right-m"
  }, /*#__PURE__*/react_default.a.createElement("table", null, /*#__PURE__*/react_default.a.createElement("tbody", null, /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, " Interstate Shipping \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0 "
  }, field.isInternational ? 'NGN 2500.00' : '0.00'))), /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, " Subtotal \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0 "
  }, Object(utils["c" /* displayMoney */])(subtotal)))), /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Total \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount text-right"
  }, Object(utils["c" /* displayMoney */])(subtotal + (field.isInternational ? 2500 : 0))))))));
};

/* harmony default export */ var step2_ShippingTotal = (ShippingTotal_ShippingTotal);
// CONCATENATED MODULE: ./src/actions/checkoutActions.js
var setShippingDetails = function setShippingDetails(details) {
  return {
    type: 'SET_CHECKOUT_SHIPPING_DETAILS',
    payload: details
  };
};
var setPaymentDetails = function setPaymentDetails(details) {
  return {
    type: 'SET_CHECKOUT_PAYMENT_DETAILS',
    payload: details
  };
};
var resetCheckout = function resetCheckout() {
  return {
    type: 'RESET_CHECKOUT'
  };
};
// CONCATENATED MODULE: ./src/views/checkout/step2/index.js
function step2_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { step2_typeof = function _typeof(obj) { return typeof obj; }; } else { step2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return step2_typeof(obj); }

function step2_slicedToArray(arr, i) { return step2_arrayWithHoles(arr) || step2_iterableToArrayLimit(arr, i) || step2_unsupportedIterableToArray(arr, i) || step2_nonIterableRest(); }

function step2_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function step2_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return step2_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return step2_arrayLikeToArray(o, minLen); }

function step2_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function step2_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function step2_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var step2_ShippingDetails = function ShippingDetails(_ref) {
  var basket = _ref.basket,
      profile = _ref.profile,
      shipping = _ref.shipping,
      subtotal = _ref.subtotal,
      history = _ref.history;

  var _useState = Object(react["useState"])({
    fullname: {
      value: profile.fullname ? profile.fullname : ''
    },
    email: {
      value: profile.email ? profile.email : ''
    },
    address: {
      value: shipping.address ? shipping.address : profile.address ? profile.address : ''
    },
    mobile: profile.mobile.value ? profile.mobile : shipping.mobile ? shipping.mobile : {
      value: '',
      data: {}
    },
    isInternational: !!shipping.isInternational ? shipping.isInternational : false,
    isDone: false,
    productName: [],
    productPrice: 100
  }),
      _useState2 = step2_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var dispatch = Object(es["c" /* useDispatch */])();
  var noError = Object.keys(field).every(function (key) {
    if (step2_typeof(field[key]) === 'object') {
      return !!field[key].value && !!!field[key].error;
    } else {
      return true;
    }
  });

  var saveShippingDetails = function saveShippingDetails() {
    var isChanged = true;
    var basketItemsNames = [];
    basket.map(function (product) {
      basketItemsNames.push(product.name);
      field.productPrice = product.price;
      dispatch(removeFromBasket(product.id));
    });

    if (isChanged) {
      index_esm["a" /* default */].firestore().collection('orders').add({
        fullname: field.fullname.value,
        price: subtotal,
        email: field.email.value,
        address: field.address.value,
        mobile: field.mobile,
        ProductName: basketItemsNames
      }).then(function (docref) {});
      dispatch(setShippingDetails({
        fullname: field.fullname.value,
        price: subtotal,
        email: field.email.value,
        address: field.address.value,
        mobile: field.mobile,
        isInternational: field.isInternational,
        ProductName: basketItemsNames,
        isDone: true
      }));
      Object(utils["a" /* displayActionMessage */])('Your order has been saved and will be delivered in time', 'info');
    }
  };

  var onClickConfirm = function onClickConfirm() {
    if (field.fullname.value !== '' && field.address.value !== '' && field.email.value !== '' && field.mobile.value !== '') {
      saveShippingDetails();
      history.push(routes["i" /* HOME */]);
    } else {
      Object(utils["a" /* displayActionMessage */])("Please Fill All Fields", 'info');
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react_default.a.createElement(components_StepTracker, {
    current: 2
  }), basket.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(basket_BasketItem, {
      key: product.id,
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-step-2"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Shipping Details"), /*#__PURE__*/react_default.a.createElement(step2_ShippingForm, {
    profile: profile,
    shipping: shipping,
    subtotal: subtotal,
    history: history,
    field: field,
    setField: setField
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(step2_ShippingTotal, {
    subtotal: subtotal,
    field: field
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(components_Pagination, {
    history: history,
    onClickPrevious: function onClickPrevious() {
      return history.push(routes["e" /* CHECKOUT_STEP_1 */]);
    },
    disabledNext: noError,
    onClickNext: onClickConfirm
  })));
};

/* harmony default export */ var step2 = (hoc_withAuth(step2_ShippingDetails));
// CONCATENATED MODULE: ./src/views/error/PageNotFound.jsx


var PageNotFound_PageNotFound = function PageNotFound(_ref) {
  var history = _ref.history;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, ":( Page you are looking for doesn't exists."), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    onClick: history.goBack
  }, "Go back"));
};

/* harmony default export */ var error_PageNotFound = (PageNotFound_PageNotFound);
// CONCATENATED MODULE: ./src/components/ui/ScrollToTop.jsx



var ScrollToTop_ScrollToTop = function ScrollToTop(Component) {
  return Object(react_router["g" /* withRouter */])(function (props) {
    Object(react["useEffect"])(function () {
      window.scrollTo(0, 0);
    }, [props.location]);
    return /*#__PURE__*/react_default.a.createElement(Component, props);
  });
};

/* harmony default export */ var ui_ScrollToTop = (ScrollToTop_ScrollToTop);
// CONCATENATED MODULE: ./src/routers/AppRouter.js





















var AppRouter_history = Object(esm_history["a" /* createBrowserHistory */])();

var AppRouter_AppRouter = function AppRouter() {
  return /*#__PURE__*/react_default.a.createElement(react_router["c" /* Router */], {
    history: AppRouter_history
  }, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    component: ui_ScrollToTop(product_ProductSearch),
    exact: true,
    path: "/search"
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: home,
    exact: true,
    path: "/"
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: ui_ScrollToTop(signup),
    path: "/signup"
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: ui_ScrollToTop(forgot_password),
    path: "/forgot_password"
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: ui_ScrollToTop(signin),
    path: "/signin"
  }), /*#__PURE__*/react_default.a.createElement(clientRoute, {
    component: ui_ScrollToTop(user_account),
    exact: true,
    path: "/account"
  }), /*#__PURE__*/react_default.a.createElement(clientRoute, {
    component: ui_ScrollToTop(edit_account),
    exact: true,
    path: "/account/edit"
  }), /*#__PURE__*/react_default.a.createElement(clientRoute, {
    component: ui_ScrollToTop(step1),
    exact: true,
    path: "/checkout/step1"
  }), /*#__PURE__*/react_default.a.createElement(clientRoute, {
    component: ui_ScrollToTop(step2),
    exact: true,
    path: "/checkout/step2"
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: ui_ScrollToTop(dashboard),
    exact: true,
    path: "/admin/dashboard"
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: ui_ScrollToTop(admin_products),
    path: "/admin/products"
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: ui_ScrollToTop(add_product),
    path: "/admin/add"
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: ui_ScrollToTop(edit_product),
    path: "/admin/edit/:id"
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: ui_ScrollToTop(error_PageNotFound)
  })));
};

/* harmony default export */ var routers_AppRouter = (AppRouter_AppRouter);
// CONCATENATED MODULE: ./src/components/ui/Preloader.jsx



var Preloader_Preloader = function Preloader() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "preloader"
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h1", {
    style: {
      color: 'Orange'
    }
  }, "The Deal Hunters")), /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null));
};

/* harmony default export */ var ui_Preloader = (Preloader_Preloader);
// CONCATENATED MODULE: ./src/App.js






var App_App = function App(_ref) {
  var store = _ref.store,
      persistor = _ref.persistor;
  return /*#__PURE__*/react_default.a.createElement(react["StrictMode"], null, /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
    store: store
  }, /*#__PURE__*/react_default.a.createElement(integration_react["a" /* PersistGate */], {
    loading: /*#__PURE__*/react_default.a.createElement(ui_Preloader, null),
    persistor: persistor
  }, /*#__PURE__*/react_default.a.createElement(routers_AppRouter, null))));
};

/* harmony default export */ var src_App = (App_App);
// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(393);

// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(177);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.esm.js
var dist_index_esm = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js
var auth_dist_index_esm = __webpack_require__(394);

// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.esm.js
var firestore_dist_index_esm = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/firebase/storage/dist/index.esm.js
var storage_dist_index_esm = __webpack_require__(396);

// CONCATENATED MODULE: ./src/firebase/firebase.js
function firebase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function firebase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { firebase_ownKeys(Object(source), true).forEach(function (key) { firebase_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { firebase_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function firebase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function firebase_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { firebase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { firebase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function firebase_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function firebase_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var firebaseConfig = {
  apiKey: "AIzaSyB5fUEaPPFX_UvRzUgdPsHj8Qelmr9v3DE",
  authDomain: "wt-gadgets-b605c.firebaseapp.com",
  projectId: "wt-gadgets-b605c",
  storageBucket: "wt-gadgets-b605c.appspot.com",
  messagingSenderId: "173029757052",
  appId: "1:173029757052:web:06e340e5906447dda379f9",
  measurementId: "G-9F8PHRDMB7"
};

var firebase_Firebase = function Firebase() {
  var _this = this;

  firebase_classCallCheck(this, Firebase);

  firebase_defineProperty(this, "createAccount", function (email, password) {
    return _this.auth.createUserWithEmailAndPassword(email, password);
  });

  firebase_defineProperty(this, "signIn", function (email, password) {
    return _this.auth.signInWithEmailAndPassword(email, password);
  });

  firebase_defineProperty(this, "signInWithGoogle", function () {
    return _this.auth.signInWithPopup(new dist_index_esm["a" /* default */].auth.GoogleAuthProvider());
  });

  firebase_defineProperty(this, "signOut", function () {
    return _this.auth.signOut();
  });

  firebase_defineProperty(this, "addUser", function (id, user) {
    _this.db.collection('users').doc(id).set(user);
  });

  firebase_defineProperty(this, "getUser", function (id) {
    return _this.db.collection('users').doc(id).get();
  });

  firebase_defineProperty(this, "passwordUpdate", function (password) {
    return _this.auth.currentUser.updatePassword(password);
  });

  firebase_defineProperty(this, "changePassword", function (currentPassword, newPassword) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updatePassword(newPassword).then(function () {
          resolve("Password Updated Successfully");
        }).catch(function (error) {
          return reject(error);
        });
      }).catch(function (error) {
        return reject(error);
      });
    });
  });

  firebase_defineProperty(this, "updateEmail", function (currentPassword, newEmail) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updateEmail(newEmail).then(function () {
          resolve("Email Updated Successfully");
        }).catch(function (error) {
          return reject(error);
        });
      }).catch(function (error) {
        return reject(error);
      });
    });
  });

  firebase_defineProperty(this, "updateProfile", function (id, updates) {
    return _this.db.collection('users').doc(id).update(updates);
  });

  firebase_defineProperty(this, "reauthenticate", function (currentPassword) {
    var user = _this.auth.currentUser;
    var cred = dist_index_esm["a" /* default */].auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  });

  firebase_defineProperty(this, "onAuthStateChanged", function () {
    return new Promise(function (resolve, reject) {
      _this.auth.onAuthStateChanged(function (user) {
        if (user) {
          return resolve(user);
        } else {
          return reject(new Error('Auth State Changed Failed'));
        }
      });
    });
  });

  firebase_defineProperty(this, "setAuthPersistence", function () {
    return _this.auth.setPersistence(dist_index_esm["a" /* default */].auth.Auth.Persistence.LOCAL);
  });

  firebase_defineProperty(this, "getProducts", function (lastRefkey) {
    var didTimeout = false;
    console.log("object");
    return new Promise( /*#__PURE__*/function () {
      var _ref = firebase_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var query, snapshot, products, lastKey, timeout, totalQuery, total, _query, _snapshot, _products, _lastKey;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lastRefkey) {
                  _context.next = 18;
                  break;
                }

                _context.prev = 1;
                query = _this.db.collection('products').orderBy(dist_index_esm["a" /* default */].firestore.FieldPath.documentId()).startAfter(lastRefkey).limit(12);
                _context.next = 5;
                return query.get();

              case 5:
                snapshot = _context.sent;
                products = [];
                snapshot.forEach(function (doc) {
                  return products.push(firebase_objectSpread({
                    id: doc.id
                  }, doc.data()));
                });
                lastKey = snapshot.docs[snapshot.docs.length - 1];
                console.log("helloo");
                resolve({
                  products: products,
                  lastKey: lastKey
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                reject(':( Failed to fetch products.');

              case 16:
                _context.next = 39;
                break;

              case 18:
                timeout = setTimeout(function () {
                  didTimeout = true;
                  reject('Request timeout, please try again!');
                }, 15000);
                _context.prev = 19;
                _context.next = 22;
                return _this.db.collection('products').get();

              case 22:
                totalQuery = _context.sent;
                total = totalQuery.docs.length;
                _query = _this.db.collection('products').orderBy(dist_index_esm["a" /* default */].firestore.FieldPath.documentId()).limit(12);
                _context.next = 27;
                return _query.get();

              case 27:
                _snapshot = _context.sent;
                clearTimeout(timeout);

                if (!didTimeout) {
                  _products = [];

                  _snapshot.forEach(function (doc) {
                    return _products.push(firebase_objectSpread({
                      id: doc.id
                    }, doc.data()));
                  });

                  console.log(_products);
                  _lastKey = _snapshot.docs[_snapshot.docs.length - 1];
                  resolve({
                    products: _products,
                    lastKey: _lastKey,
                    total: total
                  });
                }

                _context.next = 39;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](19);
                console.log(_context.t1);

                if (!didTimeout) {
                  _context.next = 37;
                  break;
                }

                return _context.abrupt("return");

              case 37:
                console.log('Failed to fetch products: an error occure while trying to fetch products or there is no products.', _context.t1);
                reject('failed to fetch products.');

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13], [19, 32]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });

  firebase_defineProperty(this, "addProduct", function (id, product) {
    return _this.db.collection('products').doc(id).set(product);
  });

  firebase_defineProperty(this, "generateKey", function () {
    return _this.db.collection('products').doc().id;
  });

  firebase_defineProperty(this, "storeImage", /*#__PURE__*/function () {
    var _ref2 = firebase_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, folder, imageFile) {
      var snapshot, downloadURL;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.storage.ref(folder).child(id).put(imageFile);

            case 2:
              snapshot = _context2.sent;
              _context2.next = 5;
              return snapshot.ref.getDownloadURL();

            case 5:
              downloadURL = _context2.sent;
              return _context2.abrupt("return", downloadURL);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }());

  firebase_defineProperty(this, "deleteImage", function (id) {
    return _this.storage.ref('products').child(id).delete();
  });

  firebase_defineProperty(this, "editProduct", function (id, updates) {
    return _this.db.collection('products').doc(id).update(updates);
  });

  firebase_defineProperty(this, "removeProduct", function (id) {
    return _this.db.collection('products').doc(id).delete();
  });

  dist_index_esm["a" /* default */].initializeApp(firebaseConfig);
  this.storage = dist_index_esm["a" /* default */].storage();
  this.db = dist_index_esm["a" /* default */].firestore();
  this.auth = dist_index_esm["a" /* default */].auth();
};

var firebase = new firebase_Firebase();
/* harmony default export */ var firebase_firebase = (firebase);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 11 modules
var redux_persist_es = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(179);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__(180);

// CONCATENATED MODULE: ./src/reducers/appReducer.js
function appReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function appReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { appReducer_ownKeys(Object(source), true).forEach(function (key) { appReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { appReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appReducer_initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: {},
  requestStatus: null,
  theme: 'default'
};
/* harmony default export */ var appReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOADING':
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case 'IS_AUTHENTICATING':
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        isAuthenticating: action.payload
      });

    case 'SET_REQUEST_STATUS':
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        requestStatus: action.payload
      });

    case 'SET_AUTH_STATUS':
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        authStatus: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/authReducer.js
var authReducer_initState = {};
/* harmony default export */ var authReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : authReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };

    case 'SIGNOUT_SUCCESS':
      return {};

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/basketReducer.js
function basketReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function basketReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { basketReducer_ownKeys(Object(source), true).forEach(function (key) { basketReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { basketReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function basketReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function basketReducer_toConsumableArray(arr) { return basketReducer_arrayWithoutHoles(arr) || basketReducer_iterableToArray(arr) || basketReducer_unsupportedIterableToArray(arr) || basketReducer_nonIterableSpread(); }

function basketReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function basketReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return basketReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return basketReducer_arrayLikeToArray(o, minLen); }

function basketReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function basketReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return basketReducer_arrayLikeToArray(arr); }

function basketReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ var basketReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TO_BASKET':
      return state.some(function (product) {
        return product.id === action.payload.id;
      }) ? state : [].concat(basketReducer_toConsumableArray(state), [action.payload]);

    case 'REMOVE_FROM_BASKET':
      return state.filter(function (product) {
        return product.id !== action.payload;
      });

    case 'CLEAR_BASKET':
      return [];

    case 'ADD_QTY_ITEM':
      return state.map(function (product) {
        if (product.id === action.payload) {
          return basketReducer_objectSpread(basketReducer_objectSpread({}, product), {}, {
            quantity: product.quantity + 1
          });
        }

        return product;
      });

    case 'MINUS_QTY_ITEM':
      return state.map(function (product) {
        if (product.id === action.payload) {
          return basketReducer_objectSpread(basketReducer_objectSpread({}, product), {}, {
            quantity: product.quantity - 1
          });
        }

        return product;
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/checkoutReducer.js
function checkoutReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function checkoutReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkoutReducer_ownKeys(Object(source), true).forEach(function (key) { checkoutReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkoutReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkoutReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  shipping: {},
  payment: {
    type: 'paypal',
    data: {}
  }
};
/* harmony default export */ var checkoutReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_CHECKOUT_SHIPPING_DETAILS':
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        shipping: action.payload
      });

    case 'SET_CHECKOUT_PAYMENT_DETAILS':
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        payment: action.payload
      });

    case 'RESET_CHECKOUT':
      return defaultState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/filterReducer.js
function filterReducer_toConsumableArray(arr) { return filterReducer_arrayWithoutHoles(arr) || filterReducer_iterableToArray(arr) || filterReducer_unsupportedIterableToArray(arr) || filterReducer_nonIterableSpread(); }

function filterReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function filterReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return filterReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return filterReducer_arrayLikeToArray(o, minLen); }

function filterReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function filterReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return filterReducer_arrayLikeToArray(arr); }

function filterReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function filterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filterReducer_ownKeys(Object(source), true).forEach(function (key) { filterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterReducer_initState = {
  recent: [],
  keyword: '',
  brand: '',
  minPrice: 0,
  maxPrice: 0,
  sortBy: ''
};
/* harmony default export */ var filterReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filterReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: !!state.recent.find(function (n) {
          return n === action.payload;
        }) || action.payload === '' ? state.recent : [action.payload].concat(filterReducer_toConsumableArray(state.recent)),
        keyword: action.payload
      });

    case 'SET_BRAND_FILTER':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        brand: action.payload
      });

    case 'SET_MAX_PRICE_FILTER':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        maxPrice: action.payload
      });

    case 'SET_MIN_PRICE_FILTER':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        minPrice: action.payload
      });

    case 'RESET_FILTER':
      return filterReducer_initState;

    case 'CLEAR_RECENT_SEARCH':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: []
      });

    case 'REMOVE_SELECTED_RECENT':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: state.recent.filter(function (item) {
          return item !== action.payload;
        })
      });

    case 'APPLY_FILTER':
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), action.payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/productReducer.js
function productReducer_toConsumableArray(arr) { return productReducer_arrayWithoutHoles(arr) || productReducer_iterableToArray(arr) || productReducer_unsupportedIterableToArray(arr) || productReducer_nonIterableSpread(); }

function productReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function productReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return productReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return productReducer_arrayLikeToArray(o, minLen); }

function productReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function productReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return productReducer_arrayLikeToArray(arr); }

function productReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function productReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function productReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { productReducer_ownKeys(Object(source), true).forEach(function (key) { productReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { productReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function productReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var productReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lastRefKey: null,
    total: 0,
    items: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [].concat(productReducer_toConsumableArray(state.items), productReducer_toConsumableArray(action.payload.products))
      });

    case 'ADD_PRODUCT_SUCCESS':
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: [].concat(productReducer_toConsumableArray(state.items), [action.payload])
      });

    case 'REMOVE_PRODUCT_SUCCESS':
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: state.items.filter(function (product) {
          return product.id !== action.payload;
        })
      });

    case 'EDIT_PRODUCT_SUCCESS':
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: state.items.map(function (product) {
          if (product.id === action.payload.id) {
            return productReducer_objectSpread(productReducer_objectSpread({}, product), action.payload.updates);
          }

          return product;
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/profileReducer.js
function profileReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profileReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profileReducer_ownKeys(Object(source), true).forEach(function (key) { profileReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profileReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profileReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var profileReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_PROFILE':
      return action.payload;

    case 'UPDATE_PROFILE_SUCCESS':
      return profileReducer_objectSpread(profileReducer_objectSpread({}, state), action.payload);

    case 'CLEAR_PROFILE':
      return {};

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userReducer_ownKeys(Object(source), true).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function userReducer_toConsumableArray(arr) { return userReducer_arrayWithoutHoles(arr) || userReducer_iterableToArray(arr) || userReducer_unsupportedIterableToArray(arr) || userReducer_nonIterableSpread(); }

function userReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function userReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return userReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return userReducer_arrayLikeToArray(o, minLen); }

function userReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function userReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return userReducer_arrayLikeToArray(arr); }

function userReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ var userReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_USER':
      return [].concat(userReducer_toConsumableArray(state), [action.payload]);

    case 'EDIT_USER':
      return state.map(function (user) {
        if (user.id === action.payload.id) {
          return userReducer_objectSpread(userReducer_objectSpread({}, user), action.payload);
        }

        return user;
      });

    case 'DELETE_USER':
      return state.filter(function (user) {
        return user.id !== action.payload;
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.js








var rootReducer = {
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: appReducer
};
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./src/constants/constants.js
var GET_PRODUCTS = 'GET_PRODUCTS';
var GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
var ADD_PRODUCT = 'ADD_PRODUCT';
var ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
var REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
var EDIT_PRODUCT = 'EDIT_PRODUCT';
var EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
var CANCEL_GET_PRODUCTS = 'CANCEL_GET_PRODUCTS';
var SET_LAST_REF_KEY = 'SET_LAST_REF_KEY';
var ADD_TO_BASKET = 'ADD_TO_BASKET';
var REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
var CLEAR_BASKET = 'CLEAR_BASKET';
var ADD_QTY_ITEM = 'ADD_QTY_ITEM';
var MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
var SET_CHECKOUT_SHIPPING_DETAILS = 'SET_CHECKOUT_SHIPPING_DETAILS';
var SET_CHECKOUT_PAYMENT_DETAILS = 'SET_CHECKOUT_PAYMENT_DETAILS';
var RESET_CHECKOUT = 'RESET_CHECKOUT';
var SIGNIN = 'SIGNIN';
var SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
var SIGNUP = 'SIGNUP';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNOUT = 'SIGNOUT';
var SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
var SET_AUTH_STATUS = 'SET_AUTH_STATUS';
var SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
var SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
var SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
var ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
var SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
var ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
var ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
var RESET_PASSWORD = 'RESET_PASSWORD';
var UPDATE_EMAIL = 'UPDATE_EMAIL';
var SET_PROFILE = 'SET_PROFILE';
var UPDATE_PROFILE = 'UPDATE_PROFILE';
var UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
var CLEAR_PROFILE = 'CLEAR_PROFILE';
var SET_TEXT_FILTER = 'SET_TEXT_FILTER';
var SET_BRAND_FILTER = 'SET_BRAND_FILTER';
var SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER';
var SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER';
var RESET_FILTER = 'RESET_FILTER';
var APPLY_FILTER = 'APPLY_FILTER';
var CLEAR_RECENT_SEARCH = 'CLEAR_RECENT_SEARCH';
var REMOVE_SELECTED_RECENT = 'REMOVE_SELECTED_RECENT';
var REGISTER_USER = 'REGISTER_USER';
var GET_USER = 'GET_USER';
var ADD_USER = 'ADD_USER';
var DELETE_USER = 'DELETE_USER';
var EDIT_USER = 'EDIT_USER';
var LOADING = 'LOADING';
var IS_AUTHENTICATING = 'IS_AUTHENTICATING';
var SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';
// CONCATENATED MODULE: ./src/images/defaultAvatar.jpg
/* harmony default export */ var defaultAvatar = (__webpack_require__.p + "images/defaultAvatar.365a9381c6d833c9a358812e07f0038c.jpg");
// CONCATENATED MODULE: ./src/images/defaultBanner.jpg
/* harmony default export */ var defaultBanner = (__webpack_require__.p + "images/defaultBanner.3a4391dad797b7b9172915ef75f3a8de.jpg");
// CONCATENATED MODULE: ./src/sagas/authSaga.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(handleError),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initRequest),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(authSaga);

function authSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function authSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authSaga_ownKeys(Object(source), true).forEach(function (key) { authSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function handleError(e) {
  var obj;
  return regeneratorRuntime.wrap(function handleError$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          obj = {
            success: false,
            type: 'auth'
          };
          _context.next = 3;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating(false));

        case 3:
          _context.t0 = e.code;
          _context.next = _context.t0 === 'auth/network-request-failed' ? 6 : _context.t0 === 'auth/email-already-in-use' ? 9 : _context.t0 === 'auth/wrong-password' ? 12 : _context.t0 === 'auth/user-not-found' ? 15 : _context.t0 === 'auth/reset-password-error' ? 18 : 21;
          break;

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Network error has occured. Please try again.'
          })));

        case 8:
          return _context.abrupt("break", 24);

        case 9:
          _context.next = 11;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Email is already in use. Please use another email'
          })));

        case 11:
          return _context.abrupt("break", 24);

        case 12:
          _context.next = 14;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 14:
          return _context.abrupt("break", 24);

        case 15:
          _context.next = 17;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 17:
          return _context.abrupt("break", 24);

        case 18:
          _context.next = 20;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Failed to send password reset email. Did you type your email correctly?'
          })));

        case 20:
          return _context.abrupt("break", 24);

        case 21:
          _context.next = 23;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: e.message
          })));

        case 23:
          return _context.abrupt("break", 24);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating());

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus({}));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function authSaga(_ref) {
  var type, payload, ref, fullname, user, snapshot, _user, _user2;

  return regeneratorRuntime.wrap(function authSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context3.t0 = type;
          _context3.next = _context3.t0 === SIGNIN ? 4 : _context3.t0 === SIGNIN_WITH_GOOGLE ? 16 : _context3.t0 === SIGNIN_WITH_FACEBOOK ? 28 : _context3.t0 === SIGNIN_WITH_GITHUB ? 40 : _context3.t0 === SIGNUP ? 52 : _context3.t0 === SIGNOUT ? 73 : _context3.t0 === RESET_PASSWORD ? 98 : _context3.t0 === ON_AUTHSTATE_SUCCESS ? 113 : _context3.t0 === ON_AUTHSTATE_FAIL ? 137 : _context3.t0 === SET_AUTH_PERSISTENCE ? 142 : 151;
          break;

        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return initRequest();

        case 7:
          _context3.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.signIn, payload.email, payload.password);

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t1 = _context3["catch"](4);
          _context3.next = 15;
          return handleError(_context3.t1);

        case 15:
          return _context3.abrupt("break", 152);

        case 16:
          _context3.prev = 16;
          _context3.next = 19;
          return initRequest();

        case 19:
          _context3.next = 21;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.signInWithGoogle);

        case 21:
          _context3.next = 27;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t2 = _context3["catch"](16);
          _context3.next = 27;
          return handleError(_context3.t2);

        case 27:
          return _context3.abrupt("break", 152);

        case 28:
          _context3.prev = 28;
          _context3.next = 31;
          return initRequest();

        case 31:
          _context3.next = 33;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.signInWithFacebook);

        case 33:
          _context3.next = 39;
          break;

        case 35:
          _context3.prev = 35;
          _context3.t3 = _context3["catch"](28);
          _context3.next = 39;
          return handleError(_context3.t3);

        case 39:
          return _context3.abrupt("break", 152);

        case 40:
          _context3.prev = 40;
          _context3.next = 43;
          return initRequest();

        case 43:
          _context3.next = 45;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.signInWithGithub);

        case 45:
          _context3.next = 51;
          break;

        case 47:
          _context3.prev = 47;
          _context3.t4 = _context3["catch"](40);
          _context3.next = 51;
          return handleError(_context3.t4);

        case 51:
          return _context3.abrupt("break", 152);

        case 52:
          _context3.prev = 52;
          _context3.next = 55;
          return initRequest();

        case 55:
          _context3.next = 57;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.createAccount, payload.email, payload.password);

        case 57:
          ref = _context3.sent;
          fullname = payload.fullname.split(' ').map(function (name) {
            return name[0].toUpperCase().concat(name.substring(1));
          }).join(' ');
          user = {
            fullname: fullname,
            avatar: defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            mobile: {},
            role: 'USER',
            dateJoined: ref.user.metadata.creationTime || new Date().getTime()
          };
          _context3.next = 62;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.addUser, ref.user.uid, user);

        case 62:
          _context3.next = 64;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setProfile(user));

        case 64:
          _context3.next = 66;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating(false));

        case 66:
          _context3.next = 72;
          break;

        case 68:
          _context3.prev = 68;
          _context3.t5 = _context3["catch"](52);
          _context3.next = 72;
          return handleError(_context3.t5);

        case 72:
          return _context3.abrupt("break", 152);

        case 73:
          _context3.prev = 73;
          _context3.next = 76;
          return initRequest();

        case 76:
          _context3.next = 78;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.signOut);

        case 78:
          _context3.next = 80;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(clearBasket());

        case 80:
          _context3.next = 82;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(clearProfile());

        case 82:
          _context3.next = 84;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(resetFilter());

        case 84:
          _context3.next = 86;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(resetCheckout());

        case 86:
          _context3.next = 88;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(signOutSuccess());

        case 88:
          _context3.next = 90;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating(false));

        case 90:
          _context3.next = 92;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(AppRouter_history.push, '/signin');

        case 92:
          _context3.next = 97;
          break;

        case 94:
          _context3.prev = 94;
          _context3.t6 = _context3["catch"](73);
          console.log(_context3.t6);

        case 97:
          return _context3.abrupt("break", 152);

        case 98:
          _context3.prev = 98;
          _context3.next = 101;
          return initRequest();

        case 101:
          _context3.next = 103;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.passwordReset, payload);

        case 103:
          _context3.next = 105;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus({
            success: true,
            type: 'reset',
            message: 'Password reset email has been sent to your provided email.'
          }));

        case 105:
          _context3.next = 107;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating(false));

        case 107:
          _context3.next = 112;
          break;

        case 109:
          _context3.prev = 109;
          _context3.t7 = _context3["catch"](98);
          handleError({
            code: 'auth/reset-password-error'
          });

        case 112:
          return _context3.abrupt("break", 152);

        case 113:
          _context3.next = 115;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setAuthStatus({
            success: true,
            type: 'auth',
            message: 'Successfully signed in. Redirecting...'
          }));

        case 115:
          _context3.next = 117;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.getUser, payload.uid);

        case 117:
          snapshot = _context3.sent;

          if (!snapshot.data()) {
            _context3.next = 126;
            break;
          }

          // if user exists in database
          _user = snapshot.data();
          _context3.next = 122;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setProfile(_user));

        case 122:
          _context3.next = 124;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(signInSuccess({
            id: payload.uid,
            role: _user.role,
            provider: payload.providerData[0].providerId
          }));

        case 124:
          _context3.next = 134;
          break;

        case 126:
          if (!(payload.providerData[0].providerId !== 'password' && !snapshot.data())) {
            _context3.next = 134;
            break;
          }

          // add the user if auth provider is not password
          _user2 = {
            fullname: payload.displayName ? payload.displayName : 'User',
            avatar: payload.photoURL ? payload.photoURL : defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            mobile: {},
            role: 'USER',
            dateJoined: payload.metadata.creationTime
          };
          _context3.next = 130;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.addUser, payload.uid, _user2);

        case 130:
          _context3.next = 132;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(setProfile(_user2));

        case 132:
          _context3.next = 134;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(signInSuccess({
            id: payload.uid,
            role: _user2.role,
            provider: payload.providerData[0].providerId
          }));

        case 134:
          _context3.next = 136;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(authActions_isAuthenticating(false));

        case 136:
          return _context3.abrupt("break", 152);

        case 137:
          _context3.next = 139;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(clearProfile());

        case 139:
          _context3.next = 141;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(signOutSuccess());

        case 141:
          return _context3.abrupt("break", 152);

        case 142:
          _context3.prev = 142;
          _context3.next = 145;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.setAuthPersistence);

        case 145:
          _context3.next = 150;
          break;

        case 147:
          _context3.prev = 147;
          _context3.t8 = _context3["catch"](142);
          console.log(_context3.t8);

        case 150:
          return _context3.abrupt("break", 152);

        case 151:
          return _context3.abrupt("return");

        case 152:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 11], [16, 23], [28, 35], [40, 47], [52, 68], [73, 94], [98, 109], [142, 147]]);
}

/* harmony default export */ var sagas_authSaga = (authSaga);
// CONCATENATED MODULE: ./src/sagas/productSaga.js
function productSaga_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { productSaga_typeof = function _typeof(obj) { return typeof obj; }; } else { productSaga_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return productSaga_typeof(obj); }

function productSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function productSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { productSaga_ownKeys(Object(source), true).forEach(function (key) { productSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { productSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function productSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(productSaga_initRequest),
    productSaga_marked2 = /*#__PURE__*/regeneratorRuntime.mark(productSaga_handleError),
    productSaga_marked3 = /*#__PURE__*/regeneratorRuntime.mark(handleAction),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(productSaga);









function productSaga_initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: true
          });

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: SET_REQUEST_STATUS,
            payload: null
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, productSaga_marked);
}

function productSaga_handleError(e) {
  return regeneratorRuntime.wrap(function handleError$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: false
          });

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: SET_REQUEST_STATUS,
            payload: e
          });

        case 4:
          console.log('ERROR: ', e);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, productSaga_marked2);
}

function handleAction(location, message, status) {
  return regeneratorRuntime.wrap(function handleAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!location) {
            _context3.next = 3;
            break;
          }

          _context3.next = 3;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(AppRouter_history.push, location);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(utils["a" /* displayActionMessage */], message, status);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, productSaga_marked3);
}

function productSaga(_ref) {
  var type, payload, state, result, key, downloadURL, image, _downloadURL, updates;

  return regeneratorRuntime.wrap(function productSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context4.t0 = type;
          _context4.next = _context4.t0 === GET_PRODUCTS ? 4 : _context4.t0 === ADD_PRODUCT ? 24 : _context4.t0 === EDIT_PRODUCT ? 50 : _context4.t0 === REMOVE_PRODUCT ? 84 : 104;
          break;

        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return productSaga_initRequest();

        case 7:
          _context4.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* select */])();

        case 9:
          state = _context4.sent;
          _context4.next = 12;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.getProducts, payload);

        case 12:
          result = _context4.sent;
          _context4.next = 15;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(getProductsSuccess({
            products: result.products,
            lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
            total: result.total ? result.total : state.products.total
          }));

        case 15:
          _context4.next = 17;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: false
          });

        case 17:
          _context4.next = 23;
          break;

        case 19:
          _context4.prev = 19;
          _context4.t1 = _context4["catch"](4);
          _context4.next = 23;
          return productSaga_handleError(_context4.t1);

        case 23:
          return _context4.abrupt("break", 105);

        case 24:
          _context4.prev = 24;
          _context4.next = 27;
          return productSaga_initRequest();

        case 27:
          _context4.next = 29;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.generateKey);

        case 29:
          key = _context4.sent;
          _context4.next = 32;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.storeImage, key, 'products', payload.image);

        case 32:
          downloadURL = _context4.sent;
          _context4.next = 35;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.addProduct, key, productSaga_objectSpread(productSaga_objectSpread({}, payload), {}, {
            image: downloadURL
          }));

        case 35:
          _context4.next = 37;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(addProductSuccess(productSaga_objectSpread(productSaga_objectSpread({
            id: key
          }, payload), {}, {
            image: downloadURL
          })));

        case 37:
          _context4.next = 39;
          return handleAction(routes["d" /* ADMIN_PRODUCTS */], 'Item succesfully added', 'success');

        case 39:
          _context4.next = 41;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: false
          });

        case 41:
          _context4.next = 49;
          break;

        case 43:
          _context4.prev = 43;
          _context4.t2 = _context4["catch"](24);
          _context4.next = 47;
          return productSaga_handleError(_context4.t2);

        case 47:
          _context4.next = 49;
          return handleAction(undefined, 'Item failed to add: ' + _context4.t2.message_, 'error');

        case 49:
          return _context4.abrupt("break", 105);

        case 50:
          _context4.prev = 50;
          _context4.next = 53;
          return productSaga_initRequest();

        case 53:
          image = payload.updates.image;

          if (!(image.constructor === File && productSaga_typeof(image) === 'object')) {
            _context4.next = 67;
            break;
          }

          _context4.next = 57;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.deleteImage, payload.id);

        case 57:
          _context4.next = 59;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.storeImage, 'products', payload.id, image);

        case 59:
          _downloadURL = _context4.sent;
          updates = productSaga_objectSpread(productSaga_objectSpread({}, payload.updates), {}, {
            image: _downloadURL
          });
          _context4.next = 63;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.editProduct, payload.id, updates);

        case 63:
          _context4.next = 65;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(editProductSuccess({
            id: payload.id,
            updates: updates
          }));

        case 65:
          _context4.next = 71;
          break;

        case 67:
          _context4.next = 69;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.editProduct, payload.id, payload.updates);

        case 69:
          _context4.next = 71;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(editProductSuccess({
            id: payload.id,
            updates: payload.updates
          }));

        case 71:
          _context4.next = 73;
          return handleAction(routes["d" /* ADMIN_PRODUCTS */], 'Item succesfully edited', 'success');

        case 73:
          _context4.next = 75;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: false
          });

        case 75:
          _context4.next = 83;
          break;

        case 77:
          _context4.prev = 77;
          _context4.t3 = _context4["catch"](50);
          _context4.next = 81;
          return productSaga_handleError(_context4.t3);

        case 81:
          _context4.next = 83;
          return handleAction(undefined, 'Item failed to edit: ' + _context4.t3.message, 'error');

        case 83:
          return _context4.abrupt("break", 105);

        case 84:
          _context4.prev = 84;
          _context4.next = 87;
          return productSaga_initRequest();

        case 87:
          _context4.next = 89;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.removeProduct, payload);

        case 89:
          _context4.next = 91;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(removeProductSuccess(payload));

        case 91:
          _context4.next = 93;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])({
            type: LOADING,
            payload: false
          });

        case 93:
          _context4.next = 95;
          return handleAction(routes["d" /* ADMIN_PRODUCTS */], 'Item succesfully removed', 'success');

        case 95:
          _context4.next = 103;
          break;

        case 97:
          _context4.prev = 97;
          _context4.t4 = _context4["catch"](84);
          _context4.next = 101;
          return productSaga_handleError(_context4.t4);

        case 101:
          _context4.next = 103;
          return handleAction(undefined, 'Item failed to remove: ' + _context4.t4.message, 'error');

        case 103:
          return _context4.abrupt("break", 105);

        case 104:
          return _context4.abrupt("return");

        case 105:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 19], [24, 43], [50, 77], [84, 97]]);
}

/* harmony default export */ var sagas_productSaga = (productSaga);
// CONCATENATED MODULE: ./src/sagas/profileSaga.js
var profileSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(profileSaga);

function profileSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profileSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profileSaga_ownKeys(Object(source), true).forEach(function (key) { profileSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profileSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profileSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function profileSaga(_ref) {
  var type, payload, state, _payload$credentials, email, password, _payload$files, avatarFile, bannerFile, bannerURL, avatarURL, updates;

  return regeneratorRuntime.wrap(function profileSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context.t0 = type;
          _context.next = _context.t0 === 'UPDATE_EMAIL' ? 4 : _context.t0 === 'UPDATE_PROFILE' ? 21 : 80;
          break;

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(appActions_isLoading(false));

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.updateEmail, payload.password, payload.newEmail);

        case 9:
          _context.next = 11;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(appActions_isLoading(false));

        case 11:
          _context.next = 13;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(AppRouter_history.push, '/profile');

        case 13:
          _context.next = 15;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(utils["a" /* displayActionMessage */], 'Email Updated Successfully!', 'success');

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](4);
          console.log(_context.t1.message);

        case 20:
          return _context.abrupt("break", 81);

        case 21:
          _context.prev = 21;
          _context.next = 24;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* select */])();

        case 24:
          state = _context.sent;
          _payload$credentials = payload.credentials, email = _payload$credentials.email, password = _payload$credentials.password;
          _payload$files = payload.files, avatarFile = _payload$files.avatarFile, bannerFile = _payload$files.bannerFile;
          _context.next = 29;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(appActions_isLoading(true));

        case 29:
          if (!(email && password && email !== state.profile.email)) {
            _context.next = 32;
            break;
          }

          _context.next = 32;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.updateEmail, password, email);

        case 32:
          if (!(avatarFile || bannerFile)) {
            _context.next = 56;
            break;
          }

          if (!bannerFile) {
            _context.next = 39;
            break;
          }

          _context.next = 36;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.storeImage, state.auth.id, 'banner', bannerFile);

        case 36:
          _context.t2 = _context.sent;
          _context.next = 40;
          break;

        case 39:
          _context.t2 = payload.updates.banner;

        case 40:
          bannerURL = _context.t2;

          if (!avatarFile) {
            _context.next = 47;
            break;
          }

          _context.next = 44;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.storeImage, state.auth.id, 'avatar', avatarFile);

        case 44:
          _context.t3 = _context.sent;
          _context.next = 48;
          break;

        case 47:
          _context.t3 = payload.updates.avatar;

        case 48:
          avatarURL = _context.t3;
          updates = profileSaga_objectSpread(profileSaga_objectSpread({}, payload.updates), {}, {
            avatar: avatarURL,
            banner: bannerURL
          });
          _context.next = 52;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.updateProfile, state.auth.id, updates);

        case 52:
          _context.next = 54;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(updateProfileSuccess(updates));

        case 54:
          _context.next = 60;
          break;

        case 56:
          _context.next = 58;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(firebase_firebase.updateProfile, state.auth.id, payload.updates);

        case 58:
          _context.next = 60;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(updateProfileSuccess(payload.updates));

        case 60:
          _context.next = 62;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(appActions_isLoading(false));

        case 62:
          _context.next = 64;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(AppRouter_history.push, '/account');

        case 64:
          _context.next = 66;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(utils["a" /* displayActionMessage */], 'Profile Updated Successfully!', 'success');

        case 66:
          _context.next = 80;
          break;

        case 68:
          _context.prev = 68;
          _context.t4 = _context["catch"](21);
          console.log(_context.t4);
          _context.next = 73;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* put */])(appActions_isLoading(false));

        case 73:
          if (!(_context.t4.code === 'auth/wrong-password')) {
            _context.next = 78;
            break;
          }

          _context.next = 76;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(utils["a" /* displayActionMessage */], 'Wrong password, profile update failed :(', 'error');

        case 76:
          _context.next = 80;
          break;

        case 78:
          _context.next = 80;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* call */])(utils["a" /* displayActionMessage */], ":( Failed to update profile. ".concat(_context.t4.message ? _context.t4.message : ''), 'error');

        case 80:
          return _context.abrupt("return");

        case 81:
        case "end":
          return _context.stop();
      }
    }
  }, profileSaga_marked, null, [[4, 17], [21, 68]]);
}

/* harmony default export */ var sagas_profileSaga = (profileSaga);
// CONCATENATED MODULE: ./src/sagas/rootSaga.js
var rootSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);






function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* takeLatest */])(['SIGNIN', 'SIGNUP', 'SIGNOUT', 'SIGNIN_WITH_GOOGLE', 'SIGNIN_WITH_FACEBOOK', 'SIGNIN_WITH_GITHUB', 'ON_AUTHSTATE_CHANGED', 'ON_AUTHSTATE_SUCCESS', 'ON_AUTHSTATE_FAIL', 'SET_AUTH_PERSISTENCE', 'RESET_PASSWORD'], sagas_authSaga);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* takeLatest */])(['ADD_PRODUCT', 'REMOVE_PRODUCT', 'EDIT_PRODUCT', 'GET_PRODUCTS'], sagas_productSaga);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* takeLatest */])(['UPDATE_EMAIL', 'UPDATE_PROFILE'], sagas_profileSaga);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, rootSaga_marked);
}

/* harmony default export */ var sagas_rootSaga = (rootSaga);
// CONCATENATED MODULE: ./src/store/store.js







var sagaMiddleware = Object(redux_saga_core_npm_proxy_esm["a" /* default */])();
var authPersistConfig = {
  key: 'root',
  storage: storage_default.a,
  whitelist: ['auth', 'profile', 'basket', 'checkout']
};
/* harmony default export */ var store_store = (function () {
  var store = Object(redux["createStore"])(Object(redux_persist_es["a" /* persistCombineReducers */])(authPersistConfig, reducers), Object(redux_devtools_extension["composeWithDevTools"])(Object(redux["applyMiddleware"])(sagaMiddleware)));
  var persistor = Object(redux_persist_es["b" /* persistStore */])(store);
  sagaMiddleware.run(sagas_rootSaga);
  return {
    store: store,
    persistor: persistor
  };
});
// EXTERNAL MODULE: ./src/styles/style.scss
var styles_style = __webpack_require__(399);

// CONCATENATED MODULE: ./src/index.js











webfontloader_default.a.load({
  google: {
    families: ['Droid Sans']
  }
});

var _configureStore = store_store(),
    src_store = _configureStore.store,
    src_persistor = _configureStore.persistor;

var root = document.getElementById('app');
Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(ui_Preloader, null), root);
firebase_firebase.auth.onAuthStateChanged(function (user) {
  if (user) {
    src_store.dispatch(onAuthStateSuccess(user));
  } else {
    src_store.dispatch(onAuthStateFail('Failed to Athenticate'));
  }

  Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(src_App, {
    store: src_store,
    persistor: src_persistor
  }), root);
});

if ( true && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('SW registered: ', registration);
    }).catch(function (registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/***/ })

/******/ });