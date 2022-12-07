"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[147],{2435:(l,t,e)=>{e.d(t,{Z:()=>s});var i=e(3645),n=e.n(i)()((function(l){return l[1]}));n.push([l.id,".option_input{margin-right:10px;width:90%}.fill_blank_element{margin-right:5px}",""]);const s=n},1147:(l,t,e)=>{e.r(t),e.d(t,{default:()=>ql});var i=e(821),n={class:"container"},s={class:"row"},a={class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},u={class:"mt-5 mb-5",style:{display:"flex","justify-content":"space-between"}},o={class:"button_back"},c=(0,i._)("i",{class:"bi bi-arrow-left"},null,-1),r=(0,i.Uk)(" Back "),_={class:"button_back"},d=(0,i.Uk)(" Extras "),p=(0,i._)("i",{class:"bi bi-arrow-right"},null,-1),m={class:"reading_wrapper"},h={class:"reading-title"},b={class:"inner_content"},v={class:"content_title"},k={class:"passage_content"},f={class:"row"},g={class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},y={class:"row"},w={class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},z={class:"row"},q={class:"col-md-12 col-lg-12 col-sm-12 col-xs-12"},x={class:"ans_options"},D={class:"inline_content"},U={key:0},C={key:1},M=["value"],S={key:2},T=(0,i._)("div",{class:"single-form text-center"},[(0,i._)("button",{type:"submit",class:"btn btn-primary"},"Submit")],-1),I={class:"row"},Z={class:"col-md-12"},V={style:{"margin-bottom":"20px",padding:"10px"}},B={class:"table-striped",id:"module"},F=(0,i._)("tr",null,[(0,i._)("th",null,"Sl"),(0,i._)("th",null,"Question"),(0,i._)("th",null,"Marks"),(0,i._)("th",null,"Type"),(0,i._)("th",null,"Action ")],-1),L=(0,i._)("td",null,"Fill Blank",-1),A=(0,i._)("td",null,[(0,i._)("button",{class:"bsimple_button_1 btn-danger button-rounded"}," Delete ")],-1),Q={key:0,class:"my-5"},H={class:"alert alert-danger",role:"alert"},K={key:1},Y={class:"alert alert-success",role:"alert"},E={class:"row"},P={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},W={class:"single-form"},$=(0,i._)("label",{class:"label"},"Instruction to Excersize (Quiz Title):",-1),j={class:"row"},G={class:"col-md-6"},J={class:"single-form"},N=(0,i._)("label",{class:"label"},"Marks:",-1),O={class:"col-md-6"},R={class:"single-form"},X=(0,i._)("label",{class:"label"},"Time Limit (opitonal):",-1),ll={class:"col-md-6 col-lg-6 col-sm-12 col-xs-12"},tl={class:"fill_blank"},el={style:{"margin-bottom":"5px"}},il=[(0,i._)("i",{class:"bi bi-plus-circle-fill"},null,-1),(0,i.Uk)(" Add Text")],nl=[(0,i._)("i",{class:"bi bi-plus-circle-fill"},null,-1),(0,i.Uk)(" Add Blank")],sl=[(0,i._)("i",{class:"bi bi-plus-circle-fill"},null,-1),(0,i.Uk)(" Add Serial")],al={class:"single-form",style:{display:"flex"}},ul={key:0,style:{width:"90%"}},ol=["onUpdate:modelValue"],cl={key:1,style:{width:"90%"}},rl=["onUpdate:modelValue"],_l={style:{"margin-top":"7px","margin-left":"6px"}},dl=["onClick"],pl=[(0,i._)("i",{class:"bi bi-trash3-fill"},null,-1)],ml=(0,i._)("div",{class:"single-form text-center"},[(0,i._)("button",{type:"submit",class:"btn btn-primary"},"Submit")],-1);var hl=e(8496),bl=e(8092),vl=e(1489),kl=e(5517);const fl={name:"Content Quiz",components:{draggable:hl.J,QuestionCount:kl.Z},data:function(){return{lesson_id:this.$route.params.lesson,lesson_detail:{},quiz_list:{},alert_next:[],alert_success:null,iscomplete:!1,question_type:null,quiz_title:null,quiz_marks:0,quiz_timelimit:0,quiz_type:5,checked:!0,inputs_fillblank:[],auth_token:this.$store.state.authToken,serial:0}},methods:{quizList:function(){var l=this;vl.Z.quizList(this.lesson_id,this.auth_token).then((function(t){l.quiz_list=t.data.quizlist})).catch((function(l){console.log(l)}))},addText:function(){this.inputs_fillblank.push({name:"",value:"",element_type:"text"})},addInput:function(){this.inputs_fillblank.push({name:"",value:"",element_type:"input"})},addSerial:function(){this.serial+=1,this.inputs_fillblank.push({name:"",value:this.serial,element_type:"serial"})},removeFillblank:function(l){this.inputs_fillblank.splice(l,1)},handeMouseup:function(l,t){console.log(l),console.log(t)},lessonById:function(l,t){var e=this;bl.Z.lessonById(l,t).then((function(l){console.log(l.data.data[0]),e.lesson_detail=l.data.data[0],e.article=l.data.data[0].article})).catch((function(l){console.log(l)}))},insertFillblank:function(){var l=this,t=this.auth_token,e={lesson_id:this.lesson_id,question:this.quiz_title,quiz_type:this.quiz_type,marks:this.quiz_marks,time_limit:this.quiz_timelimit,inputs_fillblank:this.inputs_fillblank};vl.Z.insertFillblank(e,t).then((function(t){console.log(t),l.alert_success=t.data.message,l.alert_next=[]})).catch((function(l){console.log(l)}))},handeSubmit:function(){null==this.quiz_title?this.alert_next.push("Please write a Title"):this.iscomplete=!0,0==this.quiz_marks?this.alert_next.push("Please Input  Quiz Marks"):this.iscomplete=!0,this.iscomplete&&this.insertFillblank(),this.quizList()}},mounted:function(){this.lessonById(this.lesson_id,this.auth_token),this.quizList()}};var gl=e(3379),yl=e.n(gl),wl=e(2435),zl={insert:"head",singleton:!1};yl()(wl.Z,zl);wl.Z.locals;const ql=(0,e(3744).Z)(fl,[["render",function(l,t,e,hl,bl,vl){var kl=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",s,[(0,i._)("div",a,[(0,i._)("div",u,[(0,i._)("button",o,[(0,i.Wm)(kl,{to:"/content/lesson/3"},{default:(0,i.w5)((function(){return[c,r]})),_:1})]),(0,i._)("button",_,[(0,i.Wm)(kl,{to:"/extra_manage/"+bl.lesson_detail.id},{default:(0,i.w5)((function(){return[d,p]})),_:1},8,["to"])])]),(0,i._)("div",m,[(0,i._)("div",h," Grammar : "+(0,i.zw)(bl.lesson_detail.course_name)+" : "+(0,i.zw)(bl.lesson_detail.unit_name),1),(0,i._)("div",b,[(0,i._)("div",v,(0,i.zw)(bl.lesson_detail.title),1),(0,i._)("div",k,[(0,i._)("div",f,[(0,i._)("div",g,[(0,i._)("div",y,[(0,i._)("div",w,[(0,i._)("h4",null,(0,i.zw)(bl.quiz_title),1)])])])]),(0,i._)("div",z,[(0,i._)("div",q,[(0,i._)("div",null,[(0,i._)("div",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(bl.inputs_fillblank,(function(l){return(0,i.wg)(),(0,i.iD)("div",D,["text"===l.element_type?((0,i.wg)(),(0,i.iD)("div",U,(0,i.zw)(l.value),1)):(0,i.kq)("",!0),"input"===l.element_type?((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("input",{type:"text",value:l.blank_ans,class:"fill_blank_element"},null,8,M)])):(0,i.kq)("",!0),"serial"===l.element_type?((0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("strong",null,"( "+(0,i.zw)(l.value)+" )",1)])):(0,i.kq)("",!0)])})),256))]),T])])])])])])])]),(0,i._)("div",I,[(0,i._)("div",Z,[(0,i._)("div",V,[(0,i._)("div",null,[(0,i._)("table",B,[F,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(bl.quiz_list,(function(l,t){return(0,i.wg)(),(0,i.iD)("tr",{key:t},[(0,i._)("td",null,(0,i.zw)(t+1),1),(0,i._)("td",null,(0,i.zw)(l.question),1),(0,i._)("td",null,(0,i.zw)(l.marks),1),L,A])})),128))])]),0!=bl.alert_next.length?((0,i.wg)(),(0,i.iD)("div",Q,[(0,i._)("div",H,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(bl.alert_next,(function(l,t){return(0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("p",null,(0,i.zw)(l),1)])})),128))])])):(0,i.kq)("",!0),null!=bl.alert_success?((0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("div",Y,[(0,i._)("p",null,(0,i.zw)(bl.alert_success),1)])])):(0,i.kq)("",!0),(0,i._)("form",{onSubmit:t[6]||(t[6]=(0,i.iM)((function(){return vl.handeSubmit&&vl.handeSubmit.apply(vl,arguments)}),["prevent"]))},[(0,i._)("div",E,[(0,i._)("div",P,[(0,i._)("div",W,[$,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Lesson Instruction","onUpdate:modelValue":t[0]||(t[0]=function(l){return bl.quiz_title=l})},null,512),[[i.nr,bl.quiz_title]])]),(0,i._)("div",j,[(0,i._)("div",G,[(0,i._)("div",J,[N,(0,i.wy)((0,i._)("input",{type:"number",min:"1",placeholder:"Marks for this quiz","onUpdate:modelValue":t[1]||(t[1]=function(l){return bl.quiz_marks=l})},null,512),[[i.nr,bl.quiz_marks]])])]),(0,i._)("div",O,[(0,i._)("div",R,[X,(0,i.wy)((0,i._)("input",{type:"number",min:"1",placeholder:"Marks for this quiz","onUpdate:modelValue":t[2]||(t[2]=function(l){return bl.quiz_timelimit=l})},null,512),[[i.nr,bl.quiz_timelimit]])])])])]),(0,i._)("div",ll,[(0,i._)("div",tl,[(0,i._)("div",el,[(0,i._)("button",{class:"simple_button_1",onClick:t[3]||(t[3]=(0,i.iM)((function(){return vl.addText&&vl.addText.apply(vl,arguments)}),["prevent"]))},il),(0,i._)("button",{class:"simple_button_1",onClick:t[4]||(t[4]=(0,i.iM)((function(){return vl.addInput&&vl.addInput.apply(vl,arguments)}),["prevent"]))},nl),(0,i._)("button",{class:"simple_button_1",onClick:t[5]||(t[5]=(0,i.iM)((function(){return vl.addSerial&&vl.addSerial.apply(vl,arguments)}),["prevent"]))},sl)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(bl.inputs_fillblank,(function(l,t){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",al,["text"==l.element_type?((0,i.wg)(),(0,i.iD)("div",ul,[(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Text Content","onUpdate:modelValue":function(t){return l.value=t},style:{"margin-right":"5px"},required:""},null,8,ol),[[i.nr,l.value]])])):(0,i.kq)("",!0),"input"==l.element_type?((0,i.wg)(),(0,i.iD)("div",cl,[(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Correct Answer","onUpdate:modelValue":function(t){return l.value=t},style:{"margin-right":"5px"},required:""},null,8,rl),[[i.nr,l.value]])])):(0,i.kq)("",!0),(0,i._)("div",_l,[(0,i._)("button",{class:"simple_button_1",onClick:(0,i.iM)((function(l){return vl.removeFillblank(t)}),["prevent"])},pl,8,dl)])])])})),256))])])]),ml],32)])])])])}]])}}]);