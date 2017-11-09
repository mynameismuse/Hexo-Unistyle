---
title: 文字提示
---
<style>
  .box {
     width: 400px;
     margin: auto;
     padding-top:50px;
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
     margin-top:4px;
  }
  .right {
     float: right;
  }
  .right button {
     display: block;
     margin-top:4px;
  }
  .theme, .content{
     width:50px;
     padding-top:15px;
  }
  .theme button,.content button{
     display:block;
     margin-top:10px;
  }
  }
</style>

# 文字提示

{% note info 文档维护人: 赵洋 %}
{% endnote %}

常用于展示鼠标hover时提示的信息。

## 基础用法 

Tooltip组件提供了9个展示位置。包括：`top-left`上左侧,`top`正上方,`top-right`上右侧,`right-top`右上方,`right`正右侧,`right-bottom`右下方,`bottom-right`下右侧,`bottom`正下方,`bottom-left`下左侧,`left-bottom`左下方,`left`正左侧,`left-top`左上方。

<div class="box"><div class="top"><button id="tooltip1" class="btn btn-basic btn-blue">上左</button> <button id="tooltip2" class="btn btn-basic btn-blue">上边</button> <button id="tooltip3" class="btn btn-basic btn-blue">上右</button></div><div class="right"><button id="tooltip4" class="btn btn-basic btn-blue">右上</button><button id="tooltip5" class="btn btn-basic btn-blue">右边</button><button id="tooltip6" class="btn btn-basic btn-blue">右下</button></div><div class="left"><button id="tooltip7" class="btn btn-basic btn-blue">左上</button><button id="tooltip8" class="btn btn-basic btn-blue">左边</button><button id="tooltip9" class="btn btn-basic btn-blue">左下</button></div><div class="bottom"><button id="tooltip10" class="btn btn-basic btn-blue">下左</button> <button id="tooltip11" class="btn btn-basic btn-blue">下边</button> <button id="tooltip12" class="btn btn-basic btn-blue">下右</button></div></div>

{% demo %}
``` html
  <button id="tooltip1" class="btn btn-basic btn-blue">上左</button>
  <button id="tooltip2" class="btn btn-basic btn-blue">上边</button>
  <button id="tooltip3" class="btn btn-basic btn-blue">上右</button>
  <button id="tooltip4" class="btn btn-basic btn-blue">右上</button>
  <button id="tooltip5" class="btn btn-basic btn-blue">右边</button>
  <button id="tooltip6" class="btn btn-basic btn-blue">右下</button>
  <button id="tooltip7" class="btn btn-basic btn-blue">左上</button>
  <button id="tooltip8" class="btn btn-basic btn-blue">左边</button>
  <button id="tooltip9" class="btn btn-basic btn-blue">左下</button>
  <button id="tooltip10" class="btn btn-basic btn-blue">下左</button>
  <button id="tooltip11" class="btn btn-basic btn-blue">下边</button>
  <button id="tooltip12" class="btn btn-basic btn-blue">下右</button>  
```
``` js
    var TooltipName = new woUI.Tooltip({ 
         el:   'id或者classname名 just like ('#tooltip1' or '.btn')',
         html: '提示框内的内容 just like ('上左' or '上边' 等)',
         type: '提示框所在的位置 just like ('top-left' or 'top' 等)',
    }) 
```
{% enddemo %}

## 主题

Tooltip组件提供了自定义主题，参数包括：`boxBorderColor`(`tooltip`的边框颜色)、`BoxBgColor`(tooltip的背景颜色)和`BoxTextColor`(`tooltip`内的字体颜色）。

<div class="theme"><button id="tooltip13" class="btn btn-basic btn-blue">默认效果</button> <button id="tooltip14" class="btn btn-basic btn-blue">自定义主题</button> <button id="tooltip15" class="btn btn-basic btn-blue">自定义主题</button></div>

{% demo %}
``` html
 <button id="tooltip13" class="btn btn-basic btn-blue">默认效果</button>
 <button id="tooltip14" class="btn btn-basic btn-blue">自定义主题</button> 
 <button id="tooltip15" class="btn btn-basic btn-blue">自定义主题</button>
```
``` js
   var Tooltip13 = new woUI.Tooltip({
     el: '#tooltip13',
     html: '您的密码无法正常输入',
     type: 'right',
   })
   
   var Tooltip14 = new woUI.Tooltip({
     el: '#tooltip14',
     html: '您的密码无法正常输入',
     type: 'right',
     boxBorderColor:'#000',
     BoxBgColor:'#666',
     BoxTextColor:'#fff',
   })
   
   var Tooltip15 = new woUI.Tooltip({
     el: '#tooltip15',
     html: '您的密码无法正常输入',
     type: 'right',
     boxBorderColor:'#C1E9F5',
     BoxBgColor:'#F4FCFF',
     BoxTextColor:'#666',
   })
```
{% enddemo %}

## 内容扩展

Tooltip组件提供了自定义内容，可以是文字，也可以是图片。

<div class="content"><button id="tooltip16" class="btn btn-basic btn-blue">自定义内容（文字）</button><button id="tooltip17" class="btn btn-basic btn-blue">自定义内容（图片）</button></div>

{% demo %}
``` html
 <button id="tooltip16" class="btn btn-basic btn-blue">自定义内容（文字）</button>
 <button id="tooltip17" class="btn btn-basic btn-blue">自定义内容（图片）</button> 
```
``` js
    var Tooltip16 = new woUI.Tooltip({
        el: '#tooltip16',
        html: '浮层内容文案',
        type: 'right'
    })  
    var Tooltip17 = new woUI.Tooltip({
        el: '#tooltip17',
        html: '<img src="image/二维码.png">',
        type: 'right-top',
    }) 
```
{% enddemo %}

## 属性

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
放置（type） | tooltip出现的位置 | 串 | 顶/顶开始/顶端/底/底开始/底端/左/左开始/左端/右/右启动/右端 | 右
el | 元素名称 | 串 |     |
html | tooltip框内容 | 串 | 文字或者插入图片 | 
boxBorderColor | tooltip框的边框颜色 | 串 |  所有颜色  | #E0E0E0
BoxBgColor | tooltip框的背景颜色 | 串 |  所有颜色  | #fffff
BoxTextColor | tooltip框的文字颜色 | 串 |  所有颜色  | #666666

{% script %}
  var Tooltip1 = new woUI.Tooltip({
    el: '#tooltip1',
    html: '上左',
    type: 'top-left',
  })
    
  var Tooltip2 = new woUI.Tooltip({
    el: '#tooltip2',
    html: '上边',
    type: 'top',
  })
  
  var Tooltip3 = new woUI.Tooltip({
    el: '#tooltip3',
    html: '上右',
    type: 'top-right',
  })
  
  var Tooltip4 = new woUI.Tooltip({
    el: '#tooltip4',
    html: '右上',
    type: 'right-top',
  })
  
  var Tooltip5 = new woUI.Tooltip({
    el: '#tooltip5',
    html: '右边',
    type: 'right',
  })
  
  var Tooltip6 = new woUI.Tooltip({
    el: '#tooltip6',
    html: '右下',
    type: 'right-bottom',
  })
  
  var Tooltip7 = new woUI.Tooltip({
    el: '#tooltip7',
    html: '右上',
    type: 'left-top',
  })
  
  var Tooltip8 = new woUI.Tooltip({
    el: '#tooltip8',
    html: '右边',
    type: 'left',
  })
  
  var Tooltip9 = new woUI.Tooltip({
    el: '#tooltip9',
    html: '右下',
    type: 'left-bottom',
  })
  
  var Tooltip10 = new woUI.Tooltip({
    el: '#tooltip10',
    html: '右上',
    type: 'bottom-left',
  })
  
  var Tooltip11 = new woUI.Tooltip({
    el: '#tooltip11',
    html: '右边',
    type: 'bottom',
  })
  
  var Tooltip12 = new woUI.Tooltip({
    el: '#tooltip12',
    html: '右下',
    type: 'bottom-right',
  })
  
  var Tooltip13 = new woUI.Tooltip({
    el: '#tooltip13',
    html: '浮层内容文案',
  })
  
  var Tooltip14 = new woUI.Tooltip({
    el: '#tooltip14',
    html: '浮层内容文案',
    boxBorderColor:'#666',
    BoxBgColor:'#666',
    BoxTextColor:'#fff',
  })
  
  var Tooltip15 = new woUI.Tooltip({
    el: '#tooltip15',
    html: '浮层内容文案',
    boxBorderColor:'#C1E9F5',
    BoxBgColor:'#F4FCFF',
    BoxTextColor:'#666',
  })
  
  var Tooltip16 = new woUI.Tooltip({
    el: '#tooltip16',
    html: '浮层内容文案',
  })
   
  var Tooltip17 = new woUI.Tooltip({
    el: '#tooltip17',
    html: '<img src="image/二维码.png">',
    type: 'right-top',
  })  
{% endscript %}
