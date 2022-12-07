"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_content_developer_QuizReading_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_draggable_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-draggable-next */ "./node_modules/vue-draggable-next/dist/vue-draggable-next.esm-bundler.js");
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
/* harmony import */ var _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ContentDataService */ "./resources/js/services/ContentDataService.js");
/* harmony import */ var _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student_components/spare_components/quiz/QuestionCount.vue */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue");
/* harmony import */ var _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueup/vue-quill */ "./node_modules/@vueup/vue-quill/dist/vue-quill.esm-bundler.js");
/* harmony import */ var _vueup_vue_quill_dist_vue_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueup/vue-quill/dist/vue-quill.snow.css */ "./node_modules/@vueup/vue-quill/dist/vue-quill.snow.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Content Quiz',
  components: {
    draggable: vue_draggable_next__WEBPACK_IMPORTED_MODULE_6__.VueDraggableNext,
    QuestionCount: _student_components_spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    QuillEditor: _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditor
  },
  data: function data() {
    return {
      lesson_id: this.$route.params.lesson,
      lesson_detail: {},
      quiz_list: {},
      article: {},
      alert_next: [],
      alert_success: null,
      iscomplete: false,
      question_type: null,
      quiz_title: null,
      quiz_marks: 0,
      quiz_timelimit: 0,
      selected_quiztype: 0,
      quiz_type: [{
        name: 'Select a Quiz type',
        id: 0,
        value: null
      }, {
        name: 'True False',
        id: 1,
        value: 'true_false'
      }, {
        name: 'Multiple Choise',
        id: 2,
        value: 'multiple_choise'
      }, {
        name: 'Re-Order',
        id: 3,
        value: 're_order'
      }, {
        name: 'Radio',
        id: 4,
        value: 'radio'
      }, {
        name: 'Fill Blank',
        id: 5,
        value: 'fill_blank'
      }, {
        name: 'Drop Down',
        id: 6,
        value: 'drop_down'
      }, {
        name: 'Drag and Drop',
        id: 7
      }],
      checked: true,
      inputs_truefalse: [{
        name: 'True',
        value: 'True',
        iscorrect: false
      }, {
        name: 'False',
        value: 'False',
        iscorrect: false
      }],
      inputs_muilteple: [{
        name: '',
        value: '',
        iscorrect: false
      }],
      inputs_radio: [],
      inputs_fillblank: [],
      inputs_dropdown: [],
      inputs_reorder: [],
      auth_token: this.$store.state.authToken,
      serial: 0
    };
  },
  methods: {
    quizList: function quizList() {
      var _this = this;

      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].quizList(this.lesson_id, this.auth_token).then(function (response) {
        console.log(response.data.quizlist);
        _this.quiz_list = response.data.quizlist;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addOption: function addOption() {
      this.inputs_muilteple.push({
        name: '',
        value: '',
        iscorrect: false
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
    addDropdownText: function addDropdownText() {
      this.inputs_dropdown.push({
        name: '',
        value: '',
        element_type: 'text'
      });
    },
    addDropdownOption: function addDropdownOption() {
      this.inputs_dropdown.push({
        name: '',
        value: '',
        element_type: 'dropdown'
      });
    },
    addDropdownSerial: function addDropdownSerial() {
      this.serial += 1;
      this.inputs_dropdown.push({
        name: '',
        value: this.serial,
        element_type: 'serial'
      });
    },
    addReorder: function addReorder() {
      this.inputs_reorder.push({
        name: '',
        value: ''
      });
    },
    addRadio: function addRadio() {
      this.inputs_radio.push({
        name: '',
        value: '',
        iscorrect: ''
      });
    },
    removeOption: function removeOption(index) {
      this.inputs_muilteple.splice(index, 1);
    },
    removeFillblank: function removeFillblank(index) {
      this.inputs_fillblank.splice(index, 1);
    },
    removeReorder: function removeReorder(index) {
      this.inputs_reorder.splice(index, 1);
    },
    removeRadio: function removeRadio(index) {
      this.inputs_radio.splice(index, 1);
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
    insertTrueFalse: function insertTrueFalse(selected) {
      var _this3 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        correct_ans: selected
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertTrueFalse(payload, token).then(function (response) {
        _this3.alert_success = response.data.message;
        _this3.alert_next = [];

        _this3.quizList();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    insertMultiplechoise: function insertMultiplechoise() {
      var _this4 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_muilteple: this.inputs_muilteple
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertMultiplechoise(payload, token).then(function (response) {
        console.log(response);
        _this4.alert_success = response.data.message;
        _this4.alert_next = [];

        _this4.quizList();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    insertFillblank: function insertFillblank() {
      var _this5 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_fillblank: this.inputs_fillblank
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertFillblank(payload, token).then(function (response) {
        console.log(response);
        _this5.alert_success = response.data.message;
        _this5.alert_next = [];

        _this5.quizList();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    insertReOrder: function insertReOrder() {
      var _this6 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_reorder: this.inputs_reorder
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertReOrder(payload, token).then(function (response) {
        console.log(response);
        _this6.alert_success = response.data.message;
        _this6.alert_next = [];

        _this6.quizList();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    insertRadio: function insertRadio() {
      var _this7 = this;

      var token = this.auth_token;
      var payload = {
        lesson_id: this.lesson_id,
        question: this.quiz_title,
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_radio: this.inputs_radio
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertRadio(payload, token).then(function (response) {
        console.log(response);
        _this7.alert_success = response.data.message;
        _this7.alert_next = [];

        _this7.quizList();
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

      if (this.selected_quiztype == 0) {
        this.alert_next.push('Please select a Quiz type');
      } else {
        this.iscomplete = true;
      }

      if (this.quiz_marks == 0) {
        this.alert_next.push('Please Input  Quiz Marks');
      } else {
        this.iscomplete = true;
      }

      if (this.selected_quiztype == 1) {
        var ture_false = this.inputs_truefalse.find(function (x) {
          return x.iscorrect == true;
        });

        if (ture_false == undefined) {
          this.alert_next.push('Please select True or False any one');
        } else {
          this.iscomplete = true;
          this.insertTrueFalse(ture_false.name);
        }
      } else if (this.selected_quiztype == 2) {
        this.insertMultiplechoise();
      } else if (this.selected_quiztype == 3) {
        this.insertReOrder();
      } else if (this.selected_quiztype == 4) {
        this.insertRadio();
      } else if (this.selected_quiztype == 5) {
        this.insertFillblank();
      }

      ;

      if (this.iscomplete) {
        this.addArticle();
      }
    },
    changeQuizType: function changeQuizType(event) {
      var quiz_type = event.target.value;

      if (quiz_type == 1) {
        this.question_type = "True/False";
      } else if (quiz_type == 2) {
        this.question_type = "Multipile choise";
      } else if (quiz_type == 3) {
        this.question_type = "Re-Order";
      } else if (quiz_type == 4) {
        this.question_type = "Radio";
      } else if (quiz_type == 5) {
        this.question_type = "Fill-Blank";
      }
    },
    selectTrueFalse: function selectTrueFalse(index) {
      this.inputs_truefalse[0].iscorrect = false;
      this.inputs_truefalse[1].iscorrect = false;
      this.inputs_truefalse[index].iscorrect = true;
    }
  },
  // methods end
  mounted: function mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
    this.quizList(this.lesson_id, this.auth_token);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
  key: 0
};
var _hoisted_19 = {
  "class": "quiz_content"
};
var _hoisted_20 = {
  "class": "quiz_question"
};
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = {
  "class": "ans_options"
};
var _hoisted_23 = {
  key: 1
};
var _hoisted_24 = {
  "class": "ans_options"
};
var _hoisted_25 = {
  key: 2
};
var _hoisted_26 = ["onDragstart"];
var _hoisted_27 = {
  key: 3
};
var _hoisted_28 = {
  "class": "ans_options"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "radio",
  name: "radio"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = {
  key: 4
};
var _hoisted_31 = {
  "class": "ans_options"
};
var _hoisted_32 = {
  "class": "inline_content"
};
var _hoisted_33 = {
  key: 0
};
var _hoisted_34 = {
  key: 1
};
var _hoisted_35 = ["value"];
var _hoisted_36 = {
  key: 2
};
var _hoisted_37 = {
  key: 5
};
var _hoisted_38 = {
  "class": "ans_options"
};
var _hoisted_39 = {
  "class": "inline_content"
};
var _hoisted_40 = {
  key: 0
};
var _hoisted_41 = {
  key: 1
};
var _hoisted_42 = {
  key: 0,
  "class": "mx-2"
};
var _hoisted_43 = {
  "class": "form-select",
  "aria-label": "Filter select"
};
var _hoisted_44 = {
  key: 2
};
var _hoisted_45 = {
  key: 6
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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

var _hoisted_47 = [_hoisted_46];
var _hoisted_48 = {
  "class": "row"
};
var _hoisted_49 = {
  "class": "col-md-12"
};
var _hoisted_50 = {
  style: {
    "margin-bottom": "20px",
    "padding": "10px"
  }
};
var _hoisted_51 = {
  "class": "table-striped",
  id: "module"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sl"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Question"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Marks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action ")], -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bsimple_button_1 btn-danger button-rounded"
}, " Delete ")], -1
/* HOISTED */
);

var _hoisted_54 = {
  key: 0,
  "class": "my-5"
};
var _hoisted_55 = {
  "class": "alert alert-danger",
  role: "alert"
};
var _hoisted_56 = {
  key: 1,
  "class": "my-5"
};
var _hoisted_57 = {
  "class": "alert alert-success",
  role: "alert"
};
var _hoisted_58 = {
  "class": "row"
};
var _hoisted_59 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_60 = {
  "class": "single-form"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Quiz Question:", -1
/* HOISTED */
);

var _hoisted_62 = {
  "class": "row"
};
var _hoisted_63 = {
  "class": "col-md-6"
};
var _hoisted_64 = {
  "class": "single-form"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Marks:", -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "col-md-6"
};
var _hoisted_67 = {
  "class": "single-form"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Time Limit (opitonal):", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "single-form"
};
var _hoisted_70 = {
  "class": "single-form"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Quiz Type:", -1
/* HOISTED */
);

var _hoisted_72 = ["value"];
var _hoisted_73 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_74 = {
  key: 0
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-center"
}, "Please select the Correct Answer ", -1
/* HOISTED */
);

var _hoisted_76 = {
  key: 1,
  "class": "my-5"
};
var _hoisted_77 = {
  "class": "multiple_choise"
};
var _hoisted_78 = {
  style: {
    "margin-bottom": "5px"
  }
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Option");

var _hoisted_81 = [_hoisted_79, _hoisted_80];
var _hoisted_82 = {
  "class": "single-form"
};
var _hoisted_83 = ["onUpdate:modelValue"];
var _hoisted_84 = ["onClick"];
var _hoisted_85 = ["onClick"];

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_87 = [_hoisted_86];
var _hoisted_88 = {
  key: 2,
  "class": "my-5"
};
var _hoisted_89 = {
  "class": "re_order"
};
var _hoisted_90 = {
  style: {
    "margin-bottom": "5px"
  }
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Text");

var _hoisted_93 = [_hoisted_91, _hoisted_92];
var _hoisted_94 = {
  "class": "single-form",
  style: {
    "display": "flex"
  }
};
var _hoisted_95 = {
  style: {
    "width": "90%"
  }
};
var _hoisted_96 = ["onUpdate:modelValue"];
var _hoisted_97 = {
  style: {
    "margin-top": "7px",
    "margin-left": "6px"
  }
};
var _hoisted_98 = ["onClick"];

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_100 = [_hoisted_99];
var _hoisted_101 = {
  key: 3,
  "class": "my-5"
};
var _hoisted_102 = {
  "class": "quiz_radio"
};
var _hoisted_103 = {
  style: {
    "margin-bottom": "5px"
  }
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Radio");

var _hoisted_106 = [_hoisted_104, _hoisted_105];
var _hoisted_107 = {
  "class": "single-form"
};
var _hoisted_108 = ["onUpdate:modelValue"];
var _hoisted_109 = ["onClick"];
var _hoisted_110 = ["onClick"];

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_112 = [_hoisted_111];
var _hoisted_113 = {
  key: 4,
  "class": "my-5"
};
var _hoisted_114 = {
  "class": "fill_blank"
};
var _hoisted_115 = {
  "class": "small_item_holder my-5"
};
var _hoisted_116 = {
  "class": "small_item"
};

var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Text");

var _hoisted_119 = [_hoisted_117, _hoisted_118];
var _hoisted_120 = {
  "class": "small_item"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Blank");

var _hoisted_123 = [_hoisted_121, _hoisted_122];
var _hoisted_124 = {
  "class": "small_item"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Serial");

var _hoisted_127 = [_hoisted_125, _hoisted_126];
var _hoisted_128 = {
  "class": "single-form",
  style: {
    "display": "flex"
  }
};
var _hoisted_129 = {
  key: 0,
  style: {
    "width": "90%"
  }
};
var _hoisted_130 = ["onUpdate:modelValue"];
var _hoisted_131 = {
  key: 1,
  style: {
    "width": "90%"
  }
};
var _hoisted_132 = ["onUpdate:modelValue"];
var _hoisted_133 = {
  key: 2,
  style: {
    "width": "90%"
  }
};
var _hoisted_134 = {
  style: {
    "margin-top": "7px",
    "margin-left": "6px"
  }
};
var _hoisted_135 = ["onClick"];

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_137 = [_hoisted_136];
var _hoisted_138 = {
  key: 5,
  "class": "my-5"
};
var _hoisted_139 = {
  "class": "drop_down"
};
var _hoisted_140 = {
  "class": "small_item_holder my-5"
};
var _hoisted_141 = {
  "class": "small_item"
};

var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Text");

var _hoisted_144 = [_hoisted_142, _hoisted_143];
var _hoisted_145 = {
  "class": "small_item"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add DropDown");

var _hoisted_148 = [_hoisted_146, _hoisted_147];
var _hoisted_149 = {
  "class": "small_item"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Serial");

var _hoisted_152 = [_hoisted_150, _hoisted_151];
var _hoisted_153 = {
  "class": "single-form",
  style: {
    "display": "flex"
  }
};
var _hoisted_154 = {
  key: 0,
  style: {
    "width": "90%"
  }
};
var _hoisted_155 = ["onUpdate:modelValue"];
var _hoisted_156 = {
  key: 1,
  style: {
    "width": "90%"
  }
};
var _hoisted_157 = ["onUpdate:modelValue"];
var _hoisted_158 = {
  key: 2,
  style: {
    "width": "90%"
  }
};
var _hoisted_159 = {
  style: {
    "margin-top": "7px",
    "margin-left": "6px"
  }
};
var _hoisted_160 = ["onClick"];

var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_162 = [_hoisted_161];

var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "single-form text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_QuestionCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuestionCount");

  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");

  var _component_QuillEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuillEditor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lesson : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.title) + " (Add a Quiz for this Lesson) ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.description), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.title) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lesson_detail.unit_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.content), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [$data.question_type != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuestionCount, {
    text: $data.question_type ? $data.question_type : 'Not set',
    index: 0,
    quizz_count: 1
  }, null, 8
  /* PROPS */
  , ["text"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quiz_title), 1
  /* TEXT */
  ), $data.selected_quiztype == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_truefalse, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        option_item_selected: ans.iscorrect
      }, "option_item"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 3
    /* TEXT, CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_muilteple, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        option_item_selected: ans.iscorrect
      }, "option_item"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 3
    /* TEXT, CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_draggable, {
    modelValue: $data.inputs_reorder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.inputs_reorder = $event;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_reorder, function (element, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              "class": "draggable_item",
              onDragstart: function onDragstart($event) {
                return $options.handeMouseup($event, element.id);
              }
            }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1
            /* TEXT */
            ))], 40
            /* PROPS, HYDRATE_EVENTS */
            , _hoisted_26);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_radio, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 1
    /* TEXT */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [ans.element_type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      value: ans.blank_ans,
      "class": "fill_blank_element"
    }, null, 8
    /* PROPS */
    , _hoisted_35)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + " )", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_dropdown, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [ans.element_type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'dropdown' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, [ans.value.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_43, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(ans.value.split('/'), function (option_text) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option_text), 1
      /* TEXT */
      );
    }), 256
    /* UNKEYED_FRAGMENT */
    ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + " )", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, _hoisted_47)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_51, [_hoisted_52, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quiz_list, function (quiz_item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.question), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.marks), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quiz_type[quiz_item.quiz_type].name), 1
    /* TEXT */
    ), _hoisted_53]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), $data.alert_next.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.alert_next, function (alert, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(alert), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.alert_success != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.alert_success), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handeSubmit && $options.handeSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.quiz_title,
    "onUpdate:content": _cache[1] || (_cache[1] = function ($event) {
      return $data.quiz_title = $event;
    }),
    contentType: "html"
  }, null, 8
  /* PROPS */
  , ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.quiz_marks = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_marks]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.quiz_timelimit = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_timelimit]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "myselect",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.selected_quiztype = $event;
    }),
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return $options.changeQuizType($event);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quiz_type, function (quiztype, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: quiztype.id,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiztype.name), 9
    /* TEXT, PROPS */
    , _hoisted_72);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selected_quiztype]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [$data.selected_quiztype == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      option_item_selected: $data.inputs_truefalse[0].iscorrect
    }, "option_item"]),
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.selectTrueFalse(0);
    })
  }, " True ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      option_item_selected: $data.inputs_truefalse[1].iscorrect
    }, "option_item"]),
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.selectTrueFalse(1);
    })
  }, " False ", 2
  /* CLASS */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addOption && $options.addOption.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_81)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_muilteple, function (ans, indi) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Option Text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return ans.value = $event;
      },
      style: {
        "width": "60%",
        "margin-right": "5px"
      }
    }, null, 8
    /* PROPS */
    , _hoisted_83), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["simple_button_1", {
        selected_simple: ans.iscorrect
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return ans.iscorrect = !ans.iscorrect;
      }, ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.iscorrect ? 'Correct' : 'Incorrect'), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_84), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: function onClick($event) {
        return $options.removeOption(indi);
      }
    }, _hoisted_87, 8
    /* PROPS */
    , _hoisted_85)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addReorder && $options.addReorder.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_93)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_reorder, function (ans, indix) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_96), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeReorder(indix);
      }, ["prevent"])
    }, _hoisted_100, 8
    /* PROPS */
    , _hoisted_98)])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.inputs_radio) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addRadio && $options.addRadio.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_106)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_radio, function (ans, indi) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Text Content",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return ans.value = $event;
      },
      style: {
        "width": "75%",
        "margin-right": "5px"
      },
      required: ""
    }, null, 8
    /* PROPS */
    , _hoisted_108), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["simple_button_1", {
        selected_simple: ans.iscorrect
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return ans.iscorrect = !ans.iscorrect;
      }, ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.iscorrect ? 'Correct' : 'Incorrect'), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_109), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: function onClick($event) {
        return $options.removeRadio(indi);
      }
    }, _hoisted_112, 8
    /* PROPS */
    , _hoisted_110)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addText && $options.addText.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_119)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addInput && $options.addInput.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_123)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addSerial && $options.addSerial.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_127)])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans, indix) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [ans.element_type == 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_130), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_132), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + ")", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeFillblank(indix);
      }, ["prevent"])
    }, _hoisted_137, 8
    /* PROPS */
    , _hoisted_135)])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selected_quiztype == 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addDropdownText && $options.addDropdownText.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_144)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addDropdownOption && $options.addDropdownOption.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_148)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addDropdownSerial && $options.addDropdownSerial.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_152)])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_dropdown, function (ans, indix) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [ans.element_type == 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_155), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'dropdown' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Dropdown Option Text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return ans.value = $event;
      },
      style: {
        "margin-right": "5px"
      },
      required: ""
    }, null, 8
    /* PROPS */
    , _hoisted_157), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + ")", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeFillblank(indix);
      }, ["prevent"])
    }, _hoisted_162, 8
    /* PROPS */
    , _hoisted_160)])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_163], 32
  /* HYDRATE_EVENTS */
  )])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_style_index_0_id_7b87e684_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_style_index_0_id_7b87e684_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_style_index_0_id_7b87e684_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/content_developer/QuizReading.vue":
/*!********************************************************!*\
  !*** ./resources/js/content_developer/QuizReading.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizReading_vue_vue_type_template_id_7b87e684_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizReading.vue?vue&type=template&id=7b87e684&lang=true */ "./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true");
/* harmony import */ var _QuizReading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizReading.vue?vue&type=script&lang=js */ "./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js");
/* harmony import */ var _QuizReading_vue_vue_type_style_index_0_id_7b87e684_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css */ "./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuizReading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizReading_vue_vue_type_template_id_7b87e684_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/content_developer/QuizReading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizReading.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_template_id_7b87e684_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_template_id_7b87e684_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizReading.vue?vue&type=template&id=7b87e684&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=template&id=7b87e684&lang=true");


/***/ }),

/***/ "./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizReading_vue_vue_type_style_index_0_id_7b87e684_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizReading.vue?vue&type=style&index=0&id=7b87e684&lang=css");


/***/ })

}]);