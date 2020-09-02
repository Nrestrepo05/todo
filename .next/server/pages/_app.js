module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userContext */ \"./userContext.js\");\nvar _jsxFileName = \"/home/nrestrepo05/repos/todo/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_userContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsU0FDRSxNQUFDLG9EQUFELENBQWEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL3VzZXJDb250ZXh0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVzZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvdXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./userContext.js":
/*!************************!*\
  !*** ./userContext.js ***!
  \************************/
/*! exports provided: userContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userContext\", function() { return userContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/nrestrepo05/repos/todo/userContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst userContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: isAuth,\n    1: setIsAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token')) return true;\n    return false;\n  });\n  const {\n    0: userToken,\n    1: setUserToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');\n    if (token) return token;\n    return '';\n  });\n  const value = {\n    isAuth,\n    userToken,\n    activateAuth: token => {\n      setIsAuth(true);\n      setUserToken(token);\n      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('token', token);\n    },\n    removeAuth: () => {\n      setIsAuth(false);\n      setUserToken('');\n      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('token');\n    }\n  };\n  return __jsx(userContext.Provider, {\n    value: value,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Provider,\n  Consumer: userContext.Consumer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2VyQ29udGV4dC5qcz8zOTJkIl0sIm5hbWVzIjpbInVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0F1dGgiLCJzZXRJc0F1dGgiLCJ1c2VTdGF0ZSIsImNvb2tpZSIsImdldCIsInVzZXJUb2tlbiIsInNldFVzZXJUb2tlbiIsInRva2VuIiwidmFsdWUiLCJhY3RpdmF0ZUF1dGgiLCJzZXQiLCJyZW1vdmVBdXRoIiwicmVtb3ZlIiwiQ29uc3VtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUdDLDJEQUFhLEVBQWpDOztBQUVQLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsTUFBTTtBQUN6QyxRQUFJQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxDQUFKLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixXQUFPLEtBQVA7QUFDRCxHQUhtQyxDQUFwQztBQUlBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxNQUFNO0FBQy9DLFVBQU1LLEtBQUssR0FBR0osZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBZDtBQUNBLFFBQUlHLEtBQUosRUFBVyxPQUFPQSxLQUFQO0FBQ1gsV0FBTyxFQUFQO0FBQ0QsR0FKeUMsQ0FBMUM7QUFNQSxRQUFNQyxLQUFLLEdBQUc7QUFDWlIsVUFEWTtBQUVaSyxhQUZZO0FBR1pJLGdCQUFZLEVBQUdGLEtBQUQsSUFBVztBQUN2Qk4sZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBSyxrQkFBWSxDQUFDQyxLQUFELENBQVo7QUFDQUosc0RBQU0sQ0FBQ08sR0FBUCxDQUFXLE9BQVgsRUFBb0JILEtBQXBCO0FBQ0QsS0FQVztBQVFaSSxjQUFVLEVBQUUsTUFBTTtBQUNoQlYsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSyxrQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBSCxzREFBTSxDQUFDUyxNQUFQLENBQWMsT0FBZDtBQUNEO0FBWlcsR0FBZDtBQWVBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVKLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsUUFESCxDQURGO0FBS0QsQ0EvQkQ7O0FBaUNlO0FBQ2JELFVBRGE7QUFFYmUsVUFBUSxFQUFFakIsV0FBVyxDQUFDaUI7QUFGVCxDQUFmIiwiZmlsZSI6Ii4vdXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IHVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzQXV0aCwgc2V0SXNBdXRoXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgY29uc3QgW3VzZXJUb2tlbiwgc2V0VXNlclRva2VuXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47XG4gICAgcmV0dXJuICcnO1xuICB9KTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBpc0F1dGgsXG4gICAgdXNlclRva2VuLFxuICAgIGFjdGl2YXRlQXV0aDogKHRva2VuKSA9PiB7XG4gICAgICBzZXRJc0F1dGgodHJ1ZSk7XG4gICAgICBzZXRVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgY29va2llLnNldCgndG9rZW4nLCB0b2tlbik7XG4gICAgfSxcbiAgICByZW1vdmVBdXRoOiAoKSA9PiB7XG4gICAgICBzZXRJc0F1dGgoZmFsc2UpO1xuICAgICAgc2V0VXNlclRva2VuKCcnKTtcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDx1c2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb3ZpZGVyLFxuICBDb25zdW1lcjogdXNlckNvbnRleHQuQ29uc3VtZXIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./userContext.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });