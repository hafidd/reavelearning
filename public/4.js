(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/ErrorBoundary.js":
/*!***************************************!*\
  !*** ./resources/js/ErrorBoundary.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false,
      error: props.error
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {// You can also log the error to an error reporting service
      // logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            paddingLeft: '2%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Error"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.stringify(this.state.error)));
      }

      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\ErrorBoundary.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/html/Template.js":
/*!**************************************************!*\
  !*** ./resources/js/components/html/Template.js ***!
  \**************************************************/
/*! exports provided: PageTitle, Alert, Loading, DefaultImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImage", function() { return DefaultImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



function PageTitle(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? 'Judul Halaman' : _props$title,
      _props$navs = props.navs,
      navs = _props$navs === void 0 ? [] : _props$navs;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-2 mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "float-left"
  }, title), navs.map(function (n, key) {
    if (n.show) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: key,
      onClick: n.clickHandle,
      className: "btn ".concat(n.className ? n.className : 'btn-primary', " float-right ml-1")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas ".concat(n.icon ? n.icon : 'fa-plus')
    }));
  })));
}

function Alert(props) {
  var message = props.message,
      type = props.type,
      clickHandle = props.clickHandle,
      _props$html = props.html,
      html = _props$html === void 0 ? false : _props$html;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(type ? type : 'info'),
    role: "alert"
  }, html ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: message
    }
  }) : message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs float-right",
    onClick: function onClick() {
      return clickHandle();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })));
}

function Loading(props) {
  return props.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "col-12 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " ", props.text ? props.text : 'Loading...') : '';
}

function DefaultImage(props) {
  var text = props.text,
      w = props.w,
      h = props.h;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, text.substring(0, 1), " ", text.substring(text.length - 1, text.length)));
}


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageTitle, "PageTitle", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\html\\Template.js");
  reactHotLoader.register(Alert, "Alert", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\html\\Template.js");
  reactHotLoader.register(Loading, "Loading", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\html\\Template.js");
  reactHotLoader.register(DefaultImage, "DefaultImage", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\html\\Template.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/mapel/MapelCard.js":
/*!****************************************************!*\
  !*** ./resources/js/components/mapel/MapelCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-tooltip */ "./node_modules/react-simple-tooltip/es/index.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var MapelCard = function MapelCard(props) {
  var mapels = props.mapels,
      toggleDetail = props.toggleDetail;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, mapels.map(function (mapel) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapelCardItem, {
      key: mapel.id,
      mapel: mapel,
      toggleDetail: toggleDetail
    });
  })));
};

var MapelCardItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var mapel = props.mapel,
      toggleDetail = props.toggleDetail;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 mb-3 p-1 hover1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      width: "100%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: 0,
      height: 150
    }
  }, mapel.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/mapel/".concat(mapel.id, ".jpg"),
    alt: "error",
    style: {
      width: '100%',
      height: '100%'
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_2__["DefaultImage"], {
    text: mapel.nama
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 8,
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      color: 'white',
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, mapel.kode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 8,
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      color: 'white',
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, mapel.akses === "private" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-lock fa-2x"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "card-title"
  }, mapel.nama.substring(0, 25), mapel.nama.length > 25 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: mapel.nama,
    background: "#fff",
    color: "#000",
    padzding: "0"
  }, "...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, mapel.pengajar))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    style: {
      height: '3.2em',
      position: 'relative'
    }
  }, mapel.keterangan && mapel.keterangan.substring(0, 50), mapel.keterangan && mapel.keterangan.length > 50 && "...", !mapel.keterangan && '-'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    value: mapel.id,
    onClick: toggleDetail,
    className: "btn btn-primary btn-sm mr-1"
  }, "Detail")))));
});
var _default = MapelCard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MapelCard, "MapelCard", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\mapel\\MapelCard.js");
  reactHotLoader.register(MapelCardItem, "MapelCardItem", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\mapel\\MapelCard.js");
  reactHotLoader.register(_default, "default", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\mapel\\MapelCard.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/mapel/MapelSearch.js":
/*!******************************************************!*\
  !*** ./resources/js/components/mapel/MapelSearch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var MapelSearch = function MapelSearch(props) {
  var kategori = props.kategori,
      loadData = props.loadData,
      user = props.user;

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    return loadData(values);
  }),
      values = _useForm.values,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      setValues = _useForm.setValues;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form-search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container d-flex h-100 flex-column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow-1 mb-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "nama",
    name: "nama",
    value: values.nama || '',
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "kode",
    name: "kode",
    value: values.kode || '',
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "kategori_id",
    onChange: handleChange,
    value: values.kategori_id || ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Pilih Kategori ="), kategori.map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: k.id,
      value: k.id
    }, k.nama);
  }))), user !== 'siswa' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "status",
    onChange: handleChange,
    value: values.status || ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Status ="), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "aktif"
  }, "Aktif"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "nonaktif"
  }, "Non aktif"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "akses",
    onChange: handleChange,
    value: values.akses || ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Akses ="), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "public"
  }, "Public"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "private"
  }, "Private")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning float-left",
    style: {
      width: '48%',
      padding: "0.375rem 0.5rem"
    },
    onClick: function onClick() {
      return setValues({});
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success float-right",
    style: {
      width: '48%',
      padding: "0.375rem 0.5rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  }))))));
};

__signature__(MapelSearch, "useForm{{ values, handleChange, handleSubmit, setValues }}", function () {
  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

var _default = MapelSearch;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MapelSearch, "MapelSearch", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\mapel\\MapelSearch.js");
  reactHotLoader.register(_default, "default", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\mapel\\MapelSearch.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/siswa/MapelSiswa.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/siswa/MapelSiswa.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapelSiswa; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ErrorBoundary */ "./resources/js/ErrorBoundary.js");
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _mapel_MapelSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapel/MapelSearch */ "./resources/js/components/mapel/MapelSearch.js");
/* harmony import */ var _mapel_MapelCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapel/MapelCard */ "./resources/js/components/mapel/MapelCard.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var MapelSiswa =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MapelSiswa, _React$Component);

  function MapelSiswa(props) {
    var _this;

    _classCallCheck(this, MapelSiswa);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapelSiswa).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setSearch", function (data) {
      _this.setState({
        search: data
      }, function () {
        _this.loadData();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadData", function () {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].cek()) {
        _this.props.logOut('mapel_siswa', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      var values = _objectSpread({}, _this.state.search, {
        type: _this.state.action
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel-siswa?page=' + _this.state.page, {
        params: values,
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
        }
      }).then(function (res) {
        if (res.data.meta.current_page > res.data.meta.last_page) {
          _this.setState({
            page: res.data.meta.last_page
          }, function () {
            _this.loadData();
          });

          return;
        }

        _this.setState({
          mapels: res.data.data,
          pageData: {
            from: res.data.meta.from,
            total: res.data.meta.total,
            per_page: res.data.meta.per_page,
            pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page)
          },
          fetch: false
        });
      })["catch"](function (err) {
        if (err.response.status === 401) {
          _this.props.logOut('mapel_siswa', true);
        } else {
          _this.setState({
            error: 'server error',
            fetch: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getKategori", function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/kategori').then(function (res) {
        _this.setState({
          kategori: res.data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCount", function () {});

    _defineProperty(_assertThisInitialized(_this), "getDetail", function (id) {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].cek()) {
        _this.setState({
          message: "mohon login ulang"
        });

        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel-detail/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
        }
      }).then(function (res) {
        _this.setState({
          mapel: res.data.data,
          id: id,
          modalLoading: false
        });
      })["catch"](function (err) {
        _this.setState({
          message: "Terjadi kesalahan, mohon <i>reload</i> aplikasi / coba beberapa saat lagi",
          showDetail: false
        });

        return;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageClick", function (data) {
      _this.setState({
        page: data.selected + 1
      }, function () {
        _this.loadData();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeData", function (e) {
      var action = e.target.value;

      _this.setState({
        action: action,
        mapels: [],
        error: ''
      }, function () {
        _this.loadData();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearMessage", function () {
      return _this.setState({
        message: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDetail", function (e) {
      var id = e.target.value;

      _this.setState({
        mapel: [],
        modalLoading: true,
        showDetail: !_this.state.showDetail,
        id: ''
      }, function () {
        if (id) _this.getDetail(id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeGroup", function (e) {
      _this.setState({
        group: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].cek()) {
        return;
      }

      var confirmMessage = _this.state.action === "waiting" ? "Batalkan" : _this.state.action === "joined" ? "Keluar" : e.target.value;
      if (!confirm("".concat(confirmMessage, " ").concat(_this.state.mapel.nama, "?"))) return;

      _this.setState({
        modalLoading: true
      });

      var values = {
        mapel_id: _this.state.id,
        group: _this.state.group,
        action: _this.state.action
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/mapel-action/', values, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
        }
      }).then(function (res) {
        console.log(_this.state.mapels);

        var filteredMapels = _this.state.mapels.filter(function (mapel) {
          return mapel.id != _this.state.id;
        });

        _this.setState({
          mapels: filteredMapels,
          modalLoading: false,
          message: 'sukses',
          showDetail: false,
          menungguCount: _this.state.menungguCount + (_this.state.mapel.akses === "private" ? 1 : 0),
          bergabungCount: _this.state.bergabungCount + (_this.state.mapel.akses === "public" ? 1 : 0)
        });

        console.log(res.data);
      })["catch"](function (err) {
        if (err.response) {
          console.log(err.response);

          if (err.response.request.status === 422) {// validation err
          } else if (err.response.request.status === 401) {//auth error
          } else {//server error
            }
        } else {//server error
          }

        _this.setState({
          modalLoading: false
        });
      });
    });

    _this.state = {
      action: 'joined',
      mapels: [],
      pageData: {
        pageCount: 0
      },
      page: 1,
      fetch: false,
      error: '',
      message: '',
      kategori: [],
      search: {},
      menungguCount: 0,
      bergabungCount: 0,
      id: '',
      showDetail: false,
      mapel: [],
      group: '',
      modalLoading: false,
      modalMessage: ''
    };
    return _this;
  }

  _createClass(MapelSiswa, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getKategori();
      this.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_6__["PageTitle"], {
        title: "Mata Pelajaran"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav float-right mt-2 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btnnav ".concat(this.state.action === '' && 'active'),
        onClick: this.changeData,
        value: ""
      }, "Tersedia")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btnnav ".concat(this.state.action === 'waiting' && 'active'),
        onClick: this.changeData,
        value: "waiting"
      }, "Menunggu (", this.state.menungguCount, ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btnnav ".concat(this.state.action === 'joined' && 'active'),
        onClick: this.changeData,
        value: "joined"
      }, "Bergabung (", this.state.bergabungCount, ")")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-0"
      }), this.state.message !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: this.state.message,
        clickHandle: this.clearMessage,
        html: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          padding: 0
        }
      }, this.state.error === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12",
        style: {
          padding: 0
        }
      }, function () {
        switch (_this2.state.action) {
          case "delete":
            return '';

          default:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              kategori: _this2.state.kategori,
              loadData: _this2.setSearch,
              user: "siswa"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "mb-2"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              mapels: _this2.state.mapels,
              toggleDetail: _this2.toggleDetail
            })));
        }
      }()) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger"
      }, this.state.error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_6__["Loading"], {
        loading: this.state.fetch
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal",
        style: {
          display: this.state.showDetail ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-dialog modal-lg",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "modal-title"
      }, this.state.mapel.akses === 'private' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-lock mr-1"
      }), this.state.mapel.nama), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close",
        onClick: this.toggleDetail
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-body"
      }, this.state.mapel.length !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kode")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, this.state.mapel.kode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kategori")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, this.state.mapel.kategori)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pengajar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, this.state.mapel.pengajar)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Keterangan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, this.state.mapel.keterangan)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kelompok")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "group",
        value: "",
        onChange: this.changeGroup,
        defaultChecked: true
      }), " Umum"), JSON.parse(this.state.mapel.groups).map(function (g) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: g.nama,
          className: "col-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "group",
          value: g.nama,
          onChange: _this2.changeGroup,
          disabled: _this2.state.action !== "" ? true : false
        }), " ", g.nama);
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        value: this.state.mapel.akses === 'public' ? 'Tambahkan' : 'Daftar',
        onClick: this.submit,
        disabled: this.state.modalLoading
      }, this.state.action === "waiting" ? "Batalkan" : this.state.action === "joined" ? "Keluar" : this.state.mapel.akses === 'public' ? 'Tambahkan' : 'Daftar', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_6__["Loading"], {
        loading: this.state.modalLoading
      })))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MapelSiswa;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MapelSiswa, "MapelSiswa", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\siswa\\MapelSiswa.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/utils/useForm.js":
/*!***************************************!*\
  !*** ./resources/js/utils/useForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



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
      return _objectSpread({}, values, _defineProperty({}, event.target.name, event.target.value));
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

__signature__(useForm, "useState{[values, setValues](fields)}");

var _default = useForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\utils\\useForm.js");
  reactHotLoader.register(_default, "default", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\utils\\useForm.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);