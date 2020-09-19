(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{745:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platform"}},[t._v("#")]),t._v(" Platform "),s("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),s("Badge",{attrs:{text:"platform",title:"platform",type:"platform"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Platform } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.3/packages/common/src/platform/services/Platform.ts#L0-L0"}},[t._v("/packages/common/src/platform/services/Platform.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Platform "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformHandler.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformHandler")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[t._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> platformApplication<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a><span class="token punctuation">,</span> platformHandler<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformHandler.html"><span class="token">PlatformHandler</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a>&lt;TsED.Application&gt;<span class="token punctuation">;</span>\nget <span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteController.html"><span class="token">IRouteController</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * Create a native metadata base on the metadata or to the given Class.\n * @param handler\n */\n<span class="token function">createHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">:</span> <a href="/api/common/mvc/models/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a> | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * Create routers <span class="token keyword">from</span> the collected controllers\n */\n<span class="token function">createRoutersFromControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span>".."<span class="token punctuation">)</span>.<a href="/api/common/platform/interfaces/IPlatformDriver.html"><span class="token">IPlatformDriver</span></a>&lt;<span class="token keyword">any</span>&gt; | undefined<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * Create a new instance of <a href="/api/common/platform/services/PlatformRouter.html"><span class="token">PlatformRouter</span></a>\n * @param routerOptions\n */\n<span class="token function">createRouter</span><span class="token punctuation">(</span>routerOptions?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformRouter.html"><span class="token">PlatformRouter</span></a><span class="token punctuation">;</span>\n<span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRoute.html"><span class="token">IRoute</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">addRoute</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> token<span class="token punctuation">:</span> <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n * <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> all routes built by TsExpressDecorators and mounted on Express application.\n * @returns <span class="token punctuation">{</span><a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n<span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n *\n * @param ctrl\n * @param endpointUrl\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[s("code",[t._v("Platform")]),t._v(" is used to provide all routes collected by annotation "),s("code",[t._v("@Controller")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformHandler.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformHandler")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),t._v("<TsED.Application>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteController.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteController")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create a native metadata base on the metadata or to the given Class.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRoutersFromControllers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('".."'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),s("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IPlatformDriver.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IPlatformDriver")])]),t._v("<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> | undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create routers from the collected controllers")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routerOptions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRouter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRouter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create a new instance of PlatformRouter")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRoute.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IRoute")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteDetails.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteDetails")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Get all routes built by TsExpressDecorators and mounted on Express application.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);