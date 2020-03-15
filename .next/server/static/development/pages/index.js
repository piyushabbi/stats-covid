module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStats */ "./hooks/useStats.js");
var _jsxFileName = "/Users/p0a00a6/Documents/test/cvid/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CountrySelector(props) {
  const countries = Object(_hooks_useStats__WEBPACK_IMPORTED_MODULE_1__["useStats"])("https://covid19.mathdro.id/api/countries");
  if (!countries) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Loading countries...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Select from Countries List"), __jsx("section", {
    className: "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("select", {
    className: "custom-select",
    id: "inputGroupSelect02",
    onChange: e => props.setSelectedCountry(e.target.value),
    value: props.activeCountry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, Object.entries(countries.countries).map(([country, code], index) => __jsx("option", {
    key: `code_${index}`,
    value: code,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, country)))));
}

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStats */ "./hooks/useStats.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
var _jsxFileName = "/Users/p0a00a6/Documents/test/cvid/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Stats(props) {
  const stats = Object(_hooks_useStats__WEBPACK_IMPORTED_MODULE_2__["useStats"])(`${_utils_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"]}/${props.uri}`);
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

/***/ }),

/***/ "./hooks/useStats.js":
/*!***************************!*\
  !*** ./hooks/useStats.js ***!
  \***************************/
/*! exports provided: useStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStats", function() { return useStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useStats = function (url) {
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      const data = await fetch(url).then(data => data.json());
      setStats(data);
    }

    fetchData();
  }, [url]);
  return stats;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
var _jsxFileName = "/Users/p0a00a6/Documents/test/cvid/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const IndexPage = props => {
  const {
    0: activeCountry,
    1: setActiveCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("IN");

  const setSelectedCountry = country => setActiveCountry(country);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "COVID-19 Stats"), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/superhero/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("main", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h1", {
    className: "mx-auto",
    style: {
      width: 300
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "COVID-19 Stats"), __jsx("div", {
    className: "jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("section", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h2", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Worldwide Stats")), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    uri: `api`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeCountry: activeCountry,
    setSelectedCountry: setSelectedCountry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), activeCountry && __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    uri: `api/countries/${activeCountry}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
const BASE_URL = "https://covid19.mathdro.id";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/p0a00a6/Documents/test/cvid/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map