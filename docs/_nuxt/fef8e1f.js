(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{469:function(t,e,n){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=n(11),o=n(16),c=n.n(o),d=n(167),v=n(94),f=n(454),m=n(13),k=n(169),w=n(17),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VDivider:f.a,VSpacer:m.a,VToolbar:k.a,VToolbarTitle:w.b})},934:function(t,e,n){"use strict";n.r(e);var l={components:{VWidget:n(469).a},data:function(){return{picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1}},methods:{}},r=n(11),o=n(16),c=n.n(o),d=n(147),v=n(148),f=n(467),m=n(155),k=n(149),w=n(457),_=n(13),x=n(67),V=n(885),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-timepickers"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg6:"",sm12:""}},[n("v-widget",{attrs:{title:"Basic Usage"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-time-picker",{attrs:{color:"primary lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)])],1),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{lg6:"",sm12:""}},[n("v-widget",{attrs:{title:"Full Width"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-time-picker",{attrs:{landscape:"","full-width":"",color:"green lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)])],1),t._v(" "),n("v-flex",{attrs:{lg6:"",sm12:""}},[n("v-widget",{staticClass:"mt-3",attrs:{title:"In dialog and menu"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-time-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-dialog",{ref:"dialog",attrs:{persistent:"",lazy:"","full-width":"",width:"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-time-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VContainer:v.a,VDialog:f.a,VFlex:m.a,VLayout:k.a,VMenu:w.a,VSpacer:_.a,VTextField:x.a,VTimePicker:V.a})}}]);