(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./resources/js/components/kuis/MulaiKuis.js":
/*!***************************************************!*\
  !*** ./resources/js/components/kuis/MulaiKuis.js ***!
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Array */ "./resources/js/utils/Array.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-compound-timer */ "./node_modules/react-compound-timer/build/index.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lineto */ "./node_modules/react-lineto/dist/react-lineto.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/Template */ "./resources/js/components/html/Template.js");
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var _KuisHasilModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KuisHasilModal */ "./resources/js/components/kuis/KuisHasilModal.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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












var MulaiKuis = /*#__PURE__*/function (_React$Component) {
  _inherits(MulaiKuis, _React$Component);

  var _super = _createSuper(MulaiKuis);

  function MulaiKuis(props) {
    var _this;

    _classCallCheck(this, MulaiKuis);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setJawaban", function (value) {
      var bs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        jawabans: _objectSpread(_objectSpread({}, _this.state.jawabans), value)
      });

      for (var property in value) {
        _this.updateJawaban(property, value[property], bs);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderBab", function (bab) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    });

    _defineProperty(_assertThisInitialized(_this), "showJawaban", function () {
      _this.setState({
        hasilModal: true
      }, function () {
        console.log(_this.state.id);

        if (!_utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) {
          alert('mohon login ulang');
          return;
        }

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/detail-hasil-siswa/' + _this.state.id, {
          headers: {
            Authorization: 'Bearer ' + _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()
          }
        }).then(function (res) {
          _this.setState({
            hasil: res.data.data
          });
        })["catch"](function () {
          _this.setState({
            hasil: null
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pindahBab", function () {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (next) {
        if (_this.state.babIndex + 1 !== _this.state.soals.length) _this.setState({
          babIndex: _this.state.babIndex + 1,
          soalIndex: 0
        });else _this.setState({
          babIndex: 0,
          soalIndex: 0
        });
      } else {
        if (_this.state.babIndex - 1 !== -1) _this.setState({
          babIndex: _this.state.babIndex - 1,
          soalIndex: 0
        });else _this.setState({
          babIndex: _this.state.soals.length - 1,
          soalIndex: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pindahSoal", function () {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (next) {
        if (_this.state.soalIndex + 1 !== _this.state.soals[_this.state.babIndex].child.length) _this.setState({
          soalIndex: _this.state.soalIndex + 1
        });else _this.setState({
          soalIndex: 0
        });
      } else {
        if (_this.state.soalIndex - 1 !== -1) _this.setState({
          soalIndex: _this.state.soalIndex - 1
        });else _this.setState({
          soalIndex: _this.state.soals[_this.state.babIndex].child.length - 1
        });
      }
    });

    _this.state = {
      id: props.match.params.kuisId,
      hasilId: '',
      sisa: 0,
      kuis: {},
      mapel: {},
      settings: {},
      soals: [],
      jawabans: {},
      loading: false,
      hasil: null,
      hasilModal: false,
      babIndex: 0,
      soalIndex: 0,
      mode: 1
    };
    return _this;
  }

  _createClass(MulaiKuis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mulaiKuis();
    }
  }, {
    key: "mulaiKuis",
    value: function mulaiKuis() {
      var _this2 = this;

      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        this.props.logOut('mapel', true);
        return;
      }

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/mulai-kuis', {
        mkId: this.state.id
      }, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        var data = res.data.data;
        var babs = Object(_utils_Array__WEBPACK_IMPORTED_MODULE_4__["flatToHierarchy"])(data.soals);
        var soals = babs.map(function (bab) {
          if (JSON.parse(bab.settings).acakSoal) Object(_utils_Array__WEBPACK_IMPORTED_MODULE_4__["shuffle"])(bab.child);
          return bab;
        }); //console.log(data.jawabans)

        _this2.setState({
          hasilId: data.hasil.id,
          hasil: data.hasil,
          sisa: data.sisa,
          settings: JSON.parse(data.mapel_kuis.settings),
          kuis: data.mapel_kuis.kuis,
          mapel: data.mapel_kuis.mapel,
          soals: soals,
          jawabans: JSON.parse(data.jawabans),
          loading: false
        });
      })["catch"](function (err) {
        //this.setState({ fetch: false })
        //this.props.history.push('/dashboard')
        console.log(err);
      });
    }
  }, {
    key: "updateJawaban",
    value: function updateJawaban(sId, value, bs) {
      var _this3 = this;

      console.log(value);
      var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

      if (!token) {
        this.props.logOut('mapel', true);
        return;
      }

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('api/update-jawaban', {
        hId: this.state.hasilId,
        sId: sId,
        value: value,
        bs: bs
      }, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function (res) {
        _this3.setState({
          loading: false
        });
      })["catch"](function (err) {//this.setState({ fetch: false })
        //this.props.history.goBack()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var nomor = 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          position: "fixed",
          zIndex: 999,
          background: "white",
          width: "95%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["PageTitle"], {
        title: this.state.kuis.judul,
        navs: [{
          show: this.state.settings.type == 1,
          clickHandle: this.showJawaban,
          icon: 'fa-question',
          text: "Jawaban"
        }, {
          show: true,
          clickHandle: function clickHandle() {
            _this4.setState({
              mode: _this4.state.mode == 1 ? 2 : 1
            });
          },
          icon: 'fa-refresh',
          text: "Ubah Tampilan (" + this.state.mode + ")"
        }, {
          show: true,
          clickHandle: function clickHandle() {
            _this4.props.history.goBack();
          },
          icon: 'fa-arrow-left'
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.mapel.nama), this.state.sisa && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_5___default.a, {
        initialTime: this.state.sisa - 10000,
        direction: "backward",
        checkpoints: [{
          time: 0,
          callback: function callback() {
            alert('waktu habis!');

            _this4.props.history.goBack();
          }
        }]
      }, function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            display: _this4.state.settings.type == 2 ? 'block' : 'none'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_5___default.a.Hours, null), "jam", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_5___default.a.Minutes, null), "menit", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
          style: {
            fontSize: 20
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_5___default.a.Seconds, null)));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          marginTop: "100px"
        }
      }, this.state.mode == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), this.state.soals.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-center mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.soals[this.state.babIndex].nama)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.pindahBab(false);
        },
        className: "btn btn-sm btn-primary mr-1"
      }, "\xAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.pindahBab(true);
        },
        className: "btn btn-sm btn-primary mr-1"
      }, "\xBB"), this.state.babIndex + 1, " / ", this.state.soals.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "m-1 mb-0"
      }, JSON.parse(this.state.soals[this.state.babIndex].settings).keterangan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "m-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.pindahSoal(false);
        },
        className: "btn btn-sm btn-outline-primary mr-1"
      }, "\xAB kembali"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.pindahSoal(true);
        },
        className: "btn btn-sm btn-outline-primary mr-1"
      }, "selanjutnya \xBB"), this.state.soalIndex + 1, " / ", this.state.soals[this.state.babIndex].child.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.soalIndex + 1, ". ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: ""
      }, function () {
        var data = _this4.state.soals[_this4.state.babIndex].child[_this4.state.soalIndex].soal;
        var pertanyaan = JSON.parse(data.pertanyaan);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PilihanGanda, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: _this4.state.jawabans[data.id],
          setJawaban: _this4.setJawaban
        }), data.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BenarSalah, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: _this4.state.jawabans[data.id],
          setJawaban: _this4.setJawaban
        }), data.type == 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menjodohkan, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: _this4.state.jawabans[data.id] ? _this4.state.jawabans[data.id] : [],
          setJawaban: _this4.setJawaban
        }), data.type == 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Isian, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: _this4.state.jawabans[data.id] ? _this4.state.jawabans[data.id] : [],
          setJawaban: _this4.setJawaban
        }), data.type == 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Essay, {
          soalId: data.id,
          pertanyaan: pertanyaan,
          jawaban: _this4.state.jawabans[data.id],
          setJawaban: _this4.setJawaban
        }));
      }()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center"
      }, "Daftar BAB/Soal:"), this.state.soals.map(function (bab, bi) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: bab.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, bi == _this4.state.babIndex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, bab.nama)) : bab.nama), bab.child.map(function (soal, si) {
          var data = soal.soal;
          var pertanyaan = JSON.parse(data.pertanyaan);

          var classWarna = function classWarna() {
            //console.log(this.state.jawabans[data.id])
            if (data.type == 3) {
              //tipe menjodohkan
              if (!Array.isArray(_this4.state.jawabans[data.id]) || _this4.state.jawabans[data.id].length < pertanyaan.qlist.length) {
                return ' btn-outline-warning text-dark';
              }
            } else if (data.type == 4) {
              //tipe isian
              if (_this4.state.jawabans[data.id] == null) return ' btn-outline-warning text-dark';
              var _soal = pertanyaan.q.match(/\[\[.*?\]\]/g).length;
              var jawab = 0;

              if (Object.prototype.toString.call(_this4.state.jawabans[data.id]) === '[object Object]') {
                //if object
                for (var key in _this4.state.jawabans[data.id]) {
                  if (_this4.state.jawabans[data.id][key] != "" && _this4.state.jawabans[data.id][key] != null) jawab++;
                }
              } else if (Array.isArray(_this4.state.jawabans[data.id])) {
                //if array
                _this4.state.jawabans[data.id].forEach(function (el) {
                  if (el != "" && el != null) jawab++;
                });
              }

              if (_soal > jawab) return ' btn-outline-warning text-dark';
            } else if (Array.isArray(_this4.state.jawabans[data.id]) && _this4.state.jawabans[data.id].length === 0) {
              return ' btn-outline-warning text-dark';
            } else if (_this4.state.jawabans[data.id] === null || _this4.state.jawabans[data.id] === '') {
              return ' btn-outline-warning text-dark';
            }

            return ' btn-outline-dark';
          };

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: function onClick() {
              _this4.setState({
                babIndex: bi,
                soalIndex: si
              });
            },
            className: "mr-1 mb-1 btn btn-sm " + classWarna(),
            key: soal.id
          }, bi == _this4.state.babIndex && si == _this4.state.soalIndex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, si + 1)) : si + 1);
        }));
      }), "keterangan : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "bg-warning p-1 pl-5 mr-1"
      }), " Belum dikerjakan / belum selesai"))), this.state.mode == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, this.state.soals.map(function (bab) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          key: bab.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "text-center mt-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, bab.nama.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.parse(bab.settings).keterangan), bab.child.map(function (soal) {
          var data = soal.soal;
          var pertanyaan = JSON.parse(data.pertanyaan);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card mb-2",
            key: soal.id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card-body"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "float-left"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, nomor++, " .")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: ""
          }, data.type == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PilihanGanda, {
            soalId: data.id,
            pertanyaan: pertanyaan,
            jawaban: _this4.state.jawabans[data.id],
            setJawaban: _this4.setJawaban
          }), data.type == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BenarSalah, {
            soalId: data.id,
            pertanyaan: pertanyaan,
            jawaban: _this4.state.jawabans[data.id],
            setJawaban: _this4.setJawaban
          }), data.type == 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menjodohkan, {
            soalId: data.id,
            pertanyaan: pertanyaan,
            jawaban: _this4.state.jawabans[data.id] ? _this4.state.jawabans[data.id] : [],
            setJawaban: _this4.setJawaban
          }), data.type == 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Isian, {
            soalId: data.id,
            pertanyaan: pertanyaan,
            jawaban: _this4.state.jawabans[data.id] ? _this4.state.jawabans[data.id] : [],
            setJawaban: _this4.setJawaban
          }), data.type == 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Essay, {
            soalId: data.id,
            pertanyaan: pertanyaan,
            jawaban: _this4.state.jawabans[data.id],
            setJawaban: _this4.setJawaban
          }))));
        }));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KuisHasilModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        show: this.state.hasilModal,
        nilai: false,
        hasil: this.state.hasil,
        toggle: function toggle() {
          _this4.setState({
            hasilModal: false
          });
        }
      }));
    }
  }]);

  return MulaiKuis;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var PilihanGanda = function PilihanGanda(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId;
  var jawab = jawaban ? jawaban : [];

  var handleCheck = function handleCheck(e) {
    if (pertanyaan.type == 1) setJawaban(_defineProperty({}, soalId, [parseInt(e.target.value) + 1]));else if (pertanyaan.type == 2) {
      if (e.target.checked) setJawaban(_defineProperty({}, soalId, [].concat(_toConsumableArray(jawab), [parseInt(e.target.value) + 1])));else {
        var filteredKunci = jawab.filter(function (k) {
          return k !== parseInt(e.target.value) + 1;
        });
        setJawaban(_defineProperty({}, soalId, filteredKunci));
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, pertanyaan.alist.map(function (a, i) {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ". ")), pertanyaan.type == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "qrd".concat(soalId),
      type: "radio",
      value: i,
      checked: jawab.indexOf(i + 1) !== -1,
      onChange: handleCheck,
      className: "custom-rd mr-2"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "qcb".concat(soalId),
      type: "checkbox",
      value: i,
      checked: jawab.indexOf(i + 1) !== -1,
      onChange: handleCheck,
      className: "custom-cb mr-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-2"
    }, a))));
  })))));
};

var BenarSalah = function BenarSalah(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId; //console.log("soal: " + soalId, "j: " + jawaban)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "qkunci".concat(soalId),
    onChange: function onChange(e) {
      return setJawaban(_defineProperty({}, soalId, e.target.value), true);
    },
    value: 1,
    checked: jawaban == 1 || jawaban == true
  }), " BENAR", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "qkunci".concat(soalId),
    onChange: function onChange(e) {
      return setJawaban(_defineProperty({}, soalId, e.target.value), true);
    },
    value: 0,
    checked: jawaban == 0 || jawaban == false
  }), " SALAH"));
};

var Essay = function Essay(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_8__["TextAreaForm"], {
    labelW: "0",
    formW: "5",
    name: "kunci".concat(soalId),
    value: jawaban,
    placeholder: "Isikan jawaban anda",
    handleChange: function handleChange(e) {
      return setJawaban(_defineProperty({}, soalId, e.target.value));
    }
  }));
};

var Menjodohkan = function Menjodohkan(props) {
  var pertanyaan = props.pertanyaan,
      _props$jawaban = props.jawaban,
      jawaban = _props$jawaban === void 0 ? [] : _props$jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId;

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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      className: "float-right fas fa-question-circle ".concat(soalId, "qlistq-").concat(i)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: ""
    }, q))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2 m-0"
  }, jawaban.map(function (line, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lineto__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: i,
      from: "".concat(soalId, "qlistq-").concat(line.q),
      to: "".concat(soalId, "qlista-").concat(line.a)
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
      className: "fas fa-check-circle ".concat(soalId, "qlista-").concat(i)
    }), " ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ". ")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, a))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, JSON.stringify(jawaban))));
};

var Isian = function Isian(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId;

  var handleText = function handleText(e) {
    var match = e.target.value.match(/\[\[.*?\]\]/g);
    var kunci = match ? match.reduce(function (filtered, s) {
      if (s.replace(/\[|]/g, '') != "") filtered.push(s.replace(/\[|]/g, ''));
      return filtered;
    }, []) : [];
    setJawaban(_defineProperty({}, soalId, kunci));
  };

  var formStyle = {
    border: 'none',
    borderBottom: '1px solid black',
    padding: 0
  };
  var jawabanIndex = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item.split('[[]]').map(function (i, k) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: k
      }, i, k + 1 != item.split('[[]]').length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: jawabanIndex,
        style: formStyle,
        size: "5",
        type: "text",
        value: jawaban[jawabanIndex++] || '',
        onChange: function onChange(e) {
          return setJawaban(_defineProperty({}, soalId, _objectSpread(_objectSpread({}, jawaban), {}, _defineProperty({}, e.target.name.toString(), e.target.value))));
        }
      }));
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__["hot"])(MulaiKuis));

/***/ })

}]);