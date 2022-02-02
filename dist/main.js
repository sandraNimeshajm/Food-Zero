/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/dropDownMenu.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/dropDownMenu.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar menu = function () {\r\n    var menuItemsWithSubmenu = document.querySelectorAll(\".js-nav__item-has-children\");\r\n    if (menuItemsWithSubmenu.length === 0)\r\n        return;\r\n    menuItemsWithSubmenu.forEach(function (item) {\r\n        item.querySelector(\"a\").insertAdjacentHTML(\"beforeend\", \"\\n\\t\\t\\t<div class=\\\"nav__subitems-expanding | js-nav-subitems-expanding\\\" data-open='closed'>\\n\\t\\t\\t\\t<svg width=\\\"6\\\" height=\\\"10\\\" viewBox=\\\"0 0 6 10\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n\\t\\t\\t\\t\\t<path d=\\\"M1 9L5 5L1 1\\\" stroke=\\\"#D3B48B\\\" stroke-width=\\\"1.5\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/>\\n\\t\\t\\t\\t</svg>\\n\\t\\t\\t</div>\\n        \");\r\n    });\r\n    var expandingElements = document.querySelectorAll(\".js-nav-subitems-expanding\");\r\n    expandingElements.forEach(function (el) {\r\n        el.addEventListener(\"click\", function (e) {\r\n            e.preventDefault();\r\n            expandingElements.forEach(function (expand) {\r\n                if (expand != el) {\r\n                    expand.parentElement.parentElement.querySelector(\".js-nav-subitems\").style.height = \"0px\";\r\n                    expand.setAttribute(\"data-open\", \"closed\");\r\n                }\r\n            });\r\n            if (el.getAttribute(\"data-open\") === \"closed\") {\r\n                var height_1 = 0;\r\n                var liParent = el.parentElement.parentElement;\r\n                liParent\r\n                    .querySelectorAll(\":scope > .js-nav-subitems > .js-nav-subitem\")\r\n                    .forEach(function (li) {\r\n                    height_1 += li.getBoundingClientRect().height;\r\n                });\r\n                liParent.querySelector(\".js-nav-subitems\").style.height = height_1 + \"px\";\r\n                liParent.querySelector(\".js-nav-subitems\").style.overflow =\r\n                    \"visible\";\r\n                el.setAttribute(\"data-open\", \"opened\");\r\n            }\r\n            else {\r\n                var liParent = el.parentElement.parentElement;\r\n                liParent.querySelector(\".nav__subitems\").style.height = \"0px\";\r\n                liParent.querySelector(\".js-nav-subitems\").style.overflow =\r\n                    \"hidden\";\r\n                el.setAttribute(\"data-open\", \"closed\");\r\n            }\r\n        });\r\n    });\r\n};\r\nexports[\"default\"] = menu;\r\n\n\n//# sourceURL=webpack://food-zero/./src/ts/components/dropDownMenu.ts?");

/***/ }),

/***/ "./src/ts/components/hamburgerMenu.ts":
/*!********************************************!*\
  !*** ./src/ts/components/hamburgerMenu.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar hamburgerMenu = function () {\r\n    var hamburgerMenuBtnOpen = document.querySelector(\".js-menu-open\");\r\n    var hamburgerMenuBtnClose = document.querySelector(\".js-menu-close\");\r\n    var headerContent = document.querySelector(\".js-header-content\");\r\n    var body = document.querySelector(\"body\");\r\n    function openMenuHandler() {\r\n        headerContent.classList.add(\"active\");\r\n        hamburgerMenuBtnOpen.classList.add(\"active\");\r\n        body.classList.add(\"fixed\");\r\n    }\r\n    hamburgerMenuBtnOpen.addEventListener(\"click\", openMenuHandler);\r\n    function closeMenuHandler() {\r\n        headerContent.classList.remove(\"active\");\r\n        hamburgerMenuBtnOpen.classList.remove(\"active\");\r\n        body.classList.remove(\"fixed\");\r\n    }\r\n    hamburgerMenuBtnClose.addEventListener(\"click\", closeMenuHandler);\r\n    document.addEventListener(\"keydown\", function (e) {\r\n        if (e.key === \"Escape\" && !headerContent.classList.contains(\"hidden\")) {\r\n            headerContent.classList.remove(\"active\");\r\n            hamburgerMenuBtnOpen.classList.remove(\"active\");\r\n            body.classList.remove(\"fixed\");\r\n        }\r\n    });\r\n};\r\nexports[\"default\"] = hamburgerMenu;\r\n\n\n//# sourceURL=webpack://food-zero/./src/ts/components/hamburgerMenu.ts?");

/***/ }),

/***/ "./src/ts/components/stickyHeader.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/stickyHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader = function () {\r\n    var header = document.querySelector(\".js-header\");\r\n    var prevPosY = window.scrollY;\r\n    if (window.scrollY > 10) {\r\n        header.classList.add(\"not-top\");\r\n    }\r\n    window.addEventListener(\"scroll\", function () {\r\n        var posY = window.scrollY;\r\n        if (posY < 10) {\r\n            header.classList.remove(\"not-top\");\r\n        }\r\n        else {\r\n            header.classList.add(\"not-top\");\r\n        }\r\n        if (posY < prevPosY || posY <= 0) {\r\n            header.classList.remove(\"hide\");\r\n        }\r\n        else {\r\n            header.classList.add(\"hide\");\r\n        }\r\n        prevPosY = posY;\r\n    });\r\n};\r\nexports[\"default\"] = stickyHeader;\r\n\n\n//# sourceURL=webpack://food-zero/./src/ts/components/stickyHeader.ts?");

/***/ }),

/***/ "./src/ts/components/year.ts":
/*!***********************************!*\
  !*** ./src/ts/components/year.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar year = function () {\r\n    var dateFooter = new Date().getFullYear();\r\n    document.querySelector(\".year\").innerHTML = dateFooter.toString();\r\n};\r\nexports[\"default\"] = year;\r\n\n\n//# sourceURL=webpack://food-zero/./src/ts/components/year.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader_1 = __webpack_require__(/*! ./components/stickyHeader */ \"./src/ts/components/stickyHeader.ts\");\r\nvar hamburgerMenu_1 = __webpack_require__(/*! ./components/hamburgerMenu */ \"./src/ts/components/hamburgerMenu.ts\");\r\nvar dropDownMenu_1 = __webpack_require__(/*! ./components/dropDownMenu */ \"./src/ts/components/dropDownMenu.ts\");\r\nvar year_1 = __webpack_require__(/*! ./components/year */ \"./src/ts/components/year.ts\");\r\n(0, stickyHeader_1.default)();\r\n(0, hamburgerMenu_1.default)();\r\n(0, dropDownMenu_1.default)();\r\n(0, year_1.default)();\r\n\n\n//# sourceURL=webpack://food-zero/./src/ts/main.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;