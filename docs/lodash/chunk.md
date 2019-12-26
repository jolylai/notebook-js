# chunk

Creates an array of elements split into groups the length of `size`.

```js
/**
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

function chunk(array, size) {
  size = Math.max(size, 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}
```

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
```

::: tip

- [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
  :::
