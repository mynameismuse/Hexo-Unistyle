---
title: 多选框
---
<style>

</style>

# 多选框

多选框，本组件适合一个多选框孤立使用的情形。如果需要使用多个多选框，需使用 `CheckboxGroup` 组件。

## 代码演示

<span id="J_Checkbox1" data-name="" data-value="wopay" data-checked>我已阅读并同意<a href="#">某基金</a>协议</span>
<span id="J_Checkbox2" data-color="blue" data-checked>蓝色</span>
<span id="J_Checkbox3" data-color="purple" data-checked>紫色</span>
<span id="J_Checkbox4" data-color="orange" data-checked>橙色</span>
<span id="J_Checkbox5">默认未选中</span>
<span id="J_Checkbox6" data-disabled>禁止选择</span>
<span id="J_Checkbox7" data-checked data-disabled>禁止选择，已选中</span>

{% script %}
var checkbox1 = new woUI.Checkbox('#J_Checkbox1')
var checkbox2 = new woUI.Checkbox('#J_Checkbox2')
var checkbox3 = new woUI.Checkbox('#J_Checkbox3')
var checkbox4 = new woUI.Checkbox('#J_Checkbox4')
var checkbox5 = new woUI.Checkbox('#J_Checkbox5')
var checkbox6 = new woUI.Checkbox('#J_Checkbox6')
var checkbox7 = new woUI.Checkbox('#J_Checkbox7')
{% endscript %}

{% demo %}
``` html
<span id="J_Checkbox1"
      data-name=""
      data-value="wopay"
      data-checked>
    我已阅读并同意<a href="#">某基金</a>协议
</span>

<span id="J_Checkbox2" data-color="blue" data-checked>蓝色</span>
<span id="J_Checkbox3" data-color="purple" data-checked>紫色</span>
<span id="J_Checkbox4" data-color="orange" data-checked>橙色</span>
<span id="J_Checkbox5">默认未选中</span>
<span id="J_Checkbox6" data-disabled>禁止选择</span>
<span id="J_Checkbox7" data-checked data-disabled>禁止选择，已选中</span>

<script>
var checkbox1 = new woUI.Checkbox('#J_Checkbox1')
var checkbox2 = new woUI.Checkbox('#J_Checkbox2')
var checkbox3 = new woUI.Checkbox('#J_Checkbox3')
var checkbox4 = new woUI.Checkbox('#J_Checkbox4')
var checkbox5 = new woUI.Checkbox('#J_Checkbox5')
var checkbox6 = new woUI.Checkbox('#J_Checkbox6')
var checkbox7 = new woUI.Checkbox('#J_Checkbox7')
</script>
```
{% enddemo %}

## html 支持属性

| 属性            | 是否必须 | 可选值                             | 说明          |
| ------------- | ---- | ------------------------------- | ----------- |
| data-name     | no   | any                             | checkbox 名  |
| data-value    | no   | any                             | checkbox 值  |
| data-color    | no   | red[默认值] / blue / purple / orange      | 颜色          |
| data-checked  | no   | false[默认值] / true （存在此属性即为true） | 是否被选中       |
| data-disabled | no   | false[默认值] / true （存在此属性即为true） | 是否禁止选择      |
| data-size     | no   | large / small / default[默认值]    | checkbox 大小 |

## API

### 初始化

`new woUI.Checkbox(queryString)`

* `queryString`: 可以传入 `Element.querySelector` 支持字符串，也可以传入元素，但只支持一个元素。

### 方法

#### 获取值

`woUI.Checkbox.prototype.value()`

#### 获取状态

`woUI.Checkbox.prototype.checked()`

#### 监听改变

`woUI.Checkbox.prototype.on(callback)`

* `callback`: 回调事件接收1个对象参数，为即将切换到的状态，内容为当前元素的 `checked` 和 `value`。回调事件返回结果作为拦截器，如果返回 `true`，则会拒绝本次改变（`change`），如果返回 `false` 或不返回，则执行本次改变。

`woUI.Checkbox.prototype.off(callback)`

* `callback`: 传入callback则取消当前回调，不传入则取消当前元素所有回调

#### 改变选中状态

`woUI.Checkbox.prototype.change(status)`

* `status`: 传入改变状态的值，支持 `Boolean` 格式。不传入则进行切换（`toggle`）。**通过此方法改变 Checkbox 的值，也会触发 `on` 事件，并受其返回值的影响。**

#### 改变禁止选择状态

`woUI.Checkbox.prototype.disabled(status)`

* `status`: 传入改变状态的值，支持 `Boolean` 格式。不传入则进行切换（`toggle`）。

## 注意

当 Checkbox 内容中，有需要触发 `click` 事件的元素时，需要对元素进行阻止默认事件 `preventDefault` 处理。否则点击此元素，会触发 Checkbox 状态改变。

例：

```html
<span class="J_Checkbox1">
    阅读并同意<span style="color:red" id="J_Test">Test</span>协议
</span>
<script>
    document.querySelector('#J_Test').addEventListener('click', function (e) {
        e.preventDefault()
        window.alert('这是原有内容的事件')
    })
</script>
```