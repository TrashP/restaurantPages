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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    padding: 0;\\n    background-image: linear-gradient(rgb(76, 76, 119), rgb(19, 19, 34));\\n}\\n\\n#content {\\n    background-repeat: no-repeat;\\n    height: 100%;\\n    max-width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 0;\\n    display: grid;\\n    grid-template-columns: 1fr 3fr;\\n    grid-template-rows: 1fr 3fr 2fr;\\n    grid-gap: 40px;\\n    padding: 40px;\\n}\\n\\n#header {\\n    background-color: black;\\n    color: white;\\n    grid-row: 1 / 2;\\n    grid-column: 1 / 3;\\n    height: 100px;\\n    display: grid;\\n    grid-template-columns: 4fr 1fr 1fr 1fr;\\n    justify-content: center;\\n    align-items: center;\\n    grid-gap: 10px;\\n    padding: 0 20px 0 20px;\\n}\\n\\n#header div {\\n    border: 4px solid white;\\n    text-align: center;\\n}\\n\\n#header div:first-of-type {\\n    border: 0;\\n    text-align: left;\\n}\\n\\n#sidebar {\\n    background-color: black;\\n    color: white;\\n    grid-row: 2 / 3;\\n    grid-column: 1 / 2;\\n    height: 700px;\\n    display: grid;\\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\\n    justify-content: center;\\n    align-items: center;\\n    grid-gap: 10px;\\n    padding: 20px;\\n}\\n\\n#sidebar div {\\n    border: 2px solid white;\\n    text-align: center;\\n}\\n\\n#sidebar div:hover {\\n    background-color: white;\\n    color: black;\\n}\\n\\n#sidebar div:first-of-type, #sidebar div:first-of-type:hover {\\n    font-size: 25px;\\n    border: 0;\\n    background-color: black;\\n    color: white;\\n}\\n\\n#reserve {\\n    background-color: black;\\n    color: white;\\n    grid-row: 2 / 3;\\n    grid-column: 2 / 3;\\n    height: 700px;\\n    padding: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n#reserve div {\\n    text-align: center;\\n    font-size: 25px;\\n}\\n\\n#reserve form {\\n    max-width: 500px;\\n    border: 2px solid white;\\n    border-radius: 10px;\\n    padding: 20px 60px 20px 60px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 20px;\\n    font-size: 20px;\\n}\\n\\n#reserve form input {\\n    display: block;\\n    width: 300px;\\n    height: 30px;\\n}\\n\\n#submit {\\n    background-color: rgb(52, 52, 95);\\n    color: white;\\n    border: 0;\\n    border-radius: 5px;\\n}\\n\\n#footer {\\n    background-color: black;\\n    color: white;  \\n    grid-row: 3 / 4;\\n    grid-column: 1 / 3;\\n    height: 300px;\\n    display: grid;\\n    align-items: center;\\n    grid-template-columns: 1fr 2fr;\\n    grid-template-rows: 1fr 1fr;\\n    grid-gap: 20px;\\n    padding: 20px;\\n}\\n\\n#footer div {\\n    border: 2px solid white;\\n    text-align: center;\\n}\\n\\n#footer div:first-of-type {\\n    grid-column: 1 / 2;\\n    grid-row: 1 / 2;\\n}\\n\\n#footer div:nth-of-type(2) {\\n    grid-column: 2 / 3;\\n    grid-row: 1 / 2;\\n}\\n\\n#footer p {\\n    grid-column: 1 / 3;\\n    grid-row: 2 / 3;\\n    display: block;\\n    text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpages/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpages/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpages/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpages/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpages/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _styles_hongkong_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/hongkong.jpg */ \"./src/styles/hongkong.jpg\");\n/* harmony import */ var _styles_newyork_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/newyork.jpg */ \"./src/styles/newyork.jpg\");\n/* harmony import */ var _styles_london_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/london.jpg */ \"./src/styles/london.jpg\");\n/* harmony import */ var _styles_paris_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/paris.jpg */ \"./src/styles/paris.jpg\");\n/* harmony import */ var _styles_tokyo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/tokyo.jpg */ \"./src/styles/tokyo.jpg\");\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.style.backgroundImage = _styles_hongkong_jpg__WEBPACK_IMPORTED_MODULE_2__;\n(0,_mainPage_js__WEBPACK_IMPORTED_MODULE_1__.initialMainPage)();\n(0,_mainPage_js__WEBPACK_IMPORTED_MODULE_1__.changeCity)();\n\n//# sourceURL=webpack://restaurantpages/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCity\": () => (/* binding */ changeCity),\n/* harmony export */   \"initialMainPage\": () => (/* binding */ initialMainPage)\n/* harmony export */ });\nconst mainPageHeader = function() {\n    const content = document.getElementById('content');\n\n    // header to access other tabs\n    const header = document.createElement('div');\n    content.appendChild(header);\n    header.setAttribute('id', 'header');\n\n    const logoDiv = document.createElement('div');\n    header.appendChild(logoDiv);\n    const logo = document.createElement('h1');\n    logoDiv.appendChild(logo);\n    logo.innerHTML = 'The Cat Restaurant';\n\n    const foodDiv = document.createElement('div');\n    header.appendChild(foodDiv);\n    const food = document.createElement('h3');\n    foodDiv.appendChild(food);\n    food.innerHTML = 'Food Menu';\n\n    const drinksDiv = document.createElement('div');\n    header.appendChild(drinksDiv);\n    const drinks = document.createElement('h3');\n    drinksDiv.appendChild(drinks);\n    drinks.innerHTML = 'Drinks';\n\n    const dessertDiv = document.createElement('div');\n    header.appendChild(dessertDiv);\n    const dessert = document.createElement('h3');\n    dessertDiv.appendChild(dessert);\n    dessert.innerHTML = 'Dessert';\n}\n\nconst mainPageSidebar = function() {\n    const content = document.getElementById('content');\n    \n    // sidebar to show branches\n    const sidebar = document.createElement('div');\n    content.appendChild(sidebar);\n    sidebar.setAttribute('id', 'sidebar');\n\n    const branchesDiv = document.createElement('div');\n    sidebar.appendChild(branchesDiv);\n    const branches = document.createElement('h2');\n    branchesDiv.appendChild(branches);\n    branches.innerHTML = 'Branches';\n\n    const hongkongDiv = document.createElement('div');\n    sidebar.appendChild(hongkongDiv);\n    const hongkong = document.createElement('h2');\n    hongkongDiv.appendChild(hongkong);\n    hongkong.innerHTML = 'Hong Kong';\n\n    const newyorkDiv = document.createElement('div');\n    sidebar.appendChild(newyorkDiv);\n    const newyork = document.createElement('h2');\n    newyorkDiv.appendChild(newyork);\n    newyork.innerHTML = 'New York';\n\n    const londonDiv = document.createElement('div');\n    sidebar.appendChild(londonDiv);\n    const london = document.createElement('h2');\n    londonDiv.appendChild(london);\n    london.innerHTML = 'London';\n\n    const parisDiv = document.createElement('div');\n    sidebar.appendChild(parisDiv);\n    const paris = document.createElement('h2');\n    parisDiv.appendChild(paris);\n    paris.innerHTML = 'Paris';\n\n    const tokyoDiv = document.createElement('div');\n    sidebar.appendChild(tokyoDiv);\n    const tokyo = document.createElement('h2');\n    tokyoDiv.appendChild(tokyo);\n    tokyo.innerHTML = 'Tokyo';\n}\n\nconst mainPageReserve = function() {\n    const content = document.getElementById('content');\n\n    // main body to make reservations\n    const reserve = document.createElement('div');\n    content.appendChild(reserve);\n    reserve.setAttribute('id', 'reserve');\n\n    const resDiv = document.createElement('div');\n    reserve.appendChild(resDiv);\n    const res = document.createElement('h2');\n    resDiv.appendChild(res);\n    res.innerHTML = 'Make a Reservation!';\n\n    const form = document.createElement('form');\n    reserve.appendChild(form);\n\n    const nameLabel = document.createElement('label');\n    form.appendChild(nameLabel);\n    nameLabel.innerHTML = 'Name';\n    nameLabel.setAttribute('for', 'name');\n    const nameInput = document.createElement('input');\n    nameLabel.appendChild(nameInput);\n    nameInput.setAttribute('id', 'name');\n    nameInput.setAttribute('type', 'text');\n\n    const emailLabel = document.createElement('label');\n    form.appendChild(emailLabel);\n    emailLabel.innerHTML = 'Email';\n    emailLabel.setAttribute('for', 'email');\n    const emailInput = document.createElement('input');\n    emailLabel.appendChild(emailInput);\n    emailInput.setAttribute('id', 'email')\n    emailInput.setAttribute('type', 'email');\n\n    const phoneLabel = document.createElement('label');\n    form.appendChild(phoneLabel);\n    phoneLabel.innerHTML = 'Phone Number'\n    phoneLabel.setAttribute('for', 'phone');\n    const phoneInput = document.createElement('input');\n    phoneLabel.appendChild(phoneInput);\n    phoneInput.setAttribute('id', 'phone');\n    phoneInput.setAttribute('type', 'number');\n\n    const guestLabel = document.createElement('label');\n    form.appendChild(guestLabel);\n    guestLabel.innerHTML = 'Number of Guests';\n    guestLabel.setAttribute('for', 'guest');\n    const guestInput = document.createElement('input');\n    guestLabel.appendChild(guestInput);\n    guestInput.setAttribute('id', 'guest');\n    guestInput.setAttribute('type', 'number');\n\n    const dateLabel = document.createElement('label');\n    form.appendChild(dateLabel);\n    dateLabel.innerHTML = 'Date';\n    dateLabel.setAttribute('for', 'date');\n    const dateInput = document.createElement('input');\n    dateLabel.appendChild(dateInput);\n    dateInput.setAttribute('id', 'date');\n    dateInput.setAttribute('type', 'date');\n\n    const timeLabel = document.createElement('label');\n    form.appendChild(timeLabel);\n    timeLabel.innerHTML = 'Time';\n    timeLabel.setAttribute('for', 'time');\n    const timeInput = document.createElement('input');\n    timeLabel.appendChild(timeInput);\n    timeInput.setAttribute('id', 'time');\n    timeInput.setAttribute('type', 'time');\n\n    const submit = document.createElement('input');\n    form.appendChild(submit);\n    submit.setAttribute('id', 'submit');\n    submit.setAttribute('type', 'submit');\n}\n\nconst mainPageFooter = function() {\n    const content = document.getElementById('content');\n\n    // footer for contact details\n    const footer = document.createElement('div');\n    content.appendChild(footer);\n    footer.setAttribute('id', 'footer');\n\n    const contactDiv = document.createElement('div');\n    footer.appendChild(contactDiv);\n    const contact = document.createElement('h3');\n    contactDiv.appendChild(contact);\n    contact.innerHTML = 'Contact us';\n\n    const phone = document.createElement('p');\n    phone.setAttribute('id', 'phoneNo');\n    contactDiv.appendChild(phone);\n    phone.innerHTML = 'Phone Number: +852 34676754';\n    const email = document.createElement('p');\n    email.setAttribute('id', 'emailId');\n    contactDiv.appendChild(email);\n    email.innerHTML = 'Email: meow@cathk.com';\n\n    const addressDiv = document.createElement('div');\n    footer.appendChild(addressDiv);\n    const address = document.createElement('h3');\n    addressDiv.appendChild(address);\n    address.innerHTML = 'Address';\n    const addLine1 = document.createElement('p');\n    addLine1.setAttribute('id', 'addLine1');\n    addressDiv.appendChild(addLine1);\n    addLine1.innerHTML = '123 Awesome Street, RocknRoll Bay,';\n    const addLine2 = document.createElement('p');\n    addLine2.setAttribute('id', 'addLine2');\n    addressDiv.appendChild(addLine2);\n    addLine2.innerHTML = 'Kowloon, Hong Kong';\n\n    const extras = document.createElement('p');\n    extras.innerHTML = 'ABOUT  |  EVENTS & PROMOTIONS  |  PRIVACY POLICY  |  LOYALTY CARD  |  CAREERS';\n    footer.appendChild(extras);\n}\n\nconst initialMainPage = function() {\n    mainPageHeader();\n    mainPageSidebar(); \n    mainPageReserve(); \n    mainPageFooter();\n}\n\nconst changeCity = function() {\n    const sidebar = document.getElementById('sidebar');\n    const city = sidebar.childNodes;\n    const content = document.getElementById('content');\n    const phone = document.getElementById('phoneNo');\n    const email = document.getElementById('emailId');\n    const addLine1 = document.getElementById('addLine1');\n    const addLine2 = document.getElementById('addLine2');\n    \n    city[1].addEventListener('click', function() {\n        content.style.backgroundImage = hongkong;\n        phone.innerHTML = '+852 34676754';\n        email.innerHTML = 'meow@cathk.com';\n        addLine1.innerHTML = '123 Awesome Street, RocknRoll Bay,';\n        addLine2.innerHTML = 'Kowloon, Hong Kong';\n    })\n    city[2].addEventListener('click', function() {\n        content.style.backgroundImage = newyork;\n        phone.innerHTML = 'Phone Number: +97 78659706';\n        email.innerHTML = 'Email: purr@catnyc.com';\n        addLine1.innerHTML = '123 Charming Street, Scritches Avenue,';\n        addLine2.innerHTML = 'Manhattan, New York';\n    })\n    city[3].addEventListener('click', function() {\n        content.style.backgroundImage = london;\n        phone.innerHTML = 'Phone Number: +567 78654398';\n        email.innerHTML = 'Email: puss@catlondon.com';\n        addLine1.innerHTML = '123 Bellyrubs Street, Zoomies Avenue,';\n        addLine2.innerHTML = 'Central, London';\n    })\n    city[4].addEventListener('click', function() {\n        content.style.backgroundImage = paris;\n        phone.innerHTML = 'Phone Number: +34 34767566';\n        email.innerHTML = 'Email: calico@catparis.com';\n        addLine1.innerHTML = '123 Politecats Street, TuckedIn Avenue,';\n        addLine2.innerHTML = 'Paris';\n    })\n    city[5].addEventListener('click', function() {\n        content.style.backgroundImage = tokyo;\n        phone.innerHTML = 'Phone Number: +678 56743421';\n        email.innerHTML = 'Email: orange@cattokyo.com';\n        addLine1.innerHTML = '123 Grumpy Street, Smol Avenue,';\n        addLine2.innerHTML = 'Tokyo';\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurantpages/./src/mainPage.js?");

/***/ }),

/***/ "./src/styles/hongkong.jpg":
/*!*********************************!*\
  !*** ./src/styles/hongkong.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b77dfab8d5943c2b5645.jpg\";\n\n//# sourceURL=webpack://restaurantpages/./src/styles/hongkong.jpg?");

/***/ }),

/***/ "./src/styles/london.jpg":
/*!*******************************!*\
  !*** ./src/styles/london.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b840ba0ce5824b011a40.jpg\";\n\n//# sourceURL=webpack://restaurantpages/./src/styles/london.jpg?");

/***/ }),

/***/ "./src/styles/newyork.jpg":
/*!********************************!*\
  !*** ./src/styles/newyork.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b369a0d6a11812c41865.jpg\";\n\n//# sourceURL=webpack://restaurantpages/./src/styles/newyork.jpg?");

/***/ }),

/***/ "./src/styles/paris.jpg":
/*!******************************!*\
  !*** ./src/styles/paris.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d024b12726af56f5ce4.jpg\";\n\n//# sourceURL=webpack://restaurantpages/./src/styles/paris.jpg?");

/***/ }),

/***/ "./src/styles/tokyo.jpg":
/*!******************************!*\
  !*** ./src/styles/tokyo.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02cc14f60af9c254ff76.jpg\";\n\n//# sourceURL=webpack://restaurantpages/./src/styles/tokyo.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;