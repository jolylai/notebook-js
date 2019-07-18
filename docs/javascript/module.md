# 模块化

> [模块化思维导图](https://www.processon.com/view/link/5c8409bbe4b02b2ce492286a#map)

模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。
IIFE： 使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。

```js
(function() {
  return {
    data: []
  };
})();
```

AMD： 使用 requireJS 来编写模块化，特点：依赖必须提前声明好。

```js
define("./index.js", function(code) {
  // code 就是index.js 返回的内容
});
```

CMD： 使用 seaJS 来编写模块化，特点：支持动态引入依赖文件。

```js
define(function(require, exports, module) {
  var indexCode = require("./index.js");
});
```

CommonJS： nodejs 中自带的模块化。

```js
var fs = require("fs");
```

UMD：兼容 AMD，CommonJS 模块化语法。

webpack(require.ensure)：webpack 2.x 版本中的代码分割。

ES Modules： ES6 引入的模块化，支持 import 来引入另一个 js 。

```js
import a from "a";
```
