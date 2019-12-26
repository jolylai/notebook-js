# compact

Creates an array with all falsey values removed. The values `false`, `null`,`0`, `""`, `undefined`, and `NaN` are falsey.

```js
/**
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */

function compact(array) {
  let resultIndex = 0;
  const result = [];

  if (array == null) {
    return result;
  }

  for (const value of array) {
    if (value) {
      result[resultIndex++] = value;
    }
  }

  return result;
}
```

this is equal

```js
function compact(array) {
  if (array == null) {
    return [];
  }
  return array.filter(Boolean);
}
```

## compact

过滤掉 falsey values (false, null, 0, "", undefined, and NaN).

```js
const compact = arr => arr.filter(v => v);
const compact = arr => arr.filter(Boolean);

// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```
