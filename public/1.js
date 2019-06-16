(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/form/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/form/index.js ***!
  \***********************************************/
/*! exports provided: TextForm, SelectForm, RadioForm, TextAreaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextForm", function() { return TextForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectForm", function() { return SelectForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioForm", function() { return RadioForm; });
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
      formtext = props.formtext;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 6)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type || 'text',
    className: "form-control",
    name: name,
    placeholder: placeholder,
    onChange: handleChange,
    value: value || '',
    required: required
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: name,
    onChange: handleChange,
    value: value || '',
    required: required
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, placeholder), options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
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
      formW = props.formW;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4),
    style: {
      marginTop: "0.4rem"
    }
  }, options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline",
      key: option[0]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "radio",
      name: name,
      onChange: handleChange,
      value: option[0],
      checked: value === option[0],
      required: required
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label"
    }, option[1]));
  })));
}

function TextAreaForm(props) {
  var name = props.name,
      handleChange = props.handleChange,
      value = props.value,
      required = props.required,
      label = props.label,
      labelW = props.labelW,
      formW = props.formW;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-" + (labelW || 2) + " col-form-label"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-" + (formW || 4)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    name: name,
    onChange: handleChange,
    value: value || '',
    required: required
  })));
}



/***/ }),

/***/ "./resources/js/components/pengajar/Mapel.js":
/*!***************************************************!*\
  !*** ./resources/js/components/pengajar/Mapel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Token */ "./resources/js/Token.js");
/* harmony import */ var _MapelTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapelTable */ "./resources/js/components/pengajar/MapelTable.js");
/* harmony import */ var _MapelSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapelSearch */ "./resources/js/components/pengajar/MapelSearch.js");
/* harmony import */ var _MapelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapelForm */ "./resources/js/components/pengajar/MapelForm.js");
/* harmony import */ var _MapelDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapelDelete */ "./resources/js/components/pengajar/MapelDelete.js");
/* harmony import */ var _web_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../web/Pagination */ "./resources/js/components/web/Pagination.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Mapel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mapel, _React$Component);

  function Mapel(props) {
    var _this;

    _classCallCheck(this, Mapel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mapel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "loadData", function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.page;
      var test = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (!_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel?page=' + page, {
        params: values,
        headers: {
          Authorization: 'Bearer ' + _Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
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
          //this.setState({ error: 'mohon login ulang', fetch: false })
          _this.props.logOut('mapel', true);
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

    _defineProperty(_assertThisInitialized(_this), "handlePageClick", function (data) {
      _this.setState({
        fetch: true,
        page: data.selected + 1
      }, function () {
        _this.loadData();
      });
    });

    _this.state = {
      action: 'table',
      mapels: [],
      pageData: {
        pageCount: 0
      },
      page: 1,
      fetch: false,
      error: '',
      message: '',
      kategori: [],
      id: ''
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Mapel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getKategori();
      this.loadData();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table';
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.setState({
        action: action,
        id: id,
        message: msg
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid content bg-white"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "float-left"
      }, !this.props.sidebar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-sm btn-outline-dark",
        onClick: this.props.toggleSidebar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-bars"
      })), ' '), "Mata Pelajaran"), this.state.action === 'table' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.toggle('add');
        },
        className: "btn btn-primary float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-plus"
      })), this.state.action !== 'table' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.toggle('table');
        },
        className: "btn btn-primary float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-arrow-left"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), this.state.message !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-info",
        role: "alert"
      }, this.state.message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xs float-right",
        onClick: function onClick() {
          return _this2.toggle();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.state.error === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, function () {
        switch (_this2.state.action) {
          case "table":
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              kategori: _this2.state.kategori,
              loadData: _this2.loadData
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
              mapels: _this2.state.mapels,
              from: _this2.state.pageData.from,
              loading: _this2.state.fetch,
              toggle: _this2.toggle,
              handlePageClick: _this2.handlePageClick,
              page: _this2.state.page
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_web_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
              pageData: _this2.state.pageData,
              page: _this2.state.page,
              handlePageClick: _this2.handlePageClick
            }));

          case "add":
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'add',
              toggle: _this2.toggle,
              token: _this2.token,
              kategori: _this2.state.kategori
            });

          case "update":
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'update',
              id: _this2.state.id,
              toggle: _this2.toggle,
              token: _this2.token,
              kategori: _this2.state.kategori
            });

          case "delete":
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelDelete__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: _this2.state.id,
              toggle: _this2.toggle,
              token: _this2.token
            });

          default:
            return '';
        }
      }()) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger"
      }, this.state.error))));
    }
  }]);

  return Mapel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Mapel);

/***/ }),

/***/ "./resources/js/components/pengajar/MapelDelete.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/pengajar/MapelDelete.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Token */ "./resources/js/Token.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MapelForm = function MapelForm(props) {
  var id = props.id,
      toggle = props.toggle,
      token = props.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      mapel = _useState4[0],
      SetMapel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      toggle('table');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel/' + id, {
      headers: {
        Authorization: 'Bearer ' + _Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setData(res.data.data);
      setLoading(false);
    })["catch"](function () {
      return toggle('table', '');
    });
  }, []);

  function submit() {
    if (!_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      toggle('table');
      return;
    }

    if (!confirm('Hapus data?')) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/mapel/' + id, {
      headers: {
        Authorization: 'Bearer ' + token.getToken()
      }
    }).then(function () {
      return toggle('table', '', 'data berhasil dihapus');
    })["catch"](function () {
      setErrors(['terjadi kesalahan, coba beberapa saat lagi']);
      setLoading(false);
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      padding: '2%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hapus Data")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Nama : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.nama), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kategori : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.kategori), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "keterangan : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.keterangan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-danger",
    onClick: submit,
    disabled: loading
  }, "Hapus")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Materi : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Belum ada materi")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapelForm);

/***/ }),

/***/ "./resources/js/components/pengajar/MapelForm.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/pengajar/MapelForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Token */ "./resources/js/Token.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../hooks/useForm */ "./resources/js/hooks/useForm.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../form */ "./resources/js/components/form/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MapelForm = function MapelForm(props) {
  var tipe = props.tipe,
      id = props.id,
      toggle = props.toggle,
      kategori = props.kategori;
  var fields = {
    id: tipe === 'update' ? id : 0,
    akses: 'public',
    status: 'aktif'
  };

  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
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
      if (!_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        setErrors(['mohon login ulang']);
        return;
      }

      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel/' + id, {
        headers: {
          Authorization: 'Bearer ' + _Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        setValues(function (values) {
          return _objectSpread({}, values, {
            nama: data.nama,
            kode: data.kode,
            kategori_id: data.kategori_id,
            akses: data.akses,
            status: data.status,
            keterangan: data.keterangan
          });
        });
        setLoading(false);
      })["catch"](function () {
        return toggle('table', '');
      });
    }
  }, []);

  function submit() {
    if (!_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setErrors(['mohon login ulang']);
      return;
    }

    setLoading(true);
    setSuccess(false);
    var m = tipe === 'add' ? 'post' : 'put';
    axios__WEBPACK_IMPORTED_MODULE_1___default.a[m]('/api/mapel/' + (id ? id : ''), values, {
      headers: {
        Authorization: 'Bearer ' + _Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setSuccess(true);
      setErrors({});
      if (tipe === 'add') setValues({});
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          setNotif(err.response.data.errors);
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

  function setNotif() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var errMsg = [];
    errMsg = Object.keys(msg).map(function (key) {
      return msg[key].map(function (item) {
        return item;
      });
    });
    setErrors(errMsg);
  }

  function errorMessages() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, errors.map(function (item, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key
      }, item);
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      padding: '2%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambah' : 'Ubah', " Data")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    name: "nama",
    label: "Nama",
    placeholder: "Nama Mata Pelajaran",
    handleChange: handleChange,
    value: values.nama
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    formW: "4",
    name: "kode",
    label: "Kode",
    placeholder: "Kode Mata Pelajaran",
    handleChange: handleChange,
    value: values.kode
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["SelectForm"], {
    name: "kategori_id",
    options: kategori,
    label: "Kategori",
    placeholder: "= Pilih Kategori =",
    handleChange: handleChange,
    value: values.kategori_id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["RadioForm"], {
    label: "Akses",
    name: "akses",
    handleChange: handleChange,
    value: values.akses,
    options: [['public', 'Public'], ['private', 'Private']]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["RadioForm"], {
    label: "Status",
    name: "status",
    handleChange: handleChange,
    value: values.status,
    options: [['aktif', 'Aktif'], ['nonaktif', 'Nonaktif']]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["TextAreaForm"], {
    name: "keterangan",
    label: "Keterangan",
    handleChange: handleChange,
    value: values.keterangan
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success",
    disabled: loading
  }, "SIMPAN ", loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }), " "))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, errors.constructor === Array && errors.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-warning",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, errorMessages()), success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-success",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Sukses!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "data berhasil disimpan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-success",
    style: {
      padding: '5%',
      margin: '5%',
      display: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Keterangan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "20"), " total murid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "20"), " total ujian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "10"), " total materi"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapelForm);

/***/ }),

/***/ "./resources/js/components/pengajar/MapelSearch.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/pengajar/MapelSearch.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks/useForm */ "./resources/js/hooks/useForm.js");



var MapelSearch = function MapelSearch(props) {
  var kategori = props.kategori,
      loadData = props.loadData;

  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
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
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "nama",
    name: "nama",
    value: values.nama || '',
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "kode",
    name: "kode",
    value: values.kode || '',
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
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
    className: "col-md-2"
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
  }, "Private"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning float-left",
    style: {
      width: '48%'
    },
    onClick: function onClick() {
      return setValues({});
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success float-right",
    style: {
      width: '48%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapelSearch);

/***/ }),

/***/ "./resources/js/components/pengajar/MapelTable.js":
/*!********************************************************!*\
  !*** ./resources/js/components/pengajar/MapelTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MapelTable(props) {
  var mapels = props.mapels,
      from = props.from,
      loading = props.loading,
      toggle = props.toggle;
  var no = from;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered table-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "5%"
  }, "No"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "10%"
  }, "Kode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "46%"
  }, "Nama"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "15%"
  }, "Kategori"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "14%"
  }, "status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "10%"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, mapels.map(function (mapel) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: mapel.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, no++), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.kode), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, mapel.nama), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.kategori), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.akses, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: 'badge ' + (mapel.status === 'aktif' ? 'badge-success' : 'badge-warning')
    }, mapel.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xs btn-success mr-1",
      onClick: function onClick() {
        return toggle('update', mapel.id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-pen"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xs btn-warning",
      onClick: function onClick() {
        return toggle('delete', mapel.id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-trash"
    }))));
  })))), loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MapelTable);

/***/ }),

/***/ "./resources/js/components/web/Pagination.js":
/*!***************************************************!*\
  !*** ./resources/js/components/web/Pagination.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Pagination(props) {
  var _React$createElement;

  var pageData = props.pageData,
      handlePageClick = props.handlePageClick,
      page = props.page;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination",
    style: {
      display: pageData.pageCount > 1 ? 'block' : 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_1___default.a, (_React$createElement = {
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

/***/ "./resources/js/hooks/useForm.js":
/*!***************************************!*\
  !*** ./resources/js/hooks/useForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      return _objectSpread({}, values, _defineProperty({}, event.target.name, event.target.value));
    });
  };

  return {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    setValues: setValues,
    values: values
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ })

}]);