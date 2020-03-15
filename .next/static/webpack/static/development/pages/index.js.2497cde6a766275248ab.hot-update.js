webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStats */ "./hooks/useStats.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
var _jsxFileName = "/Users/p0a00a6/Documents/test/cvid/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Stats(props) {
  var stats = Object(_hooks_useStats__WEBPACK_IMPORTED_MODULE_2__["useStats"])("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"], "/").concat(props.uri));
  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Loading Stats...");
  if (!stats.confirmed) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "No statistics exist.");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "card col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Confirmed"), __jsx("span", {
    className: "card-text",
    style: {
      fontSize: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, stats.confirmed.value))), __jsx("section", {
    className: "card col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Deaths"), __jsx("span", {
    className: "card-text",
    style: {
      fontSize: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, stats.deaths.value))), __jsx("section", {
    className: "card col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Recovered"), __jsx("span", {
    className: "card-text",
    style: {
      fontSize: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, stats.recovered.value)))), __jsx("section", {
    className: "mx-auto",
    style: {
      width: 300,
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Last Updated at: ", moment__WEBPACK_IMPORTED_MODULE_1___default()(stats.lastUpdate).format("dddd, MMM Do YYYY")));
}

/***/ })

})
//# sourceMappingURL=index.js.2497cde6a766275248ab.hot-update.js.map