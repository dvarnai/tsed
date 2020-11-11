(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1156:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-your-first-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-controller"}},[t._v("#")]),t._v(" Create your first controller")]),t._v(" "),s("p",[t._v("Create a new "),s("code",[t._v("CalendarCtrl.ts")]),t._v(" in your controllers directory (by default "),s("code",[t._v("root/controllers")]),t._v(").\nAll controllers declared with "),s("ApiSymbolName",[t._v("Controller")]),t._v(" decorators are considered as Platform routers (Express.Router, Koa.Router, ...).\nA Platform router requires a path (here, the path is "),s("code",[t._v("/calendars")]),t._v(") to expose an url on your server.\nMore precisely, it's a part of a path, and the entire exposed url depends on the Server configuration (see "),s("RouterLink",{attrs:{to:"/getting-started/configuration.html"}},[t._v("Configuration")]),t._v(")\nand the "),s("RouterLink",{attrs:{to:"/docs/controllers.html"}},[t._v("children controllers")]),t._v(".")],1),t._v(" "),s("p",[t._v("In this case, we have no dependencies and the root endpoint is set to "),s("code",[t._v("/rest")]),t._v(".\nSo the controller's url will be "),s("code",[t._v("http://host/rest/calendars")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/calendars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CalendarCtrl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This action returns all calendars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Decorators "),s("ApiSymbolName",[t._v("Get")]),t._v(", "),s("ApiSymbolName",[t._v("Post")]),t._v(", "),s("ApiSymbolName",[t._v("Delete")]),t._v(", "),s("ApiSymbolName",[t._v("Put")]),t._v(", etc., support dynamic pathParams (eg: "),s("code",[t._v("/:id")]),t._v(") and "),s("code",[t._v("RegExp")]),t._v(" like Express API.")],1),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/docs/controllers.html"}},[t._v("Controllers")]),t._v(" section for more details")],1)]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("You have to configure "),s("a",{attrs:{href:"/tutorials/templating"}},[t._v("engine rendering")]),t._v(" if you want to use the decorator "),s("ApiSymbolName",[t._v("Render")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("To test your method, just run your "),s("code",[t._v("server.ts")]),t._v(" and send an HTTP request on "),s("code",[t._v("/rest/calendars/1")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ready-for-more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ready-for-more"}},[t._v("#")]),t._v(" Ready for More?")]),t._v(" "),s("p",[t._v("We’ve briefly introduced the most basic features of Ts.ED - the rest of this guide will cover them and other advanced features with much finer details, so make sure to read through it all!")])])}),[],!1,null,null,null);e.default=r.exports}}]);