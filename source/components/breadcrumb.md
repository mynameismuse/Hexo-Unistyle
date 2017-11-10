---
title: 面包屑
---

# 面包屑

## 基础用法

适用广泛的基础用法。

{% html %}
<div class="breadcrumb">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>
</br>
</br>
<div class="breadcrumb">
	<a class="breadcrumb-item" href="">首页</a>
	<div class="breadcrumb-separator"> | </div>
	<a class="breadcrumb-item" href="">一级菜单</a>
	<div class="breadcrumb-separator"> | </div>
	<a class="breadcrumb-item" href="">二级菜单</a>
	<div class="breadcrumb-separator"> | </div>
	<a class="breadcrumb-item is-active" href="">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb">
	<a class="breadcrumb-item" href="">首页</a>
	<div class="breadcrumb-separator"> > </div>
	<a class="breadcrumb-item" href="">一级菜单</a>
	<div class="breadcrumb-separator"> > </div>
	<a class="breadcrumb-item" href="">二级菜单</a>
	<div class="breadcrumb-separator"> > </div>
	<a class="breadcrumb-item is-active" href="">内容</a>
</div>
{% endhtml %}

{% demo %}
``` html
<div class="breadcrumb">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>
</br>
</br>
<div class="breadcrumb">
  <a class="breadcrumb-item" href="">首页</a>
  <div class="breadcrumb-separator"> | </div>
  <a class="breadcrumb-item" href="">一级菜单</a>
  <div class="breadcrumb-separator"> | </div>
  <a class="breadcrumb-item" href="">二级菜单</a>
  <div class="breadcrumb-separator"> | </div>
  <a class="breadcrumb-item is-active" href="">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb">
  <a class="breadcrumb-item" href="">首页</a>
  <div class="breadcrumb-separator"> > </div>
  <a class="breadcrumb-item" href="">一级菜单</a>
  <div class="breadcrumb-separator"> > </div>
  <a class="breadcrumb-item" href="">二级菜单</a>
  <div class="breadcrumb-separator"> > </div>
  <a class="breadcrumb-item is-active" href="">内容</a>
</div>
```
{% enddemo %}

## 带图标面包屑

面包屑链接包含图标。

{% html %}
<div class="breadcrumb">
	<a class="breadcrumb-item"><i class="icon icon-user"></i>首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item"><i class="icon icon-user"></i>一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-disabled"><i class="icon icon-user"></i>二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active"><i class="icon icon-user"></i>内容</a>
</div>	
{% endhtml %}

{% demo %}
```html
<div class="breadcrumb">
  <a class="breadcrumb-item"><i class="icon icon-user"></i>首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item"><i class="icon icon-user"></i>一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-disabled"><i class="icon icon-user"></i>二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active"><i class="icon icon-user"></i>内容</a>
</div>	
```
{% enddemo %}

## 颜色选择

不同颜色可供选择。

{% html %}
<div class="breadcrumb">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-blue">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-red">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-green">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-orange">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-purple">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>
{% endhtml %}

{% demo %}
```html
<div class="breadcrumb">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-blue">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-red">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-green">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-orange">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-purple">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>
```
{% enddemo %}

## 大小选择

不同大小可供选择。

{% html %}
<div class="breadcrumb breadcrumb-mini">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-small">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>
<br>
<br>
<div class="breadcrumb breadcrumb-large">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>
{% endhtml %}

{% demo %}
``` html
<div class="breadcrumb breadcrumb-mini">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb breadcrumb-small">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>
<br>
<br>
<div class="breadcrumb breadcrumb-large">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>
```
{% enddemo %}

## 禁用模式

链接不可用状态。

{% html %}
<div class="breadcrumb">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-disabled">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active is-disabled">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb is-disabled">
	<a class="breadcrumb-item">首页</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">一级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item">二级菜单</a>
	<div class="breadcrumb-separator"> / </div>
	<a class="breadcrumb-item is-active">内容</a>
</div>	
{% endhtml %}

{% demo %}
``` html
<div class="breadcrumb">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-disabled">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active is-disabled">内容</a>
</div>	
<br>
<br>
<div class="breadcrumb is-disabled">
  <a class="breadcrumb-item">首页</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">一级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item">二级菜单</a>
  <div class="breadcrumb-separator"> / </div>
  <a class="breadcrumb-item is-active">内容</a>
</div>	
```
{% enddemo %}











