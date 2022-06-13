(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/components/mapel/MapelSearch.js":
/*!******************************************************!*\
  !*** ./resources/js/components/mapel/MapelSearch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");



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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container d-flex h-100 flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow-1 mb-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "nama",
    name: "nama",
    value: values.nama || '',
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    placeholder: "kode",
    name: "kode",
    value: values.kode || '',
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "kategori_id",
    onChange: handleChange,
    value: values.kategori_id || ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Pilih Kategori ="), kategori.map(function (k) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: k.id,
      value: k.id
    }, k.nama);
  }))), user !== 'siswa' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "status",
    onChange: handleChange,
    value: values.status || ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Status ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "aktif"
  }, "Aktif"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "nonaktif"
  }, "Non aktif"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select",
    name: "akses",
    onChange: handleChange,
    value: values.akses || ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Akses ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "public"
  }, "Public"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "private"
  }, "Private")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning float-left",
    style: {
      width: '48%',
      padding: "0.375rem 0.5rem"
    },
    onClick: function onClick() {
      return setValues({});
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success float-right",
    style: {
      width: '48%',
      padding: "0.375rem 0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapelSearch);

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
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _MapelTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapelTable */ "./resources/js/components/pengajar/MapelTable.js");
/* harmony import */ var _mapel_MapelSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapel/MapelSearch */ "./resources/js/components/mapel/MapelSearch.js");
/* harmony import */ var _MapelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapelForm */ "./resources/js/components/pengajar/MapelForm.js");
/* harmony import */ var _MapelDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapelDelete */ "./resources/js/components/pengajar/MapelDelete.js");
/* harmony import */ var _UsersModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsersModal */ "./resources/js/components/pengajar/UsersModal.js");
/* harmony import */ var _html_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../html/Pagination */ "./resources/js/components/html/Pagination.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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













var Mapel = /*#__PURE__*/function (_React$Component) {
  _inherits(Mapel, _React$Component);

  var _super = _createSuper(Mapel);

  function Mapel(props) {
    var _this;

    _classCallCheck(this, Mapel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadData", function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.page;
      var test = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      values = _objectSpread(_objectSpread({}, values), {}, {
        type: _this.state.action
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel?page=' + page, {
        params: values,
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
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
        if (action === "waiting") _this2.loadData();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_9__["PageTitle"], {
        title: "Mata Pelajaran",
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
        }, {
          show: this.state.action === 'table',
          clickHandle: function clickHandle() {
            return _this3.toggle('waiting');
          },
          icon: "fa-clock",
          className: "btn-warning"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-1"
      }), this.state.message !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
        message: this.state.message,
        clickHandle: this.remAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.state.error === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, function () {
        switch (_this3.state.action) {
          case "table":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              kategori: _this3.state.kategori,
              loadData: _this3.loadData
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
              mapels: _this3.state.mapels,
              from: _this3.state.pageData.from,
              loading: _this3.state.fetch,
              toggle: _this3.toggle,
              handlePageClick: _this3.handlePageClick,
              page: _this3.state.page
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
              pageData: _this3.state.pageData,
              page: _this3.state.page,
              handlePageClick: _this3.handlePageClick
            }));

          case "add":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'add',
              toggle: _this3.toggle,
              kategori: _this3.state.kategori
            });

          case "update":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'update',
              id: _this3.state.id,
              toggle: _this3.toggle,
              kategori: _this3.state.kategori
            });

          case "delete":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelDelete__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: _this3.state.id,
              toggle: _this3.toggle,
              token: _this3.token
            });

          case "waiting":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Menunggu Konfirmasi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapelTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
              mapels: _this3.state.mapels,
              waiting: true,
              from: _this3.state.pageData.from,
              loading: _this3.state.fetch,
              toggle: _this3.toggle,
              handlePageClick: _this3.handlePageClick,
              page: _this3.state.page,
              setId: _this3.setId
            }), _this3.state.id !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: _this3.state.id,
              setId: _this3.setId,
              toggle: _this3.toggle
            }));

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

  return Mapel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__["hot"])(Mapel));

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
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MapelForm = function MapelForm(props) {
  var id = props.id,
      toggle = props.toggle;

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
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      toggle('table');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setData(res.data.data);
      setLoading(false);
    })["catch"](function () {
      return toggle('table', '');
    });
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      toggle('table');
      return;
    }

    if (!confirm('Hapus data?')) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/mapel/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function () {
      return toggle('table', '', 'data berhasil dihapus');
    })["catch"](function () {
      setErrors(['terjadi kesalahan, coba beberapa saat lagi']);
      setLoading(false);
    });
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hapus Data")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Nama : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.nama), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kategori : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.kategori), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "keterangan : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.keterangan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-danger",
    onClick: submit,
    disabled: loading
  }, "Hapus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Materi : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Belum ada materi")))));
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
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MapelForm = function MapelForm(props) {
  var tipe = props.tipe,
      id = props.id,
      toggle = props.toggle,
      kategori = props.kategori;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      groups = _useState2[0],
      setGroups = _useState2[1];

  var fields = {
    id: tipe === 'update' ? id : 0,
    akses: 'public',
    status: 'aktif'
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      success = _useState6[0],
      setSuccess = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tipe === 'update') {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
        setErrors(['mohon login ulang']);
        return;
      }

      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        setValues(function (values) {
          return _objectSpread(_objectSpread({}, values), {}, {
            nama: data.nama,
            kode: data.kode,
            kategori_id: data.kategori_id,
            akses: data.akses,
            status: data.status,
            keterangan: data.keterangan
          });
        });
        setGroups(JSON.parse(data.groups));
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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a[m]('/api/mapel/' + (id ? id : ''), _objectSpread(_objectSpread({}, values), {}, {
      groups: JSON.stringify(groups)
    }), {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambahsss' : 'Ubah', " Data")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    placeholder: "Nama Mata Pelajaran",
    handleChange: handleChange,
    value: values.nama
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    formW: "4",
    name: "kode",
    label: "Kode",
    placeholder: "Kode Mata Pelajaran",
    handleChange: handleChange,
    value: values.kode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["SelectForm"], {
    name: "kategori_id",
    options: kategori,
    label: "Kategori",
    placeholder: "= Pilih Kategori =",
    handleChange: handleChange,
    value: values.kategori_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["RadioForm"], {
    label: "Akses",
    name: "akses",
    handleChange: handleChange,
    value: values.akses,
    options: [['public', 'Public'], ['private', 'Private']]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["RadioForm"], {
    label: "Status",
    name: "status",
    handleChange: handleChange,
    value: values.status,
    options: [['aktif', 'Aktif'], ['nonaktif', 'Nonaktif']]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-2 col-form-label"
  }, "Kelompok"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-sm table-bordered mb-0",
    style: {
      display: groups.length ? 'block' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "nama"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    width: "37%"
  }, "kode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    width: "5%"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, groups.map(function (group, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "".concat(key, "-nama"),
      value: group.nama,
      onChange: handleGroupChange,
      placeholder: "nama",
      className: "form-control form-control-sm"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "".concat(key, "-kode"),
      value: group.kode,
      onChange: handleGroupChange,
      placeholder: "kode",
      className: "form-control form-control-sm"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-sm",
      onClick: function onClick() {
        return delGroup(group);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times"
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-xs btn-primary",
    onClick: newGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextAreaForm"], {
    formW: "8",
    name: "keterangan",
    label: "Keterangan",
    handleChange: handleChange,
    value: values.keterangan
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
  }, "Sukses!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "data berhasil disimpan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-success",
    style: {
      padding: '5%',
      margin: '5%',
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Keterangan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "20"), " total murid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "20"), " total ujian"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "10"), " total materi"))))));

  function delGroup(group) {
    var filteredGroups = groups.filter(function (g) {
      return g.kode !== group.kode || g.nama !== group.nama;
    });
    setGroups(filteredGroups);
  }

  function handleGroupChange(e) {
    var v = e.target.name.split("-");

    var items = _toConsumableArray(groups);

    items[v[0]][v[1]] = e.target.value;
    setGroups(items);
  }

  function newGroup() {
    var items = _toConsumableArray(groups);

    items.push({
      kode: '',
      nama: ''
    });
    setGroups(items);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MapelForm);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function MapelTable(props) {
  var mapels = props.mapels,
      from = props.from,
      loading = props.loading,
      toggle = props.toggle,
      _props$waiting = props.waiting,
      waiting = _props$waiting === void 0 ? false : _props$waiting,
      _props$setId = props.setId,
      setId = _props$setId === void 0 ? "" : _props$setId;
  var no = from;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered table-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "5%"
  }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "10%"
  }, "Kode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "auto"
  }, "Nama"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "15%"
  }, "Kategori"), !waiting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "14%"
  }, "status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center",
    width: "10%"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, mapels.map(function (mapel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: mapel.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, no++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.kode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, waiting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-sm btn-primary",
      value: mapel.id,
      onClick: setId
    }, mapel.waitings_count | 0), mapel.nama), !waiting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/mapel/".concat(mapel.id)
    }, mapel.nama)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.kategori), !waiting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, mapel.akses, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: 'badge ' + (mapel.status === 'aktif' ? 'badge-success' : 'badge-warning')
    }, mapel.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xs btn-success mr-1",
      onClick: function onClick() {
        return toggle('update', mapel.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-pen"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xs btn-warning",
      onClick: function onClick() {
        return toggle('delete', mapel.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-trash"
    }))))));
  })))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MapelTable);

/***/ }),

/***/ "./resources/js/components/pengajar/UsersModal.js":
/*!********************************************************!*\
  !*** ./resources/js/components/pengajar/UsersModal.js ***!
  \********************************************************/
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UsersModal = function UsersModal(props) {
  var id = props.id,
      setId = props.setId,
      toggle = props.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedUsers = _useState4[0],
      setSelectedUsers = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
    if (!token) setId;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/mapel-req-list/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setUsers(res.data.data);
    })["catch"](function () {
      return setId();
    });
  }, []);

  var submit = function submit(e) {
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
    if (!token) setId;
    var action = e.target.value;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/mapel-req-process/', {
      action: action,
      selectedUsers: selectedUsers,
      mapel_id: id
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var msg = selectedUsers.length + ' berhasil di' + action;
      toggle('waiting', '', msg);
    })["catch"](function (e) {
      return setId();
    });
  };

  var handleSelectUser = function handleSelectUser(e) {
    if (e.target.checked) {
      setSelectedUsers([].concat(_toConsumableArray(selectedUsers), [e.target.value]));
    } else {
      var updated = selectedUsers.filter(function (user) {
        if (e.target.value !== user) return user;
      });
      setSelectedUsers(updated);
    }
  };

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: function onClick() {
      return setId();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    loading: users.length === 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, users.map(function (user, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "col-md-3 col-6 text-left mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/users/".concat(user.user_id, ".jpg"),
      style: {
        width: '100%',
        height: 'auto'
      }
    }), "Group: ", user.group ? user.group : 'umum', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ID: ", user.user_id, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "float-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      value: user.user_id + '|' + user.group,
      onChange: handleSelectUser
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, user.user.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger ml-1",
    value: 'tolak',
    onClick: submit,
    disabled: loading || selectedUsers.length === 0
  }, "Tolak", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    loading: loading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success",
    value: 'terima',
    onClick: submit,
    disabled: loading || selectedUsers.length === 0
  }, "Terima", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    loading: loading
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UsersModal);

/***/ })

}]);