"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{8535:(t,i,n)=>{n.d(i,{Z:()=>o});var e=n(3645),s=n.n(e)()((function(t){return t[1]}));s.push([t.id,".question_list[data-v-1b8e34f8]{margin-bottom:40px;margin-top:40px}.question_item[data-v-1b8e34f8]{font-weight:700}.question_text[data-v-1b8e34f8]{color:#000;font-weight:500}",""]);const o=s},9643:(t,i,n)=>{n.r(i),n.d(i,{default:()=>I});var e=n(821),s=function(t){return(0,e.dD)("data-v-1b8e34f8"),t=t(),(0,e.Cn)(),t},o={class:"section overflow-hidden position-relative",id:"wrapper",style:{background:"aliceblue"}},a={class:"py-0 px-5"},l={class:""},r={class:"container-fluid"},u={class:"section section-padding mt-n10"},d={class:"container-fluid"},c={class:"row gx-10"},_={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},m={style:{"margin-bottom":"10px"}},p={class:"button_back"},f=s((function(){return(0,e._)("i",{class:"bi bi-arrow-left"},null,-1)})),g=(0,e.Uk)(" Back "),v={class:"row"},h={style:{display:"flex","justify-content":"space-between",border:"1px solid #ddd",padding:"5px",margin:"10px"}},b=(0,e.Uk)("Your name : "),w=s((function(){return(0,e._)("i",{class:"bi bi-clock"},null,-1)})),k=s((function(){return(0,e._)("div",{class:"badge bg-primary"}," Help",-1)})),x={class:"row gx-10"},y={class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},q={style:{"margin-bottom":"10px",border:"1px solid #ccc",background:"#fff",padding:"15px"}},C=s((function(){return(0,e._)("div",null,[(0,e._)("p",null,"You should spend about 60 minutes on this task. Write at least 150 words.")],-1)})),T={class:"row gx-10"},U={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},W={style:{padding:"10px"}},D=["innerHTML"],Z={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},$={key:0,class:"message"},z={class:"alert alert-success",role:"alert"},S={class:"mb-3"},H=s((function(){return(0,e._)("div",null,[(0,e._)("div",{class:"submit_button"},[(0,e._)("button",{class:"btn btn-primary btn-xs"}," Submit ")])],-1)}));var L=n(8092);function M(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}const Q={name:"Writing_list",components:{},data:function(){var t;return M(t={page:"Righting List",auth_token:this.$store.state.authToken,question_id:this.$route.params.question_id,course_id:this.$route.params.course_id,task:this.$route.params.task,writing_quesiton:[]},"auth_token",this.$store.state.authToken),M(t,"form_data",{input_task:null}),M(t,"course_id",1),M(t,"timerCount",60),M(t,"timerUsed",0),M(t,"message",null),t},computed:{wordCount:function(){return null!=this.form_data.input_task?this.form_data.input_task.split(" ").length:0}},methods:{writingQuestionDetail:function(){var t=this;L.Z.writingQuestionDetail(this.question_id,this.auth_token).then((function(i){console.log(i),t.writing_quesiton=i.data})).catch((function(t){console.log(t)}))},handleSubmit:function(){var t=this,i={writing_question_id:this.question_id,task_text:this.form_data.input_task,time_used:this.timerUsed};L.Z.submitWritingTask(i,this.auth_token).then((function(i){t.message=i.data})).catch((function(t){console.log(t)}))}},watch:{timerCount:{handler:function(t){var i=this;t>0&&setTimeout((function(){i.timerCount--,i.timerUsed++}),6e4)},immediate:!0}},mounted:function(){console.log("WritingtestComponent"),this.writingQuestionDetail()}};var j=n(3379),Y=n.n(j),B=n(8535),F={insert:"head",singleton:!1};Y()(B.Z,F);B.Z.locals;const I=(0,n(3744).Z)(Q,[["render",function(t,i,n,s,L,M){var Q=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",o,[(0,e._)("div",a,[(0,e._)("div",l,[(0,e._)("div",r,[(0,e._)("div",u,[(0,e._)("div",d,[(0,e._)("div",c,[(0,e._)("div",_,[(0,e._)("div",m,[(0,e._)("button",p,[(0,e.Wm)(Q,{to:{name:"writing-list",params:{course_id:L.course_id}}},{default:(0,e.w5)((function(){return[f,g]})),_:1},8,["to"])])])])]),(0,e._)("div",v,[(0,e._)("div",h,[(0,e._)("div",null,[b,(0,e._)("strong",null,(0,e.zw)(this.$store.state.name),1)]),(0,e._)("div",null,[w,(0,e.Uk)(" "+(0,e.zw)(L.timerCount)+" minutes remaining",1)]),k])]),(0,e._)("div",x,[(0,e._)("div",y,[(0,e._)("div",q,[(0,e._)("div",null,[(0,e._)("h2",null,(0,e.zw)(L.writing_quesiton.title),1)]),C])])]),(0,e._)("div",T,[(0,e._)("div",U,[(0,e._)("div",W,[(0,e._)("div",null,[(0,e._)("div",{innerHTML:L.writing_quesiton.description},null,8,D)])])]),(0,e._)("div",Z,[(0,e._)("div",null,[null!=L.message?((0,e.wg)(),(0,e.iD)("div",$,[(0,e._)("div",z,(0,e.zw)(L.message),1)])):(0,e.kq)("",!0),(0,e._)("form",{onSubmit:i[1]||(i[1]=(0,e.iM)((function(){return M.handleSubmit&&M.handleSubmit.apply(M,arguments)}),["prevent"]))},[(0,e._)("div",null,[(0,e._)("div",S,[(0,e.wy)((0,e._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",placeholder:"Write your essay here",rows:"20","onUpdate:modelValue":i[0]||(i[0]=function(t){return L.form_data.input_task=t})},null,512),[[e.nr,L.form_data.input_task]])]),(0,e._)("div",null,"Word Count: "+(0,e.zw)(M.wordCount),1)]),H],32)])])])])])])])])])}],["__scopeId","data-v-1b8e34f8"]])}}]);