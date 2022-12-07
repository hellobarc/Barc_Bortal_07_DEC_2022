"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_content_developer_QuizVocabulary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_draggable_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-draggable-next */ "./node_modules/vue-draggable-next/dist/vue-draggable-next.esm-bundler.js");
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
/* harmony import */ var _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ContentDataService */ "./resources/js/services/ContentDataService.js");
/* harmony import */ var _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student_components/spare_components/quiz/QuestionCount.vue */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Content Quiz',
  components: {
    draggable: vue_draggable_next__WEBPACK_IMPORTED_MODULE_4__.VueDraggableNext,
    QuestionCount: _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      lesson_id: this.$route.params.lesson,
      lesson_detail: {},
      quiz_list: {},
      alert_next: [],
      alert_success: null,
      iscomplete: false,
      question_type: null,
      quiz_title: null,
      quiz_marks: 0,
      quiz_timelimit: 0,
      quiz_type: 5,
      checked: true,
      inputs_fillblank: [],
      auth_token: this.$store.state.authToken,
      serial: 0
    };
  },
  methods: {
    quizList: function quizList() {
      var _this = this;

      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].quizList(this.lesson_id, this.auth_token).then(function (response) {
        _this.quiz_list = response.data.quizlist;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addText: function addText() {
      this.inputs_fillblank.push({
        name: '',
        value: '',
        element_type: 'text'
      });
    },
    addInput: function addInput() {
      this.inputs_fillblank.push({
        name: '',
        value: '',
        element_type: 'input'
      });
    },
    addSerial: function addSerial() {
      this.serial += 1;
      this.inputs_fillblank.push({
        name: '',
        value: this.serial,
        element_type: 'serial'
      });
    },
    removeFillblank: function removeFillblank(index) {
      this.inputs_fillblank.splice(index, 1);
    },
    handeMouseup: function handeMouseup(e, id) {
      console.log(e);
      console.log(id);
    },
    lessonById: function lessonById(lesson_id, token) {
      var _this2 = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_1__["default"].lessonById(lesson_id, token).then(function (response) {
        console.log(response.data.data[0]);
        _this2.lesson_detail = response.data.data[0];
        _this2.article = response.data.data[0].article;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    insertFillblank: function insertFillblank() {
      var _this3 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.quiz_type,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_fillblank: this.inputs_fillblank
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertFillblank(payload, token).then(function (response) {
        console.log(response);
        _this3.alert_success = response.data.message;
        _this3.alert_next = [];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handeSubmit: function handeSubmit() {
      if (this.quiz_title == null) {
        this.alert_next.push('Please write a Title');
      } else {
        this.iscomplete = true;
      }

      if (this.quiz_marks == 0) {
        this.alert_next.push('Please Input  Quiz Marks');
      } else {
        this.iscomplete = true;
      }

      if (this.iscomplete) {
        this.insertFillblank();
      }

      this.quizList();
    }
  },
  // methods end
  mounted: function mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
    this.quizList();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_4 = {
  "class": "mt-5 mb-5",
  style: {
    "display": "flex",
    "justify-content": "space-between"
  }
};
var _hoisted_5 = {
  "class": "button_back"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-left"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back to Lesson ");

var _hoisted_8 = {
  "class": "button_back"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Extras ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-right"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "reading_wrapper"
};
var _hoisted_12 = {
  "class": "reading-title"
};
var _hoisted_13 = {
  "class": "inner_content"
};
var _hoisted_14 = {
  "class": "content_title"
};
var _hoisted_15 = {
  "class": "passage_content"
};
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_20 = {
  "class": "row"
};
var _hoisted_21 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_22 = {
  "class": "ans_options"
};
var _hoisted_23 = {
  "class": "inline_content"
};
var _hoisted_24 = {
  key: 0
};
var _hoisted_25 = {
  key: 1
};
var _hoisted_26 = ["value"];
var _hoisted_27 = {
  key: 2
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "single-form text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")], -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "row"
};
var _hoisted_30 = {
  "class": "col-md-12"
};
var _hoisted_31 = {
  style: {
    "margin-bottom": "20px",
    "padding": "10px"
  }
};
var _hoisted_32 = {
  "class": "table-striped",
  id: "module"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sl"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Question"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Marks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action ")], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Fill Blank", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bsimple_button_1 btn-danger button-rounded"
}, " Delete ")], -1
/* HOISTED */
);

var _hoisted_36 = {
  key: 0,
  "class": "my-5"
};
var _hoisted_37 = {
  "class": "alert alert-danger",
  role: "alert"
};
var _hoisted_38 = {
  key: 1
};
var _hoisted_39 = {
  "class": "alert alert-success",
  role: "alert"
};
var _hoisted_40 = {
  "class": "row"
};
var _hoisted_41 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_42 = {
  "class": "single-form"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Instruction to Excersize (Quiz Title):", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  "class": "col-md-6"
};
var _hoisted_46 = {
  "class": "single-form"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Marks:", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "col-md-6"
};
var _hoisted_49 = {
  "class": "single-form"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Time Limit (opitonal):", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_52 = {
  "class": "fill_blank"
};
var _hoisted_53 = {
  style: {
    "margin-bottom": "5px"
  }
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Text");

var _hoisted_56 = [_hoisted_54, _hoisted_55];

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Blank");

var _hoisted_59 = [_hoisted_57, _hoisted_58];

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Serial");

var _hoisted_62 = [_hoisted_60, _hoisted_61];
var _hoisted_63 = {
  "class": "single-form",
  style: {
    "display": "flex"
  }
};
var _hoisted_64 = {
  key: 0,
  style: {
    "width": "90%"
  }
};
var _hoisted_65 = ["onUpdate:modelValue"];
var _hoisted_66 = {
  key: 1,
  style: {
    "width": "90%"
  }
};
var _hoisted_67 = ["onUpdate:modelValue"];
var _hoisted_68 = {
  style: {
    "margin-top": "7px",
    "margin-left": "6px"
  }
};
var _hoisted_69 = ["onClick"];

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_71 = [_hoisted_70];

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "single-form text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/content/lesson/6'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6, _hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/extra_manage/' + $data.lesson_detail.id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, " Vocabulary : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.course_name) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.unit_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quiz_title), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [ans.element_type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      value: ans.blank_ans,
      "class": "fill_blank_element"
    }, null, 8
    /* PROPS */
    , _hoisted_26)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + " )", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), _hoisted_28])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_32, [_hoisted_33, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quiz_list, function (quiz_item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.question), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.marks), 1
    /* TEXT */
    ), _hoisted_34, _hoisted_35]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), $data.alert_next.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.alert_next, function (alert, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(alert), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.alert_success != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.alert_success), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handeSubmit && $options.handeSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Lesson Instruction",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.quiz_title = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.quiz_marks = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_marks]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.quiz_timelimit = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_timelimit]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addText && $options.addText.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_56), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addInput && $options.addInput.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_59), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addSerial && $options.addSerial.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_62)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans, indix) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [ans.element_type == 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Text Content",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return ans.value = $event;
      },
      style: {
        "margin-right": "5px"
      },
      required: ""
    }, null, 8
    /* PROPS */
    , _hoisted_65), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Correct Answer",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return ans.value = $event;
      },
      style: {
        "margin-right": "5px"
      },
      required: ""
    }, null, 8
    /* PROPS */
    , _hoisted_67), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeFillblank(indix);
      }, ["prevent"])
    }, _hoisted_71, 8
    /* PROPS */
    , _hoisted_69)])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), _hoisted_72], 32
  /* HYDRATE_EVENTS */
  )])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.option_input{\n    width: 90%;\n    margin-right: 10px;\n}\n.fill_blank_element{\n margin-right: 5px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_style_index_0_id_5dc7d0a4_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_style_index_0_id_5dc7d0a4_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_style_index_0_id_5dc7d0a4_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/content_developer/QuizVocabulary.vue":
/*!***********************************************************!*\
  !*** ./resources/js/content_developer/QuizVocabulary.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizVocabulary_vue_vue_type_template_id_5dc7d0a4_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true */ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true");
/* harmony import */ var _QuizVocabulary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizVocabulary.vue?vue&type=script&lang=js */ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js");
/* harmony import */ var _QuizVocabulary_vue_vue_type_style_index_0_id_5dc7d0a4_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css */ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuizVocabulary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizVocabulary_vue_vue_type_template_id_5dc7d0a4_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/content_developer/QuizVocabulary.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizVocabulary.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_template_id_5dc7d0a4_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_template_id_5dc7d0a4_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=template&id=5dc7d0a4&lang=true");


/***/ }),

/***/ "./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizVocabulary_vue_vue_type_style_index_0_id_5dc7d0a4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizVocabulary.vue?vue&type=style&index=0&id=5dc7d0a4&lang=css");


/***/ })

}]);