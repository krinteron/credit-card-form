(function(){"use strict";var e={8070:function(e,t,n){var a=n(9242),o=n(3396);const l={class:"container"};function r(e,t,n,a,r,u){const i=(0,o.up)("router-view"),d=(0,o.up)("LayoutModal");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(d,{title:"Binding a new card"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1})])}var u=n(7139);const i={class:"layout-container"},d={key:0,class:"title-wrapper"},s=["textContent"],c={class:"main-wrapper"};function p(e,t,n,a,l,r){return(0,o.wg)(),(0,o.iD)("div",i,[n.title?((0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("p",{class:"title",textContent:(0,u.zw)(n.title)},null,8,s)])):(0,o.kq)("",!0),(0,o._)("main",c,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])}var m={name:"LayoutModal",props:{title:{type:String,required:!1}}},v=n(89);const h=(0,v.Z)(m,[["render",p],["__scopeId","data-v-28fcc5dd"]]);var f=h,V={name:"App",components:{LayoutModal:f}};const g=(0,v.Z)(V,[["render",r]]);var y=g,C=(n(1703),n(65)),b=n(678);const _=e=>((0,o.dD)("data-v-e4a13c12"),e=e(),(0,o.Cn)(),e),w={class:"card-bind-container"},x={class:"card-form"},D={class:"col1"},k={class:"row1"},I=_((()=>(0,o._)("div",{class:"card_icon"},null,-1))),N=_((()=>(0,o._)("div",{class:"row2 cvv_note"},[(0,o._)("p",null,[(0,o.Uk)(" Last numbers "),(0,o._)("br"),(0,o.Uk)(" on the back ")])],-1))),q={class:"col2"},F={class:"row1"},L={class:"row2"},B=_((()=>(0,o._)("div",{class:"cvv_icon"},null,-1))),$={class:"card-form-actions"};function O(e,t,n,a,l,r){const u=(0,o.up)("CardNumberComponent"),i=(0,o.up)("ExpDateComponent"),d=(0,o.up)("CvvComponent"),s=(0,o.up)("PlainButton");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",x,[(0,o._)("div",D,[(0,o._)("div",k,[(0,o.Wm)(u,{"card-number-valid":l.cardNumberValid,"onUpdate:card-number-valid":t[0]||(t[0]=e=>l.cardNumberValid=e),modelValue:l.cardNumber,"onUpdate:modelValue":t[1]||(t[1]=e=>l.cardNumber=e)},null,8,["card-number-valid","modelValue"]),I]),N]),(0,o._)("div",q,[(0,o._)("div",F,[(0,o.Wm)(i,{"exp-date-valid":l.expDateValid,"onUpdate:exp-date-valid":t[2]||(t[2]=e=>l.expDateValid=e),modelValue:l.expDate,"onUpdate:modelValue":t[3]||(t[3]=e=>l.expDate=e)},null,8,["exp-date-valid","modelValue"])]),(0,o._)("div",L,[(0,o.Wm)(d,{"cvv-valid":l.cvvValid,"onUpdate:cvv-valid":t[4]||(t[4]=e=>l.cvvValid=e),modelValue:l.cvv,"onUpdate:modelValue":t[5]||(t[5]=e=>l.cvv=e)},null,8,["cvv-valid","modelValue"]),B])])]),(0,o._)("div",$,[(0,o.Wm)(s,{onClick:r.cancelHandler,text:"Cancel"},null,8,["onClick"]),(0,o.Wm)(s,{class:"btn-bind",pretty:!0,text:"Bind",disabled:!r.cardIsValid,onClick:r.sendCard},null,8,["disabled","onClick"])])])}function S(e,t,n,a,l,r){const u=(0,o.up)("InputComponent"),i=(0,o.up)("LayoutInput");return(0,o.wg)(),(0,o.j4)(i,{placeholder:"Card number",filled:!!r.value,focus:l.focus,invalid:!n.cardNumberValid,"invalid-msg":"Card number contains 16 digits"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{onFocus:r.setFocus,modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},null,8,["onFocus","modelValue"])])),_:1},8,["filled","focus","invalid"])}const W={class:"input-container"},U=["textContent"],j=["textContent"];function M(e,t,n,a,l,r){return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("div",{class:(0,u.C_)(["input-wrapper",[n.focus&&"focus",r.showInvalid&&"invalid"]])},[(0,o.WI)(e.$slots,"default",{},void 0,!0),(0,o._)("p",{class:(0,u.C_)(["label",[(n.filled||n.focus)&&"active",r.showInvalid&&"invalid"]]),textContent:(0,u.zw)(n.placeholder)},null,10,U)],2),r.showInvalid?((0,o.wg)(),(0,o.iD)("p",{key:0,class:"invalid-msg",textContent:(0,u.zw)(n.invalidMsg)},null,8,j)):(0,o.kq)("",!0)])}var Z={name:"LayoutInput",props:{placeholder:{type:String,required:!1,default:"text"},filled:{type:Boolean,required:!1,default:!1},focus:{type:Boolean,required:!1,default:!1},invalid:{type:Boolean,required:!1,default:!1},invalidMsg:{type:String,required:!1,default:"Поле заполнено неверно"}},computed:{showInvalid(){return!this.focus&&this.filled&&this.invalid}}};const P=(0,v.Z)(Z,[["render",M],["__scopeId","data-v-7c97c500"]]);var z=P;const E=["type"];function T(e,t,n,l,r,u){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{class:"input",type:n.type,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),onInput:t[1]||(t[1]=(...e)=>u.inputCheck&&u.inputCheck(...e)),onFocus:t[2]||(t[2]=t=>e.$emit("focus",!0)),onBlur:t[3]||(t[3]=t=>e.$emit("focus",!1))},null,40,E)),[[a.YZ,u.value]])}var Y={name:"InputComponent",props:{type:{type:String,required:!1,default:"text"},modelValue:{type:String,required:!0}},emits:["focus","update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){return this.$emit("update:modelValue",e)}}},methods:{inputCheck(e){e.target.value=this.modelValue}}};const H=(0,v.Z)(Y,[["render",T],["__scopeId","data-v-1dfc55e2"]]);var A=H,J={name:"CardNumberComponent",components:{LayoutInput:z,InputComponent:A},props:{modelValue:{type:String,required:!0},cardNumberValid:{type:Boolean,required:!0}},emits:["update:modelValue","update:card-number-valid"],data(){return{focus:!1,minLength:16,chunkCount:4}},computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",this.handler(e)),this.validate(e)}}},methods:{setFocus(e){this.focus=e},validate(e){const t=e.replace(/[^0-9]/g,"").length,n=t>=this.minLength;this.$emit("update:card-number-valid",n)},handler(e){const t=e.replace(/[^0-9]/g,"").slice(0,this.minLength),n=Math.floor(t.length/this.chunkCount);let a=t;if(n>=1){let e=[];for(let n=0;n<t.length;n+=this.chunkCount)e.push(t.slice(n,n+this.chunkCount));a=e.join(" ")}return a}}};const G=(0,v.Z)(J,[["render",S]]);var K=G;function Q(e,t,n,a,l,r){const u=(0,o.up)("InputComponent"),i=(0,o.up)("LayoutInput");return(0,o.wg)(),(0,o.j4)(i,{placeholder:"CVV",filled:!!r.value,focus:l.focus,invalid:!n.cvvValid,"invalid-msg":"CVV has 3 digits"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{type:"password",onFocus:r.setFocus,modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},null,8,["onFocus","modelValue"])])),_:1},8,["filled","focus","invalid"])}var R={name:"CvvComponent",components:{LayoutInput:z,InputComponent:A},props:{modelValue:{type:String,required:!0},cvvValid:{type:Boolean,required:!0}},emits:["update:modelValue","update:cvv-valid"],data(){return{focus:!1,minLength:3}},computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",this.handler(e)),this.validate(e)}}},methods:{setFocus(e){this.focus=e},validate(e){const t=e.replace(/[^0-9]/g,"").length,n=t>=this.minLength;this.$emit("update:cvv-valid",n)},handler(e){const t=e.replace(/[^0-9]/g,"").slice(0,this.minLength);return t}}};const X=(0,v.Z)(R,[["render",Q]]);var ee=X;const te={class:"exp-date-input"},ne={class:"input-field field1"},ae=["textContent"],oe={class:"input-field field2"};function le(e,t,n,a,l,r){const i=(0,o.up)("InputComponent"),d=(0,o.up)("LayoutInput");return(0,o.wg)(),(0,o.j4)(d,{placeholder:"MM / YY",filled:r.filled,focus:l.focus,invalid:!n.expDateValid,"invalid-msg":"Incorrect date"},{default:(0,o.w5)((()=>[(0,o._)("div",te,[(0,o._)("div",ne,[(0,o.Wm)(i,{onFocus:r.setFocus,modelValue:r.monthValue,"onUpdate:modelValue":t[0]||(t[0]=e=>r.monthValue=e)},null,8,["onFocus","modelValue"])]),l.focus||r.filled?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"separator",textContent:(0,u.zw)("/")},null,8,ae)):(0,o.kq)("",!0),(0,o._)("div",oe,[(0,o.Wm)(i,{onFocus:r.setFocus,modelValue:r.yearValue,"onUpdate:modelValue":t[1]||(t[1]=e=>r.yearValue=e)},null,8,["onFocus","modelValue"])])])])),_:1},8,["filled","focus","invalid"])}var re={name:"ExpDateComponent",components:{LayoutInput:z,InputComponent:A},props:{modelValue:{type:String,required:!0},expDateValid:{type:Boolean,required:!0}},emits:["update:modelValue","update:exp-date-valid"],data(){return{focus:!1,month:"",year:""}},computed:{filled(){return!!(this.month+this.year).replace(/[^0-9]/g,"").length},monthValue:{get(){return this.month},set(e){this.setMonth(this.handler(e))}},yearValue:{get(){return this.year},set(e){this.setYear(this.handler(e))}}},methods:{setFocus(e){this.focus=e},addNull(e){return("0"+e).slice(-2)},handler:e=>{const t=e.replace(/[^0-9]/g,"").slice(0,2);return t},setMonth(e){this.month=e,this.setValue()},setYear(e){this.year=e,this.setValue()},validate(){let e=!1;+this.month>0&&+this.month<=12&&this.year.length&&(e=!0),this.$emit("update:exp-date-valid",e)},setValue(){const e=`${this.addNull(this.month)}/${this.addNull(this.year)}`;this.$emit("update:modelValue",e),this.validate()}}};const ue=(0,v.Z)(re,[["render",le],["__scopeId","data-v-7cf6dbca"]]);var ie=ue;const de=["textContent"];function se(e,t,n,a,l,r){return(0,o.wg)(),(0,o.iD)("button",{type:"button",class:(0,u.C_)(["btn",n.pretty&&"pretty"]),onClick:t[0]||(t[0]=t=>e.$emit("click")),textContent:(0,u.zw)(n.text)},null,10,de)}var ce={name:"PlainButton",props:{text:{type:String,required:!1,default:"Ok"},pretty:{type:Boolean,required:!1,default:!1}},emits:["click"]};const pe=(0,v.Z)(ce,[["render",se],["__scopeId","data-v-67f2574b"]]);var me=pe,ve={name:"CardFormView",components:{CardNumberComponent:K,CvvComponent:ee,ExpDateComponent:ie,PlainButton:me},props:{},emits:[],data(){return{cardNumber:"",cardNumberValid:!1,expDate:"",expDateValid:!1,cvv:"",cvvValid:!1}},computed:{cardIsValid(){return this.cardNumberValid&&this.expDateValid&&this.cvvValid}},methods:{getNumbers(e){return e.replace(/[^0-9]/g,"")},cancelHandler(){alert("there is no way")},sendCard(){const e={cardNumber:this.cardNumber,expDate:this.expDate,cvv:this.cvv};this.$store.dispatch("setData",e)}}};const he=(0,v.Z)(ve,[["render",O],["__scopeId","data-v-e4a13c12"]]);var fe=he;const Ve=e=>((0,o.dD)("data-v-78d1f27b"),e=e(),(0,o.Cn)(),e),ge={class:"form-success"},ye=Ve((()=>(0,o._)("h1",null,"Say goodbye to your money",-1)));function Ce(e,t,n,a,l,r){const u=(0,o.up)("PlainButton");return(0,o.wg)(),(0,o.iD)("div",ge,[ye,(0,o.Wm)(u,{onClick:t[0]||(t[0]=t=>e.$router.push("/")),text:"Bind another one"})])}var be={name:"SuccessView",components:{PlainButton:me}};const _e=(0,v.Z)(be,[["render",Ce],["__scopeId","data-v-78d1f27b"]]);var we=_e;const xe=[{path:"/",name:"home",component:fe},{path:"/success",name:"success",component:we}],De=(0,b.p7)({history:(0,b.PO)("/credit-card-form/"),routes:xe});var ke=De,Ie=(0,C.MT)({state:{cardNumber:"",expDate:"",cvv:""},getters:{getCardData(e){const t=e=>e.replace(/[^0-9]/g,""),n={card_number:t(e.cardNumber),exp_date:e.expDate,cvv:t(e.cvv)};return n}},mutations:{setData(e,{cardNumber:t,expDate:n,cvv:a}){e.cardNumber=t,e.expDate=n,e.cvv=a}},actions:{setData({commit:e,dispatch:t},n){e("setData",n),t("demoSendCard")},demoSendCard(){ke.push("success")},sendCard(e,t){return fetch("http://localhost:3000/payform/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{if(200!==e.status)throw new Error;return e.json()})).then((e=>{console.log(e),ke.push("success")})).catch((()=>alert("something broke")))}},modules:{}});(0,a.ri)(y).use(ke).use(Ie).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],l=e[s][2];for(var u=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(u=!1,l<r&&(r=l));if(u){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],u=a[1],i=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var s=i(n)}for(t&&t(a);d<r.length;d++)l=r[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},a=self["webpackChunkcredit_card_form"]=self["webpackChunkcredit_card_form"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8070)}));a=n.O(a)})();
//# sourceMappingURL=app.36811b7e.js.map