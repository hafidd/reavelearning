(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/kuis/KuisJawabForm.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/kuis/KuisJawabForm.js ***!
  \*******************************************************/
/*! exports provided: PilihanGanda, BenarSalah, Essay, Menjodohkan, Isian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilihanGanda", function() { return PilihanGanda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenarSalah", function() { return BenarSalah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Essay", function() { return Essay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menjodohkan", function() { return Menjodohkan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isian", function() { return Isian; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lineto */ "./node_modules/react-lineto/dist/react-lineto.js");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var PilihanGanda = function PilihanGanda(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      _props$setJawaban = props.setJawaban,
      setJawaban = _props$setJawaban === void 0 ? function () {} : _props$setJawaban,
      soalId = props.soalId,
      _props$kunci = props.kunci,
      kunci = _props$kunci === void 0 ? {
    a: []
  } : _props$kunci;
  var jawab = jawaban ? jawaban : [];

  var handleCheck = function handleCheck(e) {};

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
      className: "form-inline float-left mb-1" + (kunci.a.indexOf(i + 1) !== -1 && ' bg-success'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      style: {
        width: '1.3em'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ". ")), pertanyaan.type == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "rd".concat(soalId),
      type: "radio",
      value: i,
      checked: jawab.indexOf(i + 1) !== -1,
      onChange: handleCheck,
      className: "custom-rd mr-2"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "cb".concat(soalId),
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
      soalId = props.soalId,
      _props$kunci2 = props.kunci,
      kunci = _props$kunci2 === void 0 ? null : _props$kunci2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_1__["RadioForm"], {
    labelW: "0",
    name: "kunci".concat(soalId),
    handleChange: function handleChange(e) {
      return setJawaban(_defineProperty({}, soalId, e.target.value), true);
    },
    value: jawaban,
    options: [[1, 'BENAR', kunci ? 'bg-success' : ''], [0, 'SALAH', !kunci ? 'bg-success' : '']]
  }));
};

var Essay = function Essay(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId,
      kunci = props.kunci;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pertanyaan.q.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    width: "10%"
  }, "Jawab: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, jawaban !== null && jawaban.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bg-success text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Kunci: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, kunci !== null && kunci.split('\n').map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))))));
};

var Menjodohkan = function Menjodohkan(props) {
  var pertanyaan = props.pertanyaan,
      _props$jawaban = props.jawaban,
      jawaban = _props$jawaban === void 0 ? [] : _props$jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId,
      idkWhy = props.idkWhy,
      kunci = props.kunci;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(jawaban),
      _useState2 = _slicedToArray(_useState, 2),
      jw = _useState2[0],
      setJw = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(kunci),
      _useState4 = _slicedToArray(_useState3, 2),
      kn = _useState4[0],
      setKn = _useState4[1];

  var handleDragStart = function handleDragStart(data) {
    return function (event) {};
  };

  var handleDrop = function handleDrop(data) {
    return function (event) {
      event.preventDefault();
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
      className: "float-right fas fa-question-circle listq-".concat(i)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: ""
    }, q))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-2 m-0"
  }, jawaban.map(function (line, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lineto__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: i,
      zIndex: 9999,
      borderColor: "red",
      from: "listq-".concat(line.q),
      to: "lista-".concat(line.a)
    });
  }), kunci.map(function (line, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lineto__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: i,
      from: "listq-".concat(line.q),
      to: "lista-".concat(line.a)
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
      className: "fas fa-check-circle lista-".concat(i)
    }), " ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "m-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, String.fromCharCode(65 + i), ". ")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, a))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, "Kunci : ", JSON.stringify(kunci), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Jawaban : ", JSON.stringify(jawaban))));
};

var Isian = function Isian(props) {
  var pertanyaan = props.pertanyaan,
      jawaban = props.jawaban,
      setJawaban = props.setJawaban,
      soalId = props.soalId,
      kunci = props.kunci;
  var formStyle = {
    border: 'none',
    borderBottom: '1px solid black',
    padding: 0
  };
  var jawabanIndex = 0;
  console.log(kunci);
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
        value: jawaban[jawabanIndex++],
        onChange: function onChange(e) {
          return setJawaban(_defineProperty({}, soalId, _objectSpread(_objectSpread({}, jawaban), {}, _defineProperty({}, e.target.name.toString(), e.target.value))));
        }
      }));
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Kunci Jawaban"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), kunci.map(function (kk, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i
    }, kk, kunci.length !== i + 1 && ', ');
  }))));
};



/***/ })

}]);