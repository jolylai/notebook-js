# 链式调用

我们可以把多个的 promise 链接到一起以表示一系列异步步骤。这种方法可以实现的关键在于以下两个 Promise 固有行为特性。
::: tip

- 每次 Promise 调用 then(),它都会创建并返回一个新的 Promise，我们可以将它链接起来。
- 不管从 then()调用的完成回调（第一个参数）返回的值是什么，它都会被自动设置为被链接 Promise(第一点中的)的完成

  :::

## then 中的返回值

```js
const p = Promise.resolve(21);
p.then(v => {
  console.log("v", v); // 21
  return v * 2;
}).then(v => {
  console.log("v", v); // 42
});
```

::: tip
这里我们使用了 return 返回了 v\*2 ,这会立即完成链接的 promise，但如果步骤 2 需要步骤 1 异步完成一些事情呢？
:::

```js
const p = Promise.resolve(21);
p.then(v => {
  console.log("v", v); // 21
  return new Promise((resolve, reject) => {
    resolve(v * 2);
  });
}).then(v => {
  console.log("v", v); // 42
});
```

::: tip
这里我们 return 了一个新的 promise
