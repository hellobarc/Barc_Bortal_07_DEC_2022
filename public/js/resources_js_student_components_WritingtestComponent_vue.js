"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_student_components_WritingtestComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Writing_list",
  components: {},
  data: function data() {
    var _ref;

    return _ref = {
      page: "Righting List",
      auth_token: this.$store.state.authToken,
      question_id: this.$route.params.question_id,
      course_id: this.$route.params.course_id,
      task: this.$route.params.task,
      writing_quesiton: []
    }, _defineProperty(_ref, "auth_token", this.$store.state.authToken), _defineProperty(_ref, "form_data", {
      input_task: null
    }), _defineProperty(_ref, "course_id", 1), _defineProperty(_ref, "timerCount", 60), _defineProperty(_ref, "timerUsed", 0), _defineProperty(_ref, "message", null), _ref;
  },
  computed: {
    wordCount: function wordCount() {
      // console.log(this.input_task.split(' '));
      if (this.form_data.input_task != null) {
        return this.form_data.input_task.split(' ').length;
      } else {
        return 0;
      }
    }
  },
  methods: {
    writingQuestionDetail: function writingQuestionDetail() {
      var _this = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].writingQuestionDetail(this.question_id, this.auth_token).then(function (response) {
        console.log(response);
        _this.writing_quesiton = response.data.writing_question;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      var payload = {
        writing_question_id: this.question_id,
        task_text: this.form_data.input_task,
        time_used: this.timerUsed
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].submitWritingTask(payload, this.auth_token).then(function (response) {
        _this2.message = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    timerCount: {
      handler: function handler(value) {
        var _this3 = this;

        if (value > 0) {
          setTimeout(function () {
            _this3.timerCount--;
            _this3.timerUsed++;
          }, 60000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation

    }
  },
  mounted: function mounted() {
    console.log("WritingtestComponent");
    this.writingQuestionDetail();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0f29bc96"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "section overflow-hidden position-relative",
  id: "wrapper",
  style: {
    "background": "aliceblue"
  }
};
var _hoisted_2 = {
  "class": "py-0 px-5"
};
var _hoisted_3 = {
  "class": ""
};
var _hoisted_4 = {
  "class": "container-fluid"
};
var _hoisted_5 = {
  "class": "section section-padding mt-n10"
};
var _hoisted_6 = {
  "class": "container-fluid"
};
var _hoisted_7 = {
  "class": "row gx-10"
};
var _hoisted_8 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_9 = {
  style: {
    "margin-bottom": "10px"
  }
};
var _hoisted_10 = {
  "class": "button_back"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-arrow-left"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  style: {
    "display": "flex",
    "justify-content": "space-between",
    "border": "1px solid #ddd",
    "padding": "5px",
    "margin": "10px"
  }
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Your name : ");

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-clock"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "badge bg-primary"
  }, " Help", -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "row gx-10"
};
var _hoisted_19 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_20 = {
  style: {
    "margin-bottom": "10px",
    "border": "1px solid #ccc",
    "background": "#fff",
    "padding": "15px"
  }
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "You should spend about 60 minutes on this task. Write at least 150 words.")], -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "row gx-10"
};
var _hoisted_23 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_24 = {
  style: {
    "padding": "10px"
  }
};
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_27 = {
  key: 0,
  "class": "message"
};
var _hoisted_28 = {
  "class": "alert alert-success",
  role: "alert"
};
var _hoisted_29 = {
  "class": "mb-3"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "submit_button"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary btn-xs"
  }, " Submit ")])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'writing-list',
      params: {
        course_id: $data.course_id
      }
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11, _hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.$store.state.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.timerCount) + " minutes remaining", 1
  /* TEXT */
  )]), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.writing_quesiton.title), 1
  /* TEXT */
  )]), _hoisted_21])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $data.writing_quesiton.description
  }, null, 8
  /* PROPS */
  , _hoisted_25)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$data.message != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleSubmit && $options.handleSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    id: "exampleFormControlTextarea1",
    placeholder: "Write your essay here",
    rows: "20",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form_data.input_task = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form_data.input_task]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Word Count: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.wordCount), 1
  /* TEXT */
  )]), _hoisted_30], 32
  /* HYDRATE_EVENTS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n                            <div class=\"row\">\n                                <div style=\"display: flex;justify-content: space-between; border: 1px solid #ddd; padding: 5px; margin: 10px;\">\n                                    <div style=\"display: inline-flex;\">\n                                        <div class=\"m-2\"><input type=\"checkbox\"> Review </div>\n                                        <div class=\"small_button\">1</div>\n                                        <div class=\"small_button\">2</div>\n                                    </div>\n                                    <div style=\"margin-top: 10px\"><i class=\"bi bi-clock\"></i>60 minutes remaining</div>\n                                </div>\n                            </div>\n                            ")])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.question_list[data-v-0f29bc96]{\n    margin-bottom: 40px;\n    margin-top: 40px;\n}\n.question_item[data-v-0f29bc96]{\n    font-weight: bold;\n}\n.question_text[data-v-0f29bc96]{\n        color: #000000;\n    font-weight: 500;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_style_index_0_id_0f29bc96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_style_index_0_id_0f29bc96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_style_index_0_id_0f29bc96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/student_components/WritingtestComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/student_components/WritingtestComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WritingtestComponent_vue_vue_type_template_id_0f29bc96_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true */ "./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true");
/* harmony import */ var _WritingtestComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WritingtestComponent.vue?vue&type=script&lang=js */ "./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _WritingtestComponent_vue_vue_type_style_index_0_id_0f29bc96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css */ "./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_BARC_Portal_Vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_BARC_Portal_Vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_WritingtestComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WritingtestComponent_vue_vue_type_template_id_0f29bc96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0f29bc96"],['__file',"resources/js/student_components/WritingtestComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WritingtestComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_template_id_0f29bc96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_template_id_0f29bc96_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=template&id=0f29bc96&scoped=true");


/***/ }),

/***/ "./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WritingtestComponent_vue_vue_type_style_index_0_id_0f29bc96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/WritingtestComponent.vue?vue&type=style&index=0&id=0f29bc96&scoped=true&lang=css");


/***/ })

}]);