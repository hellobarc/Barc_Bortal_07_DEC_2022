"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[367],{8092:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(2989);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"retriveLesson",value:function(t,e,n){return i.Z.get("student/get_lesson?course_id=".concat(t,"&&module_id=").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"retriveReadingDetail",value:function(t,e){return i.Z.get("student/reading_lesson_detail?lesson_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveListeningDetail",value:function(t,e){return i.Z.get("student/listening_lesson_detail?course_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveListeningTrack",value:function(t,e){return i.Z.get("student/listening_track_by_lesson?lesson_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveQuizAnswer",value:function(t,e,n){return i.Z.get("student/quiz_answer?quiz_id=".concat(t,"&&quiz_type=").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"retriveQuizRadio",value:function(t,e,n){return i.Z.get("student/quiz_radio?quiz_id=".concat(t,"&&quiz_type=").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"retriveQuizInput",value:function(t,e){return i.Z.get("student/quiz_answer_input?quiz_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveQuizReorder",value:function(t,e){return i.Z.get("student/quiz_reorder?quiz_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"submitQuiz",value:function(t,e){return i.Z.post("student/submit_quiz",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveQuizResult",value:function(t,e){return i.Z.post("student/lesson_complete_detail",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"retriveWritingQuestion",value:function(t,e){return i.Z.get("student/writing_list?course_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"addLesson",value:function(t,e){return i.Z.post("content/lesson",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"lessonById",value:function(t,e){return i.Z.get("content/lesson/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}}])&&a(e.prototype,n),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}())},3165:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(3645),a=n.n(i)()((function(t){return t[1]}));a.push([t.id,".question_list[data-v-75457841]{margin-bottom:40px;margin-top:40px}.question_item[data-v-75457841]{font-weight:700}.question_text[data-v-75457841]{color:#000;font-weight:500}",""]);const o=a},6236:(t,e,n)=>{n.r(e),n.d(e,{default:()=>W});var i=n(821),a=function(t){return(0,i.dD)("data-v-75457841"),t=t(),(0,i.Cn)(),t},o={class:"section overflow-hidden position-relative",id:"wrapper",style:{background:"aliceblue"}},r={class:"py-0 px-5"},s={class:""},l={class:"container-fluid"},c={class:"section section-padding mt-n10"},u={class:"container-fluid"},d=(0,i.uE)('<div class="row gx-10" data-v-75457841><div class="col-md-6 col-lg-6 col-sm-12 col-xs-12" data-v-75457841><div style="margin-bottom:10px;" data-v-75457841><button class="button_back" data-v-75457841><i class="bi bi-arrow-left" data-v-75457841></i> Back to Writing List </button></div></div></div>',1),v={class:"row"},_={style:{display:"flex","justify-content":"space-between",border:"1px solid #ddd",padding:"5px",margin:"10px"}},p=(0,i.Uk)("Your name : "),g=a((function(){return(0,i._)("div",null,[(0,i._)("i",{class:"bi bi-clock"}),(0,i.Uk)(" 60 minutes remaining")],-1)})),h=a((function(){return(0,i._)("div",{class:"badge bg-primary"}," Help",-1)})),m=a((function(){return(0,i._)("div",{class:"row gx-10"},[(0,i._)("div",{class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},[(0,i._)("div",{style:{"margin-bottom":"10px",border:"1px solid #ccc",background:"#fff",padding:"15px"}},[(0,i._)("div",null,[(0,i._)("h2",null,"Academic Writing Part 1")]),(0,i._)("div",null,[(0,i._)("p",null,"You should spend about 20 minutes on this task. Write at least 150 words.")])])])],-1)})),f={class:"row gx-10"},y={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},b={style:{padding:"10px"}},k=a((function(){return(0,i._)("p",null," The cart below shows the number of trips made by children in one country in 1990 to travel to aand from school using different modes of transport. ",-1)})),w=a((function(){return(0,i._)("p",null," Summarise the information by selecting and reporting the main features, and make a comparisons where relavant. ",-1)})),x=["src"],z={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},Z={class:"mb-3"},A=(0,i.uE)('<div class="row" data-v-75457841><div style="display:flex;justify-content:space-between;border:1px solid #ddd;padding:5px;margin:10px;" data-v-75457841><div style="display:inline-flex;" data-v-75457841><div class="m-2" data-v-75457841><input type="checkbox" data-v-75457841> Review </div><div class="small_button" data-v-75457841>1</div><div class="small_button" data-v-75457841>2</div></div><div style="margin-top:10px;" data-v-75457841><i class="bi bi-clock" data-v-75457841></i>60 minutes remaining</div></div></div>',1);var B=n(8092);const q={name:"Writing_list",components:{},data:function(){return{page:"Righting List",lesson:this.$route.params.lesson,example_img:"/writing_task/task_1_example.png",writing_list:[],auth_token:this.$store.state.authToken,input_task:""}},computed:{wordCount:function(){return this.input_task.split(" ").length}},methods:{retriveLesson:function(t,e,n){var i=this;B.Z.retriveLesson(t,e,n).then((function(t){console.log(t),i.lesson_list=t.data})).catch((function(t){console.log(t)}))}},created:function(){console.log("created Reading lesson"+this.$route.params.lesson)},mounted:function(){console.log("LessonListComponent"),this.retriveLesson(this.course_id,this.module_id,this.auth_token)}};var L=n(3379),C=n.n(L),Q=n(3165),R={insert:"head",singleton:!1};C()(Q.Z,R);Q.Z.locals;const W=(0,n(3744).Z)(q,[["render",function(t,e,n,a,B,q){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[(0,i._)("div",s,[(0,i._)("div",l,[(0,i._)("div",c,[(0,i._)("div",u,[d,(0,i._)("div",v,[(0,i._)("div",_,[(0,i._)("div",null,[p,(0,i._)("strong",null,(0,i.zw)(this.$store.state.name),1)]),g,h])]),m,(0,i._)("div",f,[(0,i._)("div",y,[(0,i._)("div",b,[(0,i._)("div",null,[k,w,(0,i._)("p",null,[(0,i._)("img",{src:B.example_img},null,8,x)])])])]),(0,i._)("div",z,[(0,i._)("div",null,[(0,i._)("div",null,[(0,i._)("div",Z,[(0,i.wy)((0,i._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",placeholder:"Write your essay here",rows:"20","onUpdate:modelValue":e[0]||(e[0]=function(t){return B.input_task=t})},null,512),[[i.nr,B.input_task]])]),(0,i._)("div",null,"Word Count: "+(0,i.zw)(q.wordCount),1)])])])]),A])])])])])])}],["__scopeId","data-v-75457841"]])}}]);