(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"70ecdb39"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,a[1](c)}n[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"079b":function(t,e,a){"use strict";var o=a("64d2"),n=a.n(o);n.a},"31a1":function(t,e,a){},"32c1":function(t,e,a){"use strict";var o=a("31a1"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("tasks"),a("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-container",{staticClass:"home_img",attrs:{fluid:""}},[a("h1",[t._v("MY DAY")]),a("p",{staticClass:"headline"},[t._v(t._s(t.day)+", "+t._s(t.date1)+t._s(t.ord)+" "+t._s(t.year))]),a("div",[a("v-container",[a("tasksDetails",{attrs:{todos:t.todos}}),[a("div",[a("v-btn",{attrs:{fab:"",color:"purple",dark:"",large:"",absolute:"",bottom:"",right:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"pink darken-4"}},[a("v-toolbar-title",[t._v("ADD TASKS")]),a("v-spacer"),a("v-btn",{attrs:{small:"",color:"transparent"},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Task Id",solo:"",outlined:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-text-field",{attrs:{label:"Add Task",solo:"",outlined:""},model:{value:t.newTodos,callback:function(e){t.newTodos=e},expression:"newTodos"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-textarea",{attrs:{label:"task description",outlined:"","auto-grow":"",rows:"2","row-height":"20",solo:""},model:{value:t.descp,callback:function(e){t.descp=e},expression:"descp"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-text-field",t._g({attrs:{label:"Due Date",outlined:"",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},o))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:t.addtodo}},[t._v("Add Task")])],1)],1)],1)],1)]],2)],1)])],1)])},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600",raised:""}},[a("v-system-bar",{staticClass:"top-bar",attrs:{color:"deep-purple darken-2"}},[a("v-spacer"),a("v-btn",{attrs:{"x-small":"",color:"grey"},on:{click:function(e){t.dialog1=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-title",[a("v-row",[a("v-col",[a("span",[t._v("Task title: "+t._s(this.$route.params.title)+" ")])])],1)],1),a("v-divider"),a("v-card-text",[a("v-row",[a("v-col",[a("span",[t._v("The Id is: "+t._s(this.$route.params.id))])])],1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"","x-small":"",outlined:"",color:"indigo lighten-2"}},[a("v-icon",[t._v("mdi-information")])],1),a("span",[t._v("Task Description: "+t._s(this.$route.params.description))])],1)],1),a("v-divider"),a("v-row",[a("v-col",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"","x-small":"",outlined:"",color:"indigo lighten-2"}},[a("v-icon",[t._v("mdi-calendar")])],1),a("span",[t._v("Due Date: "+t._s(this.$route.params.Due_date))])],1)],1),a("v-divider"),a("br")],1)],1)],1),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[a("v-toolbar",{attrs:{color:"blue darken-4"}},[a("v-toolbar-title",{staticClass:"white--text"},[t._v("My Tasks")]),a("v-spacer")],1),a("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.todos,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-row",[a("v-col",{attrs:{col:"12",sm:"2"}},[a("v-checkbox",{model:{value:e.done,callback:function(a){t.$set(e,"done",a)},expression:"todo.done"}})],1),a("v-col",{attrs:{col:"12",sm:"6"}},[a("v-list-item-content",{staticClass:"title",class:{done:e.done}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1),a("v-col",{attrs:{col:"12",sm:"2"}},[a("v-list-item-action",[a("router-link",{attrs:{to:{name:"details_pg",params:{id:e.id,title:e.title,description:e.description,Due_date:e.Due_Date}}}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog1=!t.dialog1}}},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-information")])],1)],1)],1)],1),a("v-col",{attrs:{col:"12",sm:"2"}},[a("v-list-item-action",[e.done?a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.removeTodo(t.i)}}},[a("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")])],1):t._e()],1)],1)],1)],1)})),1)],1)],1)},c=[],d=(a("a434"),{props:["todos"],data:function(){return{dialog1:!1}},methods:{removeTodo:function(t){this.todos.splice(t,1)}}}),u=d,v=(a("32c1"),a("2877")),p=a("6544"),f=a.n(p),m=a("8336"),b=a("b0af"),h=a("99d9"),g=a("ac7c"),k=a("62ad"),w=a("169a"),_=a("ce7e"),y=a("132d"),x=a("8860"),V=a("da13"),T=a("1800"),D=a("5d23"),C=a("0fd9"),j=a("2fa4"),O=a("afd9"),S=a("71d9"),$=a("2a7f"),A=Object(v["a"])(u,l,c,!1,null,"69e97720",null),P=A.exports;f()(A,{VBtn:m["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCheckbox:g["a"],VCol:k["a"],VDialog:w["a"],VDivider:_["a"],VIcon:y["a"],VList:x["a"],VListItem:V["a"],VListItemAction:T["a"],VListItemContent:D["a"],VListItemTitle:D["b"],VRow:C["a"],VSpacer:j["a"],VSystemBar:O["a"],VToolbar:S["a"],VToolbarTitle:$["a"]});var I={name:"task",components:{tasksDetails:P},data:function(){return{day:this.todoDay(),date1:(new Date).getDate(),ord:this.nth((new Date).getDate()),year:(new Date).getFullYear(),dialog:!1,date:(new Date).toISOString().substr(0,10),menu2:!1,todos:[],newTodos:"",descp:"",id:""}},methods:{addtodo:function(){this.todos.push({id:this.id,title:this.newTodos,description:this.descp,Due_Date:this.date,show:this.show}),this.newTodos="",this.descp="",this.id=""},todoDay:function(){var t=new Date,e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return e[t.getDay()]},nth:function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}}},M=I,E=(a("079b"),a("a523")),L=a("2e4b"),B=a("e449"),F=a("8654"),Y=a("a844"),H=Object(v["a"])(M,i,s,!1,null,"6244a729",null),J=H.exports;f()(H,{VBtn:m["a"],VCard:b["a"],VCardText:h["a"],VCol:k["a"],VContainer:E["a"],VDatePicker:L["a"],VDialog:w["a"],VIcon:y["a"],VMenu:B["a"],VRow:C["a"],VSpacer:j["a"],VTextField:F["a"],VTextarea:Y["a"],VToolbar:S["a"],VToolbarTitle:$["a"]});var K={name:"App",components:{tasks:J},data:function(){return{}}},R=K,q=a("7496"),W=a("a75b"),z=Object(v["a"])(R,n,r,!1,null,"8a4bf7a6",null),G=z.exports;f()(z,{VApp:q["a"],VContent:W["a"]});a("d3b7");var N=a("8c4f"),Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},U=[],X={name:"Home",components:{}},Z=X,tt=Object(v["a"])(Z,Q,U,!1,null,null,null),et=tt.exports;o["a"].use(N["a"]);var at=[{path:"/",name:"Home",component:et},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/tasks",name:"tasks",component:J},{path:"/task/:id",name:"details_pg",props:!0,component:P}],ot=new N["a"]({mode:"history",base:"/",routes:at}),nt=ot,rt=a("2f62");o["a"].use(rt["a"]);var it=new rt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),st=a("f309");o["a"].use(st["a"]);var lt=new st["a"]({iconfont:"mdi"});o["a"].config.productionTip=!1,new o["a"]({router:nt,store:it,vuetify:lt,render:function(t){return t(G)}}).$mount("#app")},"64d2":function(t,e,a){}});
//# sourceMappingURL=app.b9b2c4cb.js.map