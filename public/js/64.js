(self.webpackChunk=self.webpackChunk||[]).push([[64],{7757:(t,a,e)=>{t.exports=e(5666)},5666:t=>{var a=function(t){"use strict";var a,e=Object.prototype,r=e.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},n=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function l(t,a,e){return Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[a]}try{l({},"")}catch(t){l=function(t,a,e){return t[a]=e}}function c(t,a,e,r){var s=a&&a.prototype instanceof m?a:m,n=Object.create(s.prototype),i=new A(r||[]);return n._invoke=function(t,a,e){var r=u;return function(s,n){if(r===p)throw new Error("Generator is already running");if(r===_){if("throw"===s)throw n;return C()}for(e.method=s,e.arg=n;;){var i=e.delegate;if(i){var o=L(i,e);if(o){if(o===g)continue;return o}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===u)throw r=_,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var l=d(t,a,e);if("normal"===l.type){if(r=e.done?_:h,l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r=_,e.method="throw",e.arg=l.arg)}}}(t,e,i),n}function d(t,a,e){try{return{type:"normal",arg:t.call(a,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",p="executing",_="completed",g={};function m(){}function v(){}function f(){}var b={};l(b,n,(function(){return this}));var w=Object.getPrototypeOf,y=w&&w(w(B([])));y&&y!==e&&r.call(y,n)&&(b=y);var k=f.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(a){l(t,a,(function(t){return this._invoke(a,t)}))}))}function x(t,a){function e(s,n,i,o){var l=d(t[s],t,n);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?a.resolve(u.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):a.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,o)}))}o(l.arg)}var s;this._invoke=function(t,r){function n(){return new a((function(a,s){e(t,r,a,s)}))}return s=s?s.then(n,n):n()}}function L(t,e){var r=t.iterator[e.method];if(r===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var s=d(r,t.iterator,e.arg);if("throw"===s.type)return e.method="throw",e.arg=s.arg,e.delegate=null,g;var n=s.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,g):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function E(t){var a={tryLoc:t[0]};1 in t&&(a.catchLoc=t[1]),2 in t&&(a.finallyLoc=t[2],a.afterLoc=t[3]),this.tryEntries.push(a)}function Z(t){var a=t.completion||{};a.type="normal",delete a.arg,t.completion=a}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function B(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,i=function e(){for(;++s<t.length;)if(r.call(t,s))return e.value=t[s],e.done=!1,e;return e.value=a,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:a,done:!0}}return v.prototype=f,l(k,"constructor",f),l(f,"constructor",v),v.displayName=l(f,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var a="function"==typeof t&&t.constructor;return!!a&&(a===v||"GeneratorFunction"===(a.displayName||a.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,o,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},S(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(a,e,r,s,n){void 0===n&&(n=Promise);var i=new x(c(a,e,r,s),n);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(k),l(k,o,"Generator"),l(k,n,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var a=[];for(var e in t)a.push(e);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=B,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function s(r,s){return o.type="throw",o.arg=t,e.next=r,s&&(e.method="next",e.arg=a),!!s}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(t,a){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var n=s;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=a&&a<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=a,n?(this.method="next",this.next=n.finallyLoc,g):this.complete(i)},complete:function(t,a){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&a&&(this.next=a),g},finish:function(t){for(var a=this.tryEntries.length-1;a>=0;--a){var e=this.tryEntries[a];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),g}},catch:function(t){for(var a=this.tryEntries.length-1;a>=0;--a){var e=this.tryEntries[a];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var s=r.arg;Z(e)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:B(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=a),g}},t}(t.exports);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}},4733:(t,a,e)=>{"use strict";e.d(a,{Z:()=>y});var r=e(821),s={class:"section section-padding download-section"},n=(0,r._)("div",{class:"app-shape-1"},null,-1),i=(0,r._)("div",{class:"app-shape-2"},null,-1),o=(0,r._)("div",{class:"app-shape-3"},null,-1),l=(0,r._)("div",{class:"app-shape-4"},null,-1),c={class:"container"},d={class:"download-app-wrapper mt-n6"},u=(0,r._)("div",{class:"section-title section-title-white"},[(0,r._)("h5",{class:"sub-title"},"Ready to start?"),(0,r._)("h2",{class:"main-title"},"Download our mobile app. for easy to start your course.")],-1),h=["src"],p={class:"download-app-btn"},_={class:"app-btn"},g={href:"#"},m=["src"],v={href:"#"},f=["src"];var b=e(6520);const w=(0,r.aZ)({data:function(){return{title:"Apps Download",image_data:b}}});const y=(0,e(3744).Z)(w,[["render",function(t,a,e,b,w,y){return(0,r.wg)(),(0,r.iD)("div",s,[n,i,o,l,(0,r._)("div",c,[(0,r._)("div",d,[u,(0,r._)("img",{class:"shape-1 animation-right",src:t.image_data[0].shape_14_img,alt:"Shape"},null,8,h),(0,r._)("div",p,[(0,r._)("ul",_,[(0,r._)("li",null,[(0,r._)("a",g,[(0,r._)("img",{src:t.image_data[0].google_play,alt:"Google Play"},null,8,m)])]),(0,r._)("li",null,[(0,r._)("a",v,[(0,r._)("img",{src:t.image_data[0].app_store,alt:"App Store"},null,8,f)])])])])])])])}]])},3080:(t,a,e)=>{"use strict";e.d(a,{Z:()=>Q});var r=e(821),s={class:"section section-padding mt-n1"},n={class:"container"},i=(0,r._)("div",{class:"section-title shape-03 text-center"},[(0,r._)("h5",{class:"sub-title"},"Latest News"),(0,r._)("h2",{class:"main-title"},[(0,r.Uk)("Educational Tips & "),(0,r._)("span",null," Tricks")])],-1),o={class:"blog-wrapper"},l={class:"row"},c={class:"col-lg-4 col-md-6"},d={class:"single-blog"},u={class:"blog-image"},h={href:"blog-details-left-sidebar.html"},p=["src"],_={class:"blog-content"},g={class:"blog-author"},m={class:"author"},v={class:"author-thumb"},f={href:"#"},b=["src"],w=(0,r._)("div",{class:"author-name"},[(0,r._)("a",{class:"name",href:"#"},"Jason Williams")],-1),y=(0,r._)("div",{class:"tag"},[(0,r._)("a",{href:"#"},"Science")],-1),k=(0,r.uE)('<h4 class="title"><a href="blog-details-left-sidebar.html">Data Science and Machine Learning with Python - Hands On!</a></h4><div class="blog-meta"><span><i class="icofont-calendar"></i> 21 March, 2021</span><span><i class="icofont-heart"></i> 2,568+ </span></div><a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>',3),S={class:"col-lg-4 col-md-6"},x={class:"single-blog"},L={class:"blog-image"},E={href:"blog-details-left-sidebar.html"},Z=["src"],A={class:"blog-content"},B={class:"blog-author"},C={class:"author"},P={class:"author-thumb"},U={href:"#"},D=["src"],I=(0,r._)("div",{class:"author-name"},[(0,r._)("a",{class:"name",href:"#"},"Pamela Foster")],-1),O=(0,r._)("div",{class:"tag"},[(0,r._)("a",{href:"#"},"UX Design")],-1),j=(0,r.uE)('<h4 class="title"><a href="blog-details-left-sidebar.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4><div class="blog-meta"><span><i class="icofont-calendar"></i> 21 March, 2021</span><span><i class="icofont-heart"></i> 2,568+ </span></div><a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>',3),G={class:"col-lg-4 col-md-6"},F={class:"single-blog"},N={class:"blog-image"},R={href:"blog-details-left-sidebar.html"},T=["src"],M={class:"blog-content"},$={class:"blog-author"},q={class:"author"},W={class:"author-thumb"},Y={href:"#"},H=["src"],V=(0,r._)("div",{class:"author-name"},[(0,r._)("a",{class:"name",href:"#"},"Patricia Collins")],-1),X=(0,r._)("div",{class:"tag"},[(0,r._)("a",{href:"#"},"Business")],-1),z=(0,r.uE)('<h4 class="title"><a href="blog-details-left-sidebar.html">Culture &amp; Leadership: Strategies for a Successful Business</a></h4><div class="blog-meta"><span><i class="icofont-calendar"></i> 21 March, 2021</span><span><i class="icofont-heart"></i> 2,568+ </span></div><a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>',3);var J=e(6520);const K={data:function(){return{title:"Blog Section",image_data:J}}};const Q=(0,e(3744).Z)(K,[["render",function(t,a,e,J,K,Q){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[i,(0,r._)("div",o,[(0,r._)("div",l,[(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("div",u,[(0,r._)("a",h,[(0,r._)("img",{src:K.image_data[0].blog1_img,alt:"Blog"},null,8,p)])]),(0,r._)("div",_,[(0,r._)("div",g,[(0,r._)("div",m,[(0,r._)("div",v,[(0,r._)("a",f,[(0,r._)("img",{src:K.image_data[0].author1_img,alt:"Author"},null,8,b)])]),w]),y]),k])])]),(0,r._)("div",S,[(0,r._)("div",x,[(0,r._)("div",L,[(0,r._)("a",E,[(0,r._)("img",{src:K.image_data[0].blog2_img,alt:"Blog"},null,8,Z)])]),(0,r._)("div",A,[(0,r._)("div",B,[(0,r._)("div",C,[(0,r._)("div",P,[(0,r._)("a",U,[(0,r._)("img",{src:K.image_data[0].author2_img,alt:"Author"},null,8,D)])]),I]),O]),j])])]),(0,r._)("div",G,[(0,r._)("div",F,[(0,r._)("div",N,[(0,r._)("a",R,[(0,r._)("img",{src:K.image_data[0].blog3_img,alt:"Blog"},null,8,T)])]),(0,r._)("div",M,[(0,r._)("div",$,[(0,r._)("div",q,[(0,r._)("div",W,[(0,r._)("a",Y,[(0,r._)("img",{src:K.image_data[0].author3_img,alt:"Author"},null,8,H)])]),V]),X]),z])])])])])])])}]])},3636:(t,a,e)=>{"use strict";e.d(a,{Z:()=>Z});var r=e(821),s={class:"section section-padding-02"},n={class:"container"},i={class:"brand-logo-wrapper"},o=["src"],l=["src"],c=(0,r._)("div",{class:"section-title shape-03"},[(0,r._)("h2",{class:"main-title"},[(0,r.Uk)("Best Supporter of "),(0,r._)("span",null," British American Resource Center. ")])],-1),d={class:"brand-logo brand-active"},u={class:"swiper-container"},h={class:"swiper-wrapper"},p={class:"single-brand swiper-slide"},_=["src"],g={class:"single-brand swiper-slide"},m=["src"],v={class:"single-brand swiper-slide"},f=["src"],b={class:"single-brand swiper-slide"},w=["src"],y={class:"single-brand swiper-slide"},k=["src"],S={class:"single-brand swiper-slide"},x=["src"];var L=e(6520);const E={data:function(){return{image_data:L}}};const Z=(0,e(3744).Z)(E,[["render",function(t,a,e,L,E,Z){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[(0,r._)("div",i,[(0,r._)("img",{class:"shape-1",src:E.image_data[0].shape_19_img,alt:"Shape"},null,8,o),(0,r._)("img",{class:"shape-2 animation-round",src:E.image_data[0].shape_20_img,alt:"Shape"},null,8,l),c,(0,r._)("div",d,[(0,r._)("div",u,[(0,r._)("div",h,[(0,r._)("div",p,[(0,r._)("img",{src:E.image_data[0].brand_logo1,alt:"Brand"},null,8,_)]),(0,r._)("div",g,[(0,r._)("img",{src:E.image_data[0].brand_logo2,alt:"Brand"},null,8,m)]),(0,r._)("div",v,[(0,r._)("img",{src:E.image_data[0].brand_logo3,alt:"Brand"},null,8,f)]),(0,r._)("div",b,[(0,r._)("img",{src:E.image_data[0].brand_logo4,alt:"Brand"},null,8,w)]),(0,r._)("div",y,[(0,r._)("img",{src:E.image_data[0].brand_logo5,alt:"Brand"},null,8,k)]),(0,r._)("div",S,[(0,r._)("img",{src:E.image_data[0].brand_logo6,alt:"Brand"},null,8,x)])])])])])])])}]])},2961:(t,a,e)=>{"use strict";e.d(a,{Z:()=>E});var r=e(821),s={class:"section section-padding mt-n1"},n={class:"container"},i=(0,r._)("div",{class:"section-title shape-03 text-center"},[(0,r._)("h5",{class:"sub-title"},"Over 1,235+ Course"),(0,r._)("h2",{class:"main-title"},[(0,r.Uk)("How It "),(0,r._)("span",null," Work?")])],-1),o={class:"how-it-work-wrapper"},l={class:"single-work"},c=["src"],d=(0,r._)("div",{class:"work-icon"},[(0,r._)("i",{class:"flaticon-transparency"})],-1),u=(0,r._)("div",{class:"work-content"},[(0,r._)("h3",{class:"title"},"Find Your Course"),(0,r._)("p",null,"It has survived not only centurie also leap into electronic.")],-1),h={class:"work-arrow"},p=["src"],_={class:"single-work"},g=["src"],m=(0,r._)("div",{class:"work-icon"},[(0,r._)("i",{class:"flaticon-forms"})],-1),v=(0,r._)("div",{class:"work-content"},[(0,r._)("h3",{class:"title"},"Book A Seat"),(0,r._)("p",null,"It has survived not only centurie also leap into electronic.")],-1),f={class:"work-arrow"},b=["src"],w={class:"single-work"},y=["src"],k=(0,r._)("div",{class:"work-icon"},[(0,r._)("i",{class:"flaticon-badge"})],-1),S=(0,r._)("div",{class:"work-content"},[(0,r._)("h3",{class:"title"},"Get Certificate"),(0,r._)("p",null,"It has survived not only centurie also leap into electronic.")],-1);var x=e(6520);const L={data:function(){return{image_data:x}}};const E=(0,e(3744).Z)(L,[["render",function(t,a,e,x,L,E){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[i,(0,r._)("div",o,[(0,r._)("div",l,[(0,r._)("img",{class:"shape-1",src:L.image_data[0].shape_15_img,alt:"Shape"},null,8,c),d,u]),(0,r._)("div",h,[(0,r._)("img",{class:"arrow",src:L.image_data[0].shape_17_img,alt:"Shape"},null,8,p)]),(0,r._)("div",_,[(0,r._)("img",{class:"shape-2",src:L.image_data[0].shape_15_img,alt:"Shape"},null,8,g),m,v]),(0,r._)("div",f,[(0,r._)("img",{class:"arrow",src:L.image_data[0].shape_17_img,alt:"Shape"},null,8,b)]),(0,r._)("div",w,[(0,r._)("img",{class:"shape-3",src:L.image_data[0].shape_16_img,alt:"Shape"},null,8,y),k,S])])])])}]])},2064:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>O});var r=e(821),s={class:"section section-padding top100"},n={class:"container"},i={class:"register-login-wrapper"},o={class:"row align-items-center"},l={class:"col-lg-6"},c={class:"register-login-images"},d={class:"shape-1"},u=["src"],h={class:"images"},p=["src"],_={class:"col-lg-6"},g={class:"register-login-form"},m=(0,r._)("h3",{class:"title"},[(0,r.Uk)("Login "),(0,r._)("span",null,"Now")],-1),v={class:"form-wrapper"},f={key:0,class:"alert alert-danger",role:"alert"},b={class:"single-form"},w={class:"single-form"},y=(0,r._)("div",{class:"single-form"},[(0,r._)("input",{type:"submit",class:"btn btn-primary btn-hover-dark w-100"})],-1);var k=e(7757),S=e.n(k),x=e(1734),L=e(2961),E=e(4733),Z=e(3899),A=e(3636),B=e(3080),C=e(3538),P=e(9883),U=e(6520);e(9669);function D(t,a,e,r,s,n,i){try{var o=t[n](i),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(r,s)}const I={name:"Login",components:{SliderComponent:x.Z,HowitworksComponent:L.Z,AppdownloadComponent:E.Z,TestimonialComponent:Z.Z,BrandlogoComponent:A.Z,BlogsectionComponent:B.Z,FooterComponent:C.Z},data:function(){return{title:"Login",image_data:U,form:{email:"",password:""},login_status:null}},mounted:function(){console.log(this.$route)},methods:{handleSignin:function(){var t,a=this;return(t=S().mark((function t(){var e;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={email:a.form.email,password:a.form.password},P.Z.authenticate(e).then((function(t){if("Invalid"==t.data.status)return a.login_status="invalid",!1;localStorage.setItem("token",t.data.token),localStorage.setItem("name",t.data.user.name),localStorage.setItem("role",t.data.user.role_id),localStorage.setItem("email",t.data.user.email),a.$store.commit("login",t),t.data.isLogin&&5==t.data.user.role_id?a.$router.push("/student/dashboard"):t.data.isLogin&&2==t.data.user.role_id?a.$router.push("/moderator/dashboard"):t.data.isLogin&&3==t.data.user.role_id&&a.$router.push("/content/dashboard")})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(r,s){var n=t.apply(a,e);function i(t){D(n,r,s,i,o,"next",t)}function o(t){D(n,r,s,i,o,"throw",t)}i(void 0)}))})()}}};const O=(0,e(3744).Z)(I,[["render",function(t,a,e,k,S,x){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[(0,r._)("div",i,[(0,r._)("div",o,[(0,r._)("div",l,[(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("img",{src:S.image_data[0].shape_26_img,alt:"Shape"},null,8,u)]),(0,r._)("div",h,[(0,r._)("img",{src:S.image_data[0].register_login,alt:"Register Login"},null,8,p)])])]),(0,r._)("div",_,[(0,r._)("div",g,[m,(0,r._)("div",v,["invalid"==S.login_status?((0,r.wg)(),(0,r.iD)("div",f," Wrong Username or Password ")):(0,r.kq)("",!0),(0,r._)("form",{onSubmit:a[2]||(a[2]=(0,r.iM)((function(){return x.handleSignin&&x.handleSignin.apply(x,arguments)}),["prevent"]))},[(0,r._)("div",b,[(0,r.wy)((0,r._)("input",{type:"email",placeholder:"Username or Email","onUpdate:modelValue":a[0]||(a[0]=function(t){return S.form.email=t})},null,512),[[r.nr,S.form.email]])]),(0,r._)("div",w,[(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=function(t){return S.form.password=t})},null,512),[[r.nr,S.form.password]])]),y],32)])])])])])])])}]])},1734:(t,a,e)=>{"use strict";e.d(a,{Z:()=>L});var r=e(821),s={class:"section slider-section"},n={class:"slider-shape"},i=["src"],o=(0,r.uE)('<div class="container"><div class="slider-content"><h4 class="sub-title">Start your favourite course</h4><h2 class="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2><p>It has survived not only five centuries but also the leap into electronic typesetting.</p><a class="btn btn-primary btn-hover-dark" href="#">Start A Course</a></div></div>',1),l={class:"slider-courses-box"},c=["src"],d=(0,r._)("div",{class:"box-content"},[(0,r._)("div",{class:"box-wrapper"},[(0,r._)("i",{class:"flaticon-open-book"}),(0,r._)("span",{class:"count"},"8"),(0,r._)("p",null,"Units")])],-1),u=["src"],h={class:"slider-rating-box"},p=(0,r._)("div",{class:"box-rating"},[(0,r._)("div",{class:"box-wrapper"},[(0,r._)("span",{class:"count"},[(0,r.Uk)("8"),(0,r._)("i",{class:"flaticon-star"})]),(0,r._)("p",null,"Band Guarantee")])],-1),_=["src"],g={class:"slider-images"},m={class:"images"},v=["src"],f={class:"slider-video"},b=["src"],w={class:"video-play"},y=["src"],k=(0,r._)("a",{href:"https://www.youtube.com/watch?v=BRvyWfuxGuU",class:"play video-popup"},[(0,r._)("i",{class:"flaticon-play"})],-1);var S=e(6520);const x={data:function(){return{image_data:S}}};const L=(0,e(3744).Z)(x,[["render",function(t,a,e,S,x,L){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[(0,r._)("img",{class:"shape-1 animation-round",src:x.image_data[0].shape_8_img,alt:"Shape"},null,8,i)]),o,(0,r._)("div",l,[(0,r._)("img",{class:"shape-1 animation-left",src:x.image_data[0].shape_5_img,alt:"Shape"},null,8,c),d,(0,r._)("img",{class:"shape-2",src:x.image_data[0].shape_6_img,alt:"Shape"},null,8,u)]),(0,r._)("div",h,[p,(0,r._)("img",{class:"shape animation-up",src:x.image_data[0].shape_7_img,alt:"Shape"},null,8,_)]),(0,r._)("div",g,[(0,r._)("div",m,[(0,r._)("img",{src:x.image_data[0].slider1,alt:"Slider"},null,8,v)])]),(0,r._)("div",f,[(0,r._)("img",{class:"shape-1",src:x.image_data[0].shape_9_img,alt:"Shape"},null,8,b),(0,r._)("div",w,[(0,r._)("img",{src:x.image_data[0].shape_10_img,alt:"Shape"},null,8,y),k])])])}]])},3899:(t,a,e)=>{"use strict";e.d(a,{Z:()=>I});var r=e(821),s={class:"section section-padding-02 mt-n1"},n={class:"container"},i=(0,r._)("div",{class:"section-title shape-03 text-center"},[(0,r._)("h5",{class:"sub-title"},"Student Testimonial"),(0,r._)("h2",{class:"main-title"},[(0,r.Uk)("Feedback From "),(0,r._)("span",null," Student")])],-1),o={class:"testimonial-wrapper testimonial-active"},l={class:"swiper-container"},c={class:"swiper-wrapper"},d={class:"single-testimonial swiper-slide"},u={class:"testimonial-author"},h={class:"author-thumb"},p=["src"],_=(0,r._)("i",{class:"icofont-quote-left"},null,-1),g=(0,r._)("span",{class:"rating-star"},[(0,r._)("span",{class:"rating-bar",style:{width:"80%"}})],-1),m=(0,r._)("div",{class:"testimonial-content"},[(0,r._)("p",null,"Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic."),(0,r._)("h4",{class:"name"},"Sara Alexander"),(0,r._)("span",{class:"designation"},"Product Designer, USA")],-1),v={class:"single-testimonial swiper-slide"},f={class:"testimonial-author"},b={class:"author-thumb"},w=["src"],y=(0,r._)("i",{class:"icofont-quote-left"},null,-1),k=(0,r._)("span",{class:"rating-star"},[(0,r._)("span",{class:"rating-bar",style:{width:"80%"}})],-1),S=(0,r._)("div",{class:"testimonial-content"},[(0,r._)("p",null,"Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic."),(0,r._)("h4",{class:"name"},"Melissa Roberts"),(0,r._)("span",{class:"designation"},"Product Designer, USA")],-1),x={class:"single-testimonial swiper-slide"},L={class:"testimonial-author"},E={class:"author-thumb"},Z=["src"],A=(0,r._)("i",{class:"icofont-quote-left"},null,-1),B=(0,r._)("span",{class:"rating-star"},[(0,r._)("span",{class:"rating-bar",style:{width:"80%"}})],-1),C=(0,r._)("div",{class:"testimonial-content"},[(0,r._)("p",null,"Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic."),(0,r._)("h4",{class:"name"},"Sara Alexander"),(0,r._)("span",{class:"designation"},"Product Designer, USA")],-1),P=(0,r._)("div",{class:"swiper-pagination"},null,-1);var U=e(6520);const D={data:function(){return{image_data:U}}};const I=(0,e(3744).Z)(D,[["render",function(t,a,e,U,D,I){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",n,[i,(0,r._)("div",o,[(0,r._)("div",l,[(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("div",u,[(0,r._)("div",h,[(0,r._)("img",{src:D.image_data[0].author3_img,alt:"Author"},null,8,p),_]),g]),m]),(0,r._)("div",v,[(0,r._)("div",f,[(0,r._)("div",b,[(0,r._)("img",{src:D.image_data[0].author07_img,alt:"Author"},null,8,w),y]),k]),S]),(0,r._)("div",x,[(0,r._)("div",L,[(0,r._)("div",E,[(0,r._)("img",{src:D.image_data[0].author07_img,alt:"Author"},null,8,Z),A]),B]),C])]),P])])])])}]])}}]);