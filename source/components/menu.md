---
title: 导航菜单
---
<style>
    .all>div{display:inline-block;margin-left:20px; padding-top:20px;vertical-align: top;}
    .icon{
         margin-right: 12px;
    }
</style>

# 导航菜单

为网站提供导航功能的菜单。

## 顶栏

横向菜单

<div></div>
<div id="Menu2" data-type="navigation-2" data-color="black" style="line-height: 60px;width:700px;"><div class="menu"><div class="item" data-value="导航一"  data-iClass="icon icon-arrow-down" data-child="true"><div class="menu"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一"  data-iClass="icon icon-arrow-down"  data-child="true"><div class="menu" data-value="组类一"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div><div class="menu" data-value="组类一"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一"></div><div class="item" data-value="导航一"></div></div></div>
<div></div>
<div></div>
<div id="Menu1" data-type="navigation-1" data-color="" style="line-height: 60px;width:700px;"><div class="menu"><div data-value="导航一"  data-iClass="icon icon-arrow-down"  data-child="true" class="item"><div class="menu"><div data-value="导航二" class="item"></div><div data-value="导航二" class="item"></div></div></div><div data-value="导航一" data-iClass="icon icon-arrow-down"  data-child="true" class="item"><div data-value="组类一" class="menu"><div data-value="导航二" class="item"></div><div data-value="导航二" data-child="true" class="item"></div></div><div class="menu" data-value="组类二"><div data-value="导航二" class="item"></div><div data-value="导航二" class="item"></div></div></div><div data-value="导航一" class="item"></div><div data-value="导航一" class="item"></div></div></div>

{% demo %}
``` html
<div id="Menu1" data-type="navigation-1" data-color="" style="line-height: 60px;width:700px;">
    <div class="menu">
        <div data-value="导航一"  data-iClass="icon icon-arrow-down"  data-child="true" class="item">
            <div class="menu">
                <div data-value="导航二" class="item"></div>
                <div data-value="导航二" class="item"></div>
            </div>
        </div>
        <div data-value="导航一" data-iClass="icon icon-arrow-down"  data-child="true" class="item">
            <div data-value="组类一" class="menu">
                <div data-value="导航二" class="item"></div>
                <div data-value="导航二" data-child="true" class="item"></div>
            </div>
            <div class="menu" data-value="组类二">
                <div data-value="导航二" class="item"></div>
                <div data-value="导航二" class="item"></div>
            </div>
        </div>
        <div data-value="导航一" class="item"></div>
        <div data-value="导航一" class="item"></div>
    </div>
</div>
<div id="Menu2" data-type="navigation-2" data-color="black" style="line-height: 60px;width:700px;">
    <ul class="menu">
        <li class="item" data-value="导航一"  data-iClass="icon icon-arrow-down"  data-child="true">
            <ul class="menu">
                <li class="item" data-value="导航二"></li>
                <li class="item" data-value="导航二"></li>
            </ul>
        </li>
        <li class="item" data-value="导航一"  data-iClass="icon icon-arrow-down"  data-child="true">
            <ul class="menu" data-value="组类一">
                <li class="item" data-value="导航二"></li>
                <li class="item" data-value="导航二"></li>
                <li class="item" data-value="导航二"></li>
            </ul>
        </li>
        <li class="item" data-value="导航一"></li>
        <li class="item" data-value="导航一"></li>
    </ul>
</div>
```
{% enddemo %}

## 侧栏

垂直导航，提供三种展开方式，可嵌入子导航

<div class="all"><div class="m1"><div id="Menu3" data-type="type1" data-color="black" style="width:200px;"><div class="menu"><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div data-active="true" class="menu"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div class="menu"><div class="item" data-value="导航二" data-child="true"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div></div></div></div><div class="m2"><div id="Menu4" data-type="type2" data-color="black" style="width:200px;"><div class="menu"><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div data-active="true" class="menu"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div class="menu"><div class="item" data-value="导航二" data-child="true"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div></div></div></div><div class="m3"><div id="Menu5" data-type="type3" data-color="" style="width:200px;"><div class="menu"><div class="item" data-value="导航一"><div class="menu"><div class="item" data-value="导航二"><div class="menu"><div class="item" data-value="导航三"></div><div class="item" data-value="导航三"></div><div class="item" data-value="导航三"></div></div></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一"></div><div class="item" data-value="导航一"></div><div class="item" data-value="导航一"></div><div class="item" data-value="导航一"></div><div class="item" data-value="导航一"></div></div></div></div></div>

{% demo %}
``` html
<!--type1-->
<div id="Menu3" data-type="type1" data-color="black" style="width:200px;">
    <div class="menu">
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true">
            <div data-active="true" class="menu">
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
        </div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true">
            <div class="menu">
                <div class="item" data-value="导航二" data-child="true">
                    <!--<div class="menu">-->
                        <!--<div class="item" data-value="导航二"></div>-->
                        <!--<div class="item" data-value="导航二"></div>-->
                        <!--<div class="item" data-value="导航二"></div>-->
                    <!--</div>-->
                </div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
        </div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div>
    </div>
</div>
<br>
<!--type2-->
<div id="Menu4" data-type="type2" data-color="" style="width:200px;">
    <div class="menu">
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true">
            <div class="menu" data-value="组类一">
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
            <div class="menu" data-value="组类二">
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
        </div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true">
            <div class="menu" data-value="组类一" data-active="true">
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
        </div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-disable="true"></div>
        <div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div>
    </div>
</div>
<br>
<!--type3-->
<div id="Menu5" data-type="type3" data-color="" style="width:200px;">
    <div class="menu">
        <div class="item" data-value="导航一">
            <div class="menu">
                <div class="item" data-value="导航二">
                    <div class="menu">
                        <div class="item" data-value="导航三"></div>
                        <div class="item" data-value="导航三"></div>
                        <div class="item" data-value="导航三"></div>
                    </div>
                </div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
                <div class="item" data-value="导航二"></div>
            </div>
        </div>
        <div class="item" data-value="导航一"></div>
        <div class="item" data-value="导航一"></div>
        <div class="item" data-value="导航一"></div>
        <div class="item" data-value="导航一"></div>
        <div class="item" data-value="导航一"></div>
    </div>
</div>
```
{% enddemo %}

## 主题

垂直导航，提供两种主题，默认主题和深色主题。

<div class="all"><div class="m1"><div id="Menu6" data-type="type1" data-color="" style="width:200px;"><div class="menu"><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div data-active="true" class="menu"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div class="menu"><div class="item" data-value="导航二" data-child="true"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div></div></div></div><div class="m2"><div id="Menu7" data-type="type1" data-color="black" style="width:200px;"><div class="menu"><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div data-active="true" class="menu"><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1" data-iClass="icon icon-arrow-down"  data-child="true"><div class="menu"><div class="item" data-value="导航二" data-child="true"></div><div class="item" data-value="导航二"></div><div class="item" data-value="导航二"></div></div></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div><div class="item" data-value="导航一" data-ibefore="icon icon-nav-1"></div></div></div></div></div></div></div>

{% demo %}
```html
    <div data-color=""></div>默认主题
    <div data-color="black"></div>深色主题
```
{% enddemo %}

## 属性

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
data-type | Menu的五种类型 | 串 | 两种水平导航／三种垂直导航／三种菜单展开方式 | 
el | 元素名称 | 串 |     |
data-color | Menu的主题 | 串 | white和black | white
data-value | Menu内容 | 串 |    | 
路由器（data-key） | 是否具有子menu | 布尔 |  true or false  | false
独特的开（data-active） | 是否只保持一个子菜单的默认展开 | 布尔 |  true or false  | false
禁用（data-disable） | 是否只保持一个子菜单不可用 | 布尔 | true or false   | false


{% script %}
    var menu1 = new woUI.Menu('#Menu1');
    var menu2 = new woUI.Menu('#Menu2');
    var menu3 = new woUI.Menu('#Menu3');
    var menu4 = new woUI.Menu('#Menu4');
    var menu5 = new woUI.Menu('#Menu5');
    var menu6 = new woUI.Menu('#Menu6');
    var menu7 = new woUI.Menu('#Menu7');
{% endscript %}