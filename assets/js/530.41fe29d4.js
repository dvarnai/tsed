(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{965:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"platformexpressstaticsoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platformexpressstaticsoptions"}},[t._v("#")]),t._v(" PlatformExpressStaticsOptions "),s("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PlatformExpressStaticsOptions } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/platform-express"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.6.1/packages/platform-express/src/interfaces/PlatformExpressStaticsOptions.ts#L0-L0"}},[t._v("/packages/platform-express/src/interfaces/PlatformExpressStaticsOptions.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" PlatformExpressStaticsOptions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * Enable or disable setting Cache-Control response header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaults to true.\n     * Disabling this will ignore the immutable and maxAge options.\n     */\n    cacheControl?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Set how "dotfiles" are treated when encountered. A dotfile is a file or directory that begins with a dot '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"."'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     * Note this check is done on the path itself without checking if the path actually exists on the disk.\n     * If root is specified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only the dotfiles above the root are checked "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('i.e. the root itself can be within a dotfile when when set to "deny"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     * The default value is 'ignore'.\n     * 'allow' No special treatment for dotfiles\n     * 'deny' Send a 403 for "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" request for a dotfile\n     * 'ignore' Pretend like the dotfile does not exist and call "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    dotfiles?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Enable or disable etag generation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaults to true.\n     */\n    etag?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Set file extension fallbacks. When set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" if a file is not found"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the given extensions will be added to the file name and search for.\n     * The first that exists will be served. "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Example.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'html'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'htm'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".\n     * The default value is false.\n     */\n    extensions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" | false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Let client errors fall-through "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" unhandled requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" otherwise forward a client error.\n     * The default value is true.\n     */\n    fallthrough?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Enable or disable the immutable directive in the Cache-Control response header.\n     * If enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the maxAge option should also be specified to enable caching. The immutable directive will prevent supported clients "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" making conditional requests during the life of the maxAge option to check if the file has changed.\n     */\n    immutable?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * By default this module will send "index.html" files in response to a request on a directory.\n     * To disable this set false or to supply a new index pass a '),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" or an array in preferred order.\n     */\n    index?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Enable or disable Last-Modified header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaults to true. Uses the file system's last modified value.\n     */\n    lastModified?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide a max-age in milliseconds for http caching"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaults to 0. This can also be a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" accepted by the ms module.\n     */\n    maxAge?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Redirect.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Redirect")])]),t._v(' to trailing "/" when the pathname is a dir. Defaults to true.\n     */\n    redirect?'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Function to set custom headers on response. Alterations to the headers need to occur synchronously.\n     * The function is called "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" where the arguments are"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     * res the response object\n     * path the file path that is being sent\n     * stat the stat object of the file that is being sent\n     */\n    setHeaders?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express."),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("cacheControl?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Enable or disable setting Cache-Control response header, defaults to true.\nDisabling this will ignore the immutable and maxAge options.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("dotfiles?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Set how \"dotfiles\" are treated when encountered. A dotfile is a file or directory that begins with a dot (\".\").\nNote this check is done on the path itself without checking if the path actually exists on the disk.\nIf root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to \"deny\").\nThe default value is 'ignore'.\n'allow' No special treatment for dotfiles\n'deny' Send a 403 for any request for a dotfile\n'ignore' Pretend like the dotfile does not exist and call next()")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("etag?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Enable or disable etag generation, defaults to true.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("extensions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" | false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Set file extension fallbacks. When set, if a file is not found, the given extensions will be added to the file name and search for.\nThe first that exists will be served. Example: ['html', 'htm'].\nThe default value is false.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("fallthrough?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Let client errors fall-through as unhandled requests, otherwise forward a client error.\nThe default value is true.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("immutable?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Enable or disable the immutable directive in the Cache-Control response header.\nIf enabled, the maxAge option should also be specified to enable caching. The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("index?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v('By default this module will send "index.html" files in response to a request on a directory.\nTo disable this set false or to supply a new index pass a string or an array in preferred order.')])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("lastModified?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Enable or disable Last-Modified header, defaults to true. Uses the file system's last modified value.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maxAge?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Provide a max-age in milliseconds for http caching, defaults to 0. This can also be a string accepted by the ms module.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("redirect?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v('Redirect to trailing "/" when the pathname is a dir. Defaults to true.')])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("setHeaders?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express."),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Function to set custom headers on response. Alterations to the headers need to occur synchronously.\nThe function is called as fn(res, path, stat), where the arguments are:\nres the response object\npath the file path that is being sent\nstat the stat object of the file that is being sent")])])])}),[],!1,null,null,null);e.default=n.exports}}]);