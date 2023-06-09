/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/YatraOne-Regular.ttf */ \"./dist/fonts/YatraOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/Merriweather-Light.ttf */ \"./dist/fonts/Merriweather-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --header-color: #8E9AAF;\\n    --project-section-color: #CBC0D3;\\n    --todo-section-color: #FEEAFA;\\n}\\n\\n@font-face {\\n    font-family: 'Yatra One';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n    font-family: 'Merriweather';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    width: 100vw;\\n    height: 100vh;\\n    overflow: hidden;\\n    background: var(--todo-section-color);\\n}\\n\\n.todo-app {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 7vh;\\n    background: var(--header-color);\\n    font-family: 'Yatra One';\\n    font-size: 2.5rem;\\n    padding: 40px 0;\\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\\n    z-index: 5;\\n}\\n\\n.container {\\n    width: 100%;\\n    height: calc(100vh - 7vh);\\n    display: grid;\\n    grid-template-columns: minmax(17rem, 1fr) 4fr;\\n}\\n\\n.project-container {\\n    grid-column: 1 / 2;\\n    background: var(--project-section-color);\\n    padding: 50px 40px 0;\\n}\\n\\n.todo-container {\\n    position: relative;\\n    grid-column: 2 / 3;\\n    background: var(--todo-section-color);\\n}\\n\\n.project {\\n    display: flex;\\n    gap: 15px;\\n    font-size: 23px;\\n    font-family: 'Merriweather';\\n    font-weight: 600;\\n    padding: 10px 25px;\\n    margin: 7px 0;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    transition: 0.3s ease-in-out;\\n}\\n\\n.created-projects h1 {\\n    margin-top: 20px;\\n    font-size: 2.5rem;\\n}\\n\\n.created-projects .create-new-project-btn {\\n    display: flex;\\n    justify-content: center;\\n    width: 90%;\\n    font-size: 23px;\\n    text-align: center;\\n    border: 1px solid #000;\\n    margin-top: 15px;\\n    margin-left: 50%;\\n    transform: translateX(-50%);\\n    padding: 7px 0;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    background: var(--project-section-color);\\n    transition: 0.3s ease-in-out;\\n}\\n\\n.created-projects .create-new-project-btn:hover, .project:hover, .new-project:hover {\\n    background: #b0a0bb;\\n}\\n\\n.add-project-icon {\\n    font-size: 20px;\\n    padding-right: 10px;\\n}\\n\\n.new-projects-container {\\n    padding-top: 20px;\\n    max-height: 25rem;\\n    overflow-y: auto;\\n}\\n\\n.new-projects-container::-webkit-scrollbar {\\n    width: 10px;\\n}\\n\\n.new-projects-container::-webkit-scrollbar-thumb {\\n    border-radius: 5px;\\n    background-color: var(--header-color);\\n}\\n\\n.new-project {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 10px 25px;\\n    margin: 7px;\\n    font-size: 23px;\\n    cursor: pointer;\\n    width: 95%;\\n    border-radius: 5px;\\n}\\n\\n.fa-trash {\\n    display: none;\\n}\\n\\n.new-project:hover .fa-trash {\\n    display: block;\\n}\\n\\n.modal {\\n    position: absolute;\\n    inset: 0;\\n    margin: auto;\\n}\\n\\n.add-project-modal-window {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2em;\\n    padding: 3em 5em;\\n}\\n\\n.add-project-modal-window .add-project-name {\\n    font-size: 1.3rem;\\n    padding: 0.3em;\\n    border: none;\\n    border-bottom: 1px solid #000;\\n    font-family: 'Merriweather';\\n}\\n\\n.add-project-modal-window .add-project-name:focus {\\n    outline-color: transparent;\\n    border-bottom: 2px solid #000;\\n}\\n\\n.add-project-window-btns {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.name-project-btn {\\n    padding: 0.5em 1em;\\n    font-size: 1.1rem;\\n    min-width: 5.5em;\\n    font-family: 'Merriweather';\\n    font-weight: 600;\\n    border: 1px solid #000;\\n    cursor: pointer;\\n    border-radius: 5px;\\n}\\n\\n.name-project-btn:first-of-type {\\n    background: var(--project-section-color);\\n}\\n\\n.name-project-btn:nth-of-type(2) {\\n    background: var(--project-section-color);\\n}\\n\\n.items {\\n    width: 70%;\\n    margin-inline: auto;\\n    padding: 2em 0;\\n}\\n\\n.todo-container {\\n    overflow-y: auto;\\n}\\n\\n.todo-container::-webkit-scrollbar {\\n    width: 10px;\\n    padding-left: 15px;\\n}\\n\\n.todo-container::-webkit-scrollbar-thumb {\\n    background: var(--header-color);\\n    border-radius: 10px;\\n}\\n\\n.todo-item__task {\\n    display: flex;\\n    justify-content: space-between;\\n    font-size: 1.35rem;\\n    padding: 1.3em;\\n    margin: 1em 0;\\n    border-radius: 0.3em;\\n    background: #ede0d4;\\n    transform: scale(1);\\n    transition: 0.3s ease-in-out;\\n    box-shadow: 1px 1px 5px rgb(0 0 0 / 0.5);\\n}\\n\\n.todo-item__task:hover {\\n    transform: scale(1.03);\\n}\\n\\n.todo-item__task .fa-pen-to-square, .todo-item__task .fa-delete-left {\\n    cursor: pointer;\\n}\\n\\n.todo-item__task .wrap-todo-item {\\n    display: flex;\\n    gap: 1em;\\n    align-items: center;\\n}\\n\\n.todo-item__task .options {\\n    display: flex;\\n    align-items: center;\\n    gap: 1em;\\n}\\n\\n.wrap-todo-item label {\\n    position: relative;\\n}\\n\\n.wrap-todo-item input[type=\\\"checkbox\\\"] {\\n    appearance: none;\\n    -webkit-appearance: none;\\n    background: var(--header-color);\\n    width: 1rem;\\n    height: 1rem;\\n    box-shadow: 2px -2px rgb(0 0 0 / 0.7);\\n    transition: all 0.3s ease-in-out;\\n}\\n\\n.wrap-todo-item input[type=\\\"checkbox\\\"]:checked {\\n    position: absolute;\\n    width: 5em;\\n    height: 1.5px;\\n    background: #000;\\n    opacity: .3;\\n    box-shadow: none;\\n}\\n\\n.wrap-todo-item input[type=\\\"checkbox\\\"]:checked + label {\\n    opacity: .5;\\n    text-decoration: line-through;\\n}\\n\\n.todo-item__task .options .extend-task__arrow-down {\\n  width: 0; \\n  height: 0; \\n  border-left: 10px solid transparent;\\n  border-right: 10px solid transparent;\\n  border-top: 10px solid #000;\\n  cursor: pointer;\\n}\\n\\n.todo-item__task .options .extend-task__arrow-up {\\n  width: 0; \\n  height: 0; \\n  border-left: 10px solid transparent;\\n  border-right: 10px solid transparent;\\n  border-bottom: 10px solid #000;\\n  cursor: pointer;\\n}\\n\\n.todo-item__description {\\n    /* display: none; */\\n    background: #ede0d4;\\n    padding: 1.5em 2.5em;\\n    font-size: 1.20rem;\\n    margin-top: -1.1em;\\n}\\n\\n.add-task-btn-container {\\n    position: fixed;\\n    bottom: 4em;\\n    right: 4em;\\n}\\n\\n.create-new-task-btn {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background: var(--header-color);\\n    width: 3rem;\\n    height: 3rem;\\n    border-radius: 50%;\\n    border: none;\\n    padding: 3em;\\n    box-shadow: 3px 3px 5px rgb(0 0 0 / 0.7);\\n    transform: scale(1);\\n    transition: 0.2s ease-in-out;\\n    cursor: pointer;\\n}\\n\\n.create-new-task-btn:hover, .create-new-task-btn:hover .add-todo-icon {\\n    transform: scale(1.1);\\n}\\n\\n.add-todo-icon {\\n    font-size: 2.3rem;\\n    transform: scale(1);\\n    transition: 0.2s ease-in-out;\\n}\\n\\ndialog {\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 15px rgb(0 0 0 / .5);\\n}\\n\\n.dialog__wrap {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    padding: 50px;\\n    font-size: 1.5rem;\\n}\\n\\n.title-row #title {\\n    appearance: none;\\n    border: none;\\n    border-bottom: 1px solid #000;\\n    padding: 5px;\\n    font-size: 1.3rem;\\n    transition: padding .3s ease-in-out;\\n    font-family: 'Merriweather';\\n}\\n\\n.title-row #title:focus {\\n    border-bottom: 2px solid #000;\\n    outline: none;\\n}\\n\\n.description-row {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2px;\\n}\\n\\n.description-row #description {\\n    padding: 10px;\\n    font-size: 1.2rem;\\n    font-family: 'Merriweather';\\n}\\n\\n.date-row input[type=\\\"date\\\"] {\\n    appearance: none;\\n    background: var(--header-color);\\n    padding: 5px 10px;\\n    border: 1px solid #000;\\n    border-radius: 5px;\\n    font-weight: 600;\\n    letter-spacing: 2px;\\n    font-family: 'Merriweather';\\n    cursor: pointer;\\n}\\n\\ntextarea::placeholder {\\n    font-size: 1.1rem;\\n}\\n\\n.btns {\\n    display: flex;\\n    justify-content: space-between;\\n    padding-top: 2rem;\\n}\\n\\n.btns .task-btn {\\n    padding: 10px 15px;\\n    font-size: 1.2rem;\\n    min-width: 10rem;\\n    cursor: pointer;\\n    border-radius: 5px;\\n    border: 2px solid var(--header-color);\\n    font-family: 'Merriweather';\\n    font-weight: 600;\\n    transition: background .2s ease-in-out;\\n}\\n\\n.btns .task-btn:hover {\\n    background: var(--project-section-color);\\n}\\n\\n.grid-options {\\n    display: grid;\\n    justify-items: center;\\n    align-items: center;\\n    grid-template: repeat(auto-fit, minmax(50px, 1fr));\\n}\\n\\n.date-row {\\n    grid-column: 1 / 2;\\n}\\n\\n.custom-select {\\n    grid-column: 2 / 3;\\n}\\n\\n.priority-selection {\\n    grid-column: 3 / 4;\\n}\\n\\n.custom-select {\\n    position: relative;\\n}\\n\\n.custom-select select {\\n    background: var(--header-color);\\n    padding: 0.3em;\\n    font-size: 1rem;\\n    border-radius: 5px;\\n    cursor: pointer;\\n}\\n\\n.priority__toolbox {\\n    display: none;\\n    position: absolute;\\n    right: 20px;\\n    padding: 0.5em;\\n    margin-top: 7px;\\n    border: 2px solid var(--header-color);\\n    background: var(--todo-section-color);\\n    border-radius: 20px;\\n}\\n\\n.priority__toolbox::before {\\n    position: absolute;\\n    content: '';\\n    top: -5px;\\n    left: 40px;\\n    width: 0;\\n    height: 0;\\n    border-left: 15px solid transparent;\\n    border-right: 15px solid transparent;\\n    border-bottom: 5px solid var(--header-color);\\n}\\n\\n.priority-selection input[type=\\\"checkbox\\\"]:checked ~ .priority__toolbox {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\\n    grid-template-rows: 1fr 1fr;\\n    gap: 0.5em;\\n}\\n\\n.priority-selection input[type=\\\"checkbox\\\"] {\\n    display: none;\\n}\\n\\n.choose-color {\\n    width: 25px;\\n    height: 25px;\\n    border-radius: 50%;\\n    background: #bf0603;\\n    box-shadow: 1px 1px 3px rgb(0 0 0 / 0.7);\\n    cursor: pointer;\\n}\\n\\n.priority__red {\\n    grid-column: 1 / 2;\\n    grid-row: 1 / 2;\\n}\\n\\n.priority__orange {\\n    background: #fb5607;\\n    grid-column: 2 / 3;\\n    grid-row: 1 / 2;\\n}\\n\\n.priority__yellow {\\n    background: #ffd60a;\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n}\\n\\n.priority__green {\\n    background: #007f5f;\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tic_tac_toe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom_manipulation.js":
/*!*********************************!*\
  !*** ./src/dom_manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addModalFunctionality: () => (/* binding */ addModalFunctionality)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_manipulation_func */ \"./src/dom_manipulation_func.js\");\n\n\nfunction addModalFunctionality() {\n\n    const projectModal = document.querySelector('.modal');\n    const openProjectModal = document.querySelector('.create-new-project-btn');\n    const closeProjectModal = document.querySelector('.close-modal');\n    const inputProjectName = document.querySelector('.add-project-name');\n\n    const taskModal = document.querySelector('.task-modal');\n    const openTaskModal = document.querySelector('.create-new-task-btn');\n    const closeTaskModal = document.querySelector('.close-project-modal');\n\n    (0,_dom_manipulation_func__WEBPACK_IMPORTED_MODULE_0__.modalAction)(openProjectModal, closeProjectModal, projectModal);\n    (0,_dom_manipulation_func__WEBPACK_IMPORTED_MODULE_0__.modalAction)(openTaskModal, closeTaskModal, taskModal);\n}\n\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/dom_manipulation.js?");

/***/ }),

/***/ "./src/dom_manipulation_func.js":
/*!**************************************!*\
  !*** ./src/dom_manipulation_func.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalAction: () => (/* binding */ modalAction)\n/* harmony export */ });\nfunction modalAction(openModal, closeModal, modal) {\n    openModal.addEventListener('click', () => {\n        modal.showModal();\n    })\n\n    closeModal.addEventListener('click', () => {\n        modal.close();\n    })\n}\n\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/dom_manipulation_func.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_manipulation */ \"./src/dom_manipulation.js\");\n\n\n\nconsole.log(\"let's get started\");\n\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addModalFunctionality)();\n\n\n// openModal.addEventListener('click', () => {\n//     modal.showModal();\n// });\n\n// closeModal.addEventListener('click', () => {\n//     modal.close();\n//     inputProjectName.value = '';\n// });\n\n// const taskModal = document.querySelector('.task-modal');\n// const openTaskModal = document.querySelector('.create-new-task-btn');\n// const closeTaskModal = document.querySelector('.close-project-modal');\n\n// openTaskModal.addEventListener('click', () => {\n//     taskModal.showModal();\n// });\n\n// closeTaskModal.addEventListener('click', () => {\n//     taskModal.close();\n// })\n\n//# sourceURL=webpack://tic_tac_toe/./src/index.js?");

/***/ }),

/***/ "./dist/fonts/Merriweather-Light.ttf":
/*!*******************************************!*\
  !*** ./dist/fonts/Merriweather-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c3e7a8bc238902aee905.ttf\";\n\n//# sourceURL=webpack://tic_tac_toe/./dist/fonts/Merriweather-Light.ttf?");

/***/ }),

/***/ "./dist/fonts/YatraOne-Regular.ttf":
/*!*****************************************!*\
  !*** ./dist/fonts/YatraOne-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87c0deac71cce6753c07.ttf\";\n\n//# sourceURL=webpack://tic_tac_toe/./dist/fonts/YatraOne-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;