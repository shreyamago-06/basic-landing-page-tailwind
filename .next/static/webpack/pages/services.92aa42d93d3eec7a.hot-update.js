"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./components/Services/ServiceDetails.tsx":
/*!************************************************!*\
  !*** ./components/Services/ServiceDetails.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ \"./components/button.tsx\");\nvar _this = undefined;\n\n\n\nvar ImageContainer = function(param) {\n    var obj = param.obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 pr-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full relative items-center \".concat(obj.classes),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: obj.src,\n                width: \"100%\",\n                className: \"h-inherit\"\n            }, void 0, false, {\n                fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = ImageContainer;\nvar BulletList = function(param) {\n    var lists = param.lists;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex my-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"text-left \",\n            children: lists.map(function(list, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"list-disc mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-extra-bold\",\n                            children: list.title\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 33\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5 text-medium\",\n                            children: list.description\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 33\n                        }, _this1)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 29\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = BulletList;\nvar ServiceDetails = function(param) {\n    var arr = param.arr;\n    var _this2 = _this;\n    // const obj = ServiceJSON[0]\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: arr.map(function(serviceObj, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"section-container h-841 \".concat(serviceObj.classes),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 h-full\",\n                    children: [\n                        serviceObj.image.position === \"left\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContainer, {\n                            obj: serviceObj.image\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 74\n                        }, _this2),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col flex-1 text-left pl-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"service-title mb-5\",\n                                    children: serviceObj.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 37\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-medium\",\n                                    children: serviceObj.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 37\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BulletList, {\n                                    lists: serviceObj.pointers\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 37\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row md:flex-col justify-center items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"cta-description-title text-center my-4 pb-2\",\n                                            children: serviceObj.ctaDescription\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 41\n                                        }, _this2),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"Get in touch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 41\n                                        }, _this2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 37\n                                }, _this2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 33\n                        }, _this2),\n                        serviceObj.image.position === \"right\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContainer, {\n                            obj: serviceObj.image\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 75\n                        }, _this2)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 29\n                }, _this2)\n            }, void 0, false, {\n                fileName: \"/Users/shreyamago/Downloads/basic-landing-page/components/Services/ServiceDetails.tsx\",\n                lineNumber: 57,\n                columnNumber: 25\n            }, _this2);\n        })\n    }, void 0, false);\n};\n_c2 = ServiceDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceDetails);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ImageContainer\");\n$RefreshReg$(_c1, \"BulletList\");\n$RefreshReg$(_c2, \"ServiceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VzL1NlcnZpY2VEZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUI7QUFFSztBQVU5QixJQUFNRSxjQUFjLEdBQUcsZ0JBQXdDO1FBQXJDQyxHQUFHLFNBQUhBLEdBQUc7SUFDekIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBRSxzQ0FBcUMsQ0FBYyxPQUFaRixHQUFHLENBQUNHLE9BQU8sQ0FBRTtzQkFDaEUsNEVBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRUwsR0FBRyxDQUFDSyxHQUFHO2dCQUFFQyxLQUFLLEVBQUUsTUFBTTtnQkFBRUosU0FBUyxFQUFDLFdBQVc7Ozs7O3FCQUFHOzs7OztpQkFDeEQ7Ozs7O2FBQ0osQ0FDVDtDQUNKO0FBUktILEtBQUFBLGNBQWM7QUFXcEIsSUFBTVEsVUFBVSxHQUFHLGdCQUFpRDtRQUE5Q0MsS0FBSyxTQUFMQSxLQUFLOztJQUN2QixxQkFDSSw4REFBQ1AsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztrQkFDdEIsNEVBQUNPLElBQUU7WUFBQ1AsU0FBUyxFQUFDLFlBQVk7c0JBRWxCTSxLQUFLLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztnQkFDdkIscUJBQ0ksOERBQUNDLElBQUU7b0JBQWFYLFNBQVMsRUFBQyxnQkFBZ0I7O3NDQUN0Qyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjtzQ0FBRVMsSUFBSSxDQUFDRyxLQUFLOzs7OztrQ0FBTztzQ0FDbkQsOERBQUNiLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxrQkFBa0I7c0NBQzVCUyxJQUFJLENBQUNJLFdBQVc7Ozs7O2tDQUNmOzttQkFKREgsS0FBSzs7OzswQkFLVCxDQUNSO2FBRUosQ0FBQzs7Ozs7aUJBRUw7Ozs7O2FBQ0gsQ0FDVDtDQUNKO0FBcEJLTCxNQUFBQSxVQUFVO0FBdUJoQixJQUFNUyxjQUFjLEdBQUcsZ0JBQXFDO1FBQWxDQyxHQUFHLFNBQUhBLEdBQUc7O0lBQ3pCLDZCQUE2QjtJQUU3QixxQkFDSTtrQkFJUUEsR0FBRyxDQUFDUCxHQUFHLENBQUMsU0FBQ1EsVUFBVSxFQUFFTixLQUFLLEVBQUs7WUFDM0IscUJBQ0ksOERBQUNYLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRSwwQkFBeUIsQ0FBcUIsT0FBbkJnQixVQUFVLENBQUNmLE9BQU8sQ0FBRTswQkFDM0QsNEVBQUNGLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw2QkFBNkI7O3dCQUV2Q2dCLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEtBQUssTUFBTSxrQkFBSSw4REFBQ3JCLGNBQWM7NEJBQUNDLEdBQUcsRUFBRWtCLFVBQVUsQ0FBQ0MsS0FBSzs7Ozs7a0NBQUk7c0NBQ2xGLDhEQUFDbEIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7OENBQ2hELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhDQUFFZ0IsVUFBVSxDQUFDSixLQUFLOzs7OzswQ0FBTzs4Q0FDNUQsOERBQUNiLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxhQUFhOzhDQUFHZ0IsVUFBVSxDQUFDSCxXQUFXOzs7OzswQ0FBTzs4Q0FDNUQsOERBQUNSLFVBQVU7b0NBQUNDLEtBQUssRUFBRVUsVUFBVSxDQUFDRyxRQUFROzs7OzswQ0FBSTs4Q0FDMUMsOERBQUNwQixLQUFHO29DQUFDQyxTQUFTLEVBQUMsdURBQXVEOztzREFDbEUsOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyw2Q0FBNkM7c0RBQ3ZEZ0IsVUFBVSxDQUFDSSxjQUFjOzs7OztrREFFeEI7c0RBSU4sOERBQUN4QiwrQ0FBTTs0Q0FBQ3lCLElBQUksRUFBQyxjQUFjOzs7OztrREFBRzs7Ozs7OzBDQUU1Qjs7Ozs7O2tDQUVKO3dCQUVMTCxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxLQUFLLE9BQU8sa0JBQUksOERBQUNyQixjQUFjOzRCQUFDQyxHQUFHLEVBQUVrQixVQUFVLENBQUNDLEtBQUs7Ozs7O2tDQUFJOzs7Ozs7MEJBRWpGOzs7OztzQkFFSixDQUNUO1NBQ0osQ0FBQztxQkFHUCxDQUlOO0NBQ0o7QUE5Q0tILE1BQUFBLGNBQWM7QUFnRHBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VydmljZXMvU2VydmljZURldGFpbHMudHN4PzJhNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFNlcnZpY2VUeXBlLCBTZXJ2aWNlUG9pbnRlcnNUeXBlLCBTZXJ2aWNlSW1hZ2VUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uVHlwZXMnXG50eXBlIEltYWdlQ29udGFpbmVyUHJvcFR5cGVzID0ge1xuICAgIHNyYzogc3RyaW5nXG59XG5cblxuXG5cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSAoeyBvYmogfTogeyBvYmo6IFNlcnZpY2VJbWFnZVR5cGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgcHItNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgcmVsYXRpdmUgaXRlbXMtY2VudGVyICR7b2JqLmNsYXNzZXN9YH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e29iai5zcmN9IHdpZHRoPXsnMTAwJSd9IGNsYXNzTmFtZT1cImgtaW5oZXJpdFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmNvbnN0IEJ1bGxldExpc3QgPSAoeyBsaXN0cyB9OiB7IGxpc3RzOiBTZXJ2aWNlUG9pbnRlcnNUeXBlW10gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG15LTQnPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ndGV4dC1sZWZ0ICc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1leHRyYS1ib2xkJz57bGlzdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgdGV4dC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuY29uc3QgU2VydmljZURldGFpbHMgPSAoeyBhcnIgfTogeyBhcnI6IFNlcnZpY2VUeXBlW10gfSkgPT4ge1xuICAgIC8vIGNvbnN0IG9iaiA9IFNlcnZpY2VKU09OWzBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuXG5cbiAgICAgICAgICAgICAgICBhcnIubWFwKChzZXJ2aWNlT2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uLWNvbnRhaW5lciBoLTg0MSAke3NlcnZpY2VPYmouY2xhc3Nlc31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LTEgaC1mdWxsJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZU9iai5pbWFnZS5wb3NpdGlvbiA9PT0gJ2xlZnQnICYmIDxJbWFnZUNvbnRhaW5lciBvYmo9e3NlcnZpY2VPYmouaW1hZ2V9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LTEgdGV4dC1sZWZ0IHBsLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UtdGl0bGUgbWItNSc+e3NlcnZpY2VPYmoudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1tZWRpdW0nID57c2VydmljZU9iai5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdWxsZXRMaXN0IGxpc3RzPXtzZXJ2aWNlT2JqLnBvaW50ZXJzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbWQ6ZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3RhLWRlc2NyaXB0aW9uLXRpdGxlIHRleHQtY2VudGVyIG15LTQgcGItMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlT2JqLmN0YURlc2NyaXB0aW9ufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiR2V0IGluIHRvdWNoXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VPYmouaW1hZ2UucG9zaXRpb24gPT09ICdyaWdodCcgJiYgPEltYWdlQ29udGFpbmVyIG9iaj17c2VydmljZU9iai5pbWFnZX0gLz59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuXG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZURldGFpbHMiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJJbWFnZUNvbnRhaW5lciIsIm9iaiIsImRpdiIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJpbWciLCJzcmMiLCJ3aWR0aCIsIkJ1bGxldExpc3QiLCJsaXN0cyIsInVsIiwibWFwIiwibGlzdCIsImluZGV4IiwibGkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiU2VydmljZURldGFpbHMiLCJhcnIiLCJzZXJ2aWNlT2JqIiwiaW1hZ2UiLCJwb3NpdGlvbiIsInBvaW50ZXJzIiwiY3RhRGVzY3JpcHRpb24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Services/ServiceDetails.tsx\n");

/***/ })

});