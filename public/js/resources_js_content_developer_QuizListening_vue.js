"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_content_developer_QuizListening_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
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
      quiz_title: null,
      quiz_marks: 0,
      quiz_timelimit: 0,
      listening_track: [],
      currentTime: 0,
      checked: true,
      inputs_fillblank: [],
      auth_token: this.$store.state.authToken,
      serial: 0,
      trackplaying: true,
      quiz_type: 5,
      selected_quiztype: 5
    };
  },
  computed: {
    listeningTime: function listeningTime() {
      return Math.round(this.currentTime / 60);
    },
    indicatorWidth: function indicatorWidth() {
      return parseInt(this.current_index) * 100 / this.quizez.length;
    },
    quizCount: function quizCount() {
      return this.quizez.length;
    }
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
    lessonById: function lessonById(lesson_id, token) {
      var _this2 = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_1__["default"].lessonById(lesson_id, token).then(function (response) {
        console.log(response.data.data[0]);
        _this2.lesson_detail = response.data.data[0];
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
        quiz_type: this.selected_quiztype,
        marks: this.quiz_marks,
        time_limit: this.quiz_timelimit,
        inputs_fillblank: this.inputs_fillblank
      };
      _services_ContentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].insertFillblank(payload, token).then(function (response) {
        console.log(response);
        _this3.alert_success = response.data.message;
        _this3.alert_next = [];

        _this3.quizList();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    retriveListeningTrack: function retriveListeningTrack() {
      var _this4 = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_1__["default"].retriveListeningTrack(this.lesson_id, this.auth_token).then(function (response) {
        _this4.listening_track = response.data[0];
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

      this.insertFillblank();
    },
    play: function play() {
      this.$refs.audioPlayer.play();
      this.trackplaying = true;
    },
    pause: function pause() {
      this.$refs.audioPlayer.pause();
      this.trackplaying = false;
    },
    stop: function stop() {
      var audioPlayer = this.$refs.audioPlayer;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    },
    setSpeed: function setSpeed(speed) {
      this.$refs.audioPlayer.playbackRate = speed;
    },
    onPlaying: function onPlaying() {
      var audioPlayer = this.$refs.audioPlayer;

      if (!audioPlayer) {
        return;
      }

      this.currentTime = audioPlayer.currentTime;
      this.seekValue = audioPlayer.currentTime / audioPlayer.duration * 100;
    },
    onSeek: function onSeek() {
      var audioPlayer = this.$refs.audioPlayer;
      var seekto = audioPlayer.duration * (this.seekValue / 100);
      audioPlayer.currentTime = seekto;
    }
  },
  // methods end
  mounted: function mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
    this.quizList(this.lesson_id, this.auth_token);
    this.retriveListeningTrack();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-5",
  style: {
    "display": "flex",
    "justify-content": "space-between",
    "margin-bottom": "10px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "button_back"
}, " Course "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "button_back"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Extras "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-right"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "reading_wrapper"
};
var _hoisted_6 = {
  "class": "reading-title"
};
var _hoisted_7 = {
  "class": "inner_content"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content_title"
}, "Listen the Audio Track and answer the following questions ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "passage_content"
};
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Track title will go here")])], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-md-4 col-lg-4 col-sm-12 col-xs-12"
};
var _hoisted_15 = ["src"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your browser does not support the ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "audio", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" element. ");

var _hoisted_19 = [_hoisted_16, _hoisted_17, _hoisted_18];
var _hoisted_20 = {
  "class": "audiotracking"
};
var _hoisted_21 = {
  "class": "col-md-8 col-lg-8 col-sm-12 col-xs-12"
};
var _hoisted_22 = {
  "class": ""
};
var _hoisted_23 = {
  key: 0
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-play-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Play Audio Track");

var _hoisted_26 = [_hoisted_24, _hoisted_25];
var _hoisted_27 = {
  key: 1
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-stop-circle"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Playing ");

var _hoisted_30 = [_hoisted_28, _hoisted_29];

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-pause-btn"
}, null, -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pause ");

var _hoisted_33 = [_hoisted_31, _hoisted_32];

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-collection-play-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1.5x ");

var _hoisted_36 = [_hoisted_34, _hoisted_35];

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-collection-play-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1x ");

var _hoisted_39 = [_hoisted_37, _hoisted_38];

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-collection-play-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 0.5x ");

var _hoisted_42 = [_hoisted_40, _hoisted_41];
var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_45 = ["innerHTML"];
var _hoisted_46 = {
  "class": "row my-5"
};
var _hoisted_47 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_48 = {
  "class": "ans_options"
};
var _hoisted_49 = {
  "class": "inline_content"
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = {
  key: 1
};
var _hoisted_52 = ["value"];
var _hoisted_53 = {
  key: 2
};
var _hoisted_54 = {
  "class": "row"
};
var _hoisted_55 = {
  "class": "col-md-12"
};
var _hoisted_56 = {
  style: {
    "margin-bottom": "20px",
    "padding": "10px"
  }
};
var _hoisted_57 = {
  "class": "table-striped",
  id: "module"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sl"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Question"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Marks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action ")], -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Fill Blank", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bsimple_button_1 btn-danger button-rounded"
}, " Delete ")], -1
/* HOISTED */
);

var _hoisted_61 = {
  key: 0
};
var _hoisted_62 = {
  "class": "alert alert-danger",
  role: "alert"
};
var _hoisted_63 = {
  key: 1
};
var _hoisted_64 = {
  "class": "alert alert-success",
  role: "alert"
};
var _hoisted_65 = {
  "class": "row"
};
var _hoisted_66 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_67 = {
  "class": "single-form"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Quiz Question:", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "row"
};
var _hoisted_70 = {
  "class": "col-md-6"
};
var _hoisted_71 = {
  "class": "single-form"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Marks:", -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "col-md-6"
};
var _hoisted_74 = {
  "class": "single-form"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Time Limit (opitonal):", -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "col-md-6 col-lg-6 col-sm-12 col-xs-12"
};
var _hoisted_77 = {
  "class": "fill_blank"
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

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Text");

var _hoisted_81 = [_hoisted_79, _hoisted_80];

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Blank");

var _hoisted_84 = [_hoisted_82, _hoisted_83];

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus-circle-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Serial");

var _hoisted_87 = [_hoisted_85, _hoisted_86];
var _hoisted_88 = {
  "class": "single-form",
  style: {
    "display": "flex"
  }
};
var _hoisted_89 = {
  key: 0,
  style: {
    "width": "90%"
  }
};
var _hoisted_90 = ["onUpdate:modelValue"];
var _hoisted_91 = {
  key: 1,
  style: {
    "width": "90%"
  }
};
var _hoisted_92 = ["onUpdate:modelValue"];
var _hoisted_93 = {
  style: {
    "margin-top": "7px",
    "margin-left": "6px"
  }
};
var _hoisted_94 = ["onClick"];

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash3-fill"
}, null, -1
/* HOISTED */
);

var _hoisted_96 = [_hoisted_95];

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "single-form text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.lesson_detail.title) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.lesson_detail.unit_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("audio", {
    src: "/listening_track/".concat($data.listening_track.file_name),
    ref: "audioPlayer",
    onTimeupdate: _cache[0] || (_cache[0] = function () {
      return $options.onPlaying && $options.onPlaying.apply($options, arguments);
    })
  }, _hoisted_19, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.listeningTime) + " Mintues Played", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [$data.trackplaying == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.play && $options.play.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_26)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.play && $options.play.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_30), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.pause && $options.pause.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.setSpeed(1.5);
    }),
    "class": "player_button"
  }, _hoisted_36), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.setSpeed(1);
    }),
    "class": "player_button"
  }, _hoisted_39), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.setSpeed(0.5);
    }),
    "class": "player_button"
  }, _hoisted_42)])]))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $data.listening_track.description
  }, null, 8
  /* PROPS */
  , _hoisted_45)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, [ans.element_type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      value: ans.blank_ans,
      "class": "fill_blank_element"
    }, null, 8
    /* PROPS */
    , _hoisted_52)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type === 'serial' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ans.value) + " )", 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_57, [_hoisted_58, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quiz_list, function (quiz_item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.question), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(quiz_item.marks), 1
    /* TEXT */
    ), _hoisted_59, _hoisted_60]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), $data.alert_next.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.alert_next, function (alert, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(alert), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.alert_success != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.alert_success), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handeSubmit && $options.handeSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Lesson Title or Topics",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.quiz_title = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.quiz_marks = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_marks]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    min: "1",
    placeholder: "Marks for this quiz",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.quiz_timelimit = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quiz_timelimit]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addText && $options.addText.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_81), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addInput && $options.addInput.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_84), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "simple_button_1",
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addSerial && $options.addSerial.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_87)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.inputs_fillblank, function (ans, indix) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [ans.element_type == 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_90), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ans.element_type == 'input' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
    , _hoisted_92), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, ans.value]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "simple_button_1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeFillblank(indix);
      }, ["prevent"])
    }, _hoisted_96, 8
    /* PROPS */
    , _hoisted_94)])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), _hoisted_97], 32
  /* HYDRATE_EVENTS */
  )])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_style_index_0_id_266d1e26_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_style_index_0_id_266d1e26_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_style_index_0_id_266d1e26_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/content_developer/QuizListening.vue":
/*!**********************************************************!*\
  !*** ./resources/js/content_developer/QuizListening.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizListening_vue_vue_type_template_id_266d1e26_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizListening.vue?vue&type=template&id=266d1e26&lang=true */ "./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true");
/* harmony import */ var _QuizListening_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizListening.vue?vue&type=script&lang=js */ "./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js");
/* harmony import */ var _QuizListening_vue_vue_type_style_index_0_id_266d1e26_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css */ "./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css");
/* harmony import */ var C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_barc_portal_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuizListening_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizListening_vue_vue_type_template_id_266d1e26_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/content_developer/QuizListening.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizListening.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_template_id_266d1e26_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_template_id_266d1e26_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizListening.vue?vue&type=template&id=266d1e26&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=template&id=266d1e26&lang=true");


/***/ }),

/***/ "./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListening_vue_vue_type_style_index_0_id_266d1e26_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/content_developer/QuizListening.vue?vue&type=style&index=0&id=266d1e26&lang=css");


/***/ })

}]);