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

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/_database-service */ "./src/scripts/service/_database-service.ts");
/* harmony import */ var _model_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/_base-model */ "./src/scripts/model/_base-model.ts");





var renderGrid = function (filePath) {
  // TODO: implement code to Render grid
  // file path in header
  var headerFilePath = document.getElementById('headerFilePath');
  headerFilePath.innerHTML = filePath; // table

  var data = Object(_service_database_service__WEBPACK_IMPORTED_MODULE_0__["loadData"])(filePath);
  var table = document.getElementById('table');
  data.forEach(function (element) {
    if (element.fileType == "folder") {
      var tableRow = "\n      <tr class=\"folderRecord\" data-name=\"" + element.fileName + "\">\n        <td class=\"text-right\">\n          <i class=\"ms-Icon ms-Icon--FabricFolder\"></i>\n        </td>\n        <td>" + element.fileName + "</td>\n        <td>" + element.dateModified + "</td>\n        <td>" + element.modifiedBy + "</td>\n        <td>\n          <button class=\"updateButton\" data-id=\"" + element.id + "\">update</button>\n          <button class=\"deleteButton\" data-id=\"" + element.id + "\">delete</button>\n        </td>\n      </tr>\n      ";
      table.innerHTML += tableRow;
    } else {
      var tableRow = "\n      <tr>\n        <td class=\"text-right\">\n          <i class=\"ms-Icon ms-Icon--OpenFile\"></i>\n        </td>\n        <td>" + element.fileName + "</td>\n        <td>" + element.dateModified + "</td>\n        <td>" + element.modifiedBy + "</td>\n        <td>\n          <button class=\"updateButton\" data-id=\"" + element.id + "\">update</button>\n          <button class=\"deleteButton\" data-id=\"" + element.id + "\">delete</button>\n        </td>\n      </tr>\n      ";
      table.innerHTML += tableRow;
    }
  });
  $('.updateButton').click(function () {
    $('#form').modal('show');
    Object(_service_database_service__WEBPACK_IMPORTED_MODULE_0__["deleteData"])($(this).data('id'));
  });
  $('.deleteButton').click(function () {
    Object(_service_database_service__WEBPACK_IMPORTED_MODULE_0__["deleteData"])($(this).data('id'));
    location.reload();
  });
  $('.folderRecord').click(function () {
    sessionStorage.filePath += $(this).data('name') + "/";
    console.log('folder clicked');
    console.log(sessionStorage.filePath);
    location.reload();
  });
};

function validateInput(type, name, modified, modifiedBy) {
  if (type === '' || name === '' || modified === '' || modifiedBy === '') {
    console.log('Please input all required field');
    return false;
  }

  console.log('Input validated');
  return true;
}

function callAddForm() {
  $('#form').modal('show');
}

function submit() {
  var path = sessionStorage.filePath;
  var tfType = $('#tfType').val();
  var tfName = $('#tfName').val();
  var tfModified = $('#tfModified').val();
  var tfModifiedBy = $('#tfModifiedBy').val();

  if (!localStorage.id) {
    localStorage.id = 0;
  } else {
    localStorage.id += 1;
  }

  var id = localStorage.id;

  if (validateInput(tfType, tfName, tfModified, tfModifiedBy)) {
    var created = new _model_base_model__WEBPACK_IMPORTED_MODULE_1__["BaseModel"](id, tfType, tfName, tfModified, tfModifiedBy, path);
    Object(_service_database_service__WEBPACK_IMPORTED_MODULE_0__["saveData"])(created);
  }
}

function pathBack() {
  if (sessionStorage.filePath != "./") {
    var filePath = sessionStorage.filePath;
    var splited = filePath.split("/");
    var newFilePath = "";

    for (var i = 0; i < splited.length - 2; i++) {
      newFilePath += splited[i];
      newFilePath += "/";
    }

    sessionStorage.filePath = newFilePath;
    console.log(sessionStorage.filePath);
  } else {
    console.log("At root");
  }

  location.reload();
}

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', submit);
var btnAdd = document.getElementById('btnAdd');
btnAdd === null || btnAdd === void 0 ? void 0 : btnAdd.addEventListener('click', callAddForm);
var btnBack = document.getElementById('btnBack');
btnBack === null || btnBack === void 0 ? void 0 : btnBack.addEventListener('click', pathBack);
/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/model/_base-model.ts":
/*!******************************************!*\
  !*** ./src/scripts/model/_base-model.ts ***!
  \******************************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel =
/** @class */
function () {
  function BaseModel(id, type, name, modified, modifiedBy, path) {
    this.id = id;
    this.fileType = type;
    this.fileName = name;
    this.dateModified = modified;
    this.modifiedBy = modifiedBy;
    this.filePath = path;
  }

  return BaseModel;
}();



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


Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  if (!sessionStorage.filePath) {
    sessionStorage.filePath = './';
  }

  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(sessionStorage.filePath);
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
function saveData(basemodel) {
  if (localStorage.data) {
    var currentData = JSON.parse(localStorage.getItem('data') || '{}');
    currentData.push(basemodel);
    localStorage.data = JSON.stringify(currentData);
  } else {
    var dataArray = [];
    dataArray[0] = basemodel;
    localStorage.data = JSON.stringify(dataArray);
  }

  console.log('Success saved data to local storage');
}
function loadData(path) {
  var allData = JSON.parse(localStorage.getItem('data') || '{}');
  var filteredData = [];
  allData.forEach(function (element) {
    if (element.filePath === path) filteredData.push(element);
  });
  return filteredData;
}
function deleteData(id) {
  var allData = JSON.parse(localStorage.getItem('data') || '{}');
  var filteredData = [];
  allData.forEach(function (element) {
    if (element.id != id) filteredData.push(element);
  });
  localStorage.data = JSON.stringify(filteredData);
}
function updateData(id, updatedRecord) {
  deleteData(id);
  saveData(updatedRecord);
  location.reload();
}

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