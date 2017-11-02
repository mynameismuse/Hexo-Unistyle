---
title: 按钮
---
<style>
	button {
		margin-top: 10px;
		margin-right: 10px;
	}

	.btn-group button, .btn-vertical-group button{
		margin: 0;
	}
</style>

# 按钮

{% note info 文档维护人: 王昊 %}
{% endnote %}

## 基础用法

基础的按钮用法。

{% html %}
  <button class="btn btn-blue">主要按钮</button>
  <button class="btn btn-basic btn-blue">次要按钮</button>
  <button class="btn btn-text btn-blue">文字按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-blue">
  主要按钮
</button>
<button class="btn btn-basic btn-blue">
  次要按钮
</button>
<button class="btn btn-text btn-blue">
  文字按钮
</button>
```
{% enddemo %}

## 禁用状态

按钮不可用状态。

{% html %}
  <button class="btn btn-blue is-disabled">主要按钮</button>
  <button class="btn btn-basic btn-blue is-disabled">次要按钮</button>
  <button class="btn btn-text btn-blue is-disabled">文字按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-blue is-disabled">
  主要按钮
</button>
<button class="btn btn-basic btn-blue is-disabled">
  次要按钮
</button>
<button class="btn btn-text btn-blue is-disabled">
  文字按钮
</button>
```
{% enddemo %}

## 有颜色倾向

不同的颜色倾向代表不同的提示。

### 默认显示颜色

{% html %}
  <button class="btn">默认按钮</button>
  <button class="btn btn-blue">蓝色按钮</button>
  <button class="btn btn-green">绿色按钮</button>
  <button class="btn btn-orange">橙色按钮</button>
  <button class="btn btn-red">红色按钮</button>
  <button class="btn btn-purple">紫色按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn">
  默认按钮
</button>
<button class="btn btn-blue">
  蓝色按钮
</button>
<button class="btn btn-green">
  绿色按钮
</button>
<button class="btn btn-orange">
  橙色按钮
</button>
<button class="btn btn-red">
  红色按钮
</button>
<button class="btn btn-purple">
  紫色按钮
</button>
```
{% enddemo %}

### hover显示颜色

{% html %}
  <button class="btn btn-basic">默认按钮</button>
  <button class="btn btn-basic btn-blue">蓝色按钮</button>
  <button class="btn btn-basic btn-green">绿色按钮</button>
  <button class="btn btn-basic btn-orange">橙色按钮</button>
  <button class="btn btn-basic btn-red">红色按钮</button>
  <button class="btn btn-basic btn-purple">紫色按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-basic">
  默认按钮
</button>
<button class="btn btn-basic btn-blue">
  蓝色按钮
</button>
<button class="btn btn-basic btn-green">
  绿色按钮
</button>
<button class="btn btn-basic btn-orange">
  橙色按钮
</button>
<button class="btn btn-basic btn-red">
  红色按钮
</button>
<button class="btn btn-basic btn-purple">
  紫色按钮
</button>
```
{% enddemo %}

### 文字显示颜色

{% html %}
  <button class="btn btn-text">默认按钮</button>
  <button class="btn btn-text btn-blue">蓝色按钮</button>
  <button class="btn btn-text btn-green">绿色按钮</button>
  <button class="btn btn-text btn-orange">橙色按钮</button>
  <button class="btn btn-text btn-red">红色按钮</button>
  <button class="btn btn-text btn-purple">紫色按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-text">
  默认按钮
</button>
<button class="btn btn-text btn-blue">
  蓝色按钮
</button>
<button class="btn btn-text btn-green">
  绿色按钮
</button>
<button class="btn btn-text btn-orange">
  橙色按钮
</button>
<button class="btn btn-text btn-red">
  红色按钮
</button>
<button class="btn btn-text btn-purple">
  紫色按钮
</button>
```
{% enddemo %}

## 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

{% html %}
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
    文件
  </button>
  <button class="btn btn-primary btn-blue">
    文件
    <i class="icon icon-add"></i>
  </button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-primary btn-blue">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-primary btn-blue">
  <i class="icon icon-add"></i>
  文件
</button>
<button class="btn btn-primary btn-blue">
  文件
  <i class="icon icon-add"></i>
</button>
```
{% enddemo %}

## 圆形按钮

圆形按钮内置图标。

{% html %}
  <button class="btn btn-circle btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-basic btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-blue is-disabled">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-basic btn-blue is-disabled">  <i class="icon icon-add"></i>
  </button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-circle btn-blue">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-basic btn-blue">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-blue is-disabled">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-basic btn-blue is-disabled">
  <i class="icon icon-add"></i>
</button>
```
{% enddemo %}

## 按钮大小

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

{% html %}
  <button class="btn btn-blue btn-mini">迷你按钮</button>
  <button class="btn btn-blue btn-small">小型按钮</button>
  <button class="btn btn-blue">正常按钮</button>
  <button class="btn btn-blue btn-large">大型按钮</button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-blue btn-mini">
  迷你按钮
</button>
<button class="btn btn-blue btn-small">
  小型按钮
</button>
<button class="btn btn-blue">
  正常按钮
</button>
<button class="btn btn-blue btn-large">
  大型按钮
</button>
```
{% enddemo %}

{% html %}
  <button class="btn btn-circle btn-blue btn-mini">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-blue btn-small">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <button class="btn btn-circle btn-blue btn-large">
    <i class="icon icon-add"></i>
  </button>
{% endhtml %}

{% demo %}
``` html
<button class="btn btn-circle btn-blue btn-mini">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-blue btn-small">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-blue">
  <i class="icon icon-add"></i>
</button>
<button class="btn btn-circle btn-blue btn-large">
  <i class="icon icon-add"></i>
</button>
```
{% enddemo %}

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

### 横向按钮组

{% html %}
  <div class="btn-group">
    <button class="btn btn-primary btn-blue">主要按钮</button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">主要按钮</button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">主要按钮</button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-group">
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
</div>
```
{% enddemo %}

{% html %}
  <div class="btn-group">
    <button class="btn btn-basic btn-blue">次要按钮</button>
    <button class="btn btn-basic btn-blue">次要按钮</button>
    <button class="btn btn-basic btn-blue">次要按钮</button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-group">
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
</div>
```
{% enddemo %}

{% html %}
  <div class="btn-group">
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add is-left"></i>
      文件
    </button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">
      文件
      <i class="icon icon-add is-right"></i>
    </button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-group">
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add is-left"></i>
    文件
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    文件
    <i class="icon icon-add is-right"></i>
  </button>
</div>

```
{% enddemo %}

{% html %}
  <div class="btn-group">
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-vertical"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-group">
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-vertical"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
</div>
```
{% enddemo %}

### 竖直按钮组

{% html %}
  <div class="btn-vertical-group">
    <button class="btn btn-primary btn-blue">主要按钮</button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">主要按钮</button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">主要按钮</button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-vertical-group">
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    主要按钮
  </button>
</div>
```
{% enddemo %}

{% html %}
  <div class="btn-vertical-group">
    <button class="btn btn-basic btn-blue">次要按钮</button>
    <button class="btn btn-basic btn-blue">次要按钮</button>
    <button class="btn btn-basic btn-blue">次要按钮</button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-vertical-group">
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
  <button class="btn btn-basic btn-blue">
    次要按钮
  </button>
</div>
```
{% enddemo %}

{% html %}
  <div class="btn-vertical-group">
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add is-left"></i>
      文件
    </button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">
      文件
      <i class="icon icon-add is-right"></i>
    </button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-vertical-group">
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add is-left"></i>
    文件
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    文件
    <i class="icon icon-add is-right"></i>
  </button>
</div>
```
{% enddemo %}

{% html %}
  <div class="btn-vertical-group">
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
    <i class="line-horizontal"></i>
    <button class="btn btn-primary btn-blue">
      <i class="icon icon-add"></i>
    </button>
  </div>
{% endhtml %}

{% demo %}
``` html
<div class="btn-vertical-group">
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
  <i class="line-horizontal"></i>
  <button class="btn btn-primary btn-blue">
    <i class="icon icon-add"></i>
  </button>
</div>
```
{% enddemo %}

{% script %}
console.log('test');
{% endscript %}







