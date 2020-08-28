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

/***/ "./src/scripts/components/_form.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_form.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/_database-service */ "./src/scripts/service/_database-service.ts");

var currentFormData;

function submit(event) {
  if (currentFormData != null) {
    Object(_service_database_service__WEBPACK_IMPORTED_MODULE_0__["saveData"])(currentFormData);
  } else {
    console.log("No file inputed");
  }
}

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', submit);
var inputFile = document.getElementById("fileItem");

inputFile.onchange = function (event) {
  var fileList = inputFile.files;

  if (fileList != null) {
    var formData = new FormData();
    formData.append('dataFile', fileList[0]);
    currentFormData = formData;
  }
};

/***/ }),

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function updateData() {}

function deleteData() {}

var renderGrid = function (data) {
  // TODO: implement code to Render grid
  var table = document.getElementById('table');
  data.forEach(function (element) {
    // if (element.type == "folder") {
    //     const tableRow = `
    //     <tr class="folderRecord" data-name="${element.name}">
    //         <td class="text-right">
    //             <i class="ms-Icon ms-Icon--FabricFolder"></i>
    //         </td>
    //         <td>${element.name}</td>
    //         <td>${element.modified}</td>
    //         <td>${element.modifiedBy}</td>
    //         <td>
    //             <button class="updateButton" data-id="${element.id}">update</button>
    //             <button class="deleteButton" data-id="${element.id}">delete</button>
    //         </td>
    //     </tr>
    //     `;
    //     table.innerHTML += tableRow;
    // } else {
    var tableRow = "\n            <tr>\n                <td class=\"text-right\">\n                    <i class=\"ms-Icon ms-Icon--OpenFile\"></i>\n                </td>\n                <td>" + element.name + "</td>\n                <td>" + element.dateModified + "</td>\n                <td>" + element.createdBy + "</td>\n                <td>\n                    <button class=\"updateButton\" data-id=\"" + element.id + "\">update</button>\n                    <button class=\"deleteButton\" data-id=\"" + element.id + "\">delete</button>\n                </td>\n            </tr>\n        ";
    table.innerHTML += tableRow;
  }); // })
  // $('.updateButton').click(function (event) {
  //     $('#form').modal('show');
  //     deleteData(($(this).data('id'));)
  // })
  // $('.deleteButton').click(function (event) {
  //     deleteData($(this).data('id'));
  //     event.stopPropagation();
  //     location.reload();
  // })
  // $('.folderRecord').click(function (event) {
  //     sessionStorage.filePath += $(this).data('name') + "/";
  //     console.log('folder clicked');
  //     console.log(sessionStorage.filePath);
  //     location.reload();
  // })
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/components/_header.ts":
/*!*******************************************!*\
  !*** ./src/scripts/components/_header.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pathBack() {
  //if (sessionStorage.filePath != "./") {
  //    let filePath: string = sessionStorage.filePath;
  //    let splited: string[] = filePath.split("/");
  //    let newFilePath: string = "";
  //    for (let i = 0; i < splited.length - 2; i++) {
  //        newFilePath += splited[i];
  //        newFilePath += "/";
  //    }
  //    sessionStorage.filePath = newFilePath;
  //    console.log(sessionStorage.filePath);
  //} else {
  //    console.log("At root");
  //}
  //location.reload();
  console.log("Back");
}

var headerFilePath = document.getElementById('headerFilePath');
headerFilePath.innerHTML = sessionStorage.filePath;
var btnBack = document.getElementById('btnBack');
btnBack === null || btnBack === void 0 ? void 0 : btnBack.addEventListener('click', pathBack);

/***/ }),

/***/ "./src/scripts/components/_navigation.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/_navigation.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function callNewForm() {
  console.log("New");
}

function callUploadForm() {
  $('#Form').modal('show');
}

var btnNew = document.getElementById("btnNew");
btnNew === null || btnNew === void 0 ? void 0 : btnNew.addEventListener('click', callNewForm);
var btnUpload = document.getElementById("btnUpload");
btnUpload === null || btnUpload === void 0 ? void 0 : btnUpload.addEventListener('click', callUploadForm);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_form */ "./src/scripts/components/_form.ts");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_navigation */ "./src/scripts/components/_navigation.ts");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/_header */ "./src/scripts/components/_header.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/_database-service */ "./src/scripts/service/_database-service.ts");






Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  if (!sessionStorage.filePath) {
    sessionStorage.filePath = './';
  }

  var filePath = sessionStorage.filePath;
  Object(_service_database_service__WEBPACK_IMPORTED_MODULE_5__["loadData"])().then(function (data) {
    Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
  });
});

/***/ }),

/***/ "./src/scripts/service/_database-service.ts":
/*!**************************************************!*\
  !*** ./src/scripts/service/_database-service.ts ***!
  \**************************************************/
/*! exports provided: saveData, loadData, deleteData, updateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveData", function() { return saveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony import */ var _utilities_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_route */ "./src/scripts/utilities/_route.ts");


function saveData(currentFormData) {
  console.log(currentFormData);
  console.log("at save data");
  $.ajax({
    url: _utilities_route__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PATH"],
    type: 'POST',
    data: currentFormData,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
    }
  });
}
function loadData() {
  return new Promise(function (resolve, reject) {
    fetch(_utilities_route__WEBPACK_IMPORTED_MODULE_0__["GET_PATH"]).then(function (response) {
      return response.json();
    }).then(function (data) {
      resolve(data);
    });
  });
}
function deleteData(base_model) {}
function updateData(base_model) {}

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ready = function (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/_route.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utilities/_route.ts ***!
  \*****************************************/
/*! exports provided: GET_PATH, POST_PATH, PUT_PATH, UPLOAD_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PATH", function() { return GET_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_PATH", function() { return POST_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_PATH", function() { return PUT_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PATH", function() { return UPLOAD_PATH; });
var GET_PATH = "https://localhost:44395/api/datafile";
var POST_PATH = "";
var PUT_PATH = "";
var UPLOAD_PATH = "https://localhost:44395/api/datafile/upload";

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map