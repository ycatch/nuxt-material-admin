(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{469:function(t,e,n){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=n(11),o=n(16),d=n.n(o),v=n(167),c=n(94),_=n(454),w=n(13),f=n(169),m=n(17),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:v.a,VCardText:c.b,VDivider:_.a,VSpacer:w.a,VToolbar:f.a,VToolbarTitle:m.b})},913:function(t,e,n){"use strict";n.r(e);var l={components:{VWidget:n(469).a},data:function(){return{}},computed:{},methods:{}},r=n(11),o=n(16),d=n.n(o),v=n(463),c=n(148),_=n(155),w=n(168),f=n(163),m=n(149),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pageBadge"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",sm12:""}},[n("v-widget",{attrs:{title:"Basic Usage"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("div",{staticClass:"text-xs-center"},[n("v-badge",{attrs:{left:""}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("6")]),t._v(" "),n("v-icon",{attrs:{large:"",color:"grey lighten-1"}},[t._v("shopping_cart")])],1),t._v(" "),n("v-badge",{attrs:{color:"red"}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("!")]),t._v(" "),n("v-icon",{attrs:{large:"",color:"grey"}},[t._v("mail")])],1),t._v(" "),n("v-label",[t._v("Label")])],1)])])],1),t._v(" "),n("v-flex",{attrs:{lg4:"",sm12:""}},[n("v-widget",{attrs:{title:"Inline Badge"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("div",{staticClass:"text-xs-center"},[n("v-badge",{attrs:{left:""}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("2")]),t._v(" "),n("span",[t._v("Examples")])]),t._v("\n                \n              "),n("v-badge",{attrs:{color:"green"}},[n("v-icon",{attrs:{slot:"badge",dark:"",small:""},slot:"badge"},[t._v("list")]),t._v(" "),n("span",[t._v("Lists")])],1)],1)])])],1),t._v(" "),n("v-flex",{attrs:{lg4:"",sm12:""}},[n("v-widget",{attrs:{title:"Icon Badge"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("div",{staticClass:"text-xs-center"},[n("v-badge",{attrs:{left:"",color:"purple"}},[n("v-icon",{attrs:{slot:"badge",dark:"",small:""},slot:"badge"},[t._v("layers")]),t._v(" "),n("span",[t._v("\n                  MDI icon\n                ")])],1),t._v("\n                \n              "),n("v-badge",{attrs:{color:"orange"}},[n("v-icon",{attrs:{slot:"badge",dark:"",small:""},slot:"badge"},[t._v("fa fa-apple")]),t._v(" "),n("span",[t._v("\n                  Font Awesome icon\n                ")])],1)],1)])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBadge:v.a,VContainer:c.a,VFlex:_.a,VIcon:w.a,VLabel:f.a,VLayout:m.a})}}]);