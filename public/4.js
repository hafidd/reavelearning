(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Profile.js":
/*!********************************************!*\
  !*** ./resources/js/components/Profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hooks/useForm */ "./resources/js/hooks/useForm.js");
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Token */ "./resources/js/Token.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/ */ "./resources/js/components/form/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Profile = function Profile(props) {
  var user = props.user,
      updateUser = props.updateUser;
  var fields = user;

  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit, fields),
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    src: 'images/profile.jpg',
    changed: false,
    prev: '',
    file: ''
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      img = _useState8[0],
      setImg = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getImg();
  }, []);

  function getImg() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('images/users/' + user.id + '.jpg').then(function () {
      return setImg(_objectSpread({}, img, {
        src: 'images/users/' + user.id + '.jpg'
      }));
    })["catch"](function () {});
  }

  function submit() {
    var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var token = _Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
    if (!token) return;
    setLoading(true);
    setSuccess(false);
    var path = img ? 'update-pp' : 'update-profile';
    var formData = new FormData();

    for (var key in values) {
      formData.append(key, values[key]);
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/' + path, formData, {
      headers: {
        'Content-Type': "multipart/form-data",
        Authorization: 'Bearer ' + token
      }
    }).then(function () {
      setSuccess(true);
      setLoading(false);
      setValues(function (values) {
        return _objectSpread({}, values, {
          password_baru: '',
          password_baru_confirmation: '',
          password: '',
          img: ''
        });
      });

      if (!img) {
        updateUser({
          email: values.email,
          name: values.name,
          jk: values.jk
        });
      } else {//setImg({ src: URL.createObjectURL(img.uploadedFile) })
      }
    })["catch"](function (err) {
      if (err.response) {
        if (err.response.request.status === 422) {
          setNotif(err.response.data.errors);
        } else if (err.response.request.status === 401) {
          setErrors([err.response.data.error]);
        } else {
          setErrors(['server error']);
        }
      } else {
        setErrors(['server error']);
      }

      resetImg();
      setLoading(false);
    });
  }

  function changeImage(e) {
    var uploadedFile = e.target.files[0];
    setValues(function (values) {
      return _objectSpread({}, values, {
        img: uploadedFile
      });
    });
    setSuccess(false);
    setImg({
      src: URL.createObjectURL(uploadedFile),
      changed: true,
      prev: img.src,
      file: uploadedFile
    });
  }

  function resetImg() {
    setImg({
      src: img.prev,
      changed: false,
      prev: ''
    });
  }

  function submitImage() {
    if (img.changed) {
      if (!values.password || values.password === '') {
        setErrors(['isi password']);
        return;
      }

      submit(true);
    }
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, !props.sidebar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-outline-dark",
    onClick: props.toggleSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars"
  })), ' '), "Profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-2 mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img.src,
    style: {
      width: '100%'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "btn btn-xs btn-primary",
    style: {
      width: '100%',
      paddingBottom: '10px'
    }
  }, "Pilih Gambar ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    accept: "image/x-png,image/jpeg",
    onChange: changeImage,
    style: {
      height: '0.1px',
      width: '0.1px',
      opacity: 0,
      margin: 0
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-1"
  }, img.changed && !loading && !success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-success mr-3",
    onClick: submitImage
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-xs btn-warning",
    onClick: resetImg
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  }))), loading && img.changed && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title"
  }, "Ubah Profil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    type: "email",
    name: "email",
    label: "Email",
    value: values.email,
    handleChange: handleChange,
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    name: "name",
    label: "Nama Lengkap",
    value: values.name,
    handleChange: handleChange,
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["RadioForm"], {
    label: "Jenis Kelamin",
    name: "jk",
    handleChange: handleChange,
    value: values.jk,
    options: [['l', 'Laki - Laki'], ['p', 'Perempuan']],
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    type: "password",
    name: "password_baru",
    label: "Password Baru",
    value: values.password_baru,
    handleChange: handleChange,
    labelW: "3",
    formW: "5",
    formtext: "kosongi jika tidak ingin mengubah password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    type: "password",
    name: "password_baru_confirmation",
    label: "Ulangi Password",
    value: values.password_baru_confirmation,
    handleChange: handleChange,
    labelW: "3",
    formW: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form___WEBPACK_IMPORTED_MODULE_4__["TextForm"], {
    type: "password",
    name: "password",
    label: "Password",
    value: values.password,
    handleChange: handleChange,
    labelW: "3",
    formW: "5",
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, errors.constructor === Array && errors.length > 0 && !success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-warning",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, errors.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, item);
  }))), success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-success",
    style: {
      padding: '5%',
      margin: '5%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Sukses!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "profil berhasil disimpan")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success",
    disabled: loading || !values.password
  }, "SIMPAN ", loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }), " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

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