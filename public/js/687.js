"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{4687:(t,l,n)=>{n.r(l),n.d(l,{default:()=>k});var u=n(821),e=(0,u._)("div",null,[(0,u._)("h1",null,"All LEsson")],-1),i={class:"table-striped",id:"module"},s=(0,u._)("tr",null,[(0,u._)("th",null,"Sl"),(0,u._)("th",null,"Question"),(0,u._)("th",null,"Title"),(0,u._)("th",null,"Lesson"),(0,u._)("th",null,"Unit"),(0,u._)("th",null,"Course"),(0,u._)("th",null,"Action"),(0,u._)("th",null,"View ")],-1),o=(0,u._)("td",null,"quiz question",-1),_=(0,u._)("td",null,"Lesson",-1),a=(0,u._)("td",null,"Unit",-1),r=(0,u._)("td",null,"cuurse",-1),c=(0,u._)("button",{class:"simple_button_1"},"Delete",-1),d=(0,u._)("td",null,[(0,u._)("button",{class:"bsimple_button_1"}," View ")],-1);var h=n(1489);const f={data:function(){return{auth_token:this.$store.state.authToken,article_list:[]}},methods:{allQuizes:function(){var t=this;h.Z.allQuizes(this.auth_token).then((function(l){t.article_list=l.data.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.allQuizes()}};const k=(0,n(3744).Z)(f,[["render",function(t,l,n,h,f,k){var w=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Uk)((0,u.zw)(t.quiz_list)+" "+(0,u.zw)(f.auth_token)+" ",1),e,(0,u._)("table",i,[s,((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(t.quiz_list,(function(t,l){return(0,u.wg)(),(0,u.iD)("tr",{key:l},[(0,u._)("td",null,(0,u.zw)(l+1),1),o,_,a,r,(0,u._)("td",null,[(0,u.Wm)(w,{to:{name:"article_delete",params:{quiz_id:t.id}}},{default:(0,u.w5)((function(){return[c]})),_:2},1032,["to"])]),d])})),128))])])}]])}}]);