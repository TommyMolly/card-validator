"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcard_validator"] = self["webpackChunkcard_validator"] || []).push([["src_paymentSystem_js"],{

/***/ "./src/paymentSystem.js":
/*!******************************!*\
  !*** ./src/paymentSystem.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   detectPaymentSystem: () => (/* binding */ detectPaymentSystem)\n/* harmony export */ });\nfunction detectPaymentSystem(number) {\n  if (/^4/.test(number)) return 'visa';\n  if (/^5[1-5]/.test(number) || /^2(2[2-9]|[3-6]|7[01])/.test(number)) return 'mastercard';\n  if (/^220[0-4]/.test(number)) return 'mir';\n  return null;\n}\n\n\n//# sourceURL=webpack://card-validator/./src/paymentSystem.js?\n}");

/***/ })

}]);