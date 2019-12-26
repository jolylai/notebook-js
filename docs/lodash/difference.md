# difference

Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

```js
_.difference(array, [values]);

const flatten = array => {
  return array.reduce((a, b) => a.concat(b), []);
};
const difference = (array, ...values) => {
  const flatValues = flatten(values);
  return array.filter(value => !flatValues.includes(value));
};
```

### difference

找出 a 与 b 的交集的 a 的补集

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

// difference([1,2,3], [1,2]) -> [3]
```

### differenceBy

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); -> [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); -> [ { x: 2 } ]
```

### differenceWith ⭐️

```js
const differenceWith = (arr, val, comp) =>
  arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

// differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); -> [1, 1.2]
```

::: tip

- [Array.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  :::
