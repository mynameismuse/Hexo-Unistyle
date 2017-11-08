---
title: 日期选择器
---
<style>
  .datepicker {
    height: 34px;
    width: 180px;
    padding: 0 10px;
    line-height: 35px;
    border: 1px solid #eee;
    border-radius: 2px;
    font-family: inherit;
    cursor: pointer;
  }
  .btn {
    vertical-align: baseline;
  }
</style>

# 日期选择器

{% note info 文档维护人: 柴肖钧 %}
{% endnote %}

## 示例

### 选择日

选择的日期具体到日单位，形如 `yyyyMMdd`。

{% html %}
<div style="margin-top:1.2em">
  <input id="dp_1" class="datepicker" placeholder="请选择日期" readonly />
</div>
{% endhtml %}

{% script %}
new woUI.DatePicker('#dp_1', {
  type: woUI.DatePicker.TYPE_DAY  // 默认类型就是 DatePicker.TYPE_DAY
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
{% endscript %}

{% demo %}
```html
<!-- 要绑定日期控件的目标元素 -->
<input id="dp_1" class="datepicker" placeholder="请选择日期" readonly />
```
```javascript
new woUI.DatePicker('#dp_1', {
  type: woUI.DatePicker.TYPE_DAY  // 默认类型就是 DatePicker.TYPE_DAY
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
```
{% enddemo %}

### 选择月

选择的日期具体到月单位，形如 `yyyyMM`

{% html %}
<div style="margin-top:1.2em">
  <input id="dp_2" class="datepicker" placeholder="请选择日期" readonly />
</div>
{% endhtml %}

{% script %}
new woUI.DatePicker('#dp_2', {
  type: woUI.DatePicker.TYPE_MONTH
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
{% endscript %}

{% demo %}
```html
<!-- 要绑定日期控件的目标元素 -->
<input id="dp_2" class="datepicker" placeholder="请选择日期" readonly />
```
```javascript
new woUI.DatePicker('#dp_2', {
  type: woUI.DatePicker.TYPE_MONTH
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
```
{% enddemo %}

### 选择年

选择的日期具体到年单位，形如 `yyyy`

{% html %}
<div style="margin-top:1.2em">
  <input id="dp_3" class="datepicker" placeholder="请选择日期" readonly />
</div>
{% endhtml %}

{% script %}
new woUI.DatePicker('#dp_3', {
  type: woUI.DatePicker.TYPE_YEAR
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
{% endscript %}

{% demo %}
```html
<!-- 要绑定日期控件的目标元素 -->
<input id="dp_3" class="datepicker" placeholder="请选择日期" readonly />
```
```javascript
new woUI.DatePicker('#dp_3', {
  type: woUI.DatePicker.TYPE_YEAR
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
```
{% enddemo %}

### 选择固定范围内的日期

只能选择指定范围内的日期，例如 `'2017-01-01' ~ '2017-12-31'`

{% html %}
<div style="margin-top:1.2em">
  <input id="dp_4" class="datepicker" placeholder="请选择日期" readonly />
</div>
{% endhtml %}

{% script %}
new woUI.DatePicker('#dp_4', {
  range: { start: '2017-01-01', end: '2017-12-31' }
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
{% endscript %}

{% demo %}
```html
<!-- 要绑定日期控件的目标元素 -->
<input id="dp_4" class="datepicker" placeholder="请选择日期" readonly />
```
```javascript
new woUI.DatePicker('#dp_4', {
  range: { start: '2017-01-01', end: '2017-12-31' }
}, function (date) {
  this.elements.target.value = this.getDateString('/')
})
```
{% enddemo %}

## API

### 语法

```javascript
new woUI.DatePicker(target[, options][, callback])
```

### 参数

<strong>target `<String|Node|NodeList>`</strong>

要绑定日期选择器的目标元素，可以传入 `String` (css 选择器)，也可以传入元素 `(Node)` 或元素集合 `(NodeList)`。

<p class="tip">
传入 `class` 选择器时需注意：如果该 `class` 选择器可选中多个页面元素，那么所有被选中的元素都会绑定一个日期选择控件
</p>

<strong>options `<Object>`</strong>

初始化日期选择器的一些配置项，可选参数。包含的属性有：

属性 | 类型 | 作用
---- | --- | ----
`type` | `Number` | 指定所要初始化日期控件的类型，取值有：<br>`Datepicker.TYPE_YEAR`: 日期控件选择的日期类型为 `yyyy`<br>`Datepicker.TYPE_MONTH`: 日期控件选择的日期类型为 `yyyyMM`<br>`Datepicker.TYPE_DAY`: 日期控件选择的日期类型为 `yyyyMMdd`
`date` | `Date`&#124;`String` | 指定日期控件的初始化日期，也就是默认选中的日期
`range` | `Object` | 指定日期控件可选的日期范围：<br> `range.start`: 日期范围的开始日期<br> `range.end`: 日期范围的结束日期

<strong>callback `<Function>`</strong>

日期选择器的回调函数，可选参数。回调函数有一个 `date` 参数，它是一个对象，其属性包含：

属性 | 类型 | 作用
--- | --- | ---
`year` | `Number` | 返回日期控件选中日期的年份信息
`month` | `Number` | 返回日期控件选中日期的月份信息<br>当日期控件的类型为 `DatePicker.TYPE_MONTH` 时，该返回值始终为 `null`
`day` | `Number` | 返回日期控件选中日期的日信息<br>当日期控件的类型为 `DatePicker.TYPE_YEAR`或`DatePicker.TYPE_MONTH` 时，该返回值始终为 `null`

回调函数内部的 `this` 值绑定了控件实例本身，也就是说在回调函数内部可以通过 `this` 访问该控件实例。

<p class="tip">
1. 如果要在回调函数内部使用 `this` 访问实例本身，回调函数只能使用普通的 `function` 函数，而不能使用 `()=>{}` 箭头函数
2. 只有当选中日期时才触发回调，即使本次选中的日期和上一次选中的日期相同，也会触发一次回调
</p>

### 返回值

<strong>return `<DatePicker|Array>`</strong>

如果根据参数 `target` 只实例化了一个控件那么返回该控件实例；如果实例化了多个，则返回这些实例组成的数组。

### 实例属性和方法

<strong>datePicker.elements</strong>

保存了与日期控件相关的 `DOM` 元素，最常用的就是 `target` 元素，可以在回调函数内部快速访问绑定该控件的目标元素。

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1', function () {
  console.log(this.elements.target)  // this.elements.target 就是 document.querySelector('#dp_1')
})
```
{% enddemo %}

<strong>DatePicker.prototype.show()</strong>

手动控制日期控件的显示

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')

dp1.show()
```
{% enddemo %}

<strong>DatePicker.prototype.hide()</strong>

手动控制日期控件的隐藏。虽然控件可以自动的显示与隐藏，但这两个方法为手动控制提供了方便。

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')

dp1.hide()
```
{% enddemo %}

<strong>DatePicker.prototype.getDate()</strong>

获取日期选择器当前选中的日期信息，返回值是一个对象，格式：`{year: *, month: *, day: *}`

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')
var date = dp1.getDate()
console.log(date)  // 打印选中的日期对象
```
{% enddemo %}

<strong>DatePicker.prototype.getDateString(splitter)</strong>

获取日期选择器当前选中的日期信息，返回值是一个字符串，可由传入的参数进行分割，默认格式为 `yyyy-MM-dd`

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')
var date = dp1.getDateString()
console.log(date)  // 打印选中的日期字符串
```
{% enddemo %}

<strong>DatePicker.prototype.setDate(date)</strong>

设置日期选择器当前选中的日期，主要用于实例化日期选择器之后重新设置选中的日期，参数 `date` 的格式同 `options.date`

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')
console.log(dp1.getDateString())  // 初始选中的日期为空 ""
dp1.setDate('2017-01-01')
console.log(dp1.getDateString())  // 重新设置选中的日期为 "2017-01-01"
```
{% enddemo %}

<strong>DatePicker.prototype.setRange(range)</strong>

设置日期选择器可选的日期范围，主要用于实例化日期选择器之后重新设置可选的日期范围，参数 `range` 的格式同 `options.range`

<p class="tip">
该方法可同时设置日期范围的开始日期和结束日期，如果只设定一个（比如开始日期），那么另外一个（结束日期）则保持原来的设置不变。
</p>

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1', {
  range: {start: '2010-01-01', end: '2020-01-01'}
})  // 此时控件可选的日期范围为 '2010-01-01' ~ '2020-01-01'
// 实例化之后重新设置日期范围
dp1.setRange({ start: '2000-01-01' })  // 此时控件可选的日期范围为 '2000-01-01' ~ '2020-01-01'
dp1.setRange({ start: '1900-01-01', end: '' })  // 此时控件可选的日期范围为 '1900-01-01' ~ ...
```
{% enddemo %}

<strong>DatePicker.prototype.setOptions(options)</strong>

可同时重新设置多个配置项，`options` 参数的格式同实例化的 `options` 参数

{% demo %}
```javascript
var dp1 = new woUI.DatePicker('#dp_1')
// 实例化之后重新设置配置项
dp1.setOptions({
  date: '2017-01-01',
  range: {start: '2010-01-01', end: '2020-01-01'}
})
```
{% enddemo %}

### 类静态属性和方法

<strong>DatePicker.TYPE_YEAR</strong>

表示日期控件只能选择年份信息，例如 `yyyy`

<strong>DatePicker.TYPE_MONTH</strong>

表示日期控件只能选择年月信息，例如 `yyyy-MM`

<strong>DatePicker.TYPE_DAY</strong>

表示日期控件只能选择年月日信息，例如 `yyyy-MM-dd`

<p class="success">
`Datepicker.TYPE_YEAR`、`Datepicker.TYPE_MONTH`、`Datepicker.TYPE_DAY` 这三个值就是初始化日期控件时的 `options.type` 参数可取的值
</p>

<strong>DatePicker.dayOffset(date, offset)</strong>

计算指定日期 date 偏移 offset 天数后的日期。在设置可选日期范围时会非常有用

参数说明：

参数 | 类型 | 备注
---- | --- | ---
`date` | `Date`&#124;`String` | 基准日期，可以是一个字符串格式的日期，例如 `2017-1-1` ，也可以是 `Date` 对象的一个实例
`offset` | `Number` | 偏移量，单位/天。

返回值：

`Return <Date>` 返回偏移后的日期，一个 `Date` 对象的实例。

{% demo %}
```javascript
// 实例化一个可选范围为 今天 ~ (今天 + 10) 的日期
var start = new Date()
var end = woUI.DatePicker.dayOffset(start, 10)
var dp1 = new woUI.DatePicker('#dp_1', {
  range: { start: start, end: end }
})
```
{% enddemo %}


