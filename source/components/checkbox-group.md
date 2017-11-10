---
title: 多选框组
---
<style>

</style>

# 多选框组

多选框，本组件适合一个多选框孤立使用的情形。如果需要使用多个多选框，需使用 `CheckboxGroup` 组件。

## 代码演示

<div><span>颜色：</span><span class="J_Checkbox1" data-name="color" data-value="red" data-checked>红色</span><span class="J_Checkbox1" data-name="color" data-value="yellow">黄色</span></div>

{% script %}
var checkboxGroup1 = new woUI.CheckboxGroup('.J_Checkbox1')
{% endscript %}

{% demo %}
``` html
<div>
    <span>颜色：</span>
    <span class="J_Checkbox1" data-name="color" data-value="red" data-checked>红色</span>
    <span class="J_Checkbox1" data-name="color" data-value="yellow">黄色</span>
</div>

<script>
var checkboxGroup1 = new woUI.CheckboxGroup('.J_Checkbox1')
</script>
```
{% enddemo %}

## html 支持属性

同 `Checkbox`

## API

### 初始化

`new woUI.CheckboxGroup(queryString)`

* `queryString`: 可以传入 `Element.querySelectorAll` 支持字符串，也可以传入元素集合。

### 方法

#### 返回对象形式的当前值

`woUI.CheckboxGroup.prototype.value()`

#### 返回对象形式的选中状态

`woUI.CheckboxGroup.prototype.checked()`

如果 `checkbox` 每组多于一个，则返回最后一个 `checkbox` 的状态

#### 改变元素的状态

`woUI.CheckboxGroup.prototype.changeByChecked(name, checked)`

* `name`: 为空则改变所有多选框状态，不为空则改变当前元素名的状态。
* `checked`: 支持 `Boolean` 格式的选中状态。不传则为切换 （`toggle`）。

#### 改变元素的值。

`woUI.CheckboxGroup.prototype.changeByValue(name,value)`

* `name`: 为要改变的多选框的元素名
* `value`: 必须为数组形式的值

#### 监听改变

`woUI.CheckboxGroup.prototype.on(name, callback)`

* `name`: 必传。要监听的多选框名。
* `callback`: 回调函数必传，接收参数为对象，内含当前 `name`、当前 `name` 对应的值的集合以及当前触发元素。

`woUI.CheckboxGroup.prototype.off(name, [callback])`

* `name`: 必传。要取消监听的多选框名。
* `callback`: 传入callback则取消当前回调，不传入则取消当前元素所有回调。

#### 改变禁止选择状态

`woUI.CheckboxGroup.prototype.disabled(name, value, state)`

* `name`: 必传。为多选框名字筛选器。传入空为不进行过滤。
* `value`: 必传。为多选框值筛选器。传入空为不进行过滤。
* `state`: 支持 `Boolean` 格式，不传入则进行切换（`toggle`）。
