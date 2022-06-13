(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./resources/js/components/kategori/Kategori.js":
/*!******************************************************!*\
  !*** ./resources/js/components/kategori/Kategori.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _KategoriForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KategoriForm */ "./resources/js/components/kategori/KategoriForm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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








var Kategori = /*#__PURE__*/function (_React$Component) {
  _inherits(Kategori, _React$Component);

  var _super = _createSuper(Kategori);

  function Kategori(props) {
    var _this;

    _classCallCheck(this, Kategori);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadData", function () {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kategori-admin?', {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        _this.setState({
          kategoris: res.data.data,
          fetch: false
        });
      })["catch"](function (err) {
        console.log(err);

        if (err.response.status === 401) {
          //this.setState({ error: 'mohon login ulang', fetch: false })
          _this.props.logOut('kategori', true);
        } else {
          _this.setState({
            error: 'server error',
            fetch: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setId", function (e) {
      _this.setState({
        id: e ? e.target.value : ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remAlert", function () {
      _this.setState({
        message: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hapusData", function (id, nama, count) {
      if (!confirm('hapus kategori: ' + nama + "?") || count > 0) return;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/kategori-admin/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function () {
        alert('sukses hapus: ' + nama);

        _this.loadData();
      })["catch"](function () {
        alert('gagal hapus: ' + nama);
      });
    });

    _this.state = {
      action: 'table',
      kategoris: [],
      pageData: {
        pageCount: 0
      },
      page: 1,
      fetch: false,
      error: '',
      message: '',
      id: ''
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Kategori, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table';
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.setState({
        action: action,
        mapels: [],
        id: id,
        message: msg
      }, function () {
        if (action = 'table') _this2.loadData();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      //console.log(this.state.kategoris)
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["PageTitle"], {
        title: "Kategori Mata Pelajaran",
        navs: [{
          show: this.state.action === 'table',
          clickHandle: function clickHandle() {
            return _this3.toggle('add');
          }
        }, {
          show: this.state.action !== 'table',
          clickHandle: function clickHandle() {
            return _this3.toggle('table');
          },
          icon: "fa-arrow-left"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-1"
      }), this.state.message !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        message: this.state.message,
        clickHandle: this.remAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.state.error === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, function () {
        switch (_this3.state.action) {
          case "table":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
              className: "list-group"
            }, _this3.state.kategoris.map(function (kategori, i) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                className: "list-group-item p-1",
                key: i
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, i + 1, "."), " ", kategori.nama, " (", kategori.mapel_count, ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "float-right"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                onClick: function onClick() {
                  return _this3.toggle('update', kategori.id);
                },
                className: "btn btn-xs btn-warning mr-1"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                className: "fas fa-edit"
              })), kategori.mapel_count == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                onClick: function onClick() {
                  return _this3.hapusData(kategori.id, kategori.nama, kategori.mapel_count);
                },
                className: "btn btn-xs btn-danger"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                className: "fas fa-times"
              }))));
            })));

          case "add":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KategoriForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'add',
              toggle: _this3.toggle
            });

          case "update":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KategoriForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'update',
              id: _this3.state.id,
              toggle: _this3.toggle
            });

          default:
            return '';
        }
      }()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger"
      }, this.state.error))));
    }
  }]);

  return Kategori;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__["hot"])(Kategori));

/***/ }),

/***/ "./resources/js/components/kategori/KategoriForm.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/kategori/KategoriForm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var KategoriForm = function KategoriForm(props) {
  var tipe = props.tipe,
      id = props.id,
      toggle = props.toggle;
  var fields = {
    id: tipe === 'update' ? id : 0
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      success = _useState4[0],
      setSuccess = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tipe === 'update') {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        setErrors(['mohon login ulang']);
        return;
      }

      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kategori-admin/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        setValues(function (values) {
          return _objectSpread(_objectSpread({}, values), {}, {
            nama: data.nama
          });
        });
        setLoading(false);
      })["catch"](function () {
        return toggle('table', '');
      });
    }
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setErrors(['mohon login ulang']);
      return;
    }

    setLoading(true);
    setSuccess(false);
    var m = tipe === 'add' ? 'post' : 'put';
    axios__WEBPACK_IMPORTED_MODULE_1___default.a[m]('/api/kategori-admin/' + (id ? id : ''), _objectSpread({}, values), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setSuccess(true);
      setErrors({});
      if (tipe === 'add') setValues({});
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          setErrors(getErrors(err.response.data.errors));
        } else if (err.response.request.status === 401) {
          setErrors(['mohon login ulang']);
        } else {
          setErrors(['server error']);
        }
      } else {
        setErrors(['server error']);
      }

      setLoading(false);
    });
  }

  function errorMessages(err) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, err.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key
      }, item);
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      padding: '2%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambah' : 'Ubah', " Data Kategori")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    name: "nama",
    label: "Nama",
    placeholder: "Nama Kategori",
    handleChange: handleChange,
    value: values.nama
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success",
    disabled: loading
  }, "SIMPAN ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }), " "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, errors.constructor === Array && errors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-warning",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, errorMessages(errors)), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-success",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Sukses!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "data berhasil disimpan"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (KategoriForm);

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