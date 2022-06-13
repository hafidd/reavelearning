(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  var hot = __webpack_require__(/*! ./index */ "./node_modules/react-hot-loader/index.js").hot;
  if (false) { var parent, cache; } else {
    fallbackHot();
  }
} else {}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

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

/***/ "./resources/js/components/kuis/KuisHasil.js":
/*!***************************************************!*\
  !*** ./resources/js/components/kuis/KuisHasil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _KuisHasilDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KuisHasilDetail */ "./resources/js/components/kuis/KuisHasilDetail.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var KuisHasil = /*#__PURE__*/function (_React$Component) {
  _inherits(KuisHasil, _React$Component);

  var _super = _createSuper(KuisHasil);

  function KuisHasil(props) {
    var _this;

    _classCallCheck(this, KuisHasil);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "detail", function () {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      _this.setState({
        hasilId: id,
        detail: !id ? false : true
      }, function () {
        if (id == false) {
          console.log('ok');

          _this.getKuis();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "publish", function () {
      if (!confirm('terbitkan hasil?')) return;
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('api/publish-hasil/' + _this.state.id, {}, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        alert('sukses');

        _this.getKuis();

        _this.setState({
          loading: false
        });
      })["catch"](function (err) {
        if (err.response.status && err.response.status == '422') {
          alert(err.response.data);
        }

        alert('gagal');
        console.log(err);

        _this.setState({
          loading: false
        });
      });
    });

    _this.state = {
      id: props.match.params.dataId,
      kuis: {},
      mapel: {},
      pesertas: [],
      settings: {},
      soals: [],
      jawabans: {},
      loading: false,
      detail: false,
      hasil_id: ''
    };
    _this.nilai = [];
    return _this;
  }

  _createClass(KuisHasil, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getKuis();
    }
  }, {
    key: "getKuis",
    value: function getKuis() {
      var _this2 = this;

      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        this.props.logOut('mapel', true);
        return;
      }

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/detail-kuis/' + this.state.id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        var data = res.data.data;

        _this2.setState({
          kuis: data.kuis.kuis,
          mapel: data.kuis.mapel,
          pesertas: data.peserta
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var nomor = 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["PageTitle"], {
        title: this.state.kuis.judul,
        navs: [{
          show: this.state.detail,
          clickHandle: function clickHandle() {
            return _this3.detail(false);
          },
          icon: 'fa-arrow-left'
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.mapel.nama))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, !this.state.detail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-bordered table-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center",
        width: "5%"
      }, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center",
        width: ""
      }, "NAMA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center",
        width: "20%"
      }, "NILAI"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.pesertas.map(function (peserta) {
        _this3.nilai.push(parseFloat(peserta.points / peserta.max_points * 100).toFixed(2));

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          style: {
            lineHeight: 1
          },
          key: peserta.id,
          className: "".concat(peserta.belum_dikoreksi > 0 ? 'bg-warning' : !peserta.published ? 'bg-info' : 'bg-success')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "text-center"
        }, nomor++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "m-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, peserta.user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, peserta.user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "m-0 text-right"
        }, parseFloat(peserta.points / peserta.max_points * 100).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-xs ",
          onClick: function onClick() {
            return _this3.detail(peserta.id);
          }
        }, peserta.belum_dikoreksi, " Belum dikoreksi")));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "pr-5"
      }, "Tertinggi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.nilai.length > 0 ? Math.max.apply(Math, _toConsumableArray(this.nilai)) : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Terendah"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.nilai.length > 0 ? Math.min.apply(Math, _toConsumableArray(this.nilai)) : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Rata - Rata"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.nilai.length > 0 ? this.nilai.reduce(function (a, b) {
        return parseFloat(a) + parseFloat(b);
      }, 0) / this.nilai.length : '-'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.publish,
        className: "btn btn-success mt-2"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-check"
      }), " Terbitkan"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisHasilDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: this.state.hasilId,
        back: this.detail
      }))));
    }
  }]);

  return KuisHasil;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__["hot"])(KuisHasil));

/***/ }),

/***/ "./resources/js/components/kuis/KuisHasilDetail.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/kuis/KuisHasilDetail.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lineto */ "./node_modules/react-lineto/dist/react-lineto.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _KuisJawabForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KuisJawabForm */ "./resources/js/components/kuis/KuisJawabForm.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //import { TextForm, TextAreaForm, SelectForm, RadioForm } from '../html/BasicForm'



var KuisHasilDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(KuisHasilDetail, _React$Component);

  var _super = _createSuper(KuisHasilDetail);

  function KuisHasilDetail(props) {
    var _this;

    _classCallCheck(this, KuisHasilDetail);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updatePoints", function (e) {
      _this.setState({
        points: _this.state.points.map(function (point) {
          if (point.id == e.target.name) {
            point.updated = true;
            point.point = parseFloat(e.target.value) > parseFloat(point.max_point) ? point.max_point : e.target.value;
          }

          return point;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPoint", function (id) {
      var p = _this.state.points.filter(function (point) {
        return point.id == id;
      });

      return p[0]['point'];
    });

    _defineProperty(_assertThisInitialized(_this), "savePoints", function (e) {
      e.preventDefault();
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        loading: true
      });

      var data = {
        points: _this.state.points.filter(function (point) {
          return point.updated === true;
        })
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('api/koreksi/' + _this.state.id, data, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        alert('sukses');

        _this.setState({
          loading: false
        });
      })["catch"](function (err) {
        alert('gagal');
        console.log(err);

        _this.setState({
          loading: false
        });
      });
    });

    _this.state = {
      id: props.id,
      hasil: {},
      details: [],
      jawabans: [],
      points: [],
      loading: false,
      idkWhy: true
    };
    return _this;
  }

  _createClass(KuisHasilDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        _this2.setState({
          idkWhy: !_this2.state.idkWhy
        });
      });
      this.getDetail();
    }
  }, {
    key: "getDetail",
    value: function getDetail() {
      var _this3 = this;

      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        this.props.logOut('mapel', true);
        return;
      }

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/detail-hasil/' + this.state.id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        var data = res.data.data.hasil;

        _this3.setState({
          hasil: data,
          details: data.details,
          points: data.details.map(function (detail) {
            return {
              id: detail.id,
              max_point: detail.max_point,
              point: detail.point,
              updated: false
            };
          }),
          loading: false
        });
      })["catch"](function (err) {
        console.log(err);

        _this3.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var nomor = 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.details.map(function (detail) {
        var data = detail.soal;
        var pertanyaan = JSON.parse(data.pertanyaan);
        var jawaban = JSON.parse(data.jawaban);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card mb-2",
          key: detail.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "float-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, nomor++, " .")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "float-left"
        }, data.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_4__["PilihanGanda"], {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: JSON.parse(detail.jawaban),
          kunci: jawaban,
          setJawaban: function setJawaban() {
            return false;
          }
        }), data.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_4__["BenarSalah"], {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: JSON.parse(detail.jawaban),
          kunci: jawaban,
          setJawaban: function setJawaban() {
            return false;
          }
        }), data.type == 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menjodohkan, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: detail.jawaban ? JSON.parse(detail.jawaban) : [],
          kunci: jawaban,
          setJawaban: function setJawaban() {
            return false;
          },
          idkWhy: function idkWhy() {
            _this4.setState({
              idkWhy: !_this4.state.idkWhy
            });
          }
        }), data.type == 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_4__["Isian"], {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: detail.jawaban ? JSON.parse(detail.jawaban) : [],
          kunci: jawaban,
          setJawaban: function setJawaban() {
            return false;
          }
        }), data.type == 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_4__["Essay"], {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: JSON.parse(detail.jawaban),
          kunci: jawaban,
          setJawaban: function setJawaban() {
            return false;
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "float-right"
        }, detail.point == detail.max_point ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-check text-success fa-2x"
        }) : detail.point == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-times text-danger fa-2x"
        }) : detail.point == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-question text-warning fa-2x"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-exclamation text-info fa-2x"
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "text-primary"
        }, "max point: ", detail.max_point), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-inline float-right"
        }, "POINT : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          onChange: _this4.updatePoints,
          type: "text",
          name: detail.id,
          value: _this4.getPoint(detail.id),
          size: "3",
          className: "form-control form-control-sm ml-2",
          disabled: detail.point != null
        }))))));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.savePoints,
        className: "btn btn-success",
        disabled: this.state.loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-save"
      }), " SIMPAN"))));
    }
  }]);

  return KuisHasilDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

{
  /** 
  const PilihanGanda = (props) => {
     const { pertanyaan, jawaban, setJawaban, soalId } = props
     const jawab = jawaban ? jawaban : [];
     const handleCheck = (e) => {
      }
     return (
         <React.Fragment>
              <div>
                 {pertanyaan.q.split('\n').map((item, key) => {
                     return <span key={key}>{item}<br /></span>
                 })}
             </div>
              <div className="row">
                 <div className="col-md-12">
                     <ul className="list-group">
                         {pertanyaan.alist.map((a, i) => (
                             <React.Fragment key={i}>
                                 <li style={{ listStyle: 'none' }}>
                                     <div className="form-inline float-left mb-1" style={{ width: '100%' }}>
                                         <label style={{ width: '1.3em', }}><b>{String.fromCharCode(65 + i)}. </b></label>
                                         {pertanyaan.type == 1 ?
                                             <input name={`rd${soalId}`} type="radio" value={i} checked={jawab.indexOf(i + 1) !== -1} onChange={handleCheck} className="custom-rd mr-2" />
                                             : <input name={`cb${soalId}`} type="checkbox" value={i} checked={jawab.indexOf(i + 1) !== -1} onChange={handleCheck} className="custom-cb mr-2" />
                                         }
                                         <span className="mr-2">{a}</span>
                                     </div>
                                 </li>
                             </React.Fragment>
                         ))}
                     </ul>
                 </div>
             </div>
         </React.Fragment>
     )
  }
  const BenarSalah = (props) => {
     const { pertanyaan, jawaban, setJawaban, soalId } = props
     return (
         <React.Fragment>
             <div>
                 {pertanyaan.q.split('\n').map((item, key) => {
                     return <span key={key}>{item}<br /></span>
                 })}
             </div>
             <RadioForm
                 labelW="0" name={`kunci${soalId}`} handleChange={(e) => setJawaban({ [soalId]: e.target.value }, true)} value={jawaban}
                 options={[
                     [1, 'BENAR'],
                     [0, 'SALAH'],
                 ]}
             />
         </React.Fragment>
     )
  }
  const Essay = (props) => {
     const { pertanyaan, jawaban, setJawaban, soalId } = props
     return (
         <React.Fragment>
             <div>
                 {pertanyaan.q.split('\n').map((item, key) => {
                     return <span key={key}>{item}<br /></span>
                 })}
             </div>
             <TextAreaForm labelW="0" formW="5" name={`kunci${soalId}`} value={jawaban} placeholder={"Isikan jawaban anda"} handleChange={(e) => setJawaban({ [soalId]: e.target.value })} />
         </React.Fragment>
     )
  }
  const Isian = (props) => {
     const { pertanyaan, jawaban, setJawaban, soalId } = props
      const formStyle = {
         border: 'none',
         borderBottom: '1px solid black',
         padding: 0
     }
     var jawabanIndex = 0;
     return (
         <React.Fragment>
             <div className="row">
                 <div className="col-12">
                     {pertanyaan.q.split('\n').map((item, key) => {
                         return (
                             <span key={key}>
                                 {item.split('[[]]').map((i, k) => {
                                     return (
                                         <React.Fragment key={k}>
                                             {i}
                                             {k + 1 != item.split('[[]]').length && <input name={jawabanIndex} style={formStyle} size="5" type="text" value={jawaban[jawabanIndex++]} onChange={(e) => setJawaban({ [soalId]: { ...jawaban, [e.target.name.toString()]: e.target.value } })} />}
                                         </React.Fragment>
                                     )
                                 })} <br />
                             </span>
                         )
                     })}
                 </div>
             </div>
         </React.Fragment>
     )
  }
  */
}

var Menjodohkan = function Menjodohkan(props) {
  var pertanyaan = props.pertanyaan,
      _props$jawaban = props.jawaban,
      jawaban = _props$jawaban === void 0 ? [] : _props$jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId,
      idkWhy = props.idkWhy;

  var handleDragStart = function handleDragStart(data) {
    return function (event) {
      var newKunci = jawaban.filter(function (k) {
        return k.q !== data.id;
      });
      setJawaban(_defineProperty({}, soalId, newKunci));
      event.dataTransfer.setData("dragContent", data.id);
    };
  };

  var handleDrop = function handleDrop(data) {
    return function (event) {
      event.preventDefault();
      var exist = jawaban.filter(function (line) {
        return line.a === data.id;
      });
      if (exist.length > 0) return;
      var from = JSON.parse(event.dataTransfer.getData("dragContent"));
      var to = data.id; //setLines([...lines, { q: from, a: to }])

      setJawaban(_defineProperty({}, soalId, [].concat(_toConsumableArray(jawaban), [{
        q: from,
        a: to
      }])));
      return false;
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: idkWhy,
    className: "btn btn-xs btn-success mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-retweet"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, pertanyaan.qlist.map(function (q, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ".")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      draggable: "true",
      onDragStart: handleDragStart({
        id: i
      }),
      className: "float-right fas fa-question-circle listq-".concat(i)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: ""
    }, q))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2 m-0"
  }, jawaban.map(function (line, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lineto__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      from: "listq-".concat(line.q),
      to: "lista-".concat(line.a)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, pertanyaan.alist.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: 'a' + i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form",
      draggable: "true",
      onDragOver: function onDragOver(e) {
        e.preventDefault();
      },
      onDrop: handleDrop({
        id: i
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-check-circle lista-".concat(i)
    }), " ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ". ")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, a))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, JSON.stringify(jawaban))));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__["hot"])(KuisHasilDetail));

/***/ })

}]);