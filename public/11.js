(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/components/Profile.js":
/*!********************************************!*\
  !*** ./resources/js/components/Profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useForm */ "./resources/js/utils/useForm.js");
/* harmony import */ var _utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/Token */ "./resources/js/utils/Token.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cropper */ "./node_modules/react-cropper/dist/react-cropper.js");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _html_BasicForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html/BasicForm */ "./resources/js/components/html/BasicForm.js");
/* harmony import */ var _html_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/Template */ "./resources/js/components/html/Template.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var Profile = function Profile(props) {
  var user = props.user,
      updateUser = props.updateUser;
  var fields = user;

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(submit, fields),
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    src: 'images/profile.jpg',
    changed: false,
    prev: '',
    file: ''
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      img = _useState8[0],
      setImg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      cImg = _useState10[0],
      setCimg = _useState10[1];

  var cropper = null;
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
    var imgage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var token = _utils_Token__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
    if (!token) return;
    setLoading(true);
    setSuccess(false);
    var path = imgage ? 'update-pp' : 'update-profile';
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

      if (!imgage) {
        updateUser({
          email: values.email,
          name: values.name,
          jk: values.jk
        });
      } else {
        setImg(_objectSpread({}, img, {
          prev: ''
        }));
      }
    })["catch"](function (err) {
      resetImg();

      if (err.response) {
        if (err.response.request.status === 422) {
          setErrors(getErrors(err.response.data.errors));
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
    setSuccess(false);
    setImg(_objectSpread({}, img, {
      changed: true
    }));
    setCimg(URL.createObjectURL(uploadedFile));
  }

  function resetImg() {
    setCimg('');
    setImg({
      src: img.prev ? img.prev : img.src,
      changed: false,
      prev: ''
    });
  }

  function submitImage() {
    if (img.changed) {
      submit(true);
    }
  }

  function crop() {
    var croppedImg = cropper.getCroppedCanvas().toDataURL();
    setCimg('');
    setSuccess(false);
    setImg({
      src: croppedImg,
      changed: true,
      prev: img.src
    });
    setValues(function (values) {
      return _objectSpread({}, values, {
        img: croppedImg
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_Template__WEBPACK_IMPORTED_MODULE_7__["PageTitle"], {
    title: "Pengaturan"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    accept: "image/*",
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
  }, cImg ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success btn-fullwidth",
    onClick: crop
  }, "crop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cropper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: function ref(input) {
      cropper = input;
    },
    src: cImg,
    style: {
      height: 400,
      width: '100%'
    },
    aspectRatio: 1 / 1,
    guides: false
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    type: "email",
    name: "email",
    label: "Email",
    value: values.email,
    handleChange: handleChange,
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    name: "name",
    label: "Nama Lengkap",
    value: values.name,
    handleChange: handleChange,
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["RadioForm"], {
    label: "Jenis Kelamin",
    name: "jk",
    handleChange: handleChange,
    value: values.jk,
    options: [['l', 'Laki - Laki'], ['p', 'Perempuan']],
    labelW: "3",
    formW: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    type: "password",
    name: "password_baru",
    label: "Password Baru",
    value: values.password_baru,
    handleChange: handleChange,
    labelW: "3",
    formW: "5",
    formtext: "kosongi jika tidak ingin mengubah password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    type: "password",
    name: "password_baru_confirmation",
    label: "Ulangi Password",
    value: values.password_baru_confirmation,
    handleChange: handleChange,
    labelW: "3",
    formW: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_BasicForm__WEBPACK_IMPORTED_MODULE_6__["TextForm"], {
    type: "password",
    name: "password",
    label: "Password",
    value: values.password,
    handleChange: handleChange,
    labelW: "3",
    formW: "5",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

__signature__(Profile, "useForm{{ values, setValues, getErrors, handleChange, handleSubmit }}\nuseState{[loading, setLoading](false)}\nuseState{[success, setSuccess](false)}\nuseState{[errors, setErrors]([])}\nuseState{[img, setImg]({\r\n        src: 'images/profile.jpg',\r\n        changed: false,\r\n        prev: '',\r\n        file: ''\r\n    })}\nuseState{[cImg, setCimg]}\nuseEffect{}", function () {
  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

var _default = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Profile, "Profile", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\Profile.js");
  reactHotLoader.register(_default, "default", "D:\\Kuliah-SI\\skripsi\\BS\\reavelearning\\resources\\js\\components\\Profile.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);