(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{204:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域资源共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域资源共享")]),t._v(" "),a("blockquote",[a("p",[t._v("CORS（Cross-Origin Resource Sharing，跨源资源共享）定义了在必须访\n问跨源资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想，就是使用自定义的 HTTP 头部\n让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。")])]),t._v(" "),a("p",[t._v("CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。")]),t._v(" "),a("h2",{attrs:{id:"简单请求和复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和复杂请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单请求和复杂请求")]),t._v(" "),a("h3",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),a("p",[t._v("只要同时满足以下两大条件，就属于简单请求")]),t._v(" "),a("p",[a("strong",[t._v("条件 1")]),t._v("：使用下列方法之一：")]),t._v(" "),a("ul",[a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("HEAD")]),t._v(" "),a("li",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("条件 2")]),t._v("：Content-Type 的值仅限于下列三者之一：")]),t._v(" "),a("ul",[a("li",[t._v("text/plain")]),t._v(" "),a("li",[t._v("multipart/form-data")]),t._v(" "),a("li",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),a("h3",{attrs:{id:"复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 复杂请求")]),t._v(" "),a("p",[t._v("不符合以上条件的请求就肯定是复杂请求了。")]),t._v(" "),a("p",[t._v("复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为 "),a("strong",[t._v('"预检"请求')]),t._v(" ,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。")]),t._v(" "),a("h2",{attrs:{id:"预检请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预检请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 预检请求")]),t._v(" "),a("blockquote",[a("p",[t._v("CORS 通过一种叫做 Preflighted Requests 的透明服务器验证机制支持开发人员使用自定义的头部、\nGET 或 POST 之外的方法，以及不同类型的主体内容。在使用下列高级选项来发送请求时，就会向服务\n器发送一个 Preflight 请求。这种请求使用 OPTIONS 方法，发送下列头部。")])]),t._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" request")]),t._v(" "),a("ul",[a("li",[t._v("Origin：与简单的请求相同。")]),t._v(" "),a("li",[t._v("Access-Control-Request-Method：请求自身使用的方法。")]),t._v(" "),a("li",[t._v("Access-Control-Request-Headers：（可选）自定义的头部信息，多个头部以逗号分隔。")])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" response")]),t._v(" "),a("ul",[a("li",[t._v("Access-Control-Allow-Origin：与简单的请求相同。")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Methods：允许的方法，多个方法以逗号分隔。")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Headers：允许的头部，多个头部以逗号分隔。")]),t._v(" "),a("li",[t._v("Access-Control-Max-Age：应该将这个 Preflight 请求缓存多长时间（以秒表示）")])]),t._v(" "),a("h2",{attrs:{id:"带凭据的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带凭据的请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 带凭据的请求")]),t._v(" "),a("p",[t._v("默认情况下，跨源请求不提供凭据（cookie、HTTP 认证及客户端 SSL 证明 等 ）。 通 过 将\nwithCredentials 属性设置为 true，可以指定某个请求应该发送凭据。如果服务器接受带凭据的请\n求，会用下面的 HTTP 头部来响应。\n"),a("code",[t._v("Access-Control-Allow-Credentials: true")]),t._v("\n如果发送的是带凭据的请求，但服务器的响应中没有包含这个头部，那么浏览器就不会把响应交给\nJavaScript（于是，responseText 中将是空字符串，status 的值为 0，而且会调用 onerror()事件处\n理程序）。另外，服务器还可以在 Preflight 响应中发送这个 HTTP 头部，表示允许源发送带凭据的请求。")]),t._v(" "),a("h2",{attrs:{id:"xmlhttprequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest","aria-hidden":"true"}},[t._v("#")]),t._v(" XMLHttpRequest")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name=xiamen"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie不能跨域")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前端设置是否带cookie")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:4000/getData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiamen"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//得到响应头，后台需设置Access-Control-Expose-Headers")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponseHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("ul",[a("li",[t._v("不能使用 setRequestHeader()设置自定义头部。")]),t._v(" "),a("li",[t._v("不能发送和接收 cookie。")]),t._v(" "),a("li",[t._v("调用 getAllResponseHeaders()方法总会返回空字符串。")])])])])},[],!1,null,null,null);s.default=e.exports}}]);