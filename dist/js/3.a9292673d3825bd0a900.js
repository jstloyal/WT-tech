(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/firebase/dist/index.esm.js + 13 modules
var index_esm = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(9);

// CONCATENATED MODULE: ./src/views/account/tab/show.jsx


var show_ShowOrders = function ShowOrders(props) {
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-inputsadmin"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-fieldproductname"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Product Name"), /*#__PURE__*/react_default.a.createElement("h5", null, props.name.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", null, item), /*#__PURE__*/react_default.a.createElement("br", null));
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-fieldproductname"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    style: {
      color: "red",
      marginTop: "0px",
      backgroundColor: "orange"
    }
  }, "Price"), /*#__PURE__*/react_default.a.createElement("h5", null, props.price.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", null, item), /*#__PURE__*/react_default.a.createElement("br", null));
  }))))));
};

/* harmony default export */ var show = (show_ShowOrders);
// CONCATENATED MODULE: ./src/views/account/tab/UserOrdersTab.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UserOrdersTab_UserOrdersTab = function UserOrdersTab() {
  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      priceproduct = _useState4[0],
      setPrice = _useState4[1];

  var profile = Object(es["d" /* useSelector */])(function (state) {
    return state.profile;
  });

  var userOrders = function userOrders() {
    var orders = [];
    var userProducts = [];
    var price = [];
    index_esm["a" /* default */].firestore().collection('orders').where("email", "==", profile.email).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        orders.push({
          email: doc.data().email,
          name: doc.data().ProductName,
          price: doc.data().price
        });
      });
      orders.forEach(function (products) {
        userProducts.push(products.name);
      });
      orders.forEach(function (products) {
        price.push(products.price);
      });
      setProduct(userProducts);
      setPrice(price);
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  };

  Object(react["useEffect"])(function () {
    userOrders();
  }, []);
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-subtle text-italic"
  }, "Name: ", profile.fullname), /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-subtle text-italic"
  }, "Email: ", profile.email)), /*#__PURE__*/react_default.a.createElement(show, {
    name: product,
    price: priceproduct
  }));
};

/* harmony default export */ var tab_UserOrdersTab = __webpack_exports__["default"] = (UserOrdersTab_UserOrdersTab);

/***/ })

}]);