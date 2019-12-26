# XMLHttpRequest

## GET

用`XMLHttpRequest` 向 `http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401` 接口发出一个 get 请求

```js
const xhr = new XMLHttpRequest();

// 获取响应的数据
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
};

// open()方法并不会真正发送请求， 而只是启动一个请求以备发送。
xhr.open("get", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);

// 如果不需要通过请求主体发送 数据，则必须传入 null，因为这个参数对有些浏览器来说是必需的。
xhr.send(null);
```

可以将查询字符串参数追加 到 URL 的末尾，以便将信息发送给服务器，如 `"http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401?name=jack"`。查询字符串中每个参数的名称和值都必须使用 encodeURIComponent()进行编码，然后才能放到 URL 的末尾;而且所有名-值对 儿都必须由和号(&)分隔，不然 GET 请求会发生的一个错误，就是查询字符串的格式有问题。

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
};

function addURLParam(url, name, value) {
  url += url.indexOf("?") == -1 ? "?" : "&";
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}

const url = addURLParam(
  "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401",
  "name",
  "jack"
);

xhr.open("get", url, true);

xhr.send(null);
```

## POST 请求

首先将 Content-Type 头部信息设置为 application/x-www-form-urlencoded，也就是表单 提交时的内容类型，其次是以适当的格式创建一个字符串。

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
};

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.open("post", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);

// 序列化数据
const data = serialize({ pageNumber: 1, pageSize: 10 });

xhr.send(data);
```

### FormData

FormData 为序列化表单以及创建与表单格式相同的数据(用于通过 XHR 传输)提供了便利。

```js
const formData = new FormData(document.forms[0]);

const data = new FormData();
data.append("name", "Nicholas");

// { list: [ 11, 22 ] }
const formDataList = new FormData();
formDataList.append("list[]", 11);
formDataList.append("list[]", 12);
```

post 请求使用 FormData 发送数据

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
};

xhr.open("post", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);

const data = new FormData();
data.append("name", "Nicholas");

xhr.send(data);
```

使用 FormData 的方便之处体现在不必明确地在 XHR 对象上设置请求头部。XHR 对象能够识别传 入的数据类型是 FormData 的实例，并配置适当的头部信息。

## 获取响应

XHR 对象的 `readyState` 属性表示请求 /响应过程的当前活动阶段，对应的值如下

- `0`:未初始化。尚未调用 open()方法。
- `1`:启动。已经调用 open()方法，但尚未调用 send()方法。
- `2`:发送。已经调用 send()方法，但尚未接收到响应。
- `3`:接收。已经接收到部分响应数据。
- `4`:完成。已经接收到全部响应数据，而且已经可以在客户端使用了。

只要 `readyState` 属性的值由一个值变成另一个值，都会触发一次 `readystatechange` 事件，因此可以检测 `XHR` 对象的 `readyState` 属性来判断是否已经接受到响应

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
};
```

在收到响应后，响应的数据会自动填充 `XHR` 对象的属性，相关的属性简介如下。

- `responseText`:作为响应主体被返回的文本。
- `responseXML`:如果响应的内容类型是`"text/xml"或"application/xml"`，这个属性中存包含着响应数据的 XML DOM 文档。
- `status`:响应的 HTTP 状态。
- `statusText`:HTTP 状态的说明。

无论内容类型是什么，响应主体的内容都会保存到 responseText 属性中;而 对于非 XML 数据而言，responseXML 属性的值将为 null。

## 超时设定

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    try {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        alert(xhr.responseText);
      } else {
        alert("Request was unsuccessful: " + xhr.status);
      }
    } catch (ex) {
      //假设由 ontimeout 事件处理程序处理
    }
  }
};
xhr.open("get", "timeout.php", true);
xhr.timeout = 1000; //将超时设置为1秒钟(仅适用于IE8+)
xhr.ontimeout = function() {
  alert("Request did not return in a second.");
};
xhr.send(null);
```

将 timeout 属性设置为 1000 毫秒，意味着如果请求在 1 秒钟内还没有返回，就会自动终止。请求终止时，会调用 ontimeout 事件处理程序。但此时 readyState 可能已经改变为 4 了，这意味着会调用 onreadystatechange 事件处理程序。可是，如果在超时终止 请求之后再访问 status 属性，就会导致错误。为避免浏览器报告错误，可以将检查 status 属性的语
句封装在一个 try-catch 语句当中。

## 重写响应的 MIME 类型

服务器返回的 MIME 类型是 text/plain，但数据中实际包含的是 XML。根据 MIME 类型， 即使数据是 XML，responseXML 属性中仍然是 null。通过调用 overrideMimeType()方法，可以保 证把响应当作 XML 而非纯文本来处理。

```js
const xhr = new XMLHttpRequest();
xhr.open("get", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);
xhr.overrideMimeType("text/xml");
xhr.send(null);
```

调用 overrideMimeType()必须在 send()方法之前，才能保证重写响应的 MIME 类型。

## 取消请求

```js
xhr.abort();
```

## 携带凭证

```js
const xhr = new XMLHttpRequest();
document.cookie = "name=xiamen"; // cookie不能跨域
xhr.withCredentials = true; // 前端设置是否带cookie
xhr.open("get", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);
xhr.load = function() {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.response);
  }
};
xhr.send(null);
```

## 进度事件

每个请求都从触发 loadstart 事件开始，接下来是一或多个 progress 事件，然后触发 error、abort 或 load 事件中的一个，最后以触发 loadend 事件结束。

- `loadstart`:在接收到响应数据的第一个字节时触发。
- `progress`:在接收响应期间持续不断地触发。
- `error`:在请求发生错误时触发。
- `abort`:在因为调用 abort()方法而终止连接时触发。
- `load`:在接收到完整的响应数据时触发。
- `loadend`:在通信完成或者触发 error、abort 或 load 事件后触发。

### load 事件

load 事件，用以替代 readystatechange 事件。响应接收完毕后将触发 load 事件，因此也就没有必要去检查 readyState 属性了。而 onload 事件处理程序会接收到一个 event 对象，其 target 属性 就指向 XHR 对象实例，因而可以访问到 XHR 对象的所有方法和属性。然而，并非所有浏览器都为这个事件实现了适当的事件对象。结果，开发人员还是要像下面这样被迫使用 XHR 对象变量

```js
const xhr = new XMLHttpRequest();

xhr.load = function() {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText);
  }
};

xhr.open("get", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);

xhr.send(null);
```

### progress 事件

progress 事件会在浏览器接收新数据期间周期性地触发

- `lengthComputable`: 是一个表示进度信息是否可用的布尔值
- `position`: 表示已经接收的字节数
- `totalSize`: 表示根据 Content-Length 响应头部确定的预期字节数。

创建进度指示器

```js
const xhr = new XMLHttpRequest();

xhr.onload = function(event) {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText);
  } else {
    alert("Request was unsuccessful: " + xhr.status);
  }
};
xhr.onprogress = function(event) {
  var divStatus = document.getElementById("status");
  if (event.lengthComputable) {
    divStatus.innerHTML =
      "Received " + event.position + " of " + event.totalSize + " bytes";
  }
};
xhr.open("get", "http://www.mocky.io/v2/5e01ea3f2f00007d97dcd401", true);
xhr.send(null);
```

## 优质代码
```js
function getError(option, xhr) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
export default function upload(option) {
  const xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    };
  }

  const formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(key => {
      const value = option.data[key];
      // support key-value array data
      if (Array.isArray(value)) {
        value.forEach(item => {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(option.method, option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }

  const headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers["X-Requested-With"] !== null) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }

  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort() {
      xhr.abort();
    }
  };
}
```