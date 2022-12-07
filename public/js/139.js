"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{1489:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(2989);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"allLesson",value:function(t){return r.Z.get("content/lesson",{headers:{Authorization:"Bearer ".concat(t),Accept:"application/json"}})}},{key:"lessonByModule",value:function(t,e){return r.Z.get("content/lessonby_module?module_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"lessonByModuleCourse",value:function(t,e,n){return r.Z.get("content/lessonby_module_course?module_id=".concat(e,"&&course_id=").concat(t),{headers:{Authorization:"Bearer ".concat(n)}})}},{key:"allArticle",value:function(t){return r.Z.get("content/article",{headers:{Authorization:"Bearer ".concat(t),Accept:"application/json"}})}},{key:"addArticle",value:function(t,e){return r.Z.post("content/article",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"addTrack",value:function(t,e){return r.Z.post("content/listeningrack",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"insertTrueFalse",value:function(t,e){return r.Z.post("content/insert_truefalse",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"insertMultiplechoise",value:function(t,e){return r.Z.post("content/insert_multiplechoise",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"insertFillblank",value:function(t,e){return r.Z.post("content/insert_fillblank",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"insertReOrder",value:function(t,e){return r.Z.post("content/insert_reorder",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"insertRadio",value:function(t,e){return r.Z.post("content/insert_radio",t,{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"contentStats",value:function(t){return r.Z.get("content/stats",{headers:{Authorization:"Bearer ".concat(t)}})}},{key:"quizList",value:function(t,e){return r.Z.get("content/quizbylesson?lesson_id=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"allQuizes",value:function(t){return r.Z.get("content/article",{headers:{Authorization:"Bearer ".concat(t)}})}},{key:"allListeningtrack",value:function(t){return r.Z.get("content/listeningrack",{headers:{Authorization:"Bearer ".concat(t)}})}}])&&a(e.prototype,n),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}())},3139:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var r=n(821),a={class:"container"},o={class:"row flex-nowrap"},l={class:"my-10"},i=(0,r._)("div",null,[(0,r._)("h1",null,"All LEsson")],-1),c={class:"table-striped",id:"module"},u=(0,r._)("tr",null,[(0,r._)("th",null,"Sl"),(0,r._)("th",null,"Unit"),(0,r._)("th",null,"Title"),(0,r._)("th",null,"Article"),(0,r._)("th",null,"Action"),(0,r._)("th",null,"View ")],-1),s=(0,r._)("td",null,"unit name",-1),d=(0,r._)("td",null,"In brief",-1),h=(0,r._)("button",{class:"simple_button_1"},"Update",-1),_=(0,r._)("td",null,[(0,r._)("button",{class:"bsimple_button_1"}," View ")],-1);var f=n(1489);const p={data:function(){return{auth_token:this.$store.state.authToken,article_list:[]}},methods:{allArticle:function(){var t=this;f.Z.allArticle(this.auth_token).then((function(e){t.article_list=e.data.data})).catch((function(t){console.log(t)}))},handleDelete:function(){alert("delete krote hoe")}},mounted:function(){this.allArticle()}};const k=(0,n(3744).Z)(p,[["render",function(t,e,n,f,p,k){var y=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",o,[(0,r._)("div",l,[(0,r.Uk)((0,r.zw)(p.article_list)+" ",1),i,(0,r._)("table",c,[u,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.article_list,(function(t,n){return(0,r.wg)(),(0,r.iD)("tr",{key:n},[(0,r._)("td",null,(0,r.zw)(n+1),1),(0,r._)("td",null,(0,r.zw)(t.title),1),s,d,(0,r._)("td",null,[(0,r.Wm)(y,{to:{name:"article_update",params:{article_id:t.id}}},{default:(0,r.w5)((function(){return[h]})),_:2},1032,["to"]),(0,r._)("button",{class:"simple_button_1",onClick:e[0]||(e[0]=function(){return k.handleDelete&&k.handleDelete.apply(k,arguments)})},"Delete")]),_])})),128))])])])])}]])}}]);