"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register/page",{

/***/ "(app-pages-browser)/./components/Auth/SignupForm.jsx":
/*!****************************************!*\
  !*** ./components/Auth/SignupForm.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _schema_validationSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/schema/validationSchema */ \"(app-pages-browser)/./schema/validationSchema.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SignupForm = ()=>{\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_schema_validationSchema__WEBPACK_IMPORTED_MODULE_1__.signupSchema),\n        defaultValues: {\n            name: \"\",\n            email: \"\",\n            password: \"\"\n        }\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid w-full items-center ga\",\n        children: \"signup\"\n    }, void 0, false, {\n        fileName: \"/Users/ivandjoh/Downloads/NON-PROJECTS/COLLECTIONS/github/workflow/components/Auth/SignupForm.jsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SignupForm, \"LnxCp0LZNyQfTW3LQmB6WY+7Ju0=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = SignupForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupForm);\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aC9TaWdudXBGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDakI7QUFDRTtBQUNZO0FBRXRELE1BQU1LLGFBQWE7O0lBQ2pCLE1BQU1DLE9BQU9ILHdEQUFPQSxDQUFDO1FBQ25CSSxVQUFVSCxvRUFBV0EsQ0FBQ0osa0VBQVlBO1FBQ2xDUSxlQUFlO1lBQ2JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkMscUJBQU8sOERBQUNjO1FBQUlDLFdBQVU7a0JBQThCOzs7Ozs7QUFDdEQ7R0FkTVo7O1FBQ1NGLG9EQUFPQTs7O0tBRGhCRTtBQWdCTixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2l2YW5kam9oL0Rvd25sb2Fkcy9OT04tUFJPSkVDVFMvQ09MTEVDVElPTlMvZ2l0aHViL3dvcmtmbG93L2NvbXBvbmVudHMvQXV0aC9TaWdudXBGb3JtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgc2lnbnVwU2NoZW1hIH0gZnJvbSBcIkAvc2NoZW1hL3ZhbGlkYXRpb25TY2hlbWFcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoc2lnbnVwU2NoZW1hKSxcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGl0ZW1zLWNlbnRlciBnYVwiPnNpZ251cDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07XG4iXSwibmFtZXMiOlsic2lnbnVwU2NoZW1hIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ6b2RSZXNvbHZlciIsIlNpZ251cEZvcm0iLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Auth/SignupForm.jsx\n"));

/***/ })

});