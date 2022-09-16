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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  -webkit-user-select: none;\\r\\n  -khtml-user-select: none;\\r\\n  -moz-user-select: -moz-none;\\r\\n  -o-user-select: none;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #d3d3d3;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 70vw;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 10px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header-title {\\r\\n  font-style: oblique;\\r\\n  font-weight: 700;\\r\\n  font-size: 50px;\\r\\n}\\r\\n\\r\\n.img-logo {\\r\\n  height: 100px;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.logo-div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  column-gap: 60px;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  margin-right: 100px;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n/* serve yourself link */\\r\\n.link {\\r\\n  text-decoration: none;\\r\\n  color: brown;\\r\\n  font-weight: 600;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  column-gap: 15px;\\r\\n}\\r\\n\\r\\n.bell {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n}\\r\\n\\r\\n/* search */\\r\\n.meal-search-box {\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 60px;\\r\\n  display: flex;\\r\\n  align-items: stretch;\\r\\n  width: 500px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.search-control {\\r\\n  width: inherit;\\r\\n  padding: 0 1rem;\\r\\n  font-size: 1.4rem;\\r\\n  font-family: inherit;\\r\\n  outline: 0;\\r\\n  border: 1px solid brown;\\r\\n  color: brown;\\r\\n  border-top-left-radius: 2rem;\\r\\n  border-bottom-left-radius: 2rem;\\r\\n}\\r\\n\\r\\n.search-control::placeholder {\\r\\n  color: grey;\\r\\n}\\r\\n\\r\\n.search-btn {\\r\\n  margin-right: auto;\\r\\n  width: 80px;\\r\\n  height: 55px;\\r\\n  padding-right: 10px;\\r\\n  font-size: 1.6rem;\\r\\n  background: brown;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-top-right-radius: 2rem;\\r\\n  border-bottom-right-radius: 2rem;\\r\\n  transition: all 0.4s linear;\\r\\n  -webkit-transition: all 0.4s linear;\\r\\n  -moz-transition: all 0.4s linear;\\r\\n  -ms-transition: all 0.4s linear;\\r\\n  -o-transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.search-btn:hover {\\r\\n  background: rgb(124, 38, 38);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.search-btn:active {\\r\\n  transform: scale(0.9);\\r\\n  background-color: brown;\\r\\n}\\r\\n\\r\\n/* footer */\\r\\n.footer {\\r\\n  background-color: white;\\r\\n  position: fixed;\\r\\n  bottom: 30px;\\r\\n  height: 60px;\\r\\n  border: 1px solid brown;\\r\\n  border-radius: 40px;\\r\\n  width: 70vw;\\r\\n  margin-left: 15vw;\\r\\n  margin-right: 15vw;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.footer-text {\\r\\n  font-size: 1.4rem;\\r\\n  margin-left: 50px;\\r\\n  font-weight: 500;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\n/* Cards from JavaScript */\\r\\n\\r\\n/* cards sections */\\r\\n.meals {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 5% 5%;\\r\\n  width: 90%;\\r\\n  min-height: 500px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding-bottom: 300px;\\r\\n}\\r\\n\\r\\n.parent-div {\\r\\n  width: auto;\\r\\n  height: auto;\\r\\n  background-color: white;\\r\\n  border-radius: 0 50px;\\r\\n  box-shadow: 10px 30px 20px grey;\\r\\n}\\r\\n\\r\\n.parent-div:hover {\\r\\n  transform: scale(1.005);\\r\\n  box-shadow: 20px 40px 20px rgb(51, 50, 50);\\r\\n}\\r\\n\\r\\n.pic-div {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  background-color: bisque;\\r\\n  border-radius: 0 50px 0 0;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  border-radius: 0 50px 0 0;\\r\\n}\\r\\n\\r\\n.foot-div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.div-likes {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  width: 85%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 20px;\\r\\n  align-items: baseline;\\r\\n  column-gap: 15px;\\r\\n}\\r\\n\\r\\n.thumbs {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.thumbs:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.thumbs:active {\\r\\n  text-shadow: 5px 5px grey;\\r\\n  transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-size: 20px;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\n.categories {\\r\\n  width: 90%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  font-size: 25px;\\r\\n  text-align: center;\\r\\n  font-weight: 700;\\r\\n  color: black;\\r\\n  font-style: italic;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  padding: 10px 30px;\\r\\n  background-color: brown;\\r\\n  font-size: 25px;\\r\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  border-radius: 30px;\\r\\n  font-weight: 600;\\r\\n  margin: 10px 0;\\r\\n  margin-bottom: 40px;\\r\\n  transition: all 0.4s linear;\\r\\n  -webkit-transition: all 0.4s linear;\\r\\n  -moz-transition: all 0.4s linear;\\r\\n  -ms-transition: all 0.4s linear;\\r\\n  -o-transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.comment:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: rgb(221, 88, 88);\\r\\n}\\r\\n\\r\\n.comment:active {\\r\\n  background-color: brown;\\r\\n  transform: scale(0.95);\\r\\n}\\r\\n\\r\\n/* showing 1 meal by search */\\r\\n.parent-div-1meal {\\r\\n  width: 450px;\\r\\n  height: auto;\\r\\n  background-color: white;\\r\\n  border-radius: 0 50px;\\r\\n  box-shadow: 10px 30px 20px grey;\\r\\n}\\r\\n\\r\\n.meals1 {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 50%;\\r\\n  min-height: 500px;\\r\\n  padding-bottom: 200px;\\r\\n}\\r\\n\\r\\n.video {\\r\\n  padding: 10px 30px;\\r\\n  background-color: brown;\\r\\n  font-size: 25px;\\r\\n  text-decoration: none;\\r\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  border-radius: 30px;\\r\\n  font-weight: 600;\\r\\n  margin-bottom: 40px;\\r\\n  margin-top: -20px;\\r\\n  transition: all 0.4s linear;\\r\\n  -webkit-transition: all 0.4s linear;\\r\\n  -moz-transition: all 0.4s linear;\\r\\n  -ms-transition: all 0.4s linear;\\r\\n  -o-transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n/* Pop error no Meal foud */\\r\\n\\r\\n/* .notFound {\\r\\n  width: 800px;\\r\\n  height: 300px;\\r\\n  background-color: white;\\r\\n  color: red;\\r\\n  font-weight: 600;\\r\\n} */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://meals-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://meals-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://meals-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://meals-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://meals-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_renderMeal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderMeal.js */ \"./src/modules/renderMeal.js\");\n\n\n\n\n(0,_modules_renderMeal_js__WEBPACK_IMPORTED_MODULE_2__.manageData)();\n\n/* search button calling other Meals to the API by name */\nconst searchBtn = document.getElementById('search-btn');\nsearchBtn.addEventListener('click', async () => {\n  const data = await _modules_api_js__WEBPACK_IMPORTED_MODULE_1__.api.getByIngredient();\n  if (data) {\n    const x = [...data];\n    const meal = x.slice(0, 9);\n    (0,_modules_renderMeal_js__WEBPACK_IMPORTED_MODULE_2__.loadFromApiIngridients)(meal);\n    console.log(meal);\n  } else {\n    alert('Sorry, we didn`t find any meal!');\n  }\n});\n\n/* F4gLMfErP7uoXuk89ONc */\n\n// pop alert code not working!!.\n\n/* meals.innerHTML = '';\nconst popError = document.createElement('div');\npopError.classList.add('notFound');\nconst noMeal = document.createElement('h2');\nnoMeal.textContent = 'Sorry, we didn`t find any meal!';\npopError.appendChild(noMeal);\nmeals.appendChild(popError);\n\nconst deletePopError = document.querySelector('notFound');\nmeals.addEventListener('click', () => {\n  deletePopError.classList.remove('notFound');\n}); */\n\n//# sourceURL=webpack://meals-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"like\": () => (/* binding */ like)\n/* harmony export */ });\nconst api = {\n  async getMealList() {\n    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';\n    const response = await fetch(url);\n    const x = await response.json();\n    const allCategories = await x.categories;\n    return allCategories;\n  },\n  async getByIngredient() {\n    const searchInputTxt = document.getElementById('search-input').value.trim();\n    const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`;\n    const response = await fetch(url1);\n    const x = await response.json();\n    const ingredientMeal = await x.meals;\n    return ingredientMeal;\n  },\n};\n\nconst like = {\n  async getLikes() {\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F4gLMfErP7uoXuk89ONc/likes/';\n    const response = await fetch(url);\n    const x = await response.json();\n    const allLikes = await x.result;\n    return allLikes;\n  },\n  async putLikesCount(user, score) {\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F4gLMfErP7uoXuk89ONc/likes/';\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify({\n        user,\n        score,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    /* console.log(response); */\n    /* const result = await response.json();\n    return result; */\n    return response.json();\n  },\n};\n\n\n\n\n//# sourceURL=webpack://meals-app/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/renderMeal.js":
/*!***********************************!*\
  !*** ./src/modules/renderMeal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFromApiIngridients\": () => (/* binding */ loadFromApiIngridients),\n/* harmony export */   \"manageData\": () => (/* binding */ manageData)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst loadFromApi = (topNine) => {\n  const meals = document.querySelector('.meals');\n\n  for (let i = 0; i < topNine.length; i += 1) {\n    // Parent div.\n    const divParent = document.createElement('div');\n    divParent.classList.add('parent-div');\n    meals.appendChild(divParent);\n    // Div picture.\n    const picDiv = document.createElement('div');\n    picDiv.classList.add('pic-div');\n    divParent.appendChild(picDiv);\n    // Img for div.\n    const pic = document.createElement('img');\n    pic.classList.add('img');\n    pic.setAttribute('src', `${topNine[i].strCategoryThumb}`);\n    picDiv.appendChild(pic);\n    // Footer card.\n    const footCard = document.createElement('div');\n    footCard.classList.add('foot-div');\n    divParent.appendChild(footCard);\n    // Div likes\n    const divLikes = document.createElement('div');\n    divLikes.classList.add('div-likes');\n    footCard.appendChild(divLikes);\n    // Heand thumbs up to press to have the like\n    const thumbsUp = document.createElement('span');\n    thumbsUp.classList.add('thumbs');\n    thumbsUp.textContent = '❤️';\n    divLikes.appendChild(thumbsUp);\n    // Count of likes\n    const likesCount = document.createElement('p');\n    likesCount.classList.add('likes');\n    likesCount.textContent = '3 likes';\n    divLikes.appendChild(likesCount);\n    // Categorie Name\n    const categories = document.createElement('p');\n    categories.classList.add('categories');\n    categories.textContent = `Do you like ${topNine[i].strCategory}?`;\n    footCard.appendChild(categories);\n    // Comment button.\n    const comment = document.createElement('a');\n    comment.classList.add('comment');\n    comment.textContent = 'Comments';\n    footCard.appendChild(comment);\n  }\n};\n\n// Calling the api data for category meals.\nconst manageData = async () => {\n  const data = await _api_js__WEBPACK_IMPORTED_MODULE_0__.api.getMealList();\n  const x = [...data];\n  // to randomize or shuffle it the original array before do the slice.\n  /* x.sort(() => 0.5 - Math.random()); */\n  const topNine = x.slice(0, 9);\n  console.log(topNine);\n  loadFromApi(topNine);\n};\n/* manageData(); */\n\n/* for render 1 meal from searh */\nconst meals = document.querySelector('.meals');\nconst loadFromApiIngridients = (meal) => {\n  meals.innerHTML = '';\n\n  for (let i = 0; i < meal.length; i += 1) {\n    // Parent div.\n    const meals1 = document.getElementById('meals');\n    if (meal.length < 3) {\n      meals1.classList.add('meals1');\n    }\n    const divParent = document.createElement('div');\n    if (meal.length < 3) {\n      divParent.classList.add('parent-div-1meal');\n    } else {\n      divParent.classList.add('parent-div');\n    }\n    meals1.appendChild(divParent);\n    // Div picture.\n    const picDiv = document.createElement('div');\n    picDiv.classList.add('pic-div');\n    divParent.appendChild(picDiv);\n    // Img for div.\n    const pic = document.createElement('img');\n    pic.classList.add('img');\n    pic.setAttribute('src', `${meal[i].strMealThumb}`);\n    picDiv.appendChild(pic);\n    // Footer card.\n    const footCard = document.createElement('div');\n    footCard.classList.add('foot-div');\n    divParent.appendChild(footCard);\n    // Div likes\n    const divLikes = document.createElement('div');\n    divLikes.classList.add('div-likes');\n    footCard.appendChild(divLikes);\n    // Heand thumbs up to press to have the like\n    const thumbsUp = document.createElement('span');\n    thumbsUp.classList.add('thumbs');\n    thumbsUp.textContent = '❤️';\n    divLikes.appendChild(thumbsUp);\n    // Count of likes\n    const likesCount = document.createElement('p');\n    likesCount.classList.add('likes');\n    likesCount.textContent = '3 likes';\n    divLikes.appendChild(likesCount);\n    // Categorie Name\n    const categories = document.createElement('p');\n    categories.classList.add('categories');\n    categories.textContent = `Try doing this ${meal[i].strMeal}!!`;\n    footCard.appendChild(categories);\n    // Comment button.\n    const comment = document.createElement('a');\n    comment.classList.add('comment');\n    comment.textContent = 'Comments';\n    footCard.appendChild(comment);\n    // Video button.\n    const video = document.createElement('a');\n    video.classList.add('video');\n    video.setAttribute('href', `${meal[i].strYoutube}`);\n    video.setAttribute('target', '_blank');\n    video.textContent = 'Video';\n    footCard.appendChild(video);\n  }\n};\n\n\n\n//# sourceURL=webpack://meals-app/./src/modules/renderMeal.js?");

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