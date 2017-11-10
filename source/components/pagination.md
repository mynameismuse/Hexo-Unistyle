---
title: 按钮
---
<style>
	.paginations,#paginations{
	  overflow:hidden;
	}
	.paginations ul,#paginations ul{
	   padding:0;
	}
</style>
# 分页组件

## 基础用法 
 <div id="paginations"></div>

`分页组件的`基本用法:初始化配置参数总页数,当前页,分页码数量,以及组件的承载容器
  传入的承载容器可以是Element,也可以是字符串如"#pages"
{% demo %}
``` html
 <div id="page"></div>
```
``` js
    var odiv=document.querySelector("#paginations");
   var page1=new Pagination({
			el:odiv,
			pageNum:6,
			currentPage:1,
			total:20,
			itemClass:"",
			nextpage:true,
			prepage:true,
		    nextPageclass:["abc"],
			prePageClass:["abc"],
			pageTogleClass:"",
			callback:func
	});
```
{% enddemo %}

## 主题

`分页`组件为元素提供了自定义样式接口和回调函数，参数包括：`itemClass`(`分页页码`的样式-数组或字符串)、`nextpageClass`('下一页'按钮的样式)和`prepageClass`(`上一页`按钮的自定义样式)
callback是点击分页组件时执行的回调函数.
{% script %}
   var func=function(param){
	        alert(JSON.stringify(param));
	};
  var odiv=document.querySelector("#paginations");
   var page1=new Pagination({
			el:odiv,
			pageNum:6,
			currentPage:1,
			total:20,
			itemClass:"",
			nextpage:true,
			prepage:true,
		    nextPageclass:["abc"],
			prePageClass:["abc"],
			pageTogleClass:"",
			callback:func
	});
{% endscript %}
