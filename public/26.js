(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/components/mapel/MapelPesertaCard.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/mapel/MapelPesertaCard.js ***!
  \***********************************************************/
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
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var MapelPesertaCard = function MapelPesertaCard(props) {
  var id = props.id,
      notif = props.notif,
      groups = props.groups;
  var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
  var fields = {
    dataId: '',
    muridId: '',
    nama: '',
    mapelId: id,
    currentGroup: '',
    group: ''
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(movePeserta, fields),
      values = _useForm.values,
      setValues = _useForm.setValues,
      handleChange = _useForm.handleChange,
      getErrors = _useForm.getErrors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      pesertas = _useState2[0],
      setPesertas = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      formOpen = _useState6[0],
      setFormOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(groups),
      _useState8 = _slicedToArray(_useState7, 2),
      filteredGroups = _useState8[0],
      setFilteredGroups = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedGroup = _useState10[0],
      setSelectedGroup = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPeserta();
  }, [selectedGroup]);

  var getPeserta = function getPeserta() {
    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/materi/peserta/' + id, {
      params: {
        group: selectedGroup
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      setPesertas(res.data.data);
    })["catch"](function (err) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));
    });
  };

  var movePeserta = function movePeserta(e) {
    e.preventDefault();

    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/mov-siswa', values, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "".concat(values.nama, " berhasil dipindahkan")
      }));
      getPeserta();
      closeAndReset();
    })["catch"](function (err) {
      setLoading(false);

      if (err.response) {
        if (err.response.request.status === 422) notif(getErrors(err.response.data.errors));else notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
          text: JSON.stringify(err.message),
          success: false
        }));
      } else notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));

      closeAndReset();
    });
  };

  var openMoveForm = function openMoveForm(id, muridId, nama, kelompok) {
    var fg = groups.filter(function (g) {
      return g.id != (kelompok ? kelompok : 'umum');
    });
    setFilteredGroups(fg);
    setValues({
      dataId: id,
      muridId: muridId,
      nama: nama,
      mapelId: id,
      currentGroup: kelompok,
      group: ''
    });
    setFormOpen(true);
  };

  var closeAndReset = function closeAndReset(e) {
    setValues(_objectSpread({}, fields));
    setFormOpen(false);
  };

  var delPeserta = function delPeserta(id, nama) {
    if (!confirm("hapus ".concat(nama))) return;

    if (!token) {
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "mohon login ulang",
        success: false
      }));
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/rem-siswa/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: "".concat(nama, " telah dikeluarkan")
      }));
      getPeserta();
    })["catch"](function (err) {
      setLoading(false);
      notif( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_5__["NotifMessage"], {
        text: JSON.stringify(err.message),
        success: false
      }));
    });
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
  }, "Peserta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "float-right",
    href: 'api/excel-mapel-siswa/' + id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-outline-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-file-excel"
  }), " Download"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["SelectForm"], {
    formW: "2",
    label: "kelas / kelompok",
    options: groups,
    placeholder: "-",
    value: selectedGroup,
    handleChange: function handleChange(e) {
      setSelectedGroup(e.currentTarget.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, pesertas.length, " Siswa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, pesertas.map(function (peserta) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item p-1 pl-2",
      key: peserta.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, peserta.user.name), " (uid: ", peserta.user_id, ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ml-2 btn btn-xxs btn-outline-info",
      value: peserta.id,
      onClick: function onClick() {
        return openMoveForm(peserta.id, peserta.user.id, peserta.user.name, peserta.group);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-users"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ml-2 btn btn-xxs btn-outline-danger",
      value: peserta.id,
      onClick: function onClick() {
        return delPeserta(peserta.id, peserta.user.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), selectedGroup == "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "kelompok ", peserta.group ? peserta.group : 'umum'));
  }))))), formOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    onSubmit: movePeserta,
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
  }, "Pindahkan ", values.nama, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, values.currentGroup), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["SelectForm"], {
    labelW: "3",
    name: "group",
    value: values.group,
    form: "form-1",
    label: "kelompok / kelas",
    placeholder: "pilih",
    options: filteredGroups,
    handleChange: handleChange
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    form: "form-1",
    className: "btn btn-sm btn-success",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), ' ', "Pindahkan", ' ', loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-spinner fa-spin"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(MapelPesertaCard));

/***/ }),

/***/ "./resources/js/components/pengajar/MapelSetting.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/pengajar/MapelSetting.js ***!
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
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _mapel_MapelDetailCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapel/MapelDetailCard */ "./resources/js/components/mapel/MapelDetailCard.js");
/* harmony import */ var _mapel_MapelMateriCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapel/MapelMateriCard */ "./resources/js/components/mapel/MapelMateriCard.js");
/* harmony import */ var _mapel_MapelPesertaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mapel/MapelPesertaCard */ "./resources/js/components/mapel/MapelPesertaCard.js");
/* harmony import */ var _mapel_MapelKuisCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapel/MapelKuisCard */ "./resources/js/components/mapel/MapelKuisCard.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__);
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










var MapelSetting = /*#__PURE__*/function (_React$Component) {
  _inherits(MapelSetting, _React$Component);

  var _super = _createSuper(MapelSetting);

  function MapelSetting(props) {
    var _this;

    _classCallCheck(this, MapelSetting);

    _this = _super.call(this, props);

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

    _defineProperty(_assertThisInitialized(_this), "setAction", function (e) {
      if (e) {
        e.preventDefault();
        var action = e.currentTarget.value.split('-')[0];
        var message = e.currentTarget.value.split('-')[1];

        _this.setState({
          action: action,
          message: message ? message : ''
        });
      } else _this.setState({
        action: '',
        message: ''
      });
    });

    _this.state = {
      action: 'materi',
      id: props.match.params.mapelId,
      mapel: {},
      materis: [],
      pesertas: [],
      fetch: false,
      message: _this.props.location.state ? _this.props.location.state.message : ''
    };
    return _this;
  }

  _createClass(MapelSetting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        this.props.logOut('mapel', true);
        return;
      }

      this.setState({
        fetch: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/mapel/' + this.state.id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this2.setState({
          fetch: false,
          mapel: res.data.data
        });
      })["catch"](function (err) {
        console.log(err);

        _this2.notif(JSON.stringify(err.message));

        _this2.setState({
          fetch: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var groups = this.state.mapel.groups ? JSON.parse(this.state.mapel.groups).map(function (g) {
        return {
          id: g.nama,
          nama: g.nama
        };
      }) : [];
      if (groups.length > 0) groups.push({
        id: 'umum',
        nama: 'Umum'
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelDetailCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        mapel: this.state.mapel
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 mt-3"
      }, this.state.message !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        message: this.state.message,
        clickHandle: this.notif
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 mt-1 mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === 'materi' && 'active'),
        onClick: this.setAction,
        value: "materi"
      }, "Materi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === 'peserta' && 'active'),
        onClick: this.setAction,
        value: "peserta"
      }, "Siswa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === 'quis' && 'active'),
        onClick: this.setAction,
        value: "quis"
      }, "Ujian/Kuis")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, function () {
        switch (_this3.state.action) {
          case "materi":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelMateriCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              notif: _this3.notif,
              id: _this3.state.id
            });

          case "peserta":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelPesertaCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
              notif: _this3.notif,
              id: _this3.state.id,
              groups: groups
            });

          case "quis":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelKuisCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
              notif: _this3.notif,
              id: _this3.state.id,
              groups: groups
            });

          default:
            return "nonono";
        }
      }()));
    }
  }]);

  return MapelSetting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__["hot"])(MapelSetting));

/***/ })

}]);