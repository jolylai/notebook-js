# RegExp

> [正则表达式](https://regexper.com/)

正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。

## RegExp 对象

```js
//字面量
var reg = /\bis\b/g;
//构造函数
var reg = new RegExp("\\bis\\b", "g");
```

## 修饰符

- g: globle 全文搜索
- i: ignore case 忽略大小写
- m: multiple lines 多行搜索

## 正则表达式的组成

正则表达式由两种基本字符类型组成

- 原义字符

### 元字符

在正则表达式中有特殊含义的非字母字符

| 元字符 | 说明                           |
| ------ | ------------------------------ |
| \d     | 匹配数字                       |
| \D     | 匹配任意非数字的字符           |
| \w     | 匹配字母或数字或下划线         |
| \W     | 匹配任意不是字母，数字，下划线 |
| \s     | 匹配任意的空白符               |
| \S     | 匹配任意不是空白符的字符       |
| .      | 匹配除换行符以外的任意单个字符 |
| ^      | 表示匹配行首的文本(以谁开始)   |
| \$     | 表示匹配行尾的文本(以谁结束)   |

### 限定符

限定字符重复的次数

| 限定符 | 说明              |
| ------ | ----------------- |
| \*     | 重复零次或更多次  |
| +      | 重复一次或更多次  |
| ?      | 重复零次或一次    |
| {n}    | 重复 n 次         |
| {n,}   | 重复 n 次或更多次 |
| {n,m}  | 重复 n 到 m 次    |

### 范围类

- `[abc]` ：one of abc
- 取反
  `[^abc]` :none of abc
- [a-z][a-z] [0-9]
- `[a-zA-Z]`： 匹配左右字母
- `[0-9-]`: 匹配 0-9 或者-

## 模式

### 贪婪模式

```js
"12345678".replace(/\d{3,6}/g, "X"); //"X78"
```

### 非贪婪模式

```js
"12345678".replace(/\d{3,6}?/g, "X"); //"XX78"
```

## 分组

```js
Byron{3}  //Byronnn
(Byron){3} //ByronByronByron
```

## 忽略分组

```js
//分组前加?:
(?:Byron).(OK)
```

## 或

```js
"ByronsperByrCasper".replace(/Byr(on|Ca)sper/g, "X"); //"XX"
```

## 反向引用

```js
"2016-12-20".replace(/(\d{4})-(\d{2})-(\d{2})/g, "$2$3$1"); //12-20-2016
```

## 前瞻、后顾

### 前瞻

```js
// 匹配 Le 且 Le后面为 a
"League of Legends".replace(/Le(?=a)/g, "YY"); // "YYague of Legends"

// 负前瞻
// 匹配 Le 且 Le后面不为 a
"League of Legends".replace(/Le(?!a)/g, "YY"); // "League of YYgends"
```

## 后顾

```js
// 匹配 ague 且 ague 前面为 Le
"League of Legends".replace(/(?<=Le)ague/g, "YY"); // "LeYY of Legends"

// 负后顾
"League of Legends".replace(/(?<!=Le)ague/g, "YY"); // "LeYY of Legends"
```

## RegExp 属性(只读)

```js
var reg = /\w/;
reg.goloble; //false
reg.ignoreCase; //false
reg.multiline; //false
reg.sourse; ///\w/
reg.lastIndex;
```

## RegExp 方法

```js
var reg = /\w/;
reg.test("s"); //true
reg.exec("s"); //s
reg.lastIndex;
```

### exec 非全局调用

- 返回数组
- 第一个元素是与正则表达式相匹配的文本
- 第二个元素是与 RegExpObject 的第一个子表达式相匹配的文本(如果有的话)，以此类推

```js
var reg = /\d(\w)\d/;
var ts = "1a2b3c4d5e";
var ret = reg.exec(ts);
console.log(reg.lastIndex + "\t" + ret.index + "\t" + ret.toString());
//0   0   1a2,a
//lastIndex不生效
```

### exec 全局调用

```js
var reg = /\d(\w)\d/g;
var ts = "1a2b3c4d5e";
var ret = reg.exec(ts);
while ((ret = reg.exec(ts))) {
  console.log(reg.lastIndex + "\t" + ret.index + "\t" + ret.toString());
}
//7 4   3c4,c
```

## 字符串对象方法

- String.prototype.search(reg)

```js
//将传入的参数尝试转换成正则表达式
"asddfasdfa".search("s"); //1
```

- String.prototype.match(reg)

```js
//全局调用
"a21s1d1a1d1".match(/\d(\w)\d/g); //["1s1", "1a1"]
//非全局调用
var reg = /\d(\w)\d/;
var ts = "$1a2b3c4d5e";
var ret = ts.match(reg);
console.log(ret); //["1a2", "a", index: 0, input: "1a2b3c4d5e"]
console.log(ret.index + "\t" + reg.lastIndex); //1  0
```

- String.prototype.split(reg)

```js
//传入字符串
"1,a,2,b,3,c".split(","); //["1", "a", "2", "b", "3", "c"]
//传入正则表达式
"1a2b3c4d5e".split(/\d/g); //["", "a", "b", "c", "d", "e"]
```

- String.prototype.replace(str,str)
- String.prototype.replace(reg,str)
- String.prototype.replace(reg,function) 1.匹配字符串 2.正则表达式分组内容，没有分组则没有该参数 3.匹配项在字符串中的 index 4.原字符串

```js
"1a2b3c4d5e".replace(/\d/g, function(match, index, origin) {
  console.log(index);
  return parseInt(match) + 1;
}); //"2a3b4c5d6e"
```

```js
"1a2b3c4d5e".replace(/(\d)(\w)(\d)/g, function(
  match,
  group1,
  group2,
  group3,
  index,
  origin
) {
  console.log(match);
  return group1 + group3;
}); //"12b34d5e"
```

## 省市区
```js
const reg = /([^省]+省)([^市]+市)([^区]+区)(.*)/;
const address = '福建省厦门市思明区'
const [input, province, city, area] = address.match(reg)
```