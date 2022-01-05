/*! Build Date: 2022-1-5 1:40:32 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: itemInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemInfo", function() { return itemInfo; });
var itemInfo = [{
  "NAME": "SMP",
  "PRICE": "Galaxy Z Fold3 (256GB)",
  "IMAGE URL": "£1,599.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/2108/gallery/uk-galaxy-z-fold3-f926-5g-sm-f926bzkdeua-thumb-477352697?$160_160_PNG$"
}, {
  "NAME": "SMP",
  "PRICE": "Galaxy Z Flip3 (128GB)",
  "IMAGE URL": "£949.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/sm-f711bzebeua/gallery/uk-galaxy-z-flip3-f711-5g-397170-sm-f711bzebeua-thumb-516130930?$160_160_PNG$"
}, {
  "NAME": "SMP",
  "PRICE": "S21 Ultra 5G (128GB)",
  "IMAGE URL": "£1,149.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-ultra-5g-g988-sm-g998bzsgeua-thumb-368888054?$160_160_PNG$"
}, {
  "NAME": "Tablet",
  "PRICE": "Galaxy Z Fold3 (256GB)",
  "IMAGE URL": "£1,599.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/2108/gallery/uk-galaxy-z-fold3-f926-5g-sm-f926bzkdeua-thumb-477352697?$160_160_PNG$"
}, {
  "NAME": "Tablet",
  "PRICE": "Galaxy Z Flip3 (128GB)",
  "IMAGE URL": "£949.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/sm-f711bzebeua/gallery/uk-galaxy-z-flip3-f711-5g-397170-sm-f711bzebeua-thumb-516130930?$160_160_PNG$"
}, {
  "NAME": "Tablet",
  "PRICE": "Galaxy Tab S7 FE (64GB, Wifi)",
  "IMAGE URL": "£449.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/sm-t733nzsaeua/gallery/uk-galaxy-tab-s7-fe-t733-sm-t733nzsaeua-thumb-490806996?$160_160_PNG$"
}, {
  "NAME": "Wearables",
  "PRICE": "Watch4 Classic (42mm, BT)",
  "IMAGE URL": "£274.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/2108/gallery/uk-galaxy-watch4-classic-400142-sm-r880nzkaeua-thumb-481824165?$160_160_PNG$"
}, {
  "NAME": "Wearables",
  "PRICE": "Watch4 (40mm, BT)",
  "IMAGE URL": "£199.00",
  "CTA Landing": "https://images.samsung.com/is/image/samsung/p6pim/uk/2108/gallery/uk-galaxy-watch4-400170-sm-r860nzdaeua-thumb-481838692?$160_160_PNG$"
}]; //export default itemInfo;
// export function canadianToUs(canadian) {
//   return roundTwoDecimals(canadian * exchangeRate);
// }



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");

console.log(_data_js__WEBPACK_IMPORTED_MODULE_0__["itemInfo"]);
var TRADE = window.TRADE || {};

TRADE = function ($) {
  'use strict';

  var dev = {
    itemChoiceChange: function itemChoiceChange() {
      $('.item_button').click(function () {
        $(this).closest('.radio-wrap').find('.item_button').removeClass('choice');
        $(this).addClass('choice');
      });
    },
    tabSectionChange: function tabSectionChange() {
      var tabitem = $('.tab.radio-wrap');
      var tabSection = $('.tab_section');
      var requestURL; // var request = new XMLHttpRequest();
      // request.open('GET', requestURL);
      // request.responseType = 'json';
      // request.send();

      tabitem.click(function () {});
    },
    listfoldToggle: function listfoldToggle(button) {
      $(button).closest('.device').toggleClass('list-hidden');
    },
    init: function init() {
      if ($('.section__purchase').length > 0) {
        dev.itemChoiceChange();
        dev.tabSectionChange();
      }
    }
  };
  $(document).ready(function () {
    dev.init();
  });
  return {
    listfoldToggle: dev.listfoldToggle
  };
}($);

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map