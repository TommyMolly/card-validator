"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcard_validator"] = self["webpackChunkcard_validator"] || []).push([["src_cardValidator_js"],{

/***/ "./src/cardValidator.js":
/*!******************************!*\
  !*** ./src/cardValidator.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   luhnCheck: () => (/* binding */ luhnCheck)\n/* harmony export */ });\nfunction luhnCheck(cardNumber) {\n  const digits = cardNumber.split('').reverse().map(Number);\n  const sum = digits.reduce((acc, digit, idx) => {\n    if (idx % 2 === 1) {\n      let doubled = digit * 2;\n      if (doubled > 9) doubled -= 9;\n      return acc + doubled;\n    }\n    return acc + digit;\n  }, 0);\n\n  return sum % 10 === 0;\n}\n\n\n//# sourceURL=webpack://card-validator/./src/cardValidator.js?\n}");

/***/ })

}]);