# isNil

Checks if `value` is `null` or `undefined`.

```js
/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 *
 * undefined == null  // true
 */
const isNil = value => value == null;
```
