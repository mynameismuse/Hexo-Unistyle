---
title: 图片
---
<style>
	.avatar-badge {
		margin-right: 10px;
	}

	button {
		margin: 0 10px;
	}
</style>

# 图片

## 基础用法

图片有三种样式可选。

{% html %}
<div class="avatar">M</div>
<div class="avatar avatar-border">M</div>
<div class="avatar avatar-circle">M</div>
{% endhtml %}

{% demo %}
``` html
<div class="avatar">M</div>
<div class="avatar avatar-border">M</div>
<div class="avatar avatar-circle">M</div>
```
{% enddemo %}

## 大小选择

图片有四种大小可选。

{% html %}
<div class="avatar avatar-mini">M</div>
<div class="avatar avatar-small">M</div>
<div class="avatar">M</div>
<div class="avatar avatar-large">M</div>
<br><br>
<div class="avatar avatar-mini avatar-border">M</div>
<div class="avatar avatar-small avatar-border">M</div>
<div class="avatar avatar-border">M</div>
<div class="avatar avatar-large avatar-border">M</div>
<br><br>
<div class="avatar avatar-mini avatar-circle">M</div>
<div class="avatar avatar-small avatar-circle">M</div>
<div class="avatar avatar-circle">M</div>
<div class="avatar avatar-large avatar-circle">M</div>
{% endhtml %}

{% demo %}
``` html
<div class="avatar avatar-mini">M</div>
<div class="avatar avatar-small">M</div>
<div class="avatar">M</div>
<div class="avatar avatar-large">M</div>
<br><br>
<div class="avatar avatar-mini avatar-border">M</div>
<div class="avatar avatar-small avatar-border">M</div>
<div class="avatar avatar-border">M</div>
<div class="avatar avatar-large avatar-border">M</div>
<br><br>
<div class="avatar avatar-mini avatar-circle">M</div>
<div class="avatar avatar-small avatar-circle">M</div>
<div class="avatar avatar-circle">M</div>
<div class="avatar avatar-large avatar-circle">M</div>
```
{% enddemo %}

## 颜色选择

可选择不同颜色背景。

{% html %}
<div class="avatar avatar-large avatar-circle avatar-red">M</div>
<div class="avatar avatar-large avatar-circle avatar-blue">M</div>
<div class="avatar avatar-large avatar-circle avatar-orange">M</div>
<div class="avatar avatar-large avatar-circle avatar-purple">M</div>
<div class="avatar avatar-large avatar-circle avatar-green">M</div>
{% endhtml %}

{% demo %}
``` html
<div class="avatar avatar-large avatar-circle avatar-red">M</div>
<div class="avatar avatar-large avatar-circle avatar-blue">M</div>
<div class="avatar avatar-large avatar-circle avatar-orange">M</div>
<div class="avatar avatar-large avatar-circle avatar-purple">M</div>
<div class="avatar avatar-large avatar-circle avatar-green">M</div>
```
{% enddemo %}

## 不同类型

支持三种类型: 图片、Icon、以及字符。

{% html %}
<div class="avatar avatar-circle">M</div>
<div class="avatar avatar-circle"><i class="icon icon-lock"></i></div>
<div class="avatar avatar-circle"><img src="http://img1.gtimg.com/ent/pics/9635/9635554.jpg"></div>
{% endhtml %}

{% demo %}
``` html
<div class="avatar avatar-circle">M</div>
<div class="avatar avatar-circle"><i class="icon icon-lock"></i></div>
<div class="avatar avatar-circle"><img src="http://img1.gtimg.com/ent/pics/9635/9635554.jpg"></div>
```
{% enddemo %}

## 带徽标的图片

通常用于消息提示。

{% html %}
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-blue">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-green">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-orange">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-purple">1</div>
</div>
<br><br>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-blue"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-green"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-orange"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-purple"></div>
</div>
{% endhtml %}

{% demo %}
``` html
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-blue">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-green">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-orange">1</div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-count avatar-purple">1</div>
</div>
<br><br>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-blue"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-green"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-orange"></div>
</div>
<div class="avatar-badge">
	<div class="avatar avatar-border">M</div>
	<div class="avatar-badge-dot avatar-purple"></div>
</div>
```
{% enddemo %}

## 自动调整字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

{% html %}
<div>
	<div id="avatar1" class="avatar avatar-circle">MMM</div>
	<button class="btn btn-basic btn-blue" onclick="muse()">变成Muse</button>
	<button class="btn btn-basic btn-blue" onclick="charles()">变成Charles</button>
</div>
<br>
<div>
  <div id="avatar2" class="avatar avatar-border">MMM</div>
  <button class="btn btn-basic btn-blue" onclick="muse2()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles2()">变成Charles</button>
</div>
{% endhtml %}

{% script %}
var test = document.querySelector('#avatar1');

var avatar1 = new woUI.Avatar({
	el: test
});

function muse() {
	avatar1.change({
		text: 'muse',
		color: '#ff5150',
		textColor: 'white'
	})
}

function charles() {
	avatar1.change({
		text: 'Charles',
		color: '#3f4464',
		textColor: '#13ce66'
	})
}

var avatar2 = new woUI.Avatar({
  el: '#avatar2'
});

function muse2() {
  avatar2.change({
		text: 'muse',
		color: '#ff5150',
		textColor: 'white'
	})
}

function charles2() {
  avatar2.change({
		text: 'Charles',
		color: '#3f4464',
		textColor: '#13ce66'
	})
}
{% endscript %}

{% demo %}
```html
<div>
  <div id="avatar1" class="avatar avatar-circle">MMM</div>
  <button class="btn btn-basic btn-blue" onclick="muse()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles()">变成Charles</button>
</div>
<br>
<div>
  <div id="avatar2" class="avatar avatar-border">MMM</div>
  <button class="btn btn-basic btn-blue" onclick="muse2()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles2()">变成Charles</button>
</div>
```
```js
var test = document.querySelector('#avatar1');

var avatar1 = new woUI.Avatar({
  el: test
});

function muse() {
  avatar1.change({
    text: 'muse',
    color: '#ff5150',
    textColor: 'white'
  })
}

function charles() {
  avatar1.change({
    text: 'Charles',
    color: '#3f4464',
    textColor: '#13ce66'
  })
}

var avatar2 = new woUI.Avatar({
  el: '#avatar2'
});

function muse2() {
  avatar2.change({
    text: 'muse',
    color: '#ff5150',
    textColor: 'white'
  })
}

function charles2() {
  avatar2.change({
    text: 'Charles',
    color: '#3f4464',
    textColor: '#13ce66'
  })
}
```
{% enddemo %}

根据不同的参数可以灵活调整样式。

{% html %}
<div>
  <div class="avatar-badge" id="avatar3">
		<div class="avatar avatar-border">M</div>
		<div class="avatar-badge-count">1</div>
	</div>
  <button class="btn btn-basic btn-blue" onclick="muse3()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles3()">变成Charles</button>
  <button class="btn btn-basic btn-blue" onclick="badge()">徽标背景绿色</button>
  <button class="btn btn-basic btn-blue" onclick="badge2()">徽标字体紫色</button>
  <button class="btn btn-basic btn-blue" onclick="badge3()">徽标内容变成3</button>
  <button class="btn btn-basic btn-blue" onclick="value1()">获取徽标值</button>
</div>
{% endhtml %}

{% script %}
var avatar3 = new woUI.Avatar({
	el: '#avatar3'
});

function muse3() {
	avatar3.change({
		text: 'muse',
		color: '#ff5150',
		textColor: 'white'
	})
}

function charles3() {
  avatar3.change({
		text: 'Charles',
		color: '#3f4464',
		textColor: '#13ce66'
	})
}

function badge() {
	avatar3.change({
		badgeColor: '#13ce66'
	})
}

function badge2() {
	avatar3.change({
		badgeTextColor: '#3f4464'
	})
}

function badge3() {
	avatar3.change({
		badgeText: '3'
	})
}

function value1() {
	alert(avatar3.getBadgeValue(function (result) {
		console.log(result)
	}));
}
{% endscript %}

{% demo %}
```html
<div>
  <div class="avatar-badge" id="avatar3">
    <div class="avatar avatar-border">M</div>
    <div class="avatar-badge-count">1</div>
  </div>
  <button class="btn btn-basic btn-blue" onclick="muse3()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles3()">变成Charles</button>
  <button class="btn btn-basic btn-blue" onclick="badge()">徽标背景绿色</button>
  <button class="btn btn-basic btn-blue" onclick="badge2()">徽标字体紫色</button>
  <button class="btn btn-basic btn-blue" onclick="badge3()">徽标内容变成3</button>
  <button class="btn btn-basic btn-blue" onclick="value1()">获取徽标值</button>
</div>
```
```js
var avatar3 = new woUI.Avatar({
  el: '#avatar3'
});

function muse3() {
  avatar3.change({
    text: 'muse',
    color: '#ff5150',
    textColor: 'white'
  })
}

function charles3() {
  avatar3.change({
    text: 'Charles',
    color: '#3f4464',
    textColor: '#13ce66'
  })
}

function badge() {
  avatar3.change({
    badgeColor: '#13ce66'
  })
}

function badge2() {
  avatar3.change({
    badgeTextColor: '#3f4464'
  })
}

function badge3() {
  avatar3.change({
    badgeText: '3'
  })
}

function value1() {
  alert(avatar3.getBadgeValue(function (result) {
    console.log(result)
  }));
}
```
{% enddemo %}

{% html %}
<div>
  <div class="avatar-badge" id="avatar4">
		<div class="avatar avatar-border">M</div>
		<div class="avatar-badge-dot avatar-blue"></div>
  </div>
  <button class="btn btn-basic btn-blue" onclick="muse4()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles4()">变成Charles</button>
  <button class="btn btn-basic btn-blue" onclick="badge4()">徽标背景绿色</button>
</div>
{% endhtml %}

{% script %}
var avatar4 = new woUI.Avatar({
	el: '#avatar4'
})

function muse4() {
	avatar4.change({
		text: 'muse',
		color: '#ff5150',
		textColor: 'white'
	})
}

function charles4() {
	avatar4.change({
		text: 'Charles',
		color: '#3f4464',
		textColor: '#13ce66'
	})
}

function badge4() {
	avatar4.change({
		badgeColor: '#13ce66'
	})
}
{% endscript %}

{% demo %}
```html
<div>
  <div class="avatar-badge" id="avatar4">
    <div class="avatar avatar-border">M</div>
    <div class="avatar-badge-dot avatar-blue"></div>
  </div>
  <button class="btn btn-basic btn-blue" onclick="muse4()">变成Muse</button>
  <button class="btn btn-basic btn-blue" onclick="charles4()">变成Charles</button>
  <button class="btn btn-basic btn-blue" onclick="badge4()">徽标背景绿色</button>
</div>
```
```js
var avatar4 = new woUI.Avatar({
  el: '#avatar4'
})

function muse4() {
  avatar4.change({
    text: 'muse',
    color: '#ff5150',
    textColor: 'white'
  })
}

function charles4() {
  avatar4.change({
    text: 'Charles',
    color: '#3f4464',
    textColor: '#13ce66'
  })
}

function badge4() {
  avatar4.change({
    badgeColor: '#13ce66'
  })
}
```
{% enddemo %}







