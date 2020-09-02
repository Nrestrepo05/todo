webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useRedirectToLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRedirectToLogin */ \"./hooks/useRedirectToLogin.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_CardsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardsContainer */ \"./components/CardsContainer.js\");\n/* harmony import */ var _components_CreateToDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CreateToDo */ \"./components/CreateToDo.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/nrestrepo05/repos/todo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar index = function index(_ref) {\n  _s();\n\n  var allToDoList = _ref.allToDoList,\n      toDoListWithQuery = _ref.toDoListWithQuery,\n      done = _ref.done,\n      statusCode = _ref.statusCode;\n\n  if (statusCode !== 200) {\n    return __jsx(_error__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      statusCode: statusCode,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 12\n      }\n    });\n  }\n\n  Object(_hooks_useRedirectToLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      createToDoIsActive = _useState[0],\n      setCreateToDoIsActive = _useState[1];\n\n  var handleModalClick = function handleModalClick() {\n    if (createToDoIsActive) return setCreateToDoIsActive(false);\n    return setCreateToDoIsActive(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"To Do Page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-103142623\" + \" \" + \"button-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"New To Do!\"), createToDoIsActive ? __jsx(_components_CreateToDo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    buttonOnClick: handleModalClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }) : ''), allToDoList ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_CardsContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"To Do\",\n    toDoList: allToDoList.filter(function (toDo) {\n      return toDo.done === false;\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }), __jsx(_components_CardsContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Done\",\n    toDoList: allToDoList.filter(function (toDo) {\n      return toDo.done === true;\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  })) : toDoListWithQuery && !!done ? __jsx(_components_CardsContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Done\",\n    toDoList: toDoListWithQuery,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }) : __jsx(_components_CardsContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"To Do\",\n    toDoList: toDoListWithQuery,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"103142623\",\n    __self: _this\n  }, \"*{margin:0;padding:0;}.button-container{margin:10px 50px 0 50px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yZXN0cmVwbzA1L3JlcG9zL3RvZG8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RTLEFBR3NCLEFBSWUsU0FIZCxVQUNaLEtBR0EiLCJmaWxlIjoiL2hvbWUvbnJlc3RyZXBvMDUvcmVwb3MvdG9kby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSZWRpcmVjdFRvTG9naW4gZnJvbSAnLi4vaG9va3MvdXNlUmVkaXJlY3RUb0xvZ2luJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgQ2FyZHNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkc0NvbnRhaW5lcic7XG5pbXBvcnQgQ3JlYXRlVG9EbyBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVRvRG8nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJ1xuXG5jb25zdCBpbmRleCA9ICh7XG4gIGFsbFRvRG9MaXN0LCB0b0RvTGlzdFdpdGhRdWVyeSwgZG9uZSwgc3RhdHVzQ29kZSxcbn0pID0+IHtcbiAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz47XG4gIH1cblxuICB1c2VSZWRpcmVjdFRvTG9naW4oKTtcblxuICBjb25zdCBbY3JlYXRlVG9Eb0lzQWN0aXZlLCBzZXRDcmVhdGVUb0RvSXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGNyZWF0ZVRvRG9Jc0FjdGl2ZSkgcmV0dXJuIHNldENyZWF0ZVRvRG9Jc0FjdGl2ZShmYWxzZSk7XG4gICAgcmV0dXJuIHNldENyZWF0ZVRvRG9Jc0FjdGl2ZSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHRpdGxlPVwiVG8gRG8gUGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2xpY2t9PlxuICAgICAgICAgICAgTmV3IFRvIERvIVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9Jc0FjdGl2ZVxuICAgICAgICAgICAgICA/IDxDcmVhdGVUb0RvIGJ1dHRvbk9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2xpY2t9IC8+XG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWxsVG9Eb0xpc3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDYXJkc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVG8gRG9cIlxuICAgICAgICAgICAgICAgIHRvRG9MaXN0PXthbGxUb0RvTGlzdC5maWx0ZXIoKHRvRG8pID0+IHRvRG8uZG9uZSA9PT0gZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZHNDb250YWluZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRvbmVcIlxuICAgICAgICAgICAgICAgIHRvRG9MaXN0PXthbGxUb0RvTGlzdC5maWx0ZXIoKHRvRG8pID0+IHRvRG8uZG9uZSA9PT0gdHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgICAgOiB0b0RvTGlzdFdpdGhRdWVyeSAmJiAhIWRvbmVcbiAgICAgICAgICAgID8gPENhcmRzQ29udGFpbmVyIHRpdGxlPVwiRG9uZVwiIHRvRG9MaXN0PXt0b0RvTGlzdFdpdGhRdWVyeX0gLz5cbiAgICAgICAgICAgIDogPENhcmRzQ29udGFpbmVyIHRpdGxlPVwiVG8gRG9cIiB0b0RvTGlzdD17dG9Eb0xpc3RXaXRoUXVlcnl9IC8+fVxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCA1MHB4IDAgNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcXVlcnksIHJlcyB9KSB7XG4gIHRyeSB7XG4gICAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJz0nKVsxXTtcbiAgICAgIGNvbnN0IGF1dGhvcml6YXRpb24gPSBgVG9rZW4gJHt0b2tlbn1gO1xuICAgICAgbGV0IHVybCA9ICdodHRwczovL3RvZG8tbnJlc3RyZXBvMDUtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RvZG8vJztcblxuICAgICAgaWYgKHF1ZXJ5LmRvbmUpIHtcbiAgICAgICAgdXJsID0gYCR7dXJsfT9kb25lPSR7cXVlcnkuZG9uZX1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvRG9SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RXaXRoUXVlcnkgPSB0b0RvUmVzcG9uc2U7XG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHRvRG9MaXN0V2l0aFF1ZXJ5LCBkb25lOiBxdWVyeS5kb25lLCBzdGF0dXNDb2RlOiAyMDAgfSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9Eb1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgYWxsVG9Eb0xpc3QgPSB0b0RvUmVzcG9uc2U7XG5cbiAgICAgIGlmIChyZXEuc3RhdHVzID49IDQwMCkge1xuICAgICAgICByZXEuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFsbFRvRG9MaXN0OiBudWxsLCBzdGF0dXNDb2RlOiByZXEuc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGFsbFRvRG9MaXN0LCBzdGF0dXNDb2RlOiAyMDAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHByb3BzOiB7IH0gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDUwMztcbiAgICByZXR1cm4gZXJyb3IsIHsgcHJvcHM6IHthbGxUb0RvTGlzdDogbnVsbCwgc3RhdHVzQ29kZTogNTAzfX07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXX0= */\\n/*@ sourceURL=/home/nrestrepo05/repos/todo/pages/index.js */\"));\n};\n\n_s(index, \"+ZZGJC4ZUKNKOErUj9cnrs1iqiw=\", false, function () {\n  return [_hooks_useRedirectToLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbmRleCIsImFsbFRvRG9MaXN0IiwidG9Eb0xpc3RXaXRoUXVlcnkiLCJkb25lIiwic3RhdHVzQ29kZSIsInVzZVJlZGlyZWN0VG9Mb2dpbiIsInVzZVN0YXRlIiwiY3JlYXRlVG9Eb0lzQWN0aXZlIiwic2V0Q3JlYXRlVG9Eb0lzQWN0aXZlIiwiaGFuZGxlTW9kYWxDbGljayIsImZpbHRlciIsInRvRG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FFUjtBQUFBOztBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTtBQUFBLE1BRFNDLGlCQUNULFFBRFNBLGlCQUNUO0FBQUEsTUFENEJDLElBQzVCLFFBRDRCQSxJQUM1QjtBQUFBLE1BRGtDQyxVQUNsQyxRQURrQ0EsVUFDbEM7O0FBQ0osTUFBSUEsVUFBVSxLQUFLLEdBQW5CLEVBQXdCO0FBQ3RCLFdBQU8sTUFBQyw4Q0FBRDtBQUFPLGdCQUFVLEVBQUVBLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVEQywyRUFBa0I7O0FBTGQsa0JBT2dEQyxzREFBUSxDQUFDLEtBQUQsQ0FQeEQ7QUFBQSxNQU9HQyxrQkFQSDtBQUFBLE1BT3VCQyxxQkFQdkI7O0FBU0osTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUlGLGtCQUFKLEVBQXdCLE9BQU9DLHFCQUFxQixDQUFDLEtBQUQsQ0FBNUI7QUFDeEIsV0FBT0EscUJBQXFCLENBQUMsSUFBRCxDQUE1QjtBQUNELEdBSEQ7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUVDLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBS0lGLGtCQUFrQixHQUNkLE1BQUMsOERBQUQ7QUFBWSxpQkFBYSxFQUFFRSxnQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURjLEdBRWQsRUFQUixDQURGLEVBV0dSLFdBQVcsR0FFUixtRUFDRSxNQUFDLGtFQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxZQUFRLEVBQUVBLFdBQVcsQ0FBQ1MsTUFBWixDQUFtQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDUixJQUFMLEtBQWMsS0FBeEI7QUFBQSxLQUFuQixDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFlBQVEsRUFBRUYsV0FBVyxDQUFDUyxNQUFaLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNSLElBQUwsS0FBYyxJQUF4QjtBQUFBLEtBQW5CLENBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBRlEsR0FhUkQsaUJBQWlCLElBQUksQ0FBQyxDQUFDQyxJQUF2QixHQUNFLE1BQUMsa0VBQUQ7QUFBZ0IsU0FBSyxFQUFDLE1BQXRCO0FBQTZCLFlBQVEsRUFBRUQsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixHQUVFLE1BQUMsa0VBQUQ7QUFBZ0IsU0FBSyxFQUFDLE9BQXRCO0FBQThCLFlBQVEsRUFBRUEsaUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQlIsQ0FERjtBQUFBO0FBQUE7QUFBQSw2MUpBREY7QUEyQ0QsQ0EzREQ7O0dBQU1GLEs7VUFPSkssaUU7Ozs7QUFxR2FMLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUmVkaXJlY3RUb0xvZ2luIGZyb20gJy4uL2hvb2tzL3VzZVJlZGlyZWN0VG9Mb2dpbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IENhcmRzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZHNDb250YWluZXInO1xuaW1wb3J0IENyZWF0ZVRvRG8gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVUb0RvJztcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcblxuY29uc3QgaW5kZXggPSAoe1xuICBhbGxUb0RvTGlzdCwgdG9Eb0xpc3RXaXRoUXVlcnksIGRvbmUsIHN0YXR1c0NvZGUsXG59KSA9PiB7XG4gIGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuICB9XG5cbiAgdXNlUmVkaXJlY3RUb0xvZ2luKCk7XG5cbiAgY29uc3QgW2NyZWF0ZVRvRG9Jc0FjdGl2ZSwgc2V0Q3JlYXRlVG9Eb0lzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsaWNrID0gKCkgPT4ge1xuICAgIGlmIChjcmVhdGVUb0RvSXNBY3RpdmUpIHJldHVybiBzZXRDcmVhdGVUb0RvSXNBY3RpdmUoZmFsc2UpO1xuICAgIHJldHVybiBzZXRDcmVhdGVUb0RvSXNBY3RpdmUodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCB0aXRsZT1cIlRvIERvIFBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNb2RhbENsaWNrfT5cbiAgICAgICAgICAgIE5ldyBUbyBEbyFcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjcmVhdGVUb0RvSXNBY3RpdmVcbiAgICAgICAgICAgICAgPyA8Q3JlYXRlVG9EbyBidXR0b25PbkNsaWNrPXtoYW5kbGVNb2RhbENsaWNrfSAvPlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FsbFRvRG9MaXN0XG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q2FyZHNDb250YWluZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlRvIERvXCJcbiAgICAgICAgICAgICAgICB0b0RvTGlzdD17YWxsVG9Eb0xpc3QuZmlsdGVyKCh0b0RvKSA9PiB0b0RvLmRvbmUgPT09IGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhcmRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEb25lXCJcbiAgICAgICAgICAgICAgICB0b0RvTGlzdD17YWxsVG9Eb0xpc3QuZmlsdGVyKCh0b0RvKSA9PiB0b0RvLmRvbmUgPT09IHRydWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogdG9Eb0xpc3RXaXRoUXVlcnkgJiYgISFkb25lXG4gICAgICAgICAgICA/IDxDYXJkc0NvbnRhaW5lciB0aXRsZT1cIkRvbmVcIiB0b0RvTGlzdD17dG9Eb0xpc3RXaXRoUXVlcnl9IC8+XG4gICAgICAgICAgICA6IDxDYXJkc0NvbnRhaW5lciB0aXRsZT1cIlRvIERvXCIgdG9Eb0xpc3Q9e3RvRG9MaXN0V2l0aFF1ZXJ5fSAvPn1cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggNTBweCAwIDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHF1ZXJ5LCByZXMgfSkge1xuICB0cnkge1xuICAgIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc9JylbMV07XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gYFRva2VuICR7dG9rZW59YDtcbiAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly90b2RvLW5yZXN0cmVwbzA1LWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS90b2RvLyc7XG5cbiAgICAgIGlmIChxdWVyeS5kb25lKSB7XG4gICAgICAgIHVybCA9IGAke3VybH0/ZG9uZT0ke3F1ZXJ5LmRvbmV9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b0RvUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0V2l0aFF1ZXJ5ID0gdG9Eb1Jlc3BvbnNlO1xuICAgICAgICByZXR1cm4geyBwcm9wczogeyB0b0RvTGlzdFdpdGhRdWVyeSwgZG9uZTogcXVlcnkuZG9uZSwgc3RhdHVzQ29kZTogMjAwIH0gfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRvRG9SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IGFsbFRvRG9MaXN0ID0gdG9Eb1Jlc3BvbnNlO1xuXG4gICAgICBpZiAocmVxLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgcmVxLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhbGxUb0RvTGlzdDogbnVsbCwgc3RhdHVzQ29kZTogcmVxLnN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBhbGxUb0RvTGlzdCwgc3RhdHVzQ29kZTogMjAwIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBwcm9wczogeyB9IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDM7XG4gICAgcmV0dXJuIGVycm9yLCB7IHByb3BzOiB7YWxsVG9Eb0xpc3Q6IG51bGwsIHN0YXR1c0NvZGU6IDUwM319O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})