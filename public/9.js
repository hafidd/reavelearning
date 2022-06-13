(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./resources/js/components/mapel/MapelDetailCard.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mapel/MapelDetailCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-tooltip */ "./node_modules/react-simple-tooltip/es/index.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");




var MapelDetailCard = function MapelDetailCard(props) {
  var mapel = props.mapel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mt-2 ml-",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body row p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: 0,
      height: 150
    }
  }, mapel.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/mapel/".concat(mapel.id, ".jpg"),
    alt: "error",
    style: {
      width: '100%',
      height: '100%'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_2__["DefaultImage"], {
    text: mapel.nama
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 8,
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      color: 'white',
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, mapel.kode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 8,
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      color: 'white',
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, mapel.akses === "private" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-lock fa-2x"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8 col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "card-title"
  }, mapel.nama), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, mapel.pengajar, " | kategori: ", mapel.kategori)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text"
  }, mapel.keterangan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapelDetailCard);

/***/ }),

/***/ "./resources/js/components/mapel/MapelKuisCard.js":
/*!********************************************************!*\
  !*** ./resources/js/components/mapel/MapelKuisCard.js ***!
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
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var _kuis_KuisList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kuis/KuisList */ "./resources/js/components/kuis/KuisList.js");
/* harmony import */ var _kuis_KuisSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../kuis/KuisSearch */ "./resources/js/components/kuis/KuisSearch.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-compound-timer */ "./node_modules/react-compound-timer/build/index.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer__WEBPACK_IMPORTED_MODULE_11__);
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















var MapelKuisCard = function MapelKuisCard(props) {
  var id = props.id,
      notif = props.notif,
      groups = props.groups,
      _props$isSiswa = props.isSiswa,
      isSiswa = _props$isSiswa === void 0 ? false : _props$isSiswa,
      _props$isHasil = props.isHasil,
      isHasil = _props$isHasil === void 0 ? false : _props$isHasil,
      _props$setHasil = props.setHasil,
      setHasil = _props$setHasil === void 0 ? function () {} : _props$setHasil;
  var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
  var fields = {
    dataId: '',
    type: '',
    mulai: '',
    waktu: '',
    start: '',
    published: false
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(applySettings, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      handleChange = _useForm.handleChange,
      getErrors = _useForm.getErrors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      kuises = _useState2[0],
      setKuises = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      kuis = _useState4[0],
      setKuis = _useState4[1]; // pilihan kuis


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    kuises: [],
    pageData: {},
    search: {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      kuisList = _useState6[0],
      setKuisList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      formOpen = _useState10[0],
      setFormOpen = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedGroup = _useState12[0],
      setSelectedGroup = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedKuises = _useState14[0],
      setSelectedKuises = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getKuis();
  }, [selectedGroup, isHasil]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isSiswa) getKuisList();
  }, [kuisList.search]);

  function setSearch() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setKuisList(_objectSpread(_objectSpread({}, kuisList), {}, {
      search: values
    }));
  }

  var getKuis = function getKuis() {
    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    var ep = !isSiswa ? '/api/materi/kuis/' : !isHasil ? '/api/materi-siswa/kuis/' : '/api/kuis-selesai/';
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(ep + id, {
      params: {
        group: selectedGroup
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      setKuises(res.data.data);
    })["catch"](function (err) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));
    });
  };

  var getKuisList = function getKuisList() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/kuis', {
      params: kuisList.search.kuis,
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setKuisList(_objectSpread(_objectSpread({}, kuisList), {}, {
        kuises: res.data.data
      }));
    })["catch"](function (err) {
      notif(JSON.stringify(err.message));
    });
  };

  var getDetail = function getDetail(id) {
    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/materi/kuis-detail/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      setKuis(res.data.data);
      var settings = JSON.parse(res.data.data.settings);
      var setArr = {
        type: settings.type,
        keterangan: settings.keterangan,
        waktu: settings.waktu,
        mulai: settings.mulai,
        start: settings.start ? new Date(settings.start) : new Date(),
        published: res.data.data.published
      };
      setValues(_objectSpread(_objectSpread(_objectSpread({}, values), setArr), {}, {
        dataId: res.data.data.id
      }));
    })["catch"](function (err) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));
    });
  };

  var openSettingForm = function openSettingForm(id) {
    getDetail(id);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      dataId: id
    }));
    setFormOpen(true);
  };

  var openForm = function openForm() {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      materiId: id
    }));
    setFormOpen(true);
  };

  function submit() {
    if (!token) {
      notif("mohon login ulang");
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/add-kuis/', {
      mapelId: id,
      group: values.group,
      kuises: selectedKuises
    }, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "berhasil ditambahkan"
      }));
      setLoading(false);
      closeAndReset();
      getKuis();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          notif(getErrors(err.response.data.errors));
        } else if (err.response.request.status === 401) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
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

  function applySettings(e) {
    e.preventDefault();

    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/materi/kuis/' + values.dataId, _objectSpread({}, values), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      notif('sukses');
      closeAndReset();
      getKuis();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          console.log(getErrors(err.response.data.errors));
          notif(getErrors(err.response.data.errors));
        }
      }

      closeAndReset();
    });
  }

  function startKuis(dataId) {
    if (!confirm('mulai kuis ini')) return;

    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].cek()) {
      notif('mohon login ulang');
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/start-kuis/' + dataId, _objectSpread({}, values), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      notif('sukses');
      closeAndReset();
      getKuis();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          console.log(getErrors(err.response.data.errors));
          notif(getErrors(err.response.data.errors));
        }
      }

      closeAndReset();
    });
  }

  var closeAndReset = function closeAndReset(e) {
    setValues(_objectSpread({}, fields));
    setSelectedKuises([]);
    setFormOpen(false);
  };

  var delKuis = function delKuis(id, judul) {
    if (!confirm("hapus ".concat(judul))) return;

    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/rem-kuis/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "".concat(judul, " telah dihapus")
      }));
      getPeserta();
    })["catch"](function (err) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));
    });
  };

  var handleSelectKuis = function handleSelectKuis(e) {
    e.persist();

    if (e.target.checked) {
      setSelectedKuises([].concat(_toConsumableArray(selectedKuises), [e.target.value]));
      console.log([].concat(_toConsumableArray(selectedKuises), [e.target.value]));
    } else {
      var updated = selectedKuises.filter(function (mat) {
        if (e.target.value !== mat) return mat;
      });
      setSelectedKuises(updated);
      console.log(updated);
    }
  };

  var handleCheck = function handleCheck(e) {
    var checked = e.target.checked;
    console.log(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, e.target.name, checked)));
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, e.target.name, checked)));
  };

  function bedaWaktu(kuisStart, time) {
    var now = new Date();
    var startDate = new Date(kuisStart);
    var start = startDate.getTime() - now.getTime();
    var end = start + time * 60000;
    var status = start <= 0 && end > 0 ? 2 : end < 0 ? 3 : 1;
    return {
      start: start,
      end: end,
      status: status
    };
  }

  function mulaiKuis(id) {
    if (isSiswa) {
      if (confirm("Mulai Kuis?")) {
        props.history.push({
          pathname: '/mulai-kuis/' + id
        });
      }
    }
  }

  function hasilKuis(id) {
    console.log(id);

    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/detail-hasil-siswa/' + id, {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
      }
    }).then(function (res) {
      setHasil(res.data.data);
    })["catch"](function () {
      setHasil(null);
    });
  }

  function handleDateChange(date) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      start: date
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      width: "100%",
      borderTop: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body row p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "card-title"
  }, "Kuis"), !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xxs btn-primary ml-1",
    value: 0,
    onClick: openForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }))), !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["SelectForm"], {
    formW: "2",
    placeholder: " - ",
    label: "kelas / kelompok",
    options: groups,
    value: selectedGroup,
    handleChange: function handleChange(e) {
      setSelectedGroup(e.currentTarget.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, kuises.map(function (kuis) {
    var settings = JSON.parse(kuis.settings);
    var ms = bedaWaktu(settings.start, settings.waktu);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item p-1 pl-2",
      key: kuis.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, kuis.kuis.judul), !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ml-2 btn btn-xxs btn-outline-info",
      value: kuis.id,
      onClick: function onClick() {
        return openSettingForm(kuis.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-wrench"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: {
        display: 'none'
      },
      className: "ml-2 btn btn-xxs btn-outline-danger",
      value: kuis.id,
      onClick: function onClick() {
        return delKuis(kuis.id, kuis.kuis.judul);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      style: {}
    }, !isSiswa && selectedGroup == "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, "kelompok: ".concat(kuis.group ? kuis.group : 'umum')), settings.keterangan && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, "keterangan: ".concat(settings.keterangan)), settings.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, "waktu: ".concat(settings.waktu, " menit")), settings.mulai == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, "mulai: ".concat(settings.start)), !isSiswa && kuis.published && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-success mr-1"
    }, "published"), settings.type == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-info mr-1"
    }, "latihan") : settings.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-warning mr-1"
    }, "ujian"), settings.mulai == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-secondary"
    }, "mulai manual") : settings.mulai == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-primary mr-1"
    }, "terjadwal"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4"
    }, !isSiswa && kuis.published && settings.type == 2 && settings.mulai == 1 && !settings.started && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return startKuis(kuis.id);
      },
      className: "btn btn-outline-success float-right mr-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-play"
    })), isSiswa && !isHasil && (settings.type == 1 || settings.type == 2 && (settings.mulai == 2 || settings.mulai == 1 && settings.started)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-success float-right mr-1",
      onClick: function onClick() {
        return mulaiKuis(kuis.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-play"
    })), isSiswa && isHasil && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-success float-right mr-1",
      onClick: function onClick() {
        return hasilKuis(kuis.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-table"
    })), kuis.published && settings.type == 2 && (settings.mulai == 2 || settings.mulai == 1 && settings.started) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a, {
      initialTime: ms.start,
      direction: "backward",
      checkpoints: [{
        time: 0,
        callback: function callback() {
          return getKuis();
        }
      }]
    }, function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          display: ms.status == 1 ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Mulai : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Days, null), "hari ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Hours, null), "jam", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Minutes, null), "menit", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          fontSize: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Seconds, null)));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a, {
      initialTime: ms.end,
      direction: "backward",
      checkpoints: [{
        time: 0,
        callback: function callback() {
          return getKuis();
        }
      }]
    }, function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          display: ms.status == 2 ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Selesai : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Hours, null), "jam", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Minutes, null), "menit", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          fontSize: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_11___default.a.Seconds, null))), !isSiswa && ms.status != 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/hasil-kuis/".concat(kuis.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-primary float-right mr-1"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-table"
      }))));
    })))));
  }))))), formOpen && values.materiId && !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    onSubmit: submit,
    id: "form-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: closeAndReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 pr-0"
  }, "Tambah Kuis", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["SelectForm"], {
    label: "Kelompok",
    name: "group",
    options: groups,
    value: values.group,
    placeholder: " - PILIH -",
    handleChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisSearch__WEBPACK_IMPORTED_MODULE_10__["default"], {
    kuises: kuisList.kuises,
    setSearch: setSearch,
    defaultValues: {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    kuises: kuisList.kuises,
    action: "select",
    select: handleSelectKuis
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check"
  }), ' ', "Tambahkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  })))))), formOpen && values.dataId && !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    onSubmit: applySettings,
    id: "form-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: closeAndReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 pr-0"
  }, "Pengaturan", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, kuis.kuis && kuis.kuis.judul), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["TextForm"], {
    label: "Keterangan",
    name: "keterangan",
    placeholder: "keterangan kuis",
    value: values.keterangan,
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["SelectForm"], {
    label: "Jenis",
    name: "type",
    options: [{
      id: '',
      nama: '-'
    }, {
      id: 1,
      nama: 'Latihan'
    }, {
      id: 2,
      nama: 'Ujian'
    }],
    value: values.type,
    handleChange: handleChange
  }), values.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["TextForm"], {
    label: "Waktu",
    name: "waktu",
    formW: "2",
    placeholder: "menit",
    value: values.waktu,
    handleChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["RadioForm"], {
    label: "Mulai Kuis",
    name: "mulai",
    options: [[1, "Manual"], [2, "Terjadwal"]],
    value: values.mulai,
    handleChange: handleChange
  }), values.mulai == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2"
  }, "Waktu Mulai"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    selected: values.start,
    onChange: handleDateChange,
    showTimeSelect: true,
    timeFormat: "HH:mm",
    timeIntervals: 15,
    dateFormat: "d MMMM, yyyy HH:mm",
    timeCaption: "waktu",
    className: "form-control"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ro2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 offset-md-2 p-0 pl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "published",
    className: "custom-cb",
    onChange: handleCheck,
    checked: values.published ? true : false
  }), "  Terbitkan")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check"
  }), ' ', "Terapkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(MapelKuisCard));

/***/ }),

/***/ "./resources/js/components/mapel/MapelMateriCard.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mapel/MapelMateriCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Array */ "./resources/js/utils/Array.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var _pengajar_MateriList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pengajar/MateriList */ "./resources/js/components/pengajar/MateriList.js");
/* harmony import */ var _pengajar_MateriSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pengajar/MateriSearch */ "./resources/js/components/pengajar/MateriSearch.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _html_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../html/Pagination */ "./resources/js/components/html/Pagination.js");
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















var MapelMateriCard = function MapelMateriCard(props) {
  var id = props.id,
      notif = props.notif,
      _props$isSiswa = props.isSiswa,
      isSiswa = _props$isSiswa === void 0 ? false : _props$isSiswa;
  var token = _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken();
  var fields = {
    mapel_id: id,
    type: '1',
    dirName: '',
    parent: '',
    materi: ''
  }; //data materi

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      materis = _useState2[0],
      setMateris = _useState2[1]; //pilihan materi


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    materis: [],
    pageData: {},
    search: {},
    page: 1
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      materiList = _useState4[0],
      setMateriList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedMateris = _useState6[0],
      setSelectedMateris = _useState6[1];

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(submit, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      getErrors = _useForm.getErrors,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      formOpen = _useState10[0],
      setFormOpen = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadMateri();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isSiswa) getMateriList();
  }, [materiList.search, materiList.page]);

  var loadMateri = function loadMateri() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    var ep = !isSiswa ? '/api/materi/mapel/' : '/api/materi-siswa/mapel/';
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(ep + id, {
      params: {},
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()
      }
    }).then(function (res) {
      setLoading(false);
      setMateris(Object(_utils_Array__WEBPACK_IMPORTED_MODULE_5__["flatToHierarchy"])(res.data.data));
    })["catch"](function (err) {
      setLoading(false);
      notif(JSON.stringify(err.message));
    });
  };

  var getMateriList = function getMateriList() {
    if (!_utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/materi?page=' + materiList.page, {
      params: materiList.search,
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()
      }
    }).then(function (res) {
      //console.log(res.data)
      setMateriList(_objectSpread(_objectSpread({}, materiList), {}, {
        materis: res.data.data,
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

  var setSearch = function setSearch() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setMateriList(_objectSpread(_objectSpread({}, materiList), {}, {
      search: values
    }));
  };

  function submit() {
    if (!token) {
      notif("mohon login ulang");
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/add-materi/', _objectSpread(_objectSpread({}, values), {}, {
      materis: selectedMateris
    }), {
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()
      }
    }).then(function (res) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "berhasil ditambahkan"
      }));
      setLoading(false);
      loadMateri();
      closeAndReset();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          notif(getErrors(err.response.data.errors));
        } else if (err.response.request.status === 401) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
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

  var openForm = function openForm(e) {
    var pid = e.currentTarget.value;
    setFormOpen(true);
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        parent: pid
      });
    });
  };

  var closeAndReset = function closeAndReset() {
    setFormOpen(false);
    setValues(fields);
    setMateriList({
      materis: [],
      pageData: {},
      search: {}
    });
    setSelectedMateris([]);
  };

  var delMateri = function delMateri(mid, nama) {
    if (!token) {
      notif("mohon login ulang");
      return;
    }

    if (!confirm("hapus ".concat(nama, "?"))) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]('/api/rem-materi/' + mid, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function () {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
        text: "".concat(nama, " berhasil dihapus")
      }));
      setLoading(false);
      loadMateri();
      closeAndReset();
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
            text: "Kosongkan direktori terlebih dahulu",
            success: false
          }));
        } else if (err.response.request.status === 401) {
          notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["NotifMessage"], {
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

  var handleSelectMateri = function handleSelectMateri(e) {
    e.persist();

    if (e.target.checked) {
      setSelectedMateris([].concat(_toConsumableArray(selectedMateris), [e.target.value]));
      console.log([].concat(_toConsumableArray(selectedMateris), [e.target.value]));
    } else {
      var updated = selectedMateris.filter(function (mat) {
        if (e.target.value !== mat) return mat;
      });
      setSelectedMateris(updated);
      console.log(updated);
    }
  };

  var getIcon = function getIcon(isi) {
    var ar = JSON.parse(isi);
    if (ar.type == 'text') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-book"
    });else if (ar.type == 'video') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-video"
    });else if (ar.type == 'file') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-file"
    });
  };

  var getAction = function getAction(isi, id) {
    var ar = JSON.parse(isi);
    if (ar.type == 'text') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xxs btn-outline-primary",
      onClick: function onClick() {
        return toMateri(id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-expand"
    }));else if (ar.type == 'video') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xxs btn-outline-primary",
      onClick: function onClick() {
        return toMateri(id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-play"
    }));else if (ar.type == 'file') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-xxs btn-outline-primary",
      onClick: function onClick() {
        return downloadFile('api/get-materi-file-test/file/' + ar.name, ar.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-download"
    }));
  };

  function toMateri(materiId) {
    var path = !isSiswa ? "/mapel/".concat(id, "/").concat(materiId) : "/mapel_siswa/".concat(id, "/").concat(materiId);
    props.history.push({
      pathname: path,
      state: {
        isSiswa: isSiswa
      }
    });
  }

  var downloadFile = function downloadFile(link, name) {
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken();

    if (!token) {
      setErrors(['mohon login ulang']);
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(link, {
      responseType: 'arraybuffer',
      headers: {
        Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()
      }
    }).then(function (res) {
      var blob = new Blob([res.data], {
        type: res.headers['content-type']
      });
      file_saver__WEBPACK_IMPORTED_MODULE_11___default.a.saveAs(blob, name);
    })["catch"](function () {
      console.log('err');
    });
  };

  var renderMateri = function renderMateri() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    if (data.length === 0 && root) {
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["List"], {
        width: 300,
        height: 80
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-exclamation"
      }), " Belum ada data");
    } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: root ? "list-group" : ''
    }, data.map(function (materi) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: materi.id,
        className: root ? 'list-group-item p-1' : ''
      }, materi.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-folder"
      }), materi.type == 2 && getIcon(materi.materi.isi), ' ', materi.type == 1 ? materi.nama : materi.materi.judul, ' ', materi.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-2"
      }, getAction(materi.materi.isi, materi.materi.id)), !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, materi.type == 1 && level < 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-dark mr-1",
        value: materi.id,
        onClick: openForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-plus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-xxs btn-outline-danger",
        value: materi.id,
        onClick: function onClick() {
          return delMateri(materi.id, materi.type == 1 ? materi.nama : materi.materi.judul);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times"
      }))), renderMateri(materi.child, false, level + 1));
    }));
  };

  var handlePageClick = function handlePageClick(data) {
    setMateriList(_objectSpread(_objectSpread({}, materiList), {}, {
      page: data.selected + 1
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      width: "100%",
      borderTop: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body row p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "card-title"
  }, "Materi"), !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xxs btn-primary ml-1",
    value: 0,
    onClick: openForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, renderMateri(materis)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mt-5"
  })))), formOpen && !isSiswa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-left",
    style: {
      width: '80%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["RadioForm"], {
    name: "type",
    handleChange: handleChange,
    value: values.type,
    options: [['1', 'Direktori'], ['2', 'Materi']],
    labelClass: "btn btn-primary btn-sm",
    formW: "5",
    labelW: "0",
    form: "form-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: closeAndReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, values.type == '1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["TextForm"], {
    form: "form-1",
    formW: "5",
    labelW: "0",
    placeholder: "Nama Direktori",
    name: "dirName",
    value: values.dirName,
    handleChange: handleChange
  }), values.type == '2' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pengajar_MateriSearch__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loadData: setSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pengajar_MateriList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    materis: materiList.materis,
    from: materiList.pageData.from,
    action: "select",
    select: handleSelectMateri
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    pageData: materiList.pageData,
    page: materiList.page,
    handlePageClick: handlePageClick
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-primary",
    onClick: function onClick() {
      if (!confirm('Buat materi baru?')) return;
      props.history.push("/materi/mapel/".concat(id, "/").concat(values.parent));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), " Materi Baru"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "sumbit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), ' ', "Tambahkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(MapelMateriCard));

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