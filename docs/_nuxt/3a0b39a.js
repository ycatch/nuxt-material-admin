(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{924:function(e,t,r){"use strict";r.r(t);var l=r(52),o={data:function(){return{search:"",complex:{selected:[],headers:[{text:"Avatar",value:"avatar"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Action",value:""}],items:l.a},basic:{headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],items:[{value:!1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{value:!1,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{value:!1,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{value:!1,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{value:!1,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{value:!1,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{value:!1,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{value:!1,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{value:!1,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{value:!1,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}}}},n=r(11),c=r(16),v=r.n(c),d=r(151),m=r(147),x=r(167),_=r(94),f=r(524),h=r(148),C=r(902),k=r(454),V=r(155),w=r(168),y=r(149),T=r(67),A=r(169),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"pageTable"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h3",[e._v("Complex Table")])]),e._v(" "),r("v-flex",{attrs:{lg12:""}},[r("v-card",[r("v-toolbar",{attrs:{card:"",color:"white"}},[r("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Type something","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("filter_list")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.complex.headers,search:e.search,items:e.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name","select-all":""},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[r("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:t.selected,callback:function(r){e.$set(t,"selected",r)},expression:"props.selected"}})],1),e._v(" "),r("td",[r("v-avatar",{attrs:{size:"32"}},[r("img",{attrs:{src:t.item.avatar,alt:""}})])],1),e._v(" "),r("td",[e._v(e._s(t.item.name))]),e._v(" "),r("td",[e._v(e._s(t.item.email))]),e._v(" "),r("td",[e._v(e._s(t.item.phone))]),e._v(" "),r("td",[r("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"primary",small:""}},[r("v-icon",[e._v("edit")])],1),e._v(" "),r("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"pink",small:""}},[r("v-icon",[e._v("delete")])],1)],1)]}}]),model:{value:e.complex.selected,callback:function(t){e.$set(e.complex,"selected",t)},expression:"complex.selected"}})],1)],1)],1),e._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h3",[e._v("Basic Table")])]),e._v(" "),r("v-flex",{attrs:{lg12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.basic.headers,items:e.basic.items,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.name))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.calories))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.fat))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.carbs))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.protein))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.iron))])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VAvatar:d.a,VBtn:m.a,VCard:x.a,VCardText:_.b,VCheckbox:f.a,VContainer:h.a,VDataTable:C.a,VDivider:k.a,VFlex:V.a,VIcon:w.a,VLayout:y.a,VTextField:T.a,VToolbar:A.a})}}]);