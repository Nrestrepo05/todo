webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateToDo.js":
/*!**********************************!*\
  !*** ./components/CreateToDo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userContext */ \"./userContext.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ \"./components/Input.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInputValue */ \"./hooks/useInputValue.js\");\n/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextArea */ \"./components/TextArea.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/nrestrepo05/repos/todo/components/CreateToDo.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar CreateToDo = function CreateToDo(_ref) {\n  _s();\n\n  var buttonOnClick = _ref.buttonOnClick;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_userContext__WEBPACK_IMPORTED_MODULE_6__[\"userContext\"]),\n      userToken = _useContext.userToken;\n\n  var title = Object(_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('');\n  var description = Object(_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('');\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      titleError = _useState[0],\n      setTitleError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      descriptionError = _useState2[0],\n      setDescriptionError = _useState2[1];\n\n  var handleCreateToDoSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var request, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return fetch('https://todo-nrestrepo05-api.herokuapp.com/api/v1/todo/', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json',\n                  Authorization: \"Token \".concat(userToken)\n                },\n                body: JSON.stringify({\n                  title: title.value.trim(),\n                  description: description.value.trim()\n                })\n              });\n\n            case 4:\n              request = _context.sent;\n              _context.next = 7;\n              return request.json();\n\n            case 7:\n              data = _context.sent;\n\n              if (request.status === 400) {\n                if (data.title && data.description) {\n                  setTitleError(data.title);\n                  setDescriptionError(data.description);\n                }\n\n                if (data.title) setTitleError(data.title);\n                if (data.description) setDescriptionError(data.description);\n              }\n\n              if (!(request.status === 201)) {\n                _context.next = 11;\n                break;\n              }\n\n              return _context.abrupt(\"return\", router.reload('/'));\n\n            case 11:\n              return _context.abrupt(\"return\", '');\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](1);\n              return _context.abrupt(\"return\", _context.t0);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 14]]);\n    }));\n\n    return function handleCreateToDoSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2225011019\" + \" \" + \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    type: \"button\",\n    onClick: buttonOnClick,\n    className: \"jsx-2225011019\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"x\"), __jsx(_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: \"New To Do!\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    placeholder: \"title\",\n    name: \"title\"\n  }, title, {\n    error: titleError,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  })), __jsx(_TextArea__WEBPACK_IMPORTED_MODULE_11__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    placeholder: \"description\",\n    name: \"description\"\n  }, description, {\n    error: descriptionError,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: handleCreateToDoSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"Create!\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"2225011019\",\n    __self: _this\n  }, \".container.jsx-2225011019{background:rgba(0,0,0,.75);height:100vh;position:fixed;left:0;right:0;top:0;bottom:0;z-index:999999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button.jsx-2225011019{position:absolute;width:30px;height:30px;top:15px;right:15px;outline:none;background:white;border:2px solid white;border-radius:50%;font-size:18px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yZXN0cmVwbzA1L3JlcG9zL3RvZG8vY29tcG9uZW50cy9DcmVhdGVUb0RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFUyxBQUcyQyxBQWFaLGtCQUNQLFNBYkUsRUFjRCxXQWJHLENBY04sU0FDRSxLQWRKLE1BZU0sQ0FkTCxRQUNGLElBY1csRUFiUixTQUNNLE1BYVEsU0FaVixjQWFLLGtCQUNILGVBQ2pCLDJCQWRxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL2hvbWUvbnJlc3RyZXBvMDUvcmVwb3MvdG9kby9jb21wb25lbnRzL0NyZWF0ZVRvRG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZXJDb250ZXh0IH0gZnJvbSAnLi4vdXNlckNvbnRleHQnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHVzZUlucHV0VmFsdWUgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXRWYWx1ZSc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSc7XG5cbmNvbnN0IENyZWF0ZVRvRG8gPSAoeyBidXR0b25PbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgeyB1c2VyVG9rZW4gfSA9IHVzZUNvbnRleHQodXNlckNvbnRleHQpO1xuICBjb25zdCB0aXRsZSA9IHVzZUlucHV0VmFsdWUoJycpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHVzZUlucHV0VmFsdWUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3RpdGxlRXJyb3IsIHNldFRpdGxlRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVzY3JpcHRpb25FcnJvciwgc2V0RGVzY3JpcHRpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVG9Eb1N1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdG9kby1ucmVzdHJlcG8wNS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdG9kby8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gJHt1c2VyVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZS50cmltKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLnRyaW0oKSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIGlmIChkYXRhLnRpdGxlICYmIGRhdGEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBzZXRUaXRsZUVycm9yKGRhdGEudGl0bGUpO1xuICAgICAgICAgIHNldERlc2NyaXB0aW9uRXJyb3IoZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEudGl0bGUpIHNldFRpdGxlRXJyb3IoZGF0YS50aXRsZSk7XG4gICAgICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uKSBzZXREZXNjcmlwdGlvbkVycm9yKGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5yZWxvYWQoJy8nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtidXR0b25PbkNsaWNrfT5cbiAgICAgICAgICB4XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Rm9ybSB0aXRsZT1cIk5ldyBUbyBEbyFcIj5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHsuLi50aXRsZX0gZXJyb3I9e3RpdGxlRXJyb3J9IC8+XG4gICAgICAgICAgPFRleHRBcmVhIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB7Li4uZGVzY3JpcHRpb259IGVycm9yPXtkZXNjcmlwdGlvbkVycm9yfSAvPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9Eb1N1Ym1pdH0+XG4gICAgICAgICAgICBDcmVhdGUhXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUb0RvO1xuIl19 */\\n/*@ sourceURL=/home/nrestrepo05/repos/todo/components/CreateToDo.js */\"));\n};\n\n_s(CreateToDo, \"U3d5m5FdusdynchSFHAsVYuyhNw=\", false, function () {\n  return [_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_10__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = CreateToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateToDo);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateToDo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVUb0RvLmpzPzM4NjIiXSwibmFtZXMiOlsiQ3JlYXRlVG9EbyIsImJ1dHRvbk9uQ2xpY2siLCJ1c2VDb250ZXh0IiwidXNlckNvbnRleHQiLCJ1c2VyVG9rZW4iLCJ0aXRsZSIsInVzZUlucHV0VmFsdWUiLCJkZXNjcmlwdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGl0bGVFcnJvciIsInNldFRpdGxlRXJyb3IiLCJkZXNjcmlwdGlvbkVycm9yIiwic2V0RGVzY3JpcHRpb25FcnJvciIsImhhbmRsZUNyZWF0ZVRvRG9TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWx1ZSIsInRyaW0iLCJyZXF1ZXN0IiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxvQkFDbEJDLHdEQUFVLENBQUNDLHdEQUFELENBRFE7QUFBQSxNQUNoQ0MsU0FEZ0MsZUFDaENBLFNBRGdDOztBQUV4QyxNQUFNQyxLQUFLLEdBQUdDLHFFQUFhLENBQUMsRUFBRCxDQUEzQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0QscUVBQWEsQ0FBQyxFQUFELENBQWpDO0FBQ0EsTUFBTUUsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFKd0Msa0JBS0pDLHNEQUFRLENBQUMsRUFBRCxDQUxKO0FBQUEsTUFLakNDLFVBTGlDO0FBQUEsTUFLckJDLGFBTHFCOztBQUFBLG1CQU1RRixzREFB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VTtBQXVGU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVRvRG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZXJDb250ZXh0IH0gZnJvbSAnLi4vdXNlckNvbnRleHQnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHVzZUlucHV0VmFsdWUgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXRWYWx1ZSc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSc7XG5cbmNvbnN0IENyZWF0ZVRvRG8gPSAoeyBidXR0b25PbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgeyB1c2VyVG9rZW4gfSA9IHVzZUNvbnRleHQodXNlckNvbnRleHQpO1xuICBjb25zdCB0aXRsZSA9IHVzZUlucHV0VmFsdWUoJycpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHVzZUlucHV0VmFsdWUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3RpdGxlRXJyb3IsIHNldFRpdGxlRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVzY3JpcHRpb25FcnJvciwgc2V0RGVzY3JpcHRpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVG9Eb1N1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdG9kby1ucmVzdHJlcG8wNS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdG9kby8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gJHt1c2VyVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZS50cmltKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLnRyaW0oKSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIGlmIChkYXRhLnRpdGxlICYmIGRhdGEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBzZXRUaXRsZUVycm9yKGRhdGEudGl0bGUpO1xuICAgICAgICAgIHNldERlc2NyaXB0aW9uRXJyb3IoZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEudGl0bGUpIHNldFRpdGxlRXJyb3IoZGF0YS50aXRsZSk7XG4gICAgICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uKSBzZXREZXNjcmlwdGlvbkVycm9yKGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5yZWxvYWQoJy8nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtidXR0b25PbkNsaWNrfT5cbiAgICAgICAgICB4XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Rm9ybSB0aXRsZT1cIk5ldyBUbyBEbyFcIj5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHsuLi50aXRsZX0gZXJyb3I9e3RpdGxlRXJyb3J9IC8+XG4gICAgICAgICAgPFRleHRBcmVhIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB7Li4uZGVzY3JpcHRpb259IGVycm9yPXtkZXNjcmlwdGlvbkVycm9yfSAvPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9Eb1N1Ym1pdH0+XG4gICAgICAgICAgICBDcmVhdGUhXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUb0RvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateToDo.js\n");

/***/ })

})