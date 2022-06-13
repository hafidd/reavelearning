(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/components/pengajar/Materi.js":
/*!****************************************************!*\
  !*** ./resources/js/components/pengajar/Materi.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _MateriList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MateriList */ "./resources/js/components/pengajar/MateriList.js");
/* harmony import */ var _MateriSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MateriSearch */ "./resources/js/components/pengajar/MateriSearch.js");
/* harmony import */ var _MateriForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MateriForm */ "./resources/js/components/pengajar/MateriForm.js");
/* harmony import */ var _MateriDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MateriDelete */ "./resources/js/components/pengajar/MateriDelete.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../html/Pagination */ "./resources/js/components/html/Pagination.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_9__);
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











var Materi = /*#__PURE__*/function (_React$Component) {
  _inherits(Materi, _React$Component);

  var _super = _createSuper(Materi);

  function Materi(props) {
    var _this;

    _classCallCheck(this, Materi);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadMateri", function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log(values);
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
      if (!token) _this.props.logOut('materi', true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/materi?page=' + _this.state.page, {
        params: values,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this.setState({
          materis: res.data.data,
          pageData: {
            from: res.data.meta.from,
            total: res.data.meta.total,
            per_page: res.data.meta.per_page,
            pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page)
          },
          fetch: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      if (e) {
        e.preventDefault();
        var action = e.currentTarget.value.split('-')[0];
        var id = e.currentTarget.value.split('-')[1];
        var message = e.currentTarget.value.split('-')[2];

        if (_this.state.mapelId !== '') {
          console.log('back');

          _this.props.history.goBack();
        }

        _this.setState({
          action: action,
          id: id,
          message: message ? message : ''
        });
      } else _this.setState({
        action: '',
        id: '',
        message: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notif", function (n) {
      var reloadData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        action: '',
        id: '',
        message: n
      }, function () {
        if (reloadData) _this.loadMateri();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remAlert", function () {
      _this.setState({
        message: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageClick", function (data) {
      _this.setState({
        fetch: true,
        page: data.selected + 1
      }, function () {
        _this.loadMateri();
      });
    });

    _this.state = {
      action: _this.props.match.path === "/materi/mapel/:materiId/:dirId" ? 'add' : '',
      mapelId: _this.props.match.params.materiId ? _this.props.match.params.materiId : '',
      dirId: _this.props.match.params.dirId ? _this.props.match.params.dirId : '',
      id: '',
      materis: [],
      pageData: {
        pageCount: 0
      },
      page: 1,
      fetch: false,
      message: ''
    };
    return _this;
  }

  _createClass(Materi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadMateri();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["PageTitle"], {
        title: "Materi Pelajaran",
        navs: [{
          show: this.state.action === '',
          clickHandle: this.toggle,
          action: "add"
        }, {
          show: this.state.action !== '',
          clickHandle: this.toggle,
          action: "",
          icon: "fa-arrow-left"
        }]
      }), this.state.message !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        message: this.state.message,
        clickHandle: this.remAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-1 mb-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, function () {
        switch (_this2.state.action) {
          case "":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MateriSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              loadData: _this2.loadMateri
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "mb-2"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MateriList__WEBPACK_IMPORTED_MODULE_3__["default"], {
              materis: _this2.state.materis,
              from: _this2.state.pageData.from,
              loading: _this2.state.fetch,
              toggle: _this2.toggle,
              handlePageClick: _this2.handlePageClick,
              page: _this2.state.page
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "mb-2"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
              pageData: _this2.state.pageData,
              page: _this2.state.page,
              handlePageClick: _this2.handlePageClick
            }));

          case "add":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MateriForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'add',
              toggle: _this2.toggle,
              mapelId: _this2.state.mapelId,
              dirId: _this2.state.dirId
            });

          case "update":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MateriForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
              tipe: 'update',
              id: _this2.state.id,
              toggle: _this2.toggle
            });

          case "delete":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MateriDelete__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: _this2.state.id,
              notif: _this2.notif
            });

          default:
            return '';
        }
      }())));
    }
  }]);

  return Materi;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : Materi);

/***/ }),

/***/ "./resources/js/components/pengajar/MateriDelete.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/pengajar/MateriDelete.js ***!
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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var MateriDelete = function MateriDelete(props) {
  var id = props.id,
      notif = props.notif;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      materi = _useState4[0],
      setMateri = _useState4[1];

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
      notif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/materi/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      var data = res.data.data;
      data = _objectSpread(_objectSpread({}, data), {}, {
        type: JSON.parse(data.isi).type
      });
      if (JSON.parse(data.isi).type === "text") data = _objectSpread(_objectSpread({}, data), {}, {
        isi: JSON.parse(data.isi).isi
      });else if (JSON.parse(data.isi).type === "video" && data.file) data = _objectSpread(_objectSpread({}, data), {}, {
        desc: JSON.parse(data.isi).desc,
        fileName: JSON.parse(data.isi).name
      });else if (JSON.parse(data.isi).type === "file" && data.file) data = _objectSpread(_objectSpread({}, data), {}, {
        fileName: JSON.parse(data.isi).name
      });
      setData(data);
      setLoading(false);
    })["catch"](function () {
      return notif('err');
    });
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    if (!confirm('Hapus data?')) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/materi/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function () {
      notif('data berhasil dihapus', true);
    })["catch"](function () {
      setErrors(['terjadi kesalahan, coba beberapa saat lagi']);
      setLoading(false);
    });
  }

  var downloadFile = function downloadFile(file) {
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

    if (!token) {
      setErrors(['mohon login ulang']);
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(data.file, {
      responseType: 'arraybuffer',
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      var blob = new Blob([res.data], {
        type: res.headers['content-type']
      });
      file_saver__WEBPACK_IMPORTED_MODULE_3___default.a.saveAs(blob, data.fileName);
    })["catch"](function () {
      return notif('file error');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row p2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hapus Data")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Type : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kode : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.kode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Judul : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.judul), data.type === "text" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Isi : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.isi), data.type !== "text" && data.file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: downloadFile,
    className: "btn btn-sm btn-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-download"
  }), data.fileName), data.type === "video" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Desc : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-danger mt-1",
    onClick: submit,
    disabled: loading
  }, "Hapus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "nothing here")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MateriDelete);

/***/ }),

/***/ "./resources/js/components/pengajar/MateriForm.js":
/*!********************************************************!*\
  !*** ./resources/js/components/pengajar/MateriForm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var MateriForm = function MateriForm(props) {
  var tipe = props.tipe,
      id = props.id,
      toggle = props.toggle,
      mapelId = props.mapelId,
      dirId = props.dirId; //console.log(mapelId)

  var fields = {
    id: tipe === 'update' ? id : 0,
    type: 'text'
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      fileDownload = _useState2[0],
      setFileDownload = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      video = _useState6[0],
      setVideo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      isi = _useState8[0],
      setIsi = _useState8[1]; //const [editorState, setEditorState] = React.useState(
  //    EditorState.createEmpty()
  //);


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      success = _useState12[0],
      setSuccess = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      errors = _useState14[0],
      setErrors = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tipe === 'update') {
      if (!_utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].cek()) {
        setErrors(['mohon login ulang']);
        return;
      }

      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/materi/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        setValues(function (values) {
          return _objectSpread(_objectSpread({}, values), {}, {
            judul: data.judul,
            kode: data.kode,
            type: JSON.parse(data.isi).type
          });
        });
        if (JSON.parse(data.isi).type === "video") setValues(function (values) {
          return _objectSpread(_objectSpread({}, values), {}, {
            desc: JSON.parse(data.isi).desc
          });
        });

        if (data.file) {
          setFileDownload({
            link: data.file,
            name: JSON.parse(data.isi).name
          });
        }

        if (JSON.parse(data.isi).type === "text") setIsi(JSON.parse(data.isi).isi);
        if (JSON.parse(data.isi).type === "text") console.log(JSON.parse(data.isi).isi);
        setLoading(false);
      })["catch"](function () {
        return toggle;
      });
    }

    if (mapelId) {
      console.log('kurang load data detail mapel');
    }
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].cek()) {
      setErrors(['mohon login ulang']);
      return;
    }

    setLoading(true);
    setSuccess(false);
    var data = {};
    if (values.type === "text") data = _objectSpread(_objectSpread({}, values), {}, {
      isi: isi
    });else if (values.type === "file") data = _objectSpread(_objectSpread({}, values), {}, {
      file: file ? file : ''
    });else if (values.type === "video") data = _objectSpread(_objectSpread({}, values), {}, {
      video: video ? video : ''
    });
    var formData = new FormData();

    for (var key in data) {
      formData.append(key, data[key]);
    }

    if (tipe === "update") formData.append("_method", "put");
    if (mapelId) formData.append("mapelId", mapelId);
    if (dirId) formData.append("parent", dirId);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/materi/' + (id ? id : ''), formData, {
      headers: {
        'Content-Type': "multipart/form-data",
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
      }
    }).then(function (res) {
      if (mapelId !== undefined) {
        props.history.push({
          pathname: "/mapel/".concat(mapelId),
          state: {
            message: 'Materi sukses ditambahkan'
          }
        });
        return;
      }

      setLoading(false);
      setSuccess(true);

      if (res.data.data.file) {
        setFileDownload({
          link: res.data.data.file,
          name: JSON.parse(res.data.data.isi).name
        });
      }

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

  var handleFile = function handleFile(e) {
    var uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  var handleVideo = function handleVideo(e) {
    var uploadedFile = e.target.files[0];
    setVideo(uploadedFile);
  };

  var downloadFile = function downloadFile() {
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken();

    if (!token) {
      setErrors(['mohon login ulang']);
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(fileDownload.link, {
      responseType: 'arraybuffer',
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
      }
    }).then(function (res) {
      var blob = new Blob([res.data], {
        type: res.headers['content-type']
      });
      file_saver__WEBPACK_IMPORTED_MODULE_2___default.a.saveAs(blob, fileDownload.name);
    })["catch"](function () {
      return toggle;
    });
  };

  var contentForm = function contentForm() {
    if (values.type === 'text') {
      var modules = {
        toolbar: [[{
          'header': [1, 2, 3, false]
        }], ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'], [{
          syntax: true
        }, {
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }, {
          'indent': '-1'
        }, {
          'indent': '+1'
        }], ['link', 'image'], [{
          'align': []
        }], ['clean']]
      };
      var formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'image', 'align'];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 320
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: isi,
        onChange: function onChange(value) {
          return setIsi(value);
        },
        style: {
          height: 300
        },
        theme: "snow",
        modules: modules,
        formats: formats
      }));
    } else if (values.type === 'file') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, fileDownload.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-sm btn-warning mb-1 float-right",
        type: "button",
        onClick: downloadFile
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-download"
      }), " ", fileDownload.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mb-1 float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-exclamation-circle"
      }), " File tidak ditemukan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "btn btn-sm btn-primary mr-2",
        style: {}
      }, "Browse ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: ".xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf",
        onChange: handleFile,
        style: {
          display: 'none'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, file ? file.name : 'Pilih File'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "form-text text-muted mt-0 mb-1"
      }, "pdf, doc, docx, xls, xlsx, ppt, pptx, txt, zip, rar, 7z"));
    } else if (values.type === 'video') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, fileDownload.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-sm btn-warning mb-1",
        type: "button",
        onClick: downloadFile
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-download"
      }), " ", fileDownload.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "btn btn-sm btn-primary btn-file mb-0 mr-1",
        style: {}
      }, "Browse ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: ".mp4,.avi",
        onChange: handleVideo,
        style: {
          display: 'none'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, video ? video.name : 'Pilih Video'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "form-text text-muted mt-0 mb-1"
      }, "mp4, avi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        name: "desc",
        value: values.desc,
        onChange: handleChange,
        cols: "50",
        rows: "5",
        placeholder: "deskripsi video..."
      })));
    }
  };

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambah' : 'Ubah', " Materi ", mapelId && " - Mata pelajaran : ".concat(mapelId))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form"
  }, tipe === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["RadioForm"], {
    label: "Type",
    name: "type",
    handleChange: handleChange,
    value: values.type,
    options: [['text', 'TEXT'], ['file', 'FILE'], ['video', 'VIDEO']]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextForm"], {
    formW: "4",
    name: "kode",
    label: "Kode",
    placeholder: "Kode Materi",
    handleChange: handleChange,
    value: values.kode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextForm"], {
    name: "judul",
    label: "Judul",
    placeholder: "Judul Materi",
    handleChange: handleChange,
    value: values.judul
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), values.type === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Isi Materi"), contentForm(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(MateriForm));

/***/ }),

/***/ "./resources/js/components/pengajar/MateriList.js":
/*!********************************************************!*\
  !*** ./resources/js/components/pengajar/MateriList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function MateriList(props) {
  var materis = props.materis,
      from = props.from,
      loading = props.loading,
      toggle = props.toggle,
      _props$action = props.action,
      action = _props$action === void 0 ? "default" : _props$action,
      select = props.select;
  var no = from | 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, materis.map(function (materi, key) {
    var content = JSON.parse(materi.isi);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      materi: materi,
      key: key,
      content: content,
      no: no++,
      action: action,
      select: select,
      toggle: toggle
    });
  })), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }));
}

var Item = function Item(props) {
  var content = props.content,
      materi = props.materi,
      no = props.no,
      action = props.action,
      select = props.select,
      toggle = props.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item p-1",
    style: {
      backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, no, " . "), content.type === 'file' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-file mr-1"
  }), content.type === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-book mr-1"
  }), content.type === 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-play-circle mr-1"
  }), materi.kode && "[".concat(materi.kode, "]"), " ", materi.judul, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, action === "default" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-warning ml-1",
    value: "update-".concat(materi.id),
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-danger ml-1",
    value: "delete-".concat(materi.id),
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-trash"
  }))), action === "select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "select",
    className: "custom-cb",
    value: materi.id,
    type: "checkbox",
    onChange: select,
    onClick: function onClick() {
      setSelected(!selected);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MateriList);

/***/ }),

/***/ "./resources/js/components/pengajar/MateriSearch.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/pengajar/MateriSearch.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");



function MateriSearch(props) {
  var loadData = props.loadData;

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit),
      values = _useForm.values,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      setValues = _useForm.setValues;

  var submit = function submit(e) {
    e.preventDefault();
    loadData(values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submit
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
    placeholder: "judul",
    name: "judul",
    value: values.judul || '',
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
    name: "type",
    onChange: handleChange,
    value: values.type || ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "= Pilih Jenis ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "text"
  }, " TEKS "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "file"
  }, " FILE "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "video"
  }, " VIDEO "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 mb-1"
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
}

/* harmony default export */ __webpack_exports__["default"] = (MateriSearch);

/***/ })

}]);