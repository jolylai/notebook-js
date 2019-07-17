# 跨域资源共享

> CORS（Cross-Origin Resource Sharing，跨源资源共享）定义了在必须访
> 问跨源资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想，就是使用自定义的 HTTP 头部
> 让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。

CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。

## 简单请求和复杂请求

### 简单请求

只要同时满足以下两大条件，就属于简单请求

**条件 1**：使用下列方法之一：

- GET
- HEAD
- POST

**条件 2**：Content-Type 的值仅限于下列三者之一：

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

### 复杂请求

不符合以上条件的请求就肯定是复杂请求了。

复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为 **"预检"请求** ,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

## 预检请求

> CORS 通过一种叫做 Preflighted Requests 的透明服务器验证机制支持开发人员使用自定义的头部、
> GET 或 POST 之外的方法，以及不同类型的主体内容。在使用下列高级选项来发送请求时，就会向服务
> 器发送一个 Preflight 请求。这种请求使用 OPTIONS 方法，发送下列头部。

### request

- Origin：与简单的请求相同。
- Access-Control-Request-Method：请求自身使用的方法。
- Access-Control-Request-Headers：（可选）自定义的头部信息，多个头部以逗号分隔。

### response

- Access-Control-Allow-Origin：与简单的请求相同。
- Access-Control-Allow-Methods：允许的方法，多个方法以逗号分隔。
- Access-Control-Allow-Headers：允许的头部，多个头部以逗号分隔。
- Access-Control-Max-Age：应该将这个 Preflight 请求缓存多长时间（以秒表示）

## 带凭据的请求

默认情况下，跨源请求不提供凭据（cookie、HTTP 认证及客户端 SSL 证明 等 ）。 通 过 将
withCredentials 属性设置为 true，可以指定某个请求应该发送凭据。如果服务器接受带凭据的请
求，会用下面的 HTTP 头部来响应。
`Access-Control-Allow-Credentials: true`
如果发送的是带凭据的请求，但服务器的响应中没有包含这个头部，那么浏览器就不会把响应交给
JavaScript（于是，responseText 中将是空字符串，status 的值为 0，而且会调用 onerror()事件处
理程序）。另外，服务器还可以在 Preflight 响应中发送这个 HTTP 头部，表示允许源发送带凭据的请求。

## XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
document.cookie = "name=xiamen"; // cookie不能跨域
xhr.withCredentials = true; // 前端设置是否带cookie
xhr.open("PUT", "http://localhost:4000/getData", true);
xhr.setRequestHeader("name", "xiamen");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response);
      //得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader("name"));
    }
  }
};
xhr.send();
```

::: tip

- 不能使用 setRequestHeader()设置自定义头部。
- 不能发送和接收 cookie。
- 调用 getAllResponseHeaders()方法总会返回空字符串。
  :::
