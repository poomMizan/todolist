"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Upload_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      file: '',
      showMessage: false,
      message: '',
      previewImage: '',
      alt: '',
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      this.reset();
      this.file = e.target.files[0]; // [this.file] = e.target.files;

      if (this.file !== "" && this.isImage(this.file)) {
        this.previewImage = URL.createObjectURL(this.file);
      } else {
        this.alt = "Upload file is not an image type";
      }
    },
    isImage: function isImage(file) {
      var acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      return file && acceptedImageTypes.includes(file['type']);
    },
    upload: function upload(e) {
      var _this = this;

      e.preventDefault();

      if (this.isImage(this.file)) {
        console.log('image type');
        var config_header = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        var formData = new FormData();
        formData.append('photo', this.file);
        formData.append('name', "photoname_1");
        axios.post('/api/upload', formData, config_header).then(function (res) {
          _this.showMessage = true;
          _this.message = res.data.message;
          console.log(res.data.message);
        })["catch"](function (err) {
          _this.showMessage = true;
          console.log(err);
        });
        this.file = '';
        return;
      }

      console.log('Not image type');
      return;
    },
    reset: function reset() {
      this.file = '';
      this.showMessage = false;
      this.message = '';
      this.previewImage = "";
      this.alt = "";
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Upload.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Upload.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload.vue?vue&type=template&id=6c02d3ac& */ "./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac&");
/* harmony import */ var _Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Upload.vue?vue&type=script&lang=js& */ "./resources/js/components/Upload.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Upload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Upload.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Upload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6c02d3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Upload.vue?vue&type=template&id=6c02d3ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Upload.vue?vue&type=template&id=6c02d3ac& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container text-warning" }, [
    _c("div", { staticClass: "card text-dark" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("\n      Upload File\n    "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          { staticClass: "form", attrs: { enctype: "multipart/form-data" } },
          [
            _c("input", {
              attrs: { name: "file", type: "file", accept: "image/*" },
              on: { change: _vm.onFileChange },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn btn-warning btn-sm",
              attrs: { type: "reset", value: "Reset" },
              on: { click: _vm.reset },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "submit", value: "Uploaad" },
              on: { click: _vm.upload },
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.csrf },
            }),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "50%" },
        attrs: { src: _vm.previewImage, alt: _vm.alt },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);