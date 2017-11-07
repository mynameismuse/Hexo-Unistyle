---
title: 快速上手
---

# 快速上手

## 首先，你应该看看演示例子

你应该到这里（[组件](#)），去看看你感兴趣的组件。

## 开发使用

在实际的开发中，你只需要下载组件包，并在项目中引入，就可以直接仿照例子中的 DEMO 进行开发了。

下载的 UI 代码库，大致内容如下：

* dist
    * Button
    * Tabs
    * ...
    * woUI
* lib
    * es5-shim.min.js
    * es5-sham.min.js
    * ie.min.js

其中 `dist` 为组件目录，里面可以单独引用某一个组件，也可以一次性引入 `woUI` 全部组件集合。

`lib` 目录主要为补丁目录，针对低版本浏览器需要进行打补丁才可以实现效果。

## 引入方式的区别

### 引入 `woUI` 全部组件包

只需要引入一次 js/css 文件，即可使用所有组件功能。

在使用时候，需要使用全局对象 `woUI` 进行调用，如：

```js
var tabs = new woUI.Tabs('#tabs')
```

### 引入单一组件包

需要引入对应组件的 js/css 文件，即可使用当前组件功能。

在使用时候，使用组件对象进行调用，如：

```js
var tabs = new Tabs('#tabs')
```

### 使用 es6 module / CommonJS 引入

```js
import Tabs from './dist/Tabs'
// 或者
const Tabs = require('./dist/Tabs')
```

## 兼容性

woUI 组件库兼容 IE8（及以上）、chrome、firefox 等浏览器。在现代浏览器中，体验会更加。

在 IE8、IE9中，会存在一些非标准的语法，我们可以针对他们进行补丁。

参考如下：

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabs</title>
    <link rel="stylesheet" href="./woUI/woUI.min.css">
    <!--[if lt IE 9]>
    <script src="./lib/es5-shim.min.js"></script>
    <script src="./lib/es5-sham.min.js"></script>
    <![endif]-->
    <!--[if lte IE 9]>
    <script src="./lib/ie.js"></script>
    <![endif]-->
</head>
<body>
<div class="wrap">
   content
</div>
<script src="../dist/Tabs/Tabs.min.js"></script>
</body>
</html>
```