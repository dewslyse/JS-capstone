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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  background-color: hsl(218deg, 23%, 16%);\\n}\\n\\n.popup-detail {\\n  border: 3px solid #f00;\\n  position: fixed;\\n  top: 22px;\\n  right: 0;\\n  left: 0;\\n  bottom: 20px;\\n  margin: 0 auto 10px;\\n  width: 80%;\\n  height: 95%;\\n  background-color: #fff;\\n  z-index: 10;\\n  display: flex;\\n  visibility: hidden;\\n  padding: 20px;\\n}\\n\\n.show-summary {\\n  width: 65%;\\n}\\n\\n.img-container {\\n  width: 25%;\\n  margin-top: 8px;\\n}\\n\\n.image {\\n  width: 100%;\\n}\\n\\n.firstdetails {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-right: 20px;\\n}\\n\\n.showpopup {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n\\n.blur {\\n  position: fixed;\\n  filter: blur(8px);\\n}\\n\\n#popup-close {\\n  position: absolute;\\n  top: 15px;\\n  right: 15px;\\n  font-size: 2rem;\\n  float: right;\\n  color: hsl(218deg, 23%, 16%);\\n  background-color: #fff;\\n  padding: 1px 10px;\\n  border-radius: 50%;\\n  transition: all 0.2s;\\n  border-color: red;\\n}\\n\\n#popup-close:hover {\\n  transform: scale(1.3);\\n  color: #00d9ff;\\n  cursor: pointer;\\n}\\n\\n#popup-close:active {\\n  color: #67798e;\\n}\\n\\n.info {\\n  margin-bottom: 10px;\\n  color: #fff;\\n  padding-left: 0;\\n  margin-left: 0;\\n}\\n\\n.form {\\n  width: 40%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#pop-bottom {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.add-title {\\n  font-size: 1.25rem;\\n  margin-bottom: 10px;\\n}\\n\\ninput,\\ntextarea {\\n  border: 2px solid hsl(217deg, 19%, 38%);\\n  border-radius: 4px;\\n  padding: 4px;\\n  margin-bottom: 15px;\\n}\\n\\ntextarea {\\n  height: 100px;\\n  margin-bottom: 5px;\\n}\\n\\n.add-btn {\\n  padding: 4px 12px;\\n  background-color: #ffd540;\\n  border: none;\\n  border-radius: 3px;\\n  font-weight: 700;\\n  color: hsl(217deg, 19%, 24%);\\n}\\n\\n#new-comment {\\n  text-align: right;\\n  margin-right: 175px;\\n  font-size: 1.25rem;\\n}\\n\\n.comment-list {\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: scroll;\\n  padding-left: 20px;\\n  background-color: #fff;\\n  border: 2px solid hsl(217deg, 19%, 38%);\\n  width: 58%;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  background-color: hsl(217deg, 19%, 24%);\\n}\\n\\n.logo {\\n  text-align: center;\\n  padding: 16px 0;\\n  color: #fff;\\n}\\n\\n.logo-text {\\n  font-size: 2rem;\\n}\\n\\n.tv {\\n  font-size: 1.75rem;\\n  color: hsl(150deg, 100%, 66%);\\n  border: 4px solid red;\\n  border-radius: 5px;\\n  padding: 0 5px;\\n  margin-left: 3px;\\n}\\n\\nul {\\n  background-color: hsl(217deg, 19%, 38%);\\n  display: flex;\\n  justify-content: center;\\n  padding: 8px;\\n}\\n\\nli {\\n  list-style: none;\\n}\\nli a {\\n  text-decoration: none;\\n  font-size: 1.25rem;\\n  font-weight: 500;\\n  color: #fff;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.home-count {\\n  margin-left: 4px;\\n  background-color: #ffd540;\\n  padding: 3px 8px;\\n  font-size: 1rem;\\n  font-weight: 700;\\n  border-radius: 4px;\\n}\\n\\n.container {\\n  max-width: 375px;\\n  width: 100%;\\n  margin: 16px auto;\\n}\\n\\n.show-list {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  row-gap: 50px;\\n  margin: 50px 0;\\n}\\n\\n.show-card {\\n  padding: 10px;\\n  border-radius: 15px;\\n  background-color: #fff;\\n}\\n\\n.img-box {\\n  overflow: hidden;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n}\\n\\n.img {\\n  width: 100%;\\n  display: block;\\n  height: auto;\\n}\\n\\n.show-detail {\\n  background-color: hsl(217deg, 19%, 24%);\\n  color: hsl(193deg, 38%, 86%);\\n  padding: 5px 7px;\\n  margin: 8px 0;\\n}\\n\\n.show-detail-top,\\n.show-detail-bottom {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.show-detail-top {\\n  margin-bottom: 10px;\\n}\\n\\n.fa-heart {\\n  cursor: pointer;\\n}\\n.fa-heart:hover {\\n  transform: scale(1.4);\\n  color: rgb(255, 89, 0);\\n}\\n\\n.show-name {\\n  font-size: 1.125rem;\\n  font-weight: 700;\\n}\\n\\n.rate {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.fa-star {\\n  color: #ffd540;\\n}\\n\\n.rating,\\n.likes {\\n  margin-left: 5px;\\n}\\n\\n.comments-btn {\\n  width: 100%;\\n  padding: 12px;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  border-bottom-left-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  border: 3px solid hsl(150deg, 100%, 66%);\\n  background-color: hsl(150deg, 100%, 66%);\\n  cursor: pointer;\\n  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.2);\\n}\\n.comments-btn:hover {\\n  background-color: #fff;\\n}\\n\\n@media (min-width: 768px) {\\n  .container {\\n    max-width: 640px;\\n  }\\n\\n  .show-list {\\n    grid-template-columns: 1fr 1fr;\\n    gap: 40px;\\n  }\\n}\\n@media (min-width: 1110px) {\\n  .header {\\n    flex-direction: row;\\n  }\\n\\n  .navbar {\\n    display: flex;\\n    margin: 0 auto;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 100%;\\n    max-width: 1110px;\\n  }\\n\\n  .nav-list {\\n    width: 50%;\\n    justify-content: space-between;\\n  }\\n\\n  ul {\\n    justify-content: space-around;\\n    border-radius: 7px;\\n  }\\n\\n  .hidden {\\n    display: block;\\n  }\\n\\n  .container {\\n    max-width: 1000px;\\n  }\\n\\n  .show-list {\\n    grid-template-columns: repeat(3, 1fr);\\n    gap: 40px;\\n  }\\n\\n  footer {\\n    display: flex;\\n    justify-content: flex-start;\\n  }\\n\\n  .footer-box {\\n    display: flex;\\n    max-width: 1110px;\\n    width: 100%;\\n  }\\n\\n  .footer-text {\\n    text-align: left;\\n  }\\n}\\nfooter {\\n  display: flex;\\n  justify-content: center;\\n  background-color: hsl(217deg, 19%, 24%);\\n  padding: 15px;\\n}\\n\\n.footer-text {\\n  text-align: center;\\n  color: hsl(193deg, 38%, 86%);\\n  font-weight: 400;\\n}\\n.footer-text a {\\n  font-weight: 500;\\n  color: hsl(150deg, 100%, 66%);\\n  text-decoration: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-capstone/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JS-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JS-capstone/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JS-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/actions.js */ \"./src/modules/actions.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_actions_js__WEBPACK_IMPORTED_MODULE_1__.displayMovies);\n\n\n//# sourceURL=webpack://JS-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/actions.js":
/*!********************************!*\
  !*** ./src/modules/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentsCounter\": () => (/* binding */ commentsCounter),\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"displayDetails\": () => (/* binding */ displayDetails),\n/* harmony export */   \"displayMovies\": () => (/* binding */ displayMovies)\n/* harmony export */ });\n/* harmony import */ var _apis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis.js */ \"./src/modules/apis.js\");\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\nconst likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst appID = 'wwWCSD2YuNcNPNHza6Cc';\r\n\r\n// Counter\r\nconst counter = (arr) => arr.length;\r\nconst commentsCounter = (element) => element.childElementCount;\r\n\r\nlet truncated = [];\r\n// Display movies\r\nconst displayMovies = async (shows) => {\r\n  const listOfShows = document.querySelector('.show-list');\r\n\r\n  shows = await (0,_apis_js__WEBPACK_IMPORTED_MODULE_0__.movieList)();\r\n  truncated = shows.slice(0, 9);\r\n\r\n  truncated.forEach(async (item) => {\r\n    const show = `\r\n        <article class=\"show-card\">\r\n          <div class=\"img-box\">\r\n            <img class=\"img\" src=\"${item.image.medium}\">\r\n          </div>\r\n          <div class=\"show-detail\">\r\n            <div class=\"show-detail-top\">\r\n              <h2 class=\"show-name\">${item.name}</h2>                \r\n              <i data-id=\"${item.id}\" class=\"fas fa-heart\"></i>                \r\n            </div>\r\n            <div class=\"show-detail-bottom\">\r\n                <div class=\"rate\"> \r\n                  <p><i class=\"fas fa-star\"></i><span class=\"rating\">${item.rating.average}</span></p>\r\n                </div>\r\n                <p>\r\n                  <span class=\"likes-count\">${await Promise.resolve((0,_apis_js__WEBPACK_IMPORTED_MODULE_0__.displayLikes)(item.id))}</span>\r\n                  <span class=\"likes\">Likes</span>\r\n                </p>\r\n            </div>          \r\n          </div>\r\n          <button class=\"comments-btn\" id=\"${item.id}\">Comments</button>\r\n        </article>      \r\n      `;\r\n\r\n    listOfShows.innerHTML += show;\r\n\r\n    const likeBtn = document.querySelectorAll('.fa-heart');\r\n\r\n    for (let i = 0; i < likeBtn.length; i += 1) {\r\n      likeBtn[i].addEventListener('click', async (e) => {\r\n        const likesCount = document.querySelectorAll('.likes-count');\r\n\r\n        const likes = parseInt(likesCount[i].textContent, 10) + 1;\r\n        likesCount[i].textContent = likes;\r\n\r\n        await fetch(`${likesURL}${appID}/likes/`, {\r\n          method: 'POST',\r\n          headers: { 'Content-Type': 'application/json' },\r\n          body: JSON.stringify({ item_id: e.currentTarget.dataset.id }),\r\n        });\r\n      });\r\n    }\r\n    displayDetails();\r\n  });\r\n  const pageItems = document.querySelector('.home-count');\r\n  pageItems.textContent = `${counter(truncated)}`;\r\n};\r\n\r\nconst displayDetails = () => {\r\n  const commentButtons = document.querySelectorAll('.comments-btn');\r\n  commentButtons.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n      const projectDetails = document.querySelector('.popup-detail');\r\n      const main = document.querySelector('.major');\r\n      projectDetails.classList.add('showpopup');\r\n      main.classList.add('blur');\r\n      const movie = truncated[button.id - 1];\r\n      const popupDetail = `<article class=\"detail-container\" id=\"popup\">\r\n        <button type=\"button\" id=\"popup-close\" data-close-button class=\"close-button-project\" >&times;</button>\r\n        <div class=\"firstdetails\">\r\n          <div class=\"img-container\">\r\n            <img class=\"image\" src=\"${movie.image.medium}\">\r\n          </div>\r\n          <div class=\"show-summary\">\r\n            <h2 class=\"pop-name\">${movie.name}</h2>\r\n            <p>${movie.summary}</p>\r\n            <br>\r\n            <ul class=\"info\">\r\n              <li>Language: ${movie.language}</li>\r\n              <li>runtime: ${movie.averageRuntime} minutes</li>\r\n            </ul>\r\n            <ul class=\"info\">\r\n              <li>Rating: ${movie.rating.average}/10</li>\r\n              <li>premiered: ${movie.premiered}</li>\r\n            </ul>               \r\n          </div>\r\n        </div>\r\n        <h2  id=\"new-comment\">Comments(<span class=\"count\"></span>)</h2>    \r\n        <div id=\"pop-bottom\">       \r\n          <form class=\"form\">\r\n            <h2 class=\"add-title\">Add a comment</h2> \r\n            <input type=\"text\" name=\"add-name\" id=\"add-name\" placeholder=\"Your name\" required> \r\n            <textarea type=\"text\" name=\"add-insight\" id=\"add-comment\" placeholder=\"Your insights\" required></textarea>\r\n            <div class=\"add-container\"> \r\n              <button class=\"add-btn\" type=\"submit\">Comment</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </article>\r\n    `;\r\n      projectDetails.innerHTML = popupDetail;\r\n      const closePopup = projectDetails.querySelector('[data-close-button]');\r\n      closePopup.addEventListener('click', () => {\r\n        projectDetails.classList.remove('showpopup');\r\n        main.classList.remove('blur');\r\n      });\r\n\r\n      const commentList = document.createElement('ul');\r\n      commentList.classList.add('comment-list');\r\n      const commentNumber = document.querySelector('.count');\r\n\r\n      (0,_apis_js__WEBPACK_IMPORTED_MODULE_0__.getMovieComments)(button.id).then((response) => {\r\n        if (response.error) {\r\n          commentList.innerHTML += `\r\n              <li>Be the first to comment</li>\r\n            `;\r\n        } else {\r\n          response.forEach((comment) => {\r\n            commentList.innerHTML += `\r\n              <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>\r\n            `;\r\n            commentNumber.textContent = `${commentsCounter(commentList)}`;\r\n          });\r\n        }\r\n      },\r\n      (error) => {\r\n        commentList.innerHTML += `\r\n              <li>Be the first to comment</li>\r\n            `;\r\n      });\r\n      const popupElement = document.getElementById('pop-bottom');\r\n      popupElement.appendChild(commentList);\r\n      const commentForm = document.querySelector('.form');\r\n      commentForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        const userName = document.getElementById('add-name').value;\r\n        const userComment = document.getElementById('add-comment').value;\r\n        (0,_apis_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(movie.id, userName, userComment).then((response) => {\r\n          (0,_apis_js__WEBPACK_IMPORTED_MODULE_0__.getMovieComments)(button.id).then((response) => {\r\n            commentList.innerHTML = '';\r\n            if (response.error) {\r\n              commentList.innerHTML += `\r\n              <li>Be the first to comment</li>\r\n            `;\r\n            } else {\r\n              response.forEach((comment) => {\r\n                commentList.innerHTML += `\r\n              <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>\r\n            `;\r\n                commentNumber.textContent = `${commentsCounter(commentList)}`;\r\n              });\r\n            }\r\n          },\r\n          (error) => {\r\n            commentList.innerHTML += `\r\n              <li>Be the first to comment</li>\r\n            `;\r\n          });\r\n        });\r\n        commentForm.reset();\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://JS-capstone/./src/modules/actions.js?");

/***/ }),

/***/ "./src/modules/apis.js":
/*!*****************************!*\
  !*** ./src/modules/apis.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"getMovieComments\": () => (/* binding */ getMovieComments),\n/* harmony export */   \"movieList\": () => (/* binding */ movieList),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"retrieveLikes\": () => (/* binding */ retrieveLikes)\n/* harmony export */ });\n// Retrieve information from TVmaze API\nconst movieURL = 'https://api.tvmaze.com/shows';\nconst likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = 'wwWCSD2YuNcNPNHza6Cc';\n\n// Get movies from API\nconst movieList = async () => {\n  const response = await fetch(movieURL);\n  const data = await response.json();\n  return data;\n};\n\n// Get Likes from API\nconst retrieveLikes = async () => {\n  const response = await fetch(`${likesURL}${appID}/likes`);\n  const likes = await response.json();\n  return likes;\n};\n\n// Display likes on page\nconst displayLikes = async (id) => {\n  const response = await Promise.resolve(retrieveLikes());\n  let count = 0;\n  for (let i = 0; i < response.length; i += 1) {\n    if (response[i].item_id === `${id}`) {\n      count = response[i].likes;\n    }\n  }\n  return count;\n};\n\n// Get movie comments\nconst getMovieComments = async (id) => {\n  const response = await fetch(`${likesURL}${appID}/comments?item_id=${id}`);\n  const data = await response.json();\n  return data;\n};\n\n// Send Comments\nconst postComment = async (id, username, comment) => {\n  const response = await fetch(`${likesURL}${appID}/comments`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ item_id: id, username, comment }),\n  });\n  return response;\n};\n\n\n\n//# sourceURL=webpack://JS-capstone/./src/modules/apis.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;