(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/components/html/BasicForm.js":
/*!***************************************************!*\
  !*** ./resources/js/components/html/BasicForm.js ***!
  \***************************************************/
/*! exports provided: TextForm, SelectForm, RadioForm, RadioForm2, TextAreaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextForm", function() { return TextForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectForm", function() { return SelectForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioForm", function() { return RadioForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioForm2", function() { return RadioForm2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaForm", function() { return TextAreaForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TextForm(props) {
  var type = props.type,
      name = props.name,
      placeholder = props.placeholder,
      handleChange = props.handleChange,
      value = props.value,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW,
      formtext = props.formtext,
      form = props.form;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 6)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    form: form,
    type: type || 'text',
    className: "form-control",
    name: name,
    placeholder: placeholder,
    onChange: handleChange,
    value: value || '',
    required: required
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "form-text text-muted"
  }, formtext)));
}

function SelectForm(props) {
  var name = props.name,
      placeholder = props.placeholder,
      options = props.options,
      handleChange = props.handleChange,
      value = props.value,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: name,
    onChange: handleChange,
    value: value || '',
    required: required
  }, placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, placeholder), options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: option.id,
      value: option.id
    }, option.nama);
  }))));
}

function RadioForm(props) {
  var name = props.name,
      options = props.options,
      handleChange = props.handleChange,
      value = props.value,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW,
      form = props.form,
      _props$labelClass = props.labelClass,
      labelClass = _props$labelClass === void 0 ? "" : _props$labelClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4),
    style: {
      marginTop: "0.4rem"
    }
  }, options.map(function (option) {
    var labelC = option[2] ? option[2] : labelClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline",
      key: option[0]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label ".concat(labelC)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      form: form,
      className: "form-check-input",
      type: "radio",
      name: name,
      onChange: handleChange,
      value: option[0],
      checked: value == option[0],
      required: required
    }), " ", option[1]));
  })));
}

function RadioForm2(props) {
  var name = props.name,
      options = props.options,
      handleChange = props.handleChange,
      value = props.value,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW,
      form = props.form,
      _props$labelClass2 = props.labelClass,
      labelClass = _props$labelClass2 === void 0 ? "" : _props$labelClass2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4),
    style: {
      marginTop: "0.4rem"
    }
  }, options.map(function (option) {
    var labelC = option[2] ? option[2] : labelClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline",
      key: option[0]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label ".concat(labelC)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      form: form,
      className: "form-check-input",
      type: "radio",
      name: name,
      onChange: handleChange,
      value: option[0],
      checked: value === option[0],
      required: required
    }), " ", option[1]));
  })));
}

function TextAreaForm(props) {
  var name = props.name,
      handleChange = props.handleChange,
      value = props.value,
      placeholder = props.placeholder,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    style: {
      width: '100%'
    },
    className: "form-control",
    name: name,
    onChange: handleChange,
    value: value || '',
    placeholder: placeholder,
    required: required
  })));
}



/***/ }),

/***/ "./resources/js/components/html/Pagination.js":
/*!****************************************************!*\
  !*** ./resources/js/components/html/Pagination.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Pagination(props) {
  var _React$createElement;

  var pageData = props.pageData,
      handlePageClick = props.handlePageClick,
      page = props.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination",
    style: {
      display: pageData.pageCount > 1 ? 'block' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_1___default.a, (_React$createElement = {
    previousLabel: "prev",
    nextLabel: 'next',
    breakLabel: '...',
    breakClassName: 'break-me',
    pageCount: pageData.pageCount,
    marginPagesDisplayed: 1,
    pageRangeDisplayed: 3,
    onPageChange: handlePageClick,
    initialPage: page - 1,
    containerClassName: 'pagination pagination-sm',
    pageClassName: 'page-item',
    previousClassName: 'page-item',
    nextClassName: 'page-item',
    breakClassNamee: 'page-item',
    nextLinkClassName: 'page-link'
  }, _defineProperty(_React$createElement, "previousClassName", 'page-link'), _defineProperty(_React$createElement, "pageLinkClassName", 'page-link'), _defineProperty(_React$createElement, "breakLinkClassName", 'page-link'), _defineProperty(_React$createElement, "activeClassName", 'active'), _React$createElement)));
}

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./resources/js/components/html/Template.js":
/*!**************************************************!*\
  !*** ./resources/js/components/html/Template.js ***!
  \**************************************************/
/*! exports provided: PageTitle, Alert, Loading, DefaultImage, NotifMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImage", function() { return DefaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifMessage", function() { return NotifMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PageTitle(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? 'Judul Halaman' : _props$title,
      _props$navs = props.navs,
      navs = _props$navs === void 0 ? [] : _props$navs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-2 mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, title)), navs.map(function (n, key) {
    if (n.show) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: key,
      value: n.action,
      onClick: n.clickHandle,
      className: "btn ".concat(n.className ? n.className : 'btn-primary', " float-right ml-1")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas ".concat(n.icon ? n.icon : 'fa-plus')
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, n.text || ''));
  })));
}

function Alert(props) {
  var message = props.message,
      type = props.type,
      clickHandle = props.clickHandle,
      _props$html = props.html,
      html = _props$html === void 0 ? false : _props$html;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(type ? type : 'info'),
    style: {
      overflow: 'hidden'
    },
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-left"
  }, html ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: message
    }
  }) : message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs float-right",
    onClick: function onClick() {
      return clickHandle();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })));
}

function Loading(props) {
  return props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "col-12 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " ", props.text ? props.text : 'Loading...') : '';
}

function DefaultImage(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? "" : _props$text,
      w = props.w,
      h = props.h;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: w ? w : '100%',
      height: h ? h : 150,
      backgroundColor: "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")"),
      color: 'white',
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      textAlign: 'middle',
      fontSize: 60,
      paddingTop: 30,
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, text.substring(0, 1), " ", text.substring(text.length - 1, text.length)));
}

function NotifMessage(props) {
  var text = props.text,
      _props$success = props.success,
      success = _props$success === void 0 ? true : _props$success;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas ".concat(!success ? 'fa-exclamation text-danger' : 'fa-check text-success')
  }), " ", text);
}

function ModalWarpper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    style: {
      display: 'block',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-lg",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, props.children)));
}



/***/ }),

/***/ "./resources/js/utils/useForm.js":
/*!***************************************!*\
  !*** ./resources/js/utils/useForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useForm = function useForm(callback) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(fields),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    if (event) event.preventDefault();
    callback();
  };

  var handleChange = function handleChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  };

  function getErrors() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var errMsg = [];
    errMsg = Object.keys(msg).map(function (key) {
      return msg[key].map(function (item) {
        return item;
      });
    });
    return errMsg;
  }

  return {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    setValues: setValues,
    values: values,
    getErrors: getErrors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ })

}]);