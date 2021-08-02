(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);







var UserProfile = function UserProfile(props) {
  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* useSelector */ "d"])(function (state) {
    return state.profile;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: profile.banner
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    alt: "Avatar",
    className: "",
    src: profile.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button-small user-profile-edit",
    onClick: function onClick() {
      return props.history.push(constants_routes__WEBPACK_IMPORTED_MODULE_4__[/* ACCOUNT_EDIT */ "b"]);
    }
  }, "Edit Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "user-profile-name"
  }, profile.fullname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.address) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Address not Set "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.mobile.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.mobile.data.num ? profile.mobile.data.num : '+234') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Mobile not Set "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Date Joined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.dateJoined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, Object(helpers_utils__WEBPACK_IMPORTED_MODULE_3__[/* displayDate */ "b"])(profile.dateJoined)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Not Available "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* withRouter */ "g"])(UserProfile));

/***/ })

}]);