"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_student_components_GrammarComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
/* harmony import */ var _spare_components_quiz_QuizRadio_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spare_components/quiz/QuizRadio.vue */ "./resources/js/student_components/spare_components/quiz/QuizRadio.vue");
/* harmony import */ var _spare_components_quiz_QuizDragdrop_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spare_components/quiz/QuizDragdrop.vue */ "./resources/js/student_components/spare_components/quiz/QuizDragdrop.vue");
/* harmony import */ var _spare_components_quiz_QuizReorder_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spare_components/quiz/QuizReorder.vue */ "./resources/js/student_components/spare_components/quiz/QuizReorder.vue");
/* harmony import */ var _spare_components_quiz_QuizMultiple_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spare_components/quiz/QuizMultiple.vue */ "./resources/js/student_components/spare_components/quiz/QuizMultiple.vue");
/* harmony import */ var _spare_components_quiz_QuizTrueFalse_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spare_components/quiz/QuizTrueFalse.vue */ "./resources/js/student_components/spare_components/quiz/QuizTrueFalse.vue");
/* harmony import */ var _spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spare_components/quiz/QuestionCount.vue */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue");
/* harmony import */ var _spare_components_quiz_QuizInput_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spare_components/quiz/QuizInput.vue */ "./resources/js/student_components/spare_components/quiz/QuizInput.vue");
/* harmony import */ var _spare_components_quiz_QuizCongratulation_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spare_components/quiz/QuizCongratulation.vue */ "./resources/js/student_components/spare_components/quiz/QuizCongratulation.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    QuizMultiple: _spare_components_quiz_QuizMultiple_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    QuizTrueFalse: _spare_components_quiz_QuizTrueFalse_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    QuizReorder: _spare_components_quiz_QuizReorder_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    QuizDragdrop: _spare_components_quiz_QuizDragdrop_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    QuizRadio: _spare_components_quiz_QuizRadio_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QuizInput: _spare_components_quiz_QuizInput_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    QuestionCount: _spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    QuizCongratulation: _spare_components_quiz_QuizCongratulation_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      page: "Reading Page",
      module_name: "Reading",
      auth_token: this.$store.state.authToken,
      course_id: this.$route.params.course_id,
      lesson_id: null,
      detail: [],
      article: [],
      unit: [],
      quizez: [],
      quiz_submit: 0,
      current_index: 0,
      is_complete: false,
      quiz_complete: {
        unit_name: null,
        lesson_name: null,
        coures_id: null,
        study_minutes: null,
        study_hours: null,
        marks_percent: null
      }
    };
  },
  computed: {
    indicatorWidth: function indicatorWidth() {
      return parseInt(this.current_index) * 100 / this.quizez.length;
    },
    quizCount: function quizCount() {
      return this.quizez.length;
    }
  },
  methods: {
    retriveReadingDetail: function retriveReadingDetail(course_id, header_data) {
      var _this = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveReadingDetail(course_id, header_data).then(function (response) {
        _this.lesson_id = response.data.id;
        _this.detail = response.data;
        _this.article = response.data.article;
        _this.unit = response.data.unit;
        _this.quizez = response.data.quiz;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleClickNext: function handleClickNext(event) {
      this.current_index += 1;
      var quiz_id = event.quiz_id;
      var selected_ans = event.selected_ans;
      var payload = {
        quiz_id: quiz_id,
        selected_ans: selected_ans
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].submitQuiz(payload, this.auth_token).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleClickPrev: function handleClickPrev() {
      this.current_index -= 1;
    },
    handleClickComplete: function handleClickComplete(event) {
      var _this2 = this;

      this.current_index += 1;
      var quiz_id = event.quiz_id;
      var selected_ans = event.selected_ans;
      var payload = {
        quiz_id: quiz_id,
        selected_ans: selected_ans
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].submitQuiz(payload, this.auth_token).then(function (res) {
        console.log(res.data);
        _this2.is_complete = true;

        _this2.retriveQuizResult();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    retriveQuizResult: function retriveQuizResult() {
      var _this3 = this;

      var lesson_id = this.lesson_id;
      var payload = {
        lesson_id: lesson_id
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveQuizResult(payload, this.auth_token).then(function (res) {
        _this3.quiz_complete.coures_id = res.data.coures_id;
        _this3.quiz_complete.unit_name = res.data.lesson.unit.unit_name;
        _this3.quiz_complete.lesson_name = res.data.lesson.title;
        _this3.quiz_complete.study_minutes = res.data.lesson.study_minutes;
        _this3.quiz_complete.study_hours = res.data.lesson.study_hour;
        _this3.quiz_complete.marks_percent = res.data.mark_percent;
      })["catch"](function (err) {});
    }
  },
  created: function created() {// console.log("created Reading lesson"+this.$route.params.lesson);
  },
  mounted: function mounted() {
    console.log("GrammarComponent");
    this.retriveReadingDetail(this.course_id, this.auth_token);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section overflow-hidden position-relative",
  id: "wrapper"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "section section-padding mt-n10"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_7 = {
  "class": "",
  style: {
    "display": "flex",
    "justify-content": "space-between"
  }
};
var _hoisted_8 = {
  "class": "button_back"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-left"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Course ");

var _hoisted_11 = {
  "class": "back"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Extras ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-right"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "reading_wrapper"
};
var _hoisted_15 = {
  "class": "reading-title"
};
var _hoisted_16 = {
  "class": "inner_content"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content_title"
}, " Grammar Study ", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "passage_content"
};
var _hoisted_19 = {
  "class": "row"
};
var _hoisted_20 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_21 = {
  "class": "quiz_indicator"
};
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = {
  key: 1
};
var _hoisted_24 = {
  key: 0
};
var _hoisted_25 = {
  key: 1
};
var _hoisted_26 = {
  key: 2
};
var _hoisted_27 = {
  key: 3
};
var _hoisted_28 = {
  key: 4
};
var _hoisted_29 = {
  key: 5
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_QuizCongratulation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizCongratulation");

  var _component_QuizTrueFalse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizTrueFalse");

  var _component_QuizMultiple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizMultiple");

  var _component_QuizReorder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizReorder");

  var _component_QuizDragdrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizDragdrop");

  var _component_QuizRadio = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizRadio");

  var _component_QuizInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizInput");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/course-detail/' + $data.course_id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/course-detail/' + $data.course_id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12, _hoisted_13];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detail.title) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.unit.unit_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "indicator_progress",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width: ".concat($options.indicatorWidth, "%"))
  }, null, 4
  /* STYLE */
  )]), $data.is_complete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizCongratulation, {
    quiz_complete: $data.quiz_complete,
    module_name: $data.module_name
  }, null, 8
  /* PROPS */
  , ["quiz_complete", "module_name"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if not completed"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quizez, function (quiz, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Index=" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index) + " Current Index =" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz.quiz_type) + " ", 1
    /* TEXT */
    ), quiz.quiz_type == 'ture_false' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizTrueFalse, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: $options.handleClickNext,
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: $options.handleClickComplete
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 'multiple_choise' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizMultiple, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: $options.handleClickNext,
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: $options.handleClickComplete
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 're_order' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizReorder, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: function onClickNextButton($event) {
        return $options.handleClickNext(quiz.id);
      },
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: $options.handleClickComplete
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 'drag_drop' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizDragdrop, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: function onClickNextButton($event) {
        return $options.handleClickNext(quiz.id);
      },
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: function onClickCompleteButton($event) {
        return $options.handleClickComplete(quiz.id);
      }
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 'radio' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizRadio, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: function onClickNextButton($event) {
        return $options.handleClickNext(quiz.id);
      },
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: function onClickCompleteButton($event) {
        return $options.handleClickComplete(quiz.id);
      }
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 'input_text' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizInput, {
      quizz_count: $data.quizez.length,
      index: index,
      current_index: $data.current_index,
      quiz_info: $data.quizez[index],
      onClickNextButton: function onClickNextButton($event) {
        return $options.handleClickNext(quiz.id);
      },
      onClickPrevButton: $options.handleClickPrev,
      onClickCompleteButton: function onClickCompleteButton($event) {
        return $options.handleClickComplete(quiz.id);
      }
    }, null, 8
    /* PROPS */
    , ["quizz_count", "index", "current_index", "quiz_info", "onClickNextButton", "onClickPrevButton", "onClickCompleteButton"])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if not completed")]))])])])])])])])])])])])]);
}

/***/ }),

/***/ "./resources/js/student_components/GrammarComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/student_components/GrammarComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GrammarComponent_vue_vue_type_template_id_ec51af06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GrammarComponent.vue?vue&type=template&id=ec51af06 */ "./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06");
/* harmony import */ var _GrammarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrammarComponent.vue?vue&type=script&lang=js */ "./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GrammarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GrammarComponent_vue_vue_type_template_id_ec51af06__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/student_components/GrammarComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GrammarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GrammarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GrammarComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06":
/*!********************************************************************************************!*\
  !*** ./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GrammarComponent_vue_vue_type_template_id_ec51af06__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GrammarComponent_vue_vue_type_template_id_ec51af06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GrammarComponent.vue?vue&type=template&id=ec51af06 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/GrammarComponent.vue?vue&type=template&id=ec51af06");


/***/ })

}]);