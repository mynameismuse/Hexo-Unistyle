---
title: 标签页
---
<style>

</style>

# 标签页

{% note info 文档维护人: 李静晨 %}
{% endnote %}

选项卡切换组件。

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 代码演示

### 有边框的效果

<div id="J_Tabs1" data-style="bordered" data-default="tab1"><div data-name="栏目1" data-key="tab1"><div><p>这里是栏目1</p><p>可以自定义任意内容</p></div></div><div data-name="栏目2" data-key="tab2">这里是栏目2</div><div data-name="栏目3" data-key="tab3">这里是栏目3</div></div>

{% script %}
var tabs1 = new woUI.Tabs('#J_Tabs1')
{% endscript %}

{% demo %}
``` html
<div id="J_Tabs1" data-style="bordered" data-default="tab1">
    <div data-name="栏目1" data-key="tab1">
        <div>
            <p>这里是栏目1</p>
            <p>可以自定义任意内容</p>
        </div>
    </div>
    <div data-name="栏目2" data-key="tab2">这里是栏目2</div>
    <div data-name="栏目3" data-key="tab3">这里是栏目3</div>
</div>
<script>
var tabs1 = new woUI.Tabs('#J_Tabs1')
</script>
```
{% enddemo %}

### 无边框的效果

选中第二项，并触发回调事件

<div id="J_Tabs2" data-default="tab2"><div data-name="信息" data-key="tab1">第一页</div><div data-name="个人空间" data-key="tab2">第二页</div><div data-name="积分" data-key="tab3">第三页</div><div data-name="设置" data-key="tab4">第四页</div></div>

{% script %}
var tabs2 = new woUI.Tabs('#J_Tabs2')
tabs2.on(function (tab, oldTab) {
    window.alert('页面切换:' + tab + ' <-- ' + oldTab)
})
{% endscript %}

{% demo %}
``` html
<div id="J_Tabs2" data-default="tab2">
    <div data-name="信息" data-key="tab1">第一页</div>
    <div data-name="个人空间" data-key="tab2">第二页</div>
    <div data-name="积分" data-key="tab3">第三页</div>
    <div data-name="设置" data-key="tab4">第四页</div>
</div>
<script>
var tabs2 = new woUI.Tabs('#J_Tabs2')
tabs2.on(function (tab, oldTab) {
    window.alert('页面切换:' + tab + ' <-- ' + oldTab)
})
</script>
```
{% enddemo %}


## html 支持属性

| 属性           | 是否必须 | 可选值             | 说明                           |
| ------------ | ---- | --------------- | ---------------------------- |
| data-style   | no   | bordered 或空（默认） | Tabs 外观                      |
| data-default | no   | any             | Tabs 默认选中标签页，与子元素 data-key 对应。不传入则默认为为第一页 |
| data-key     | yes  | any             | 仅子元素可配置，当前 Tab 名             |
| data-name    | yes  | any             | 仅子元素可配置，当前 Tab 的显示名          |
| class        | no   | any             | 仅子元素可配置，此样式类将最终渲染到 Tab 类上    |

## API

### 初始化

`new woUI.Tabs(queryString)`

* `queryString`: 可以传入 `Element.queryString` 支持字符串，也可以直接传入元素对象

### 方法

#### 改变标签页

`woUI.Tabs.prototype.change(key)`

* `key`: 切换至 `key`  页，对应页面的 `data-key`。

#### 获取当前标签页

`woUI.Tabs.prototype.getCurrentTab()`

返回当前的 tab 的 `key` 值

#### 触发事件
`woUI.Tabs.prototype.on(callback)`

* `callback`: 监听 Tabs 的切换，回调函数接收 2 个参数，分别是切换到新 Tabs 页的 `key` 和切换前的 `key`。

`woUI.Tabs.prototype.off(callback)`

* `callback`: 取消 Tabs 的切换监听，如果传入 `callback` 则取消此回调，否则取消所有回调。

