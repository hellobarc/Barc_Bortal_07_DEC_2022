"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[419],{2989:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(9669),o=n.n(a);n(7041);o().defaults.baseURL="http://barcportal.com/api/";const i=o().create({baseURL:"http://barcportal.com/api/",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},8092:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(2989);function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}const i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"retriveLesson",value:function(t,e,n){return a.Z.get("student/get_lesson?course_id=".concat(t,"&&module_id=").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"retriveReadingDetail",value:function(t,e){return a.Z.get("student/reading_lesson_detail?lesson_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveListeningDetail",value:function(t,e){return a.Z.get("student/listening_lesson_detail?course_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveQuizAnswer",value:function(t,e,n){return a.Z.get("student/quiz_answer?quiz_id=".concat(t,"&&quiz_type=").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"retriveQuizInput",value:function(t,e){return a.Z.get("student/quiz_answer_input?quiz_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"submitQuiz",value:function(t,e){return a.Z.post("student/submit_quiz",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveQuizResult",value:function(t,e){return a.Z.post("student/lesson_complete_detail",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveWritingQuestion",value:function(t,e){return a.Z.get("student/writing_list?course_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"addLesson",value:function(t,e){return a.Z.post("content/lesson",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"lessonById",value:function(t,e){return a.Z.get("content/lesson/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())},8295:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(3645),o=n.n(a)()((function(t){return t[1]}));o.push([t.id,"#module[data-v-108834e5]{border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;width:100%}#module td[data-v-108834e5],#module th[data-v-108834e5]{border:1px solid #ddd;padding:8px;text-align:center}#module tr[data-v-108834e5]:nth-child(2n){background-color:#f2f2f2}#module tr[data-v-108834e5]:hover{background-color:#ddd}#module th[data-v-108834e5]{background-color:#04aa6d;color:#fff;padding-bottom:12px;padding-top:12px}.btn[data-v-108834e5]{color:#fff}.btn[data-v-108834e5]:hover{color:#ddd}",""]);const i=o},4419:(t,e,n)=>{n.r(e),n.d(e,{default:()=>T});var a=n(821),o=function(t){return(0,a.dD)("data-v-108834e5"),t=t(),(0,a.Cn)(),t},i={class:"section overflow-hidden position-relative",id:"wrapper"},s={class:"py-0 px-5"},r={class:""},d={class:"container-fluid"},l={class:"section section-padding mt-n10"},u={class:"container"},c={class:"row gx-10"},v={class:"col-lg-8"},_={class:"my-3"},f={class:"button_back"},p=o((function(){return(0,a._)("i",{class:"bi bi-arrow-left"},null,-1)})),g=(0,a.Uk)(" Course Detail "),h={class:"table-responsive sm"},b={class:"table-striped",id:"module"},m=o((function(){return(0,a._)("tr",null,[(0,a._)("th",null,"Topics"),(0,a._)("th",null,"Status"),(0,a._)("th",null,"Start Learning")],-1)})),k={key:0},w=(0,a.Uk)(),y={key:0},z={class:"btn btn-success"},Z=(0,a.Uk)("Start "),A=o((function(){return(0,a._)("i",{class:"bi bi-arrow-right"},null,-1)})),D={key:1},L={class:"btn btn-success"},B=(0,a.Uk)(" Start "),C=o((function(){return(0,a._)("i",{class:"bi bi-arrow-right"},null,-1)})),q={key:2},x={class:"btn btn-success"},R=(0,a.Uk)(" Start "),U=o((function(){return(0,a._)("i",{class:"bi bi-arrow-right"},null,-1)})),S=(0,a.uE)('<div class="col-lg-4" data-v-108834e5><div class="sidebar" data-v-108834e5><div class="sidebar-widget widget-information" data-v-108834e5><div class="info-price" data-v-108834e5><span class="price" data-v-108834e5>A2 Reading</span></div><div class="info-list" data-v-108834e5><ul data-v-108834e5><li data-v-108834e5><i class="icofont-book-alt" data-v-108834e5></i> <strong data-v-108834e5>Units</strong> <span data-v-108834e5>8</span></li><li data-v-108834e5><i class="icofont-clock-time" data-v-108834e5></i> <strong data-v-108834e5>Duration</strong> <span data-v-108834e5>08 hr 15 mins</span></li><li data-v-108834e5><i class="icofont-ui-video-play" data-v-108834e5></i> <strong data-v-108834e5>Lessons</strong> <span data-v-108834e5>29</span></li><li data-v-108834e5><i class="icofont-bars" data-v-108834e5></i> <strong data-v-108834e5>Level</strong> <span data-v-108834e5>Foundation</span></li></ul></div></div></div></div>',1);var Q=n(8092);const W={name:"Reading_module",components:{},data:function(){return{page:"Reading_Module",lesson:this.$route.params.lesson,course_id:this.$route.params.course_id,module_id:this.$route.params.module_id,lesson_list:[],auth_token:this.$store.state.authToken}},methods:{retriveLesson:function(t,e,n){var a=this;Q.Z.retriveLesson(t,e,n).then((function(t){console.log(t),a.lesson_list=t.data})).catch((function(t){console.log(t)}))}},created:function(){console.log("created Reading lesson"+this.$route.params.lesson)},mounted:function(){console.log("LessonListComponent"),this.retriveLesson(this.course_id,this.module_id,this.auth_token)}};var $=n(3379),I=n.n($),j=n(8295),H={insert:"head",singleton:!1};I()(j.Z,H);j.Z.locals;const T=(0,n(3744).Z)(W,[["render",function(t,e,n,o,Q,W){var $=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a._)("div",d,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("div",c,[(0,a._)("div",v,[(0,a._)("div",_,[(0,a._)("button",f,[(0,a.Wm)($,{to:"/course-detail/"+Q.course_id},{default:(0,a.w5)((function(){return[p,g]})),_:1},8,["to"])])]),(0,a._)("div",h,[(0,a._)("table",b,[m,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Q.lesson_list,(function(t,e){return(0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",null,(0,a.zw)(t.title),1),(0,a._)("td",null,[0==t.lessonlog.length?((0,a.wg)(),(0,a.iD)("div",k,"New")):(0,a.kq)("",!0),w,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.lessonlog,(function(t,e){return(0,a.wg)(),(0,a.iD)("div",{key:e,style:{"text-transform":"capitalize"}},(0,a.zw)(t.status),1)})),128))]),(0,a._)("td",null,[1==Q.module_id?((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("button",z,[(0,a.Wm)($,{to:{name:"reading_study",params:{lesson:"reading",lesson_id:t.id,module_id:1,course_id:Q.course_id}},class:(0,a.C_)({btn:!0})},{default:(0,a.w5)((function(){return[Z,A]})),_:2},1032,["to"])])])):2==Q.module_id?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("button",L,[(0,a.Wm)($,{to:"/student/listening_study/"+Q.course_id,class:(0,a.C_)({btn:!0})},{default:(0,a.w5)((function(){return[B,C]})),_:1},8,["to"])])])):5==Q.module_id?((0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("button",x,[(0,a.Wm)($,{to:"/student/grammar_study/"+Q.course_id,class:(0,a.C_)({btn:!0})},{default:(0,a.w5)((function(){return[R,U]})),_:1},8,["to"])])])):(0,a.kq)("",!0)])])})),128))])])]),S])])])])])])])}],["__scopeId","data-v-108834e5"]])}}]);