"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_student_components_ListeningComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LessonDataService */ "./resources/js/services/LessonDataService.js");
/* harmony import */ var _spare_components_quiz_QuizRadio_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spare_components/quiz/QuizRadio.vue */ "./resources/js/student_components/spare_components/quiz/QuizRadio.vue");
/* harmony import */ var _spare_components_quiz_QuizDragdrop_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spare_components/quiz/QuizDragdrop.vue */ "./resources/js/student_components/spare_components/quiz/QuizDragdrop.vue");
/* harmony import */ var _spare_components_quiz_QuizReorder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spare_components/quiz/QuizReorder.vue */ "./resources/js/student_components/spare_components/quiz/QuizReorder.vue");
/* harmony import */ var _spare_components_quiz_QuizMultiple_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spare_components/quiz/QuizMultiple.vue */ "./resources/js/student_components/spare_components/quiz/QuizMultiple.vue");
/* harmony import */ var _spare_components_quiz_QuizTrueFalse_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spare_components/quiz/QuizTrueFalse.vue */ "./resources/js/student_components/spare_components/quiz/QuizTrueFalse.vue");
/* harmony import */ var _spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spare_components/quiz/QuestionCount.vue */ "./resources/js/student_components/spare_components/quiz/QuestionCount.vue");
/* harmony import */ var _spare_components_quiz_QuizInput_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spare_components/quiz/QuizInput.vue */ "./resources/js/student_components/spare_components/quiz/QuizInput.vue");
/* harmony import */ var _spare_components_quiz_QuizCongratulation_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spare_components/quiz/QuizCongratulation.vue */ "./resources/js/student_components/spare_components/quiz/QuizCongratulation.vue");
/* harmony import */ var vue3_audio_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue3-audio-player */ "./node_modules/vue3-audio-player/dist/index.es.js");
/* harmony import */ var vue3_audio_player_dist_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue3-audio-player/dist/style.css */ "./node_modules/vue3-audio-player/dist/style.css");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    QuizMultiple: _spare_components_quiz_QuizMultiple_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    QuizTrueFalse: _spare_components_quiz_QuizTrueFalse_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    QuizReorder: _spare_components_quiz_QuizReorder_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    QuizDragdrop: _spare_components_quiz_QuizDragdrop_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QuizRadio: _spare_components_quiz_QuizRadio_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    QuizInput: _spare_components_quiz_QuizInput_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    QuestionCount: _spare_components_quiz_QuestionCount_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    QuizCongratulation: _spare_components_quiz_QuizCongratulation_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    AudioPlayer: vue3_audio_player__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      page: "Listening Page",
      module_name: "Listening",
      auth_token: this.$store.state.authToken,
      course_id: this.$route.params.course_id,
      lesson_id: this.$route.params.lesson_id,
      detail: [],
      listening_track: [],
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
      },
      currentTime: 0,
      seekValue: 0,
      trackplaying: false
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
    retriveListeningDetail: function retriveListeningDetail() {
      var _this = this;

      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveListeningDetail(this.course_id, this.auth_token).then(function (response) {
        _this.detail = response.data;
        _this.unit = response.data.unit;
        _this.quizez = response.data.quiz;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    retriveListeningTrack: function retriveListeningTrack() {
      var _this2 = this;

      console.log("Listening track");
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveListeningTrack(this.lesson_id, this.auth_token).then(function (response) {
        _this2.listening_track = response.data[0];
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
      var _this3 = this;

      this.current_index += 1;
      var quiz_id = event.quiz_id;
      var selected_ans = event.selected_ans;
      var payload = {
        quiz_id: quiz_id,
        selected_ans: selected_ans
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].submitQuiz(payload, this.auth_token).then(function (res) {
        console.log(res.data);
        _this3.is_complete = true;

        _this3.retriveQuizResult();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    retriveQuizResult: function retriveQuizResult() {
      var _this4 = this;

      var lesson_id = this.lesson_id;
      var payload = {
        lesson_id: lesson_id
      };
      _services_LessonDataService__WEBPACK_IMPORTED_MODULE_0__["default"].retriveQuizResult(payload, this.auth_token).then(function (res) {
        _this4.quiz_complete.coures_id = res.data.coures_id;
        _this4.quiz_complete.unit_name = res.data.lesson.unit.unit_name;
        _this4.quiz_complete.lesson_name = res.data.lesson.title;
        _this4.quiz_complete.study_minutes = res.data.lesson.study_minutes;
        _this4.quiz_complete.study_hours = res.data.lesson.study_hour;
        _this4.quiz_complete.marks_percent = res.data.mark_percent;
      })["catch"](function (err) {});
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
  created: function created() {// console.log("created Reading lesson"+this.$route.params.lesson);
  },
  mounted: function mounted() {
    console.log("ListeningComponent");
    this.retriveListeningDetail();
    this.retriveListeningTrack();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4b935829"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-arrow-left"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Course ");

var _hoisted_11 = {
  "class": "button_back"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Extras ");

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-arrow-right"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_14 = {
  "class": "reading_wrapper"
};
var _hoisted_15 = {
  "class": "reading-title"
};
var _hoisted_16 = {
  "class": "inner_content"
};

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "content_title"
  }, "Listen the Audio Track and answer the following questions ", -1
  /* HOISTED */
  );
});

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
  "class": "row"
};
var _hoisted_22 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_23 = {
  "class": "row"
};
var _hoisted_24 = {
  "class": "col-md-4 col-lg-4 col-sm-12 col-xs-12"
};
var _hoisted_25 = ["src"];

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your browser does not support the ");

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "audio", -1
  /* HOISTED */
  );
});

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" element. ");

var _hoisted_29 = [_hoisted_26, _hoisted_27, _hoisted_28];
var _hoisted_30 = {
  "class": "audiotracking"
};
var _hoisted_31 = {
  "class": "col-md-8 col-lg-8 col-sm-12 col-xs-12"
};
var _hoisted_32 = {
  "class": ""
};
var _hoisted_33 = {
  key: 0
};

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-play-circle-fill"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Play Audio Track");

var _hoisted_36 = [_hoisted_34, _hoisted_35];
var _hoisted_37 = {
  key: 1
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-stop-circle"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Playing ");

var _hoisted_40 = [_hoisted_38, _hoisted_39];

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-pause-btn"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pause ");

var _hoisted_43 = [_hoisted_41, _hoisted_42];

var _hoisted_44 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-collection-play-fill"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 0.5x ");

var _hoisted_46 = [_hoisted_44, _hoisted_45];

var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-collection-play-fill"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1x ");

var _hoisted_49 = [_hoisted_47, _hoisted_48];

var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-collection-play-fill"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1.5x ");

var _hoisted_52 = [_hoisted_50, _hoisted_51];

var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-collection-play-fill"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2x ");

var _hoisted_55 = [_hoisted_53, _hoisted_54];
var _hoisted_56 = {
  "class": "row"
};
var _hoisted_57 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_58 = ["innerHTML"];
var _hoisted_59 = {
  "class": "row"
};
var _hoisted_60 = {
  "class": "col-md-12 col-lg-12 col-sm-12 col-xs-12"
};
var _hoisted_61 = {
  key: 0
};
var _hoisted_62 = {
  key: 1
};
var _hoisted_63 = {
  key: 0
};
var _hoisted_64 = {
  key: 1
};
var _hoisted_65 = {
  key: 2
};
var _hoisted_66 = {
  key: 3
};
var _hoisted_67 = {
  key: 4
};
var _hoisted_68 = {
  key: 5
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_QuizCongratulation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizCongratulation");

  var _component_QuizTrueFalse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizTrueFalse");

  var _component_QuizMultiple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizMultiple");

  var _component_QuizReorder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizReorder");

  var _component_QuizRadio = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizRadio");

  var _component_QuizInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizInput");

  var _component_QuizDragdrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuizDragdrop");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/course-detail/' + $data.course_id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
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
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.listening_track.title), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("audio", {
    src: "/listening_track/".concat($data.listening_track.file_name),
    ref: "audioPlayer",
    onTimeupdate: _cache[0] || (_cache[0] = function () {
      return $options.onPlaying && $options.onPlaying.apply($options, arguments);
    })
  }, _hoisted_29, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.listeningTime) + " Mintues Played", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [$data.trackplaying == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.play && $options.play.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_36)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.play && $options.play.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.pause && $options.pause.apply($options, arguments);
    }),
    "class": "player_button"
  }, _hoisted_43), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.setSpeed(0.5);
    }),
    "class": "player_button"
  }, _hoisted_46), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.setSpeed(1);
    }),
    "class": "player_button"
  }, _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.setSpeed(1.5);
    }),
    "class": "player_button"
  }, _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.setSpeed(2);
    }),
    "class": "player_button"
  }, _hoisted_55)])]))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $data.listening_track.description
  }, null, 8
  /* PROPS */
  , _hoisted_58)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [$data.is_complete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("completed"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizCongratulation, {
    quiz_complete: $data.quiz_complete,
    module_name: $data.module_name
  }, null, 8
  /* PROPS */
  , ["quiz_complete", "module_name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" completed")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_62, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.quizez, function (quiz, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [quiz.quiz_type == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizTrueFalse, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 2 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizMultiple, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 3 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizReorder, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 4 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizRadio, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 5 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizInput, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : quiz.quiz_type == 6 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuizDragdrop, {
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
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == $data.current_index]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]))])])])])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.audiotracking[data-v-4b935829]{\n        border: 1px solid;\n    text-align: center;\n    padding: 10px;\n    font-family: cursive;\n    font-weight: 900;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_style_index_0_id_4b935829_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_style_index_0_id_4b935829_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_style_index_0_id_4b935829_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/student_components/ListeningComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/student_components/ListeningComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListeningComponent_vue_vue_type_template_id_4b935829_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true */ "./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true");
/* harmony import */ var _ListeningComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListeningComponent.vue?vue&type=script&lang=js */ "./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ListeningComponent_vue_vue_type_style_index_0_id_4b935829_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css */ "./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_Portal_backup_30_nov_2022_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_Portal_backup_30_nov_2022_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ListeningComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ListeningComponent_vue_vue_type_template_id_4b935829_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4b935829"],['__file',"resources/js/student_components/ListeningComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListeningComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_template_id_4b935829_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_template_id_4b935829_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=template&id=4b935829&scoped=true");


/***/ }),

/***/ "./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListeningComponent_vue_vue_type_style_index_0_id_4b935829_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/student_components/ListeningComponent.vue?vue&type=style&index=0&id=4b935829&scoped=true&lang=css");


/***/ })

}]);