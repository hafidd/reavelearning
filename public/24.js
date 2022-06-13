(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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

/***/ "./resources/js/components/materi/ViewMateri.js":
/*!******************************************************!*\
  !*** ./resources/js/components/materi/ViewMateri.js ***!
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
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__);
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









var ViewMateri = /*#__PURE__*/function (_React$Component) {
  _inherits(ViewMateri, _React$Component);

  var _super = _createSuper(ViewMateri);

  function ViewMateri(props) {
    var _this;

    _classCallCheck(this, ViewMateri);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadMateri", function () {
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        _this.props.logOut('mapel', true);

        return;
      }

      _this.setState({
        fetch: true
      });

      var ep = !_this.state.isSiswa ? 'api/materi/' : 'api/materi-siswa/';
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(ep + _this.state.materiId, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this.setState({
          fetch: false,
          materi: res.data.data,
          type: JSON.parse(res.data.data.isi).type
        });
      })["catch"](function (err) {
        console.log(err); //            this.notif(JSON.stringify(err.message))

        _this.setState({
          fetch: false
        });
      });
    });

    _this.state = {
      mapelId: props.match.params.mapelId,
      materiId: props.match.params.materiId,
      mapel: {},
      materi: {},
      type: '',
      fetch: false,
      message: _this.props.location.state ? _this.props.location.state.message : '',
      isSiswa: _this.props.location.state ? _this.props.location.state.isSiswa : false
    };
    return _this;
  }

  _createClass(ViewMateri, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadMateri();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_4__["PageTitle"], {
        title: this.state.materi.judul
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "m-1"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, this.state.type == "text" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MateriText, {
        materi: this.state.materi
      }), this.state.type == "video" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MateriVideo, {
        materi: this.state.materi
      }))));
    }
  }]);

  return ViewMateri;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MateriText = function MateriText(props) {
  var materi = props.materi;
  var content = materi.isi ? JSON.parse(materi.isi) : {
    isi: ''
  };
  var modules = {
    toolbar: false
  };
  var formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'image', 'align'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "ql-snow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "ql-editor"
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(content.isi)));
};

var MateriVideo = function MateriVideo(props) {
  var materi = props.materi;
  var content = materi.isi ? JSON.parse(materi.isi) : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
    url: "api/get-materi-file-test/video/".concat(content.name),
    playing: true,
    controls: true,
    height: '65vh',
    width: '100%'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, content.desc)));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__["hot"])(ViewMateri));

/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);