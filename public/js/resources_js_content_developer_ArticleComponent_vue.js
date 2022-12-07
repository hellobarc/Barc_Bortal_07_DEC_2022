"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_content_developer_ArticleComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
/* harmony import */ var _services_ContentDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ContentDataService */ "./resources/js/services/ContentDataService.js");
/* harmony import */ var _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student_components/spare_components/quiz/QuestionCount.vue */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    QuestionCount: _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      lesson_id: this.$route.params.lesson,
      lesson_detail: {},
      alert_next: [],
      alert_success: null,
      iscomplete: false,
      form_data: {
        article_title: null,
        article_content: null
      },
      auth_token: this.$store.state.authToken
    };
  },
  methods: {
    lessonById: function lessonById(lesson_id, token) {
      var _this = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].lessonById(lesson_id, token).then(function (response) {
        console.log(response.data.data[0]);
        _this.lesson_detail = response.data.data[0];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handeSubmit: function handeSubmit() {
      console.log("submit");
      this.alert_next = [];

      if (this.form_data.article_title == null) {
        this.alert_next.push("Please in a Title Text");
        this.iscomplete = false;
      } else {
        this.iscomplete = true;
      }

      if (this.form_data.article_content == null) {
        this.alert_next.push("Please in a Content of  the Article/Passage");
        this.iscomplete = false;
      } else {
        this.iscomplete = true;
      }

      console.log(this.iscomplete);

      if (this.iscomplete) {
        this.addArticle();
      }
    },
    addArticle: function addArticle() {
      var _this2 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        article_title: this.form_data.article_title,
        article_content: this.form_data.article_content
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_1__["default"].addArticle(payload, token).then(function (response) {
        if (response.data.status == "duplicate") {
          _this2.alert_next.push(response.data.message);
        }

        if (response.data.status == "success") {
          _this2.alert_success = response.data.message;
          _this2.form_data.article_title = null;
          _this2.form_data.article_content = null;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  // methods end
  mounted: function mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['text', 'index', 'quizz_count'],
  data: function data() {
    return {
      title: "nothing"
    };
  },
  computed: {},
  mounted: function mounted() {
    console.log(this.text);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row flex-nowrap"
};
var _hoisted_3 = {
  "class": "col-md-12"
};
var _hoisted_4 = {
  style: {
    "padding": "10px",
    "border": "1px solid #ddd",
    "margin": "10px"
  }
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-md-12"
};
var _hoisted_7 = {
  "class": "reading_wrapper"
};
var _hoisted_8 = {
  "class": "reading-title"
};
var _hoisted_9 = {
  "class": "inner_content"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content_title"
}, "Read The Passage and answer the following questions ", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "passage_content"
};
var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_14 = {
  "class": "reading_passage"
};
var _hoisted_15 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_16 = {
  "class": "quiz_wrapper"
};
var _hoisted_17 = {
  "class": "question_count"
};
var _hoisted_18 = {
  "class": "quiz_content"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quiz_question"
}, " Example question ? ", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "ans_options"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "display": "flex",
    "justify-content": "space-between"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "submit_button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xs"
}, " Complete ")])], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "col-md-12"
};
var _hoisted_24 = {
  style: {
    "margin-bottom": "20px",
    "padding": "10px"
  }
};
var _hoisted_25 = {
  key: 0
};
var _hoisted_26 = {
  "class": "alert alert-danger",
  role: "alert"
};
var _hoisted_27 = {
  key: 1
};
var _hoisted_28 = {
  "class": "alert alert-success",
  role: "alert"
};
var _hoisted_29 = {
  "class": "single-form"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Article Title:", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "single-form"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Article Content:", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "single-form text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_QuestionCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuestionCount");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lesson : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.title) + " (Add a Passage for this Lesson) ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.description), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("content display example"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form_data.article_title) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.unit_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form_data.article_title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form_data.article_content), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuestionCount, {
    text: "Multiple Choise",
    index: 1,
    quizz_count: 1
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(3, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'option_item_selected':  true ? true : 0
      }, "option_item"])
    }, " Example Answer - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans), 1
    /* TEXT */
    )]);
  }), 64
  /* STABLE_FRAGMENT */
  ))]), _hoisted_21])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("content display example end")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [$data.alert_next.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.alert_next, function (alert, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(alert), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.alert_success != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.alert_success), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handeSubmit && $options.handeSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Lesson Title or Topics",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form_data.article_title = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form_data.article_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    id: "artilce_content",
    rows: "5",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form_data.article_content = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form_data.article_content]])]), _hoisted_33], 32
  /* HYDRATE_EVENTS */
  )])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "question_count"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text) + " - Q: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.index + 1) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quizz_count), 1
  /* TEXT */
  );
}

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
    key: "retriveLesson",
    value: function retriveLesson(course_id, module_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/get_lesson?course_id=".concat(course_id, "&&module_id=").concat(module_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveReadingDetail",
    value: function retriveReadingDetail(lesson_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/reading_lesson_detail?lesson_id=".concat(lesson_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveListeningDetail",
    value: function retriveListeningDetail(course_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/listening_lesson_detail?course_id=".concat(course_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveListeningTrack",
    value: function retriveListeningTrack(lesson_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/listening_track_by_lesson?lesson_id=".concat(lesson_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizAnswer",
    value: function retriveQuizAnswer(quiz_id, quiz_type, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/quiz_answer?quiz_id=".concat(quiz_id, "&&quiz_type=").concat(quiz_type), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizRadio",
    value: function retriveQuizRadio(quiz_id, quiz_type, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/quiz_radio?quiz_id=".concat(quiz_id, "&&quiz_type=").concat(quiz_type), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizInput",
    value: function retriveQuizInput(quiz_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/quiz_answer_input?quiz_id=".concat(quiz_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "retriveQuizReorder",
    value: function retriveQuizReorder(quiz_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/quiz_reorder?quiz_id=".concat(quiz_id), {
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
  }, {
    key: "retriveWritingQuestion",
    value: function retriveWritingQuestion(course_id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("student/writing_list?course_id=".concat(course_id), {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    } // Content Developer //

  }, {
    key: "addLesson",
    value: function addLesson(payload, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("content/lesson", payload, {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "lessonById",
    value: function lessonById(id, token) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("content/lesson/".concat(id), {
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

/***/ "./resources/js/content_developer/ArticleComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/content_developer/ArticleComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleComponent_vue_vue_type_template_id_692c6420_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleComponent.vue?vue&type=template&id=692c6420&lang=true */ "./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true");
/* harmony import */ var _ArticleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleComponent.vue?vue&type=script&lang=js */ "./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ArticleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ArticleComponent_vue_vue_type_template_id_692c6420_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/content_developer/ArticleComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/student_components/spare_components/quiz/QuestionCount.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionCount_vue_vue_type_template_id_0648e129__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionCount.vue?vue&type=template&id=0648e129 */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129");
/* harmony import */ var _QuestionCount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionCount.vue?vue&type=script&lang=js */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuestionCount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuestionCount_vue_vue_type_template_id_0648e129__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/student_components/spare_components/quiz/QuestionCount.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionCount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionCount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionCount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleComponent_vue_vue_type_template_id_692c6420_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleComponent_vue_vue_type_template_id_692c6420_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleComponent.vue?vue&type=template&id=692c6420&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/ArticleComponent.vue?vue&type=template&id=692c6420&lang=true");


/***/ }),

/***/ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionCount_vue_vue_type_template_id_0648e129__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionCount_vue_vue_type_template_id_0648e129__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionCount.vue?vue&type=template&id=0648e129 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/spare_components/quiz/QuestionCount.vue?vue&type=template&id=0648e129");


/***/ })

}]);