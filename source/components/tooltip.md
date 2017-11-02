---
title: 文字提示
---
<style>
  .box {
     width: 400px;
     margin: auto;
  }
  .top {
     text-align: center;
  }
  .top button{
      display:inline-block;
  }
  .bottom {
     margin-top: 100px;
     text-align: center;
  }
  .left {
     float: left;
  }
  .left button {
     display: block;
  }
  .right {
     float: right;
  }
  .right button {
     display: block;
  }
  .box button{
     width:50px;height:35px;border-radius:4px;background-color: #fff;border:1px solid #ddd;
  }
  .show button{
     width:240px;height:35px;border-radius:4px;background-color: #fff;border:1px solid #ddd;
  }
</style>

# 提示框

{% note info 文档维护人: 赵洋 %}
{% endnote %}

常用于展示鼠标hover时提示的信息。

## 基础用法 

Tooltip组件提供了9个展示位置。

<div class="box"><div class="top"><button id="tooltip1">上左</button> <button id="tooltip2">上边</button> <button id="tooltip3">上右</button></div><div class="right"><button id="tooltip4">右上</button><button id="tooltip5">右边</button><button id="tooltip6">右下</button></div><div class="left"><button id="tooltip7">左上</button><button id="tooltip8">左边</button><button id="tooltip9">左下</button></div><div class="bottom"><button id="tooltip10">下左</button> <button id="tooltip11">下边</button> <button id="tooltip12">下右</button></div></div>

{% demo %}
``` html
  <button id="tooltip1">上左</button>
  <button id="tooltip2">上边</button>
  <button id="tooltip3">上右</button>
  <button id="tooltip4">右上</button>
  <button id="tooltip5">右边</button>
  <button id="tooltip6">右下</button>
  <button id="tooltip7">左上</button>
  <button id="tooltip8">左边</button>
  <button id="tooltip9">左下</button>
  <button id="tooltip10">下左</button>
  <button id="tooltip11">下边</button>
  <button id="tooltip12">下右</button>  
```
{% enddemo %}

## 主题

`Tooltip`组件提供了自定义主题，参数包括：`boxBorderColor`(`tooltip`的边框颜色)、`BoxBgColor`(tooltip的背景颜色)和`BoxTextColor`(`tooltip`内的字体颜色）

<div class ='show'><button id="tooltip13">默认效果</button> <button id="tooltip14">带有背景的(更改后的效果)</button> <button id="tooltip15">带有背景的(更改后的效果)</button></div>

{% demo %}
``` html
 <button id="tooltip13">默认效果</button>
 <button id="tooltip14">带有背景的(更改后的效果)</button> 
 <button id="tooltip15">带有背景的(更改后的效果)</button>
```
{% enddemo %}

{% script %}
  var Tooltip1 = new Tooltip({
      id: 'tooltip1',
      html: '上左',
      type: 'top-left',
    })
  var Tooltip2 = new Tooltip({
    id: 'tooltip2',
    html: '上边',
    type: 'top',
  })
  var Tooltip3 = new Tooltip({
    id: 'tooltip3',
    html: '上右',
    type: 'top-right',
  })
  var Tooltip4 = new Tooltip({
    id: 'tooltip4',
    html: '右上',
    type: 'right-top',
  })
  var Tooltip5 = new Tooltip({
    id: 'tooltip5',
    html: '右边',
    type: 'right',
  })
  var Tooltip6 = new Tooltip({
    id: 'tooltip6',
    html: '右下',
    type: 'right-bottom',
  })
  var Tooltip7 = new Tooltip({
    id: 'tooltip7',
    html: '右上',
    type: 'left-top',
  })
  var Tooltip8 = new Tooltip({
    id: 'tooltip8',
    html: '右边',
    type: 'left',
  })
  var Tooltip9 = new Tooltip({
    id: 'tooltip9',
    html: '右下',
    type: 'left-bottom',
  })
  var Tooltip10 = new Tooltip({
    id: 'tooltip10',
    html: '右上',
    type: 'bottom-left',
  })
  var Tooltip11 = new Tooltip({
    id: 'tooltip11',
    html: '右边',
    type: 'bottom',
  })
  var Tooltip12 = new Tooltip({
    id: 'tooltip12',
    html: '右下',
    type: 'bottom-right',
  })
  var Tooltip13 = new Tooltip({
      id: 'tooltip13',
      html: '您的密码无法正常输入',
      type: 'bottom',
    })
  
  var Tooltip14 = new Tooltip({
      id: 'tooltip14',
      html: '您的密码无法正常输入',
      type: 'bottom',
      boxBorderColor:'#000',
      BoxBgColor:'#666',
      BoxTextColor:'#fff',
    })
  
  var Tooltip15 = new Tooltip({
        id:'tooltip15',
        html: '您的密码无法正常输入',
        type: 'bottom',
        boxBorderColor:'#C1E9F5',
        BoxBgColor:'#F4FCFF',
        BoxTextColor:'#666',
      })
{% endscript %}
