# 表单

## 共有的表单字段事件

- blur：当前字段失去焦点时触发。
- change：对于`<input>`和`<textarea>`元素，在它们失去焦点且 value 值改变时触发；对于`<select>`元素，在其选项改变时触发。
- focus：当前字段获得焦点时触发。

::: tip
关于 blur 和 change 事件的关系，并没有严格的规定。在某些浏览器中，blur
事件会先于 change 事件发生；而在其他浏览器中，则恰好相反。为此，不能假定这
两个事件总会以某种顺序依次触发，这一点要特别注意。
:::

## 文本框
```html
<!-- 单行文本 -->
<!-- 能够显示 25 个字符，但输入不能超过 50 个字符 -->
<input type="text" size="25" maxlength="50" value="initial value">

<!-- <textarea>的初始值必须要放在<textarea>和</textarea>之间 -->
<textarea rows="25" cols="5">initial value</textarea> 
```

读取和设置文本的值
```js
var textbox = document.forms[0].elements["textbox1"];
alert(textbox.value);
textbox.value = "Some new value"; 
```
不要使用 setAttribute()设置`<input>`元素的 value 特性，也不要去修改`<textarea>`
元素的第一个子节点。原因很简单：对 value 属性所作的修改，不一定会反映在 DOM 中。