"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_student_components_ReadingLessonComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Reading_module",
  components: {},
  data: function data() {
    return {
      page: "Reading_Module",
      lesson: this.$route.params.lesson,
      course_id: this.$route.params.course_id,
      lesson_list: [],
      auth_token: this.$store.state.authToken
    };
  },
  methods: {
    retriveReadingLesson: function retriveReadingLesson(course_id, header_data) {
      var _this = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveReadingLesson(course_id, header_data).then(function (response) {
        console.log(response);
        _this.lesson_list = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    console.log("created Reading lesson" + this.$route.params.lesson);
  },
  mounted: function mounted() {
    console.log("ReadingLessonComponent");
    this.retriveReadingLesson(this.course_id, this.auth_token);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2f8555c0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "section overflow-hidden position-relative",
  id: "wrapper"
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
  "class": "container"
};
var _hoisted_7 = {
  "class": "row gx-10"
};
var _hoisted_8 = {
  "class": "col-lg-8"
};
var _hoisted_9 = {
  "class": "btn btn-primary"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-arrow-left"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Course Detail ");

var _hoisted_12 = {
  "class": "courses-details"
};
var _hoisted_13 = {
  "class": "table-striped",
  id: "module"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Topics"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "View "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Start Learning")], -1
  /* HOISTED */
  );
});

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Pending", -1
  /* HOISTED */
  );
});

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-warning"
  }, " View ")], -1
  /* HOISTED */
  );
});

var _hoisted_17 = {
  "class": "btn btn-success"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Start ");

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-arrow-right"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-4\" data-v-2f8555c0><div class=\"sidebar\" data-v-2f8555c0><div class=\"sidebar-widget widget-information\" data-v-2f8555c0><div class=\"info-price\" data-v-2f8555c0><span class=\"price\" data-v-2f8555c0>A2 Reading</span></div><div class=\"info-list\" data-v-2f8555c0><ul data-v-2f8555c0><li data-v-2f8555c0><i class=\"icofont-book-alt\" data-v-2f8555c0></i> <strong data-v-2f8555c0>Units</strong> <span data-v-2f8555c0>8</span></li><li data-v-2f8555c0><i class=\"icofont-clock-time\" data-v-2f8555c0></i> <strong data-v-2f8555c0>Duration</strong> <span data-v-2f8555c0>08 hr 15 mins</span></li><li data-v-2f8555c0><i class=\"icofont-ui-video-play\" data-v-2f8555c0></i> <strong data-v-2f8555c0>Lessons</strong> <span data-v-2f8555c0>29</span></li><li data-v-2f8555c0><i class=\"icofont-bars\" data-v-2f8555c0></i> <strong data-v-2f8555c0>Level</strong> <span data-v-2f8555c0>Foundation</span></li></ul></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/course-detail/' + $data.course_id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10, _hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [_hoisted_14, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.lesson_list, function (lesson, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: lesson.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lesson.title), 1
    /* TEXT */
    ), _hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: '/student/reading_study/' + $data.course_id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        btn: true
      })
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_18, _hoisted_19];
      }),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["to"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), _hoisted_20])])])])])])]);
}

/***/ }),

/***/ "./resources/js/http-common.js":
/*!*************************************!*\
  !*** ./resources/js/http-common.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer ".concat(localStorage.getItem("token"))
  }
}));

/***/ }),

/***/ "./resources/js/services/LessonDataService.js":
/*!****************************************************!*\
  !*** ./resources/js/services/LessonDataService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-common */ "./resources/js/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var LessonDataService = /*#__PURE__*/function () {
  function LessonDataService() {
    _classCallCheck(this, LessonDataService);
  }

  _createClass(LessonDataService, [{
    key: "retriveReadingLesson",
    value: function retriveReadingLesson(course_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/get_lesson?course_id=".concat(course_id, "&&module_id=1"), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveListeningLesson",
    value: function retriveListeningLesson(course_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/get_lesson?course_id=".concat(course_id, "&&module_id=2"), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveReadingDetail",
    value: function retriveReadingDetail(course_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/reading_lesson_detail?course_id=".concat(course_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizAnswer",
    value: function retriveQuizAnswer(quiz_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/quiz_answer?quiz_id=".concat(quiz_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "submitQuiz",
    value: function submitQuiz(payload, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("student/submit_quiz", payload, {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizResult",
    value: function retriveQuizResult(payload, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("student/lesson_complete_detail", payload, {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }]);

  return LessonDataService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LessonDataService());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#module[data-v-2f8555c0] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#module td[data-v-2f8555c0], #module th[data-v-2f8555c0] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n}\n#module tr[data-v-2f8555c0]:nth-child(even){background-color: #f2f2f2;}\n#module tr[data-v-2f8555c0]:hover {background-color: #ddd;}\n#module th[data-v-2f8555c0] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #04AA6D;\n  color: white;\n}\n.btn[data-v-2f8555c0] {\n    color: #fff;\n}\n.btn[data-v-2f8555c0]:hover {\n    color: #ddd;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_style_index_0_id_2f8555c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_style_index_0_id_2f8555c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_style_index_0_id_2f8555c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/student_components/ReadingLessonComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/student_components/ReadingLessonComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReadingLessonComponent_vue_vue_type_template_id_2f8555c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true */ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true");
/* harmony import */ var _ReadingLessonComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadingLessonComponent.vue?vue&type=script&lang=js */ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ReadingLessonComponent_vue_vue_type_style_index_0_id_2f8555c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css */ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ReadingLessonComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ReadingLessonComponent_vue_vue_type_template_id_2f8555c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2f8555c0"],['__file',"resources/js/student_components/ReadingLessonComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ReadingLessonComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_template_id_2f8555c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_template_id_2f8555c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=template&id=2f8555c0&scoped=true");


/***/ }),

/***/ "./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ReadingLessonComponent_vue_vue_type_style_index_0_id_2f8555c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ReadingLessonComponent.vue?vue&type=style&index=0&id=2f8555c0&scoped=true&lang=css");


/***/ })

}]);