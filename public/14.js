(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/ErrorBoundary.js":
/*!***************************************!*\
  !*** ./resources/js/ErrorBoundary.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            paddingLeft: '2%'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.stringify(this.state.error)));
      }

      return this.props.children;
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



/***/ }),

/***/ "./resources/js/components/kuis/KuisDelete.js":
/*!****************************************************!*\
  !*** ./resources/js/components/kuis/KuisDelete.js ***!
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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var KuisDelete = function KuisDelete(props) {
  var id = props.id,
      notif = props.notif,
      setAction = props.setAction;

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setData(res.data.data);
      setLoading(false);
    })["catch"](function () {
      return setAction('', '', true);
    });
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    if (!confirm('Hapus data?')) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function () {
      setAction('', {
        message: 'data berhasil dihapus'
      }, true);
    })["catch"](function () {
      notif('err');
      setLoading(false);
    });
  }

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kode : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.kode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Judul : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.judul), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Keterangan : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.keterangan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-danger mt-1",
    onClick: submit,
    disabled: loading
  }, "Hapus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "nothing here")))));
};

/* harmony default export */ __webpack_exports__["default"] = (KuisDelete);

/***/ }),

/***/ "./resources/js/components/kuis/KuisDetail.js":
/*!****************************************************!*\
  !*** ./resources/js/components/kuis/KuisDetail.js ***!
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
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Array */ "./resources/js/utils/Array.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var _soal_SoalList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../soal/SoalList */ "./resources/js/components/soal/SoalList.js");
/* harmony import */ var _soal_SoalSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../soal/SoalSearch */ "./resources/js/components/soal/SoalSearch.js");
/* harmony import */ var _PengaturanKuisModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PengaturanKuisModal */ "./resources/js/components/kuis/PengaturanKuisModal.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _html_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../html/Pagination */ "./resources/js/components/html/Pagination.js");
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














var KuisDetail = function KuisDetail(props) {
  var id = props.id,
      notif = props.notif,
      setAction = props.setAction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      soals = _useState4[0],
      setSoals = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      formOpen = _useState10[0],
      setFormOpen = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      formType = _useState12[0],
      setFormType = _useState12[1];

  var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken(); //pilihan soal

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    soals: [],
    pageData: {},
    search: {},
    page: 1
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      soalList = _useState14[0],
      setSoalList = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedSoals = _useState16[0],
      setSelectedSoals = _useState16[1];

  var fields = {
    kuis_id: id,
    type: '1',
    dirName: '',
    parent: '',
    soal: ''
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState18 = _slicedToArray(_useState17, 2),
      dataId = _useState18[0],
      setDataId = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadDetail();
    loadSoal();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getSoalList();
  }, [soalList.search, soalList.page]);

  var loadDetail = function loadDetail() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setData(res.data.data);
      setLoading(false);
    })["catch"](function () {
      return setAction('', '', true);
    });
  };

  var loadSoal = function loadSoal() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/soal/kuis/' + id, {
      params: {},
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setSoals(Object(_utils_Array__WEBPACK_IMPORTED_MODULE_4__["flatToHierarchy"])(res.data.data));
    })["catch"](function (err) {
      setLoading(false);
      notif(JSON.stringify(err.message));
    });
  };

  var setSearch = function setSearch() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setSoalList(_objectSpread(_objectSpread({}, soalList), {}, {
      search: values
    }));
  };

  var getSoalList = function getSoalList() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/soal?page=' + soalList.page, {
      params: soalList.search.soal,
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setSoalList(_objectSpread(_objectSpread({}, soalList), {}, {
        soals: res.data.data,
        pageData: {
          from: res.data.meta.from,
          total: res.data.meta.total,
          per_page: res.data.meta.per_page,
          pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page)
        }
      }));
    })["catch"](function (err) {
      notif(JSON.stringify(err.message));
    });
  };

  var openForm = function openForm(e) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var pid = e.currentTarget.value;
    setFormType(type);
    setDataId(pid);
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        parent: pid,
        type: pid == 0 ? 1 : 2
      });
    });
    setFormOpen(true);
  };

  var closeAndReset = function closeAndReset() {
    setFormOpen(false);
    setValues(fields);
    setSoalList({
      soals: [],
      pageData: {},
      search: {}
    });
    setSelectedSoals([]);
  };

  var delSoal = function delSoal(mid, nama) {
    if (!token) {
      notif("mohon login ulang");
      return;
    }

    if (!confirm("hapus ".concat(nama, "?"))) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/rem-soal/' + mid, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function () {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "".concat(nama, " berhasil dihapus")
      }));
      setLoading(false);
      loadSoal();
      closeAndReset();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
            text: "Kosongkan direktori terlebih dahulu",
            success: false
          }));
        } else if (err.response.request.status === 401) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
            text: "mohon login ulang",
            success: false
          }));
        } else {
          notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data));
        }
      } else {
        notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data));
      }

      setLoading(false);
      closeAndReset();
    });
  };

  var handleSelectSoal = function handleSelectSoal(e) {
    e.persist();

    if (e.target.checked) {
      setSelectedSoals([].concat(_toConsumableArray(selectedSoals), [e.target.value]));
      console.log([].concat(_toConsumableArray(selectedSoals), [e.target.value]));
    } else {
      var updated = selectedSoals.filter(function (mat) {
        if (e.target.value !== mat) return mat;
      });
      setSelectedSoals(updated);
      console.log(updated);
    }
  };

  function submit() {
    if (!token) {
      notif("mohon login ulang");
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/add-soal/', _objectSpread(_objectSpread({}, values), {}, {
      soals: selectedSoals
    }), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "berhasil ditambahkan"
      }));
      setLoading(false);
      loadSoal();
      closeAndReset();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          notif(getErrors(err.response.data.errors));
        } else if (err.response.request.status === 401) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
            text: "mohon login ulang",
            success: false
          }));
        } else {
          notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data));
        }
      } else {
        notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data));
      }

      setLoading(false);
      closeAndReset();
    });
  }

  var types = {
    1: "Pilihan ganda",
    2: "Benar/Salah",
    3: "Menjodohkan",
    4: "Isian singkat",
    5: "Essay"
  };
  var totalPoint = 0;

  var renderItem = function renderItem() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var enableSetting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (data.length === 0 && root) {
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_10__["List"], {
        width: 300,
        height: 80
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-exclamation"
      }), " Belum ada data");
    } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: root ? "list-group" : ''
    }, data.map(function (dt, i) {
      var settings = JSON.parse(dt.settings);
      var enableChildSetting = dt.type == 1 ? settings.bobotPerSoal : false;

      if (dt.type == 2 && enableSetting || root && !enableChildSetting) {
        totalPoint += parseInt(settings.bobot);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: dt.id,
        className: root ? 'list-group-item p-1' : ''
      }, dt.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-folder"
      }), ' ', dt.type == 1 ? dt.nama : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "[", types[dt.soal.type], "] ", JSON.parse(dt.soal.pertanyaan).q), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, dt.type == 1 && level < 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-dark mr-1",
        value: dt.id,
        onClick: openForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-plus"
      })), dt.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-primary mr-1",
        value: dt.id,
        onClick: function onClick(e) {
          return openForm(e, "pengaturan");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-wrench"
      })), dt.type == 2 && enableSetting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-primary mr-1",
        value: dt.id,
        onClick: function onClick(e) {
          return openForm(e, "pengaturan");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-wrench"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-danger",
        value: dt.id,
        onClick: function onClick() {
          return delSoal(dt.id, dt.type == 1 ? dt.nama : JSON.parse(dt.soal.pertanyaan).q);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times"
      }))), root && !enableChildSetting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, settings.bobot | 0)), dt.type == 2 && enableSetting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, settings.bobot | 0)), renderItem(dt.child, false, level + 1, enableChildSetting));
    }));
  };

  var handlePageClick = function handlePageClick(data) {
    console.log(data);
    setSoalList(_objectSpread(_objectSpread({}, soalList), {}, {
      page: data.selected + 1
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row p2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 card-body pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, data.kode && "[".concat(data.kode, "]"), " ", data.judul)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.keterangan))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-2 card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Daftar Soal/Pertanyaan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xxs btn-primary ml-1",
    value: 0,
    onClick: openForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, renderItem(soals)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Total : ", totalPoint)))))), formOpen && formType !== "pengaturan" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: closeAndReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, values.parent == '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    form: "form-1",
    formW: "5",
    labelW: "0",
    placeholder: "Nama Bab",
    name: "dirName",
    value: values.dirName,
    handleChange: handleChange
  }), values.parent != '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setSearch: setSearch,
    defaultValues: {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    soals: soalList.soals,
    from: soalList.pageData.from,
    loading: loading,
    showType: soalList.search.type ? false : true,
    action: "select",
    select: handleSelectSoal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
    pageData: soalList.pageData,
    page: soalList.page,
    handlePageClick: handlePageClick
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "sumbit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), ' ', "Tambahkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  })))))), formOpen && formType === "pengaturan" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PengaturanKuisModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: dataId,
    closeAndReset: closeAndReset,
    loadSoal: loadSoal,
    setNotif: notif
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (KuisDetail);

/***/ }),

/***/ "./resources/js/components/kuis/KuisForm.js":
/*!**************************************************!*\
  !*** ./resources/js/components/kuis/KuisForm.js ***!
  \**************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var KuisForm = function KuisForm(props) {
  var tipe = props.tipe,
      id = props.id,
      setAction = props.setAction,
      mapelId = props.mapelId,
      dirId = props.dirId;
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kuis/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        setValues(function (values) {
          return _objectSpread(_objectSpread({}, values), {}, {
            judul: data.judul,
            kode: data.kode,
            keterangan: data.keterangan
          });
        });
        setLoading(false);
      })["catch"](function () {
        return setAction('', {
          message: 'data error'
        });
      });
    }

    if (mapelId) {
      console.log('kurang load data detail mapel');
    }
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setErrors(['mohon login ulang']);
      return;
    }

    setLoading(true);
    setSuccess(false);
    var formData = new FormData();

    for (var key in values) {
      formData.append(key, values[key]);
    }

    if (tipe === "update") formData.append("_method", "put");
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/kuis/' + (id ? id : ''), formData, {
      headers: {
        'Content-Type': "multipart/form-data",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambah' : 'Ubah', " Kuis ", mapelId && " - Mata pelajaran : ".concat(mapelId))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    formW: "4",
    name: "kode",
    label: "Kode",
    placeholder: "Kode Kuis",
    handleChange: handleChange,
    value: values.kode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    name: "judul",
    label: "Judul",
    placeholder: "Judul Kuis",
    handleChange: handleChange,
    value: values.judul
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextAreaForm"], {
    formW: "6",
    name: "keterangan",
    label: "Keterangan",
    placeholder: "Keterangan (max 100)",
    handleChange: handleChange,
    value: values.keterangan
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(KuisForm));

/***/ }),

/***/ "./resources/js/components/kuis/KuisList.js":
/*!**************************************************!*\
  !*** ./resources/js/components/kuis/KuisList.js ***!
  \**************************************************/
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



function KuisList(props) {
  var kuises = props.kuises,
      from = props.from,
      loading = props.loading,
      setAction = props.setAction,
      _props$action = props.action,
      action = _props$action === void 0 ? "default" : _props$action,
      select = props.select;
  var no = from | 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, kuises.map(function (kuis, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      kuis: kuis,
      key: key,
      no: no++,
      action: action,
      select: select,
      setAction: setAction
    });
  }), kuises.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Belum ada data kuis")), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }));
}

var Item = function Item(props) {
  var kuis = props.kuis,
      no = props.no,
      action = props.action,
      select = props.select,
      setAction = props.setAction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item p-1",
    style: {
      backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, no, " . "), kuis.kode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "[", kuis.kode, "]"), " ", kuis.judul, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, action === "default" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-primary ml-1",
    value: "kuisDetail-".concat(kuis.id),
    onClick: setAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-expand"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-warning ml-1",
    value: "kuisUpdate-".concat(kuis.id),
    onClick: setAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-danger ml-1",
    value: "kuisDelete-".concat(kuis.id),
    onClick: setAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-trash"
  }))), action === "select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "select",
    className: "custom-cb",
    value: kuis.id,
    type: "checkbox",
    onChange: select,
    onClick: function onClick() {
      setSelected(!selected);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (KuisList);

/***/ }),

/***/ "./resources/js/components/kuis/KuisSearch.js":
/*!****************************************************!*\
  !*** ./resources/js/components/kuis/KuisSearch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function KuisSearch(props) {
  var setSearch = props.setSearch,
      defaultValues = props.defaultValues;

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit),
      values = _useForm.values,
      handleChange = _useForm.handleChange,
      setValues = _useForm.setValues;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (defaultValues.judul || defaultValues.kode) setValues(_objectSpread({}, defaultValues));
  }, []);

  var submit = function submit(e) {
    e.preventDefault();
    setSearch({
      kuis: values
    });
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

/* harmony default export */ __webpack_exports__["default"] = (KuisSearch);

/***/ }),

/***/ "./resources/js/components/kuis/PengaturanKuisModal.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/kuis/PengaturanKuisModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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







var PengaturanSoalModal = function PengaturanSoalModal(props) {
  var id = props.id,
      closeAndReset = props.closeAndReset,
      loadSoal = props.loadSoal,
      setNotif = props.setNotif;
  var fields = {
    id: id,
    nama: '',
    settings: {}
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadDetail();
  }, []);

  var loadDetail = function loadDetail() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setNotif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/kuis-soal/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setType(res.data.data.type);
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        nama: res.data.data.nama,
        settings: JSON.parse(res.data.data.settings)
      }));
      setLoading(false);
    })["catch"](function () {
      return closeAndReset();
    });
  };

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setNotif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put('/api/kuis-soal/' + id, _objectSpread(_objectSpread({}, values), {}, {
      type: type
    }), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setNotif('sukses');
      closeAndReset();
      loadSoal();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          console.log(getErrors(err.response.data.errors));
          setNotif(getErrors(err.response.data.errors));
        }
      }

      closeAndReset();
    });
  }

  var handleCheck = function handleCheck(e) {
    var checked = e.target.checked;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      settings: _objectSpread(_objectSpread({}, values.settings), {}, _defineProperty({}, e.target.name, checked))
    }));
  };

  var handleSettingsChange = function handleSettingsChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      settings: _objectSpread(_objectSpread({}, values.settings), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
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
    className: "modal-header row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Pengaturan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: closeAndReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    label: "Nama *",
    placeholder: "Nama group/bab kuis",
    name: "nama",
    value: values.nama,
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    label: "Keterangan",
    name: "keterangan",
    placeholder: "keterangan kuis",
    value: values.settings.keterangan,
    handleChange: handleSettingsChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    label: "Bobot *",
    formW: "3",
    formtext: "* Bobot group/bab soal",
    name: "bobot",
    placeholder: "Bobot nilai",
    value: values.settings.bobot,
    handleChange: handleSettingsChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 offset-md-2 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "bobotPerSoal",
    className: "custom-cb",
    onChange: handleCheck,
    checked: values.settings.bobotPerSoal ? true : false
  }), "  Bobot per soal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 offset-md-2 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "acakSoal",
    className: "custom-cb",
    onChange: handleCheck,
    checked: values.settings.acakSoal ? true : false
  }), "  Acak Soal"))), type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    label: "Bobot *",
    formW: "3",
    formtext: "* Bobot soal",
    name: "bobot",
    placeholder: "Bobot nilai",
    value: values.settings.bobot,
    handleChange: handleSettingsChange
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "sumbit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check"
  }), ' ', "Terapkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PengaturanSoalModal);

/***/ }),

/***/ "./resources/js/components/pengajar/Kuis.js":
/*!**************************************************!*\
  !*** ./resources/js/components/pengajar/Kuis.js ***!
  \**************************************************/
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
/* harmony import */ var _kuis_KuisList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kuis/KuisList */ "./resources/js/components/kuis/KuisList.js");
/* harmony import */ var _kuis_KuisSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kuis/KuisSearch */ "./resources/js/components/kuis/KuisSearch.js");
/* harmony import */ var _kuis_KuisForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kuis/KuisForm */ "./resources/js/components/kuis/KuisForm.js");
/* harmony import */ var _kuis_KuisDelete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kuis/KuisDelete */ "./resources/js/components/kuis/KuisDelete.js");
/* harmony import */ var _kuis_KuisDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kuis/KuisDetail */ "./resources/js/components/kuis/KuisDetail.js");
/* harmony import */ var _soal_SoalList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../soal/SoalList */ "./resources/js/components/soal/SoalList.js");
/* harmony import */ var _soal_SoalSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../soal/SoalSearch */ "./resources/js/components/soal/SoalSearch.js");
/* harmony import */ var _soal_SoalForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../soal/SoalForm */ "./resources/js/components/soal/SoalForm.js");
/* harmony import */ var _soal_SoalDelete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../soal/SoalDelete */ "./resources/js/components/soal/SoalDelete.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ErrorBoundary */ "./resources/js/ErrorBoundary.js");
/* harmony import */ var _html_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../html/Pagination */ "./resources/js/components/html/Pagination.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_15__);
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

















var Kuis = /*#__PURE__*/function (_React$Component) {
  _inherits(Kuis, _React$Component);

  var _super = _createSuper(Kuis);

  function Kuis(props) {
    var _this;

    _classCallCheck(this, Kuis);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadKuis", function () {
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        _this.props.logOut('kuis', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/kuis?page=' + _this.state.kuisPage, {
        params: _this.state.search.kuis,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this.setState({
          kuises: res.data.data,
          pageDataKuis: {
            from: res.data.meta.from,
            total: res.data.meta.total,
            per_page: res.data.meta.per_page,
            pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page)
          },
          fetch: false
        });
      })["catch"](function (err) {
        _this.notif(JSON.stringify(err.message));

        _this.setState({
          fetch: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadSoal", function () {
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        _this.props.logOut('kuis', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/soal?page=' + _this.state.soalPage, {
        params: _this.state.search.soal,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this.setState({
          soals: res.data.data,
          pageDataSoal: {
            from: res.data.meta.from,
            total: res.data.meta.total,
            per_page: res.data.meta.per_page,
            pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page)
          },
          fetch: false
        });
      })["catch"](function (err) {
        _this.notif(JSON.stringify(err.message));

        _this.setState({
          fetch: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSearch", function (values) {
      _this.setState({
        search: _objectSpread(_objectSpread({}, _this.state.search), values)
      }, function () {
        if (_this.state.action === '') _this.loadKuis();
        if (_this.state.action === 'soal') _this.loadSoal();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notif", function () {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var reloadData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (m.constructor === Array) {
        var message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, m.map(function (ms, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: key
          }, ms);
        }));

        _this.setState({
          message: message
        });
      } else _this.setState({
        message: m
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setAction", function (e, p) {
      var reload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (e) {
        e.preventDefault();
        var action = e.currentTarget.value.split('-')[0];
        var id = e.currentTarget.value.split('-')[1];
        var message = e.currentTarget.value.split('-')[2];

        _this.setState({
          action: action,
          kuisId: id ? id : '',
          soalId: id ? id : '',
          message: message ? message : ''
        }, function () {
          if (['', 'soal'].indexOf(action) !== -1) {
            if (action === '') _this.loadKuis();
            if (action === 'soal') _this.loadSoal();
          }
        });
      } else if (p) {
        _this.setState({
          action: p.action ? p.action : '',
          message: p.message ? p.message : ''
        }, function () {
          if (reload) {
            if (_this.state.action === '') _this.loadKuis();
            if (_this.state.action === 'soal') _this.loadSoal();
          }
        });
      } else _this.setState({
        action: '',
        message: ''
      }, function () {
        if (reload) {
          _this.loadKuis();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageClick", function (data) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kuis";

      if (type == "kuis") {
        _this.setState({
          fetch: true,
          kuisPage: data.selected + 1
        }, function () {
          _this.loadKuis();
        });
      } else {
        _this.setState({
          fetch: true,
          soalPage: data.selected + 1
        }, function () {
          _this.loadSoal();
        });
      }
    });

    _this.state = {
      action: '',
      kuises: [],
      pageDataKuis: {
        pageCount: 0
      },
      kuisPage: 1,
      soals: [],
      pageDataSoal: {
        pageCount: 0
      },
      soalPage: 1,
      search: {
        kuis: {
          judul: '',
          kode: ''
        },
        soal: {
          kode: '',
          pertanyaan: '',
          type: ''
        }
      },
      kuisId: '',
      soalId: '',
      fetch: false,
      message: _this.props.location.state ? _this.props.location.state.message : ''
    };
    return _this;
  }

  _createClass(Kuis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.action === '') this.loadKuis();
      if (this.state.action === 'soal') this.loadSoal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["PageTitle"], {
        title: "Kuis",
        navs: [{
          show: this.state.action === '',
          clickHandle: function clickHandle() {
            return _this2.setAction('', {
              action: 'kuisAdd'
            });
          }
        }, {
          show: ['kuisAdd', 'kuisUpdate', 'kuisDelete', 'kuisDetail'].indexOf(this.state.action) !== -1,
          clickHandle: function clickHandle() {
            return _this2.setAction('', {
              action: ''
            }, true);
          },
          icon: "fa-arrow-left"
        }, {
          show: ['soalAdd', 'soalUpdate', 'soalDelete'].indexOf(this.state.action) !== -1,
          clickHandle: function clickHandle() {
            return _this2.setAction('', {
              action: 'soal'
            }, true);
          },
          icon: "fa-arrow-left"
        }, {
          show: this.state.action === 'soal',
          clickHandle: function clickHandle() {
            return _this2.setAction('', {
              action: 'soalAdd'
            });
          }
        }]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 mt-3"
      }, this.state.message !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        message: this.state.message,
        clickHandle: this.notif
      })), ['', 'soal'].indexOf(this.state.action) !== -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 mt-1 mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === '' && 'active'),
        onClick: this.setAction,
        value: ""
      }, "Kuis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === 'soal' && 'active'),
        onClick: this.setAction,
        value: "soal"
      }, "Soal / Pertanyaan")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__["default"], null, function () {
        switch (_this2.state.action) {
          case "":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
              setSearch: _this2.setSearch,
              defaultValues: _this2.state.search.kuis
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisList__WEBPACK_IMPORTED_MODULE_4__["default"], {
              kuises: _this2.state.kuises,
              from: _this2.state.pageDataKuis.from,
              loading: _this2.fetch,
              setAction: _this2.setAction
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "mb-2"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
              pageData: _this2.state.pageDataKuis,
              page: _this2.state.kuisPage,
              handlePageClick: _this2.handlePageClick
            }));

          case "kuisAdd":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
              tipe: "add",
              id: ""
            });

          case "kuisUpdate":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
              tipe: "update",
              id: _this2.state.kuisId,
              setAction: _this2.setAction
            });

          case "kuisDelete":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisDelete__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: _this2.state.kuisId,
              setAction: _this2.setAction,
              notif: _this2.notif
            });

          case "kuisDetail":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisDetail__WEBPACK_IMPORTED_MODULE_8__["default"], {
              id: _this2.state.kuisId,
              setAction: _this2.setAction,
              notif: _this2.notif
            });

          case "soal":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalSearch__WEBPACK_IMPORTED_MODULE_10__["default"], {
              setSearch: _this2.setSearch,
              defaultValues: _this2.state.search.soal
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalList__WEBPACK_IMPORTED_MODULE_9__["default"], {
              soals: _this2.state.soals,
              from: _this2.state.pageDataSoal.from,
              loading: _this2.fetch,
              setAction: _this2.setAction,
              showType: _this2.state.search.soal.type ? false : true
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "mb-2"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
              pageData: _this2.state.pageDataSoal,
              page: _this2.state.soalPage,
              handlePageClick: function handlePageClick(data) {
                return _this2.handlePageClick(data, "soal");
              }
            }));

          case "soalAdd":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
              tipe: "add",
              id: ""
            });

          case "soalUpdate":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_soal_SoalForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
              tipe: "update",
              id: _this2.state.soalId,
              setAction: _this2.setAction
            });

          default:
            return "nonono";
        }
      }())));
    }
  }]);

  return Kuis;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_15__["hot"])(Kuis));

/***/ }),

/***/ "./resources/js/components/soal/SoalDelete.js":
/*!****************************************************!*\
  !*** ./resources/js/components/soal/SoalDelete.js ***!
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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var SoalDelete = function SoalDelete(props) {
  var id = props.id,
      notif = props.notif,
      setAction = props.setAction;

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setData(res.data.data);
      setLoading(false);
    })["catch"](function () {
      return setAction('', '', true);
    });
  }, []);

  function submit() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    if (!confirm('Hapus data?')) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function () {
      setAction('', {
        message: 'data berhasil dihapus'
      }, true);
    })["catch"](function () {
      notif('err');
      setLoading(false);
    });
  }

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Kode : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.kode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Judul : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.judul), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Keterangan : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), data.keterangan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-danger mt-1",
    onClick: submit,
    disabled: loading
  }, "Hapus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "nothing here")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoalDelete);

/***/ }),

/***/ "./resources/js/components/soal/SoalForm.js":
/*!**************************************************!*\
  !*** ./resources/js/components/soal/SoalForm.js ***!
  \**************************************************/
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
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lineto */ "./node_modules/react-lineto/dist/react-lineto.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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








var SoalForm = function SoalForm(props) {
  var tipe = props.tipe,
      id = props.id,
      setAction = props.setAction;
  var fields = {
    id: tipe === 'update' ? id : 0,
    type: 1
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/soal/' + id, {
        headers: {
          Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
        }
      }).then(function (res) {
        var data = res.data.data;
        var dt = {};
        if (data.type == 2) dt = {
          kunci: JSON.parse(data.jawaban) ? '1' : '0'
        };else if (data.type == 5) dt = {
          kunci: JSON.parse(data.jawaban)
        };else if (data.type == 1) dt = {
          jawabans: JSON.parse(data.pertanyaan).alist,
          kunci: JSON.parse(data.jawaban).a,
          aType: JSON.parse(data.jawaban).type
        };else if (data.type == 3) dt = {
          pertanyaans: JSON.parse(data.pertanyaan).qlist,
          jawabans: JSON.parse(data.pertanyaan).alist,
          kunci: JSON.parse(data.jawaban)
        };else if (data.type == 4) dt = {
          kunci: JSON.parse(data.jawaban)
        };
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          type: data.type,
          kode: data.kode,
          q: JSON.parse(data.pertanyaan).q
        }, dt));
        setLoading(false);
      })["catch"](function () {
        return setAction('', {
          message: 'data error',
          action: 'soal'
        });
      });
    }
  }, []);

  function submit() {
    //console.log(values)
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      setErrors(['mohon login ulang']);
      return;
    }

    setLoading(true); //return

    setSuccess(false);
    var formData = new FormData();

    for (var key in values) {
      //const val = (values.type == 3 && key == 'kunci') ? JSON.stringify(values[key]) : values[key]
      var val = values[key].constructor == Array ? JSON.stringify(values[key]) : values[key];
      formData.append(key, val);
    }

    if (tipe === "update") formData.append("_method", "put");
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/soal/' + (id ? id : ''), formData, {
      headers: {
        'Content-Type': "multipart/form-data",
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setSuccess(true);
      setErrors({});

      if (tipe === 'add') {
        if (values.type == 1) {
          console.log('reset pilgan');
          setValues(_objectSpread(_objectSpread({}, fields), {}, {
            aType: 1,
            jawabans: [""],
            kunci: []
          }));
        } else if (values.type != 3) setValues(_objectSpread({}, fields));else setValues(_objectSpread(_objectSpread({}, fields), {}, {
          pertanyaans: [''],
          jawabans: [''],
          kunci: []
        }));
      }
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

  function form(type) {
    if (type == 1) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PilihanGandaForm, {
      values: values,
      handleChange: handleChange,
      setValues: setValues
    });else if (type == 2) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BenarSalahForm, {
      values: values,
      handleChange: handleChange,
      setValues: setValues
    });else if (type == 3) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenjodohkanForm, {
      values: values,
      handleChange: handleChange,
      setValues: setValues
    });else if (type == 4) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsianForm, {
      values: values,
      handleChange: handleChange,
      setValues: setValues
    });else if (type == 5) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EssayForm, {
      values: values,
      handleChange: handleChange,
      setValues: setValues
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, tipe === 'add' ? 'Tambah' : 'Ubah', " Soal ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '2%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    id: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["SelectForm"], {
    label: "Tipe Soal",
    name: "type",
    value: values.type,
    handleChange: handleChange,
    options: [{
      id: 1,
      nama: 'Pilihan Ganda'
    }, {
      id: 2,
      nama: 'Benar/Salah'
    }, {
      id: 3,
      nama: 'Menjodohkan'
    }, {
      id: 4,
      nama: 'Isian Singkat'
    }, {
      id: 5,
      nama: 'Essay'
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextForm"], {
    formW: "4",
    name: "kode",
    label: "Kode",
    placeholder: "Kode Soal",
    handleChange: handleChange,
    value: values.kode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), form(values.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, "Sukses!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "data berhasil disimpan"))))));
};

var PilihanGandaForm = function PilihanGandaForm(props) {
  var values = props.values,
      handleChange = props.handleChange,
      setValues = props.setValues;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(values.aType);

    if (values.aType === undefined) {
      console.log('set');
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        aType: 1,
        jawabans: [""],
        kunci: []
      }));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//if (values.aType) setValues({ ...values, kunci: [] })
    //PR
  }, [values.aType]);

  var handleCheck = function handleCheck(e) {
    if (values.aType == 1) setValues(_objectSpread(_objectSpread({}, values), {}, {
      kunci: [parseInt(e.target.value) + 1]
    }));else if (values.aType == 2) {
      if (e.target.checked) setValues(_objectSpread(_objectSpread({}, values), {}, {
        kunci: [].concat(_toConsumableArray(values.kunci), [parseInt(e.target.value) + 1])
      }));else {
        var filteredKunci = values.kunci.filter(function (k) {
          return k !== parseInt(e.target.value) + 1;
        });
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          kunci: filteredKunci
        }));
      }
    }
  };

  var newJawaban = function newJawaban(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: [].concat(_toConsumableArray(values.jawabans), [""])
    }));
  };

  var handleJawaban = function handleJawaban(e) {
    var newJawabans = _toConsumableArray(values.jawabans);

    newJawabans[e.target.name] = e.target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: newJawabans
    }));
  };

  var delJawaban = function delJawaban(e) {
    var deletedKeys = [];
    var filteredJawabans = values.jawabans.filter(function (jawaban, i) {
      if (e.target.value === jawaban) deletedKeys.push(i + 1);
      return e.target.value !== jawaban;
    });
    var filteredKeys = values.kunci.filter(function (k, i) {
      return deletedKeys.indexOf(k) === -1;
    });
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: filteredJawabans,
      kunci: filteredKeys
    }));
  }; //console.log(values)


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    label: "Pertanyaan",
    formW: "10",
    name: "q",
    value: values.q,
    placeholder: "isikan pertanyaan...",
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["SelectForm"], {
    label: "Tipe Jawaban",
    name: "aType",
    value: values.aType,
    handleChange: handleChange,
    options: [{
      id: 1,
      nama: 'Satu Jawaban'
    }, {
      id: 2,
      nama: 'Multi Jawaban'
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-md-2"
  }, "Jawaban ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-primary",
    onClick: newJawaban
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  })), "                "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, values.jawabans && values.jawabans.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, values.jawabans.map(function (jawaban, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-inline float-left mb-1",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      style: {
        width: '1.3em'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      size: "45",
      name: i,
      value: jawaban,
      className: "form-control mr-1",
      onChange: handleJawaban
    }), values.aType == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "kunci",
      type: "radio",
      value: i,
      checked: parseInt(values.kunci) === i + 1,
      onChange: handleCheck,
      className: "custom-rd mr-1"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "kunci",
      type: "checkbox",
      value: i,
      checked: values.kunci.indexOf(i + 1) !== -1,
      onChange: handleCheck,
      className: "custom-cb mr-1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      value: jawaban,
      onClick: delJawaban,
      className: "btn btn-xs btn-outline-danger"
    }, "\xD7"))));
  })))));
};

var BenarSalahForm = function BenarSalahForm(props) {
  var values = props.values,
      handleChange = props.handleChange,
      setValues = props.setValues;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (values.kunci === undefined) setValues(_objectSpread(_objectSpread({}, values), {}, {
      kunci: '1'
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    label: "Pertanyaan",
    formW: "10",
    name: "q",
    value: values.q,
    placeholder: "isikan pertanyaan...",
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["RadioForm"], {
    label: "Jawaban",
    name: "kunci",
    handleChange: handleChange,
    value: values.kunci,
    options: [['1', 'BENAR'], ['0', 'SALAH']]
  }));
};

var MenjodohkanForm = function MenjodohkanForm(props) {
  var values = props.values,
      handleChange = props.handleChange,
      setValues = props.setValues;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (values.pertanyaans === undefined) setValues(_objectSpread(_objectSpread({}, values), {}, {
      pertanyaans: [''],
      jawabans: [''],
      kunci: []
    }));
  }, []);

  var handleCheck = function handleCheck(e) {
    if (values.aType == 1) setValues(_objectSpread(_objectSpread({}, values), {}, {
      kunci: [parseInt(e.target.value) + 1]
    }));else if (values.aType == 2) {
      if (e.target.checked) setValues(_objectSpread(_objectSpread({}, values), {}, {
        kunci: [].concat(_toConsumableArray(values.kunci), [parseInt(e.target.value) + 1])
      }));else {
        var filteredKunci = values.kunci.filter(function (k) {
          return k !== parseInt(e.target.value) + 1;
        });
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          kunci: filteredKunci
        }));
      }
    }
  };

  var newJawaban = function newJawaban(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: [].concat(_toConsumableArray(values.jawabans), [""])
    }));
  };

  var handleJawaban = function handleJawaban(e) {
    var newJawabans = _toConsumableArray(values.jawabans);

    newJawabans[e.target.name] = e.target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: newJawabans
    }));
  };

  var delJawaban = function delJawaban(e) {
    var deletedKeys = [];
    var filteredJawabans = values.jawabans.filter(function (jawaban, i) {
      if (e.target.value === jawaban) deletedKeys.push(i + 1);
      return e.target.value !== jawaban;
    });
    var filteredKeys = values.kunci.filter(function (k, i) {
      return deletedKeys.indexOf(k) === -1;
    });
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      jawabans: filteredJawabans,
      kunci: filteredKeys
    }));
  };

  var newPertanyaan = function newPertanyaan(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      pertanyaans: [].concat(_toConsumableArray(values.pertanyaans), [""])
    }));
  };

  var handlePertanyaan = function handlePertanyaan(e) {
    var newPertanyaans = _toConsumableArray(values.pertanyaans);

    newPertanyaans[e.target.name] = e.target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      pertanyaans: newPertanyaans
    }));
  };

  var delPertanyaan = function delPertanyaan(e) {
    var deletedKeys = [];
    var filteredPertanyaans = values.pertanyaans.filter(function (pertanyaan, i) {
      if (e.target.value === pertanyaan) deletedKeys.push(i + 1);
      return e.target.value !== pertanyaan;
    });
    var filteredKeys = values.kunci.filter(function (k, i) {
      return deletedKeys.indexOf(k) === -1;
    });
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      pertanyaans: filteredPertanyaans,
      kunci: filteredKeys
    }));
  };

  var handleDragStart = function handleDragStart(data) {
    return function (event) {
      var newKunci = values.kunci.filter(function (k) {
        return k.q !== data.id;
      });
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        kunci: newKunci
      }));
      event.dataTransfer.setData("dragContent", data.id);
    };
  };

  var handleDrop = function handleDrop(data) {
    return function (event) {
      event.preventDefault();
      var exist = values.kunci.filter(function (line) {
        return line.a === data.id;
      });
      if (exist.length > 0) return;
      var from = JSON.parse(event.dataTransfer.getData("dragContent"));
      var to = data.id; //setLines([...lines, { q: from, a: to }])

      console.log(_objectSpread(_objectSpread({}, values), {}, {
        kunci: [].concat(_toConsumableArray(values.kunci), [{
          q: from,
          a: to
        }])
      }));
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        kunci: [].concat(_toConsumableArray(values.kunci), [{
          q: from,
          a: to
        }])
      }));
      return false;
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    labelW: "0",
    formW: "12",
    name: "q",
    value: values.q,
    placeholder: "isikan perintah/petunjuk mengerjakan...",
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pertanyaan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-primary ml-1 mr-3",
    onClick: newPertanyaan
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Jawaban"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-success ml-1",
    onClick: newJawaban
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, values.pertanyaans && values.pertanyaans.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, values.pertanyaans.map(function (pertanyaan, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      draggable: "true",
      onDragStart: handleDragStart({
        id: i
      }),
      className: "float-right fas fa-question-circle listq-".concat(i)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: i,
      value: pertanyaan,
      className: "form-control m-0",
      onChange: handlePertanyaan
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      value: pertanyaan,
      onClick: delPertanyaan,
      className: "btn btn-xs btn-outline-danger"
    }, "\xD7"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2 m-0"
  }, values.kunci && values.kunci.constructor === Array && values.kunci.map(function (line, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lineto__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: i,
      from: "listq-".concat(line.q),
      to: "lista-".concat(line.a)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, values.jawabans && values.jawabans.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, values.jawabans.map(function (jawaban, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: 'a' + i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        listStyle: 'none'
      }
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: i,
      value: jawaban,
      className: "form-control m-0",
      onChange: handleJawaban
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      value: jawaban,
      onClick: delJawaban,
      className: "float-right btn btn-xs btn-outline-danger mt-1"
    }, "\xD7"))));
  })))));
};

var IsianForm = function IsianForm(props) {
  var values = props.values,
      handleChange = props.handleChange,
      setValues = props.setValues;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (values.kunci === undefined) setValues(_objectSpread(_objectSpread({}, values), {}, {
      kunci: []
    }));
  }, []);

  var handleText = function handleText(e) {
    var match = e.target.value.match(/\[\[.*?\]\]/g);
    var kunci = match ? match.reduce(function (filtered, s) {
      if (s.replace(/\[|]/g, '') != "") filtered.push(s.replace(/\[|]/g, ''));
      return filtered;
    }, []) : [];
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      q: e.target.value,
      kunci: kunci
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-10 offset-md-2 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 mb-2 bg-info text-white"
  }, "Isikan jawaban didalam tanda [[]]. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Contoh: Ibu kota Indonesia adalah [[Jakarta]]."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pertanyaan -", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Jawaban"),
    formW: "10",
    name: "q",
    value: values.q,
    placeholder: values.aType == 1 ? "isikan pertanyaan" : "isikan pertintah/petunjuk mengerjakan",
    handleChange: handleText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-10 offset-md-2 col-12"
  }, values.kunci && values.kunci.map(function (kunci, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i,
      className: "badge badge-primary mr-1",
      style: {
        fontSize: '1rem'
      }
    }, kunci);
  }))));
};

var EssayForm = function EssayForm(props) {
  var values = props.values,
      handleChange = props.handleChange,
      setValues = props.setValues;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (values.kunci === undefined) setValues(_objectSpread(_objectSpread({}, values), {}, {
      kunci: ""
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    label: "Pertanyaan",
    formW: "10",
    name: "q",
    value: values.q,
    placeholder: "isikan pertanyaan",
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_5__["TextAreaForm"], {
    label: "Jawaban",
    formW: "10",
    name: "kunci",
    value: values.kunci,
    placeholder: "Isikan kunci jawaban",
    handleChange: handleChange
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(SoalForm));

/***/ }),

/***/ "./resources/js/components/soal/SoalList.js":
/*!**************************************************!*\
  !*** ./resources/js/components/soal/SoalList.js ***!
  \**************************************************/
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



function SoalList(props) {
  var soals = props.soals,
      from = props.from,
      loading = props.loading,
      setAction = props.setAction,
      _props$action = props.action,
      action = _props$action === void 0 ? "default" : _props$action,
      select = props.select,
      showType = props.showType;
  var no = from | 0;
  var jenis = {
    1: 'pilihan ganda',
    2: 'benar/salah',
    3: 'menjodohkan',
    4: 'isian singkat',
    5: 'essay'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, soals.map(function (soal, key) {
    soal.jenis = jenis[soal.type];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      soal: soal,
      key: key,
      no: no++,
      action: action,
      select: select,
      setAction: setAction,
      showType: showType
    });
  }), soals.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Belum ada data soal")), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }));
}

var Item = function Item(props) {
  var soal = props.soal,
      no = props.no,
      action = props.action,
      select = props.select,
      setAction = props.setAction,
      showType = props.showType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item p-1",
    style: {
      backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, no, " . "), showType && "[".concat(soal.jenis, "]"), " ", soal.kode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "[", soal.kode, "]"), " ", JSON.parse(soal.pertanyaan).q, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, action === "default" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-warning ml-1",
    value: "soalUpdate-".concat(soal.id),
    onClick: setAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      display: 'none'
    },
    className: "btn btn-xs btn-danger ml-1",
    value: "soalDelete-".concat(soal.id),
    onClick: setAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-trash"
  }))), action === "select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "select",
    className: "custom-cb",
    value: soal.id,
    type: "checkbox",
    onChange: select,
    onClick: function onClick() {
      setSelected(!selected);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoalList);

/***/ }),

/***/ "./resources/js/components/soal/SoalSearch.js":
/*!****************************************************!*\
  !*** ./resources/js/components/soal/SoalSearch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SoalSearch(props) {
  var setSearch = props.setSearch,
      defaultValues = props.defaultValues;

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit),
      values = _useForm.values,
      handleChange = _useForm.handleChange,
      setValues = _useForm.setValues;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (defaultValues.pertanyaan || defaultValues.kode || defaultValues.type) setValues(_objectSpread({}, defaultValues));
  }, []);

  var submit = function submit(e) {
    e.preventDefault();
    setSearch({
      soal: values
    });
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
    placeholder: "pertanyaan",
    name: "pertanyaan",
    value: values.pertanyaan || '',
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
    value: values.type || '',
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "- Semua -"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "Pilihan Ganda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "2"
  }, "Benar/Salah"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "3"
  }, "Menjodohkan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "4"
  }, "Isian Singkat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "5"
  }, "Essay"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (SoalSearch);

/***/ })

}]);