(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/components/kuis/KuisHasilModal.js":
/*!********************************************************!*\
  !*** ./resources/js/components/kuis/KuisHasilModal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KuisJawabForm */ "./resources/js/components/kuis/KuisJawabForm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var KuisHasilModal = function KuisHasilModal(props) {
  var show = props.show,
      toggle = props.toggle,
      hasil = props.hasil,
      _props$nilai = props.nilai,
      nilai = _props$nilai === void 0 ? true : _props$nilai;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      tambalan = _useState2[0],
      setTambalan = _useState2[1];

  var nomor = 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    id: "modal",
    style: {
      display: show ? 'block' : 'none',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-xl",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, nilai ? "Hasil" : "Jawaban"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, hasil === null ? 'Anda belum/tidak mengikuti ujian ini!' : !hasil ? 'Hasil ujian belum diterbitkan' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, nilai && "Nilai : ".concat(hasil.hasil && parseFloat(hasil.hasil.points) / parseFloat(hasil.hasil.max_points) * 100), nilai && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), hasil.hasil && hasil.hasil.details.map(function (detail) {
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
    }, data.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__["PilihanGanda"], {
      soalId: data.id,
      pertanyaan: pertanyaan,
      jawaban: JSON.parse(detail.jawaban),
      kunci: jawaban,
      setJawaban: function setJawaban() {
        return false;
      }
    }), data.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__["BenarSalah"], {
      soalId: data.id,
      pertanyaan: pertanyaan,
      jawaban: JSON.parse(detail.jawaban),
      kunci: jawaban,
      setJawaban: function setJawaban() {
        return false;
      }
    }), data.type == 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__["Menjodohkan"], {
      soalId: data.id,
      pertanyaan: pertanyaan,
      jawaban: detail.jawaban ? JSON.parse(detail.jawaban) : [],
      kunci: jawaban,
      setJawaban: function setJawaban() {
        return false;
      },
      idkWhy: function idkWhy() {
        console.log(tambalan);
        setTambalan(!tambalan);
      }
    }), data.type == 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__["Isian"], {
      soalId: data.id,
      pertanyaan: pertanyaan,
      jawaban: detail.jawaban ? JSON.parse(detail.jawaban) : [],
      kunci: jawaban,
      setJawaban: function setJawaban() {
        return false;
      }
    }), data.type == 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisJawabForm__WEBPACK_IMPORTED_MODULE_1__["Essay"], {
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
      className: "fas fa-check text-success fa-2x"
    }) : detail.point == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times text-danger fa-2x"
    }) : detail.point == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-question text-warning fa-2x"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-exclamation text-info fa-2x"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      style: {
        display: nilai ? "block" : "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-primary"
    }, "Kunci :  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "max point: ", detail.max_point), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-inline float-right"
    }, "POINT : ", detail.point)))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (KuisHasilModal);

/***/ }),

/***/ "./resources/js/components/siswa/MapelSiswaDetail.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/siswa/MapelSiswaDetail.js ***!
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
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _mapel_MapelDetailCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapel/MapelDetailCard */ "./resources/js/components/mapel/MapelDetailCard.js");
/* harmony import */ var _mapel_MapelMateriCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapel/MapelMateriCard */ "./resources/js/components/mapel/MapelMateriCard.js");
/* harmony import */ var _mapel_MapelKuisCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mapel/MapelKuisCard */ "./resources/js/components/mapel/MapelKuisCard.js");
/* harmony import */ var _kuis_KuisHasilModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kuis/KuisHasilModal */ "./resources/js/components/kuis/KuisHasilModal.js");
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










var MapelSiswaDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(MapelSiswaDetail, _React$Component);

  var _super = _createSuper(MapelSiswaDetail);

  function MapelSiswaDetail(props) {
    var _this;

    _classCallCheck(this, MapelSiswaDetail);

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

    _defineProperty(_assertThisInitialized(_this), "toggleModal", function () {
      _this.setState({
        hasil: false,
        modal: !_this.state.modal
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setHasil", function (data) {
      console.log(data);

      _this.toggleModal();

      _this.setState({
        hasil: data
      });
    });

    _this.state = {
      action: 'materi',
      id: props.match.params.mapelId,
      mapel: {},
      materis: [],
      pesertas: [],
      modal: false,
      hasil: false,
      fetch: false,
      message: _this.props.location.state ? _this.props.location.state.message : ''
    };
    return _this;
  }

  _createClass(MapelSiswaDetail, [{
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/mapel-detail/' + this.state.id, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        className: "nav-link ".concat(this.state.action === 'quis' && 'active'),
        onClick: this.setAction,
        value: "quis"
      }, "Ujian/Kuis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav-link ".concat(this.state.action === 'hasil' && 'active'),
        onClick: this.setAction,
        value: "hasil"
      }, "Hasil")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, function () {
        switch (_this3.state.action) {
          case "materi":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelMateriCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              notif: _this3.notif,
              id: _this3.state.id,
              isSiswa: true
            });

          case "quis":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelKuisCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
              notif: _this3.notif,
              id: _this3.state.id,
              groups: groups,
              isSiswa: true
            });

          case "hasil":
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mapel_MapelKuisCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
              notif: _this3.notif,
              id: _this3.state.id,
              groups: groups,
              isSiswa: true,
              isHasil: true,
              setHasil: _this3.setHasil
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kuis_KuisHasilModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
              show: _this3.state.modal,
              toggle: _this3.toggleModal,
              hasil: _this3.state.hasil
            }));

          default:
            return "nonono";
        }
      }())));
    }
  }]);

  return MapelSiswaDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__["hot"])(MapelSiswaDetail));

/***/ })

}]);