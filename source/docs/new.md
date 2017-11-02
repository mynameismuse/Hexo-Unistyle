---
title: 新语法
---

# 新语法

{% note info 文档维护人: 王昊 %}
{% endnote %}

为了方便文档的编写，特地增加了更多的`markdown`扩展语法供大家使用。

## `tip`语法 

在`markdown`中通过添加tip即可完成`tip`语法实现。

<p class="tip">
    这是一个Tip。
</p>


```html
<p class="tip">
    这是一个Tip。
</p>
```

## `success`语法

在`markdown`中通过添加tip即可完成`success`语法实现。

<p class="success">
    这是一个Success。
</p>


```html
<p class="success">
    这是一个Success。
</p>
```
## `note`语法

在`markdown`中添加类`mustache`语法即可在`render`的过程中实现代码转换。

### `note info`

{% note info 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}


``` html
{% note info 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}
```

### `note tip`

{% note tip 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}

``` html
{% note tip 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}
```
### `note warn`

{% note warn 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}

``` html
{% note warn 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}
```

## `demo`语法

在`markdown`中添加类`mustache`语法即可在`render`的过程中实现代码转换。

`demo`语法用于隐藏展示代码。

{% demo %}
``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```
{% enddemo %}

```
{% demo %}
`` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
``
{% enddemo %}
```

## `script`语法

在`markdown`中实现javascript侵入的方式很简单，同样通过`tag injection`的方式将`javascript`实例代码嵌入。

{% script %}
console.log('test');
{% endscript %}

```
{% script %}
  console.log('test');
{% endscript %}
```

## `html`语法

在`markdown`中实现原生`html`嵌入的方式很简单，同样通过`tag injection`的方式将`html`代码嵌入生成器中，如果不使用`tag`方式，空格将会被解析器添加`<br>`处理，还可以通过合并代码的方式来实现`html`无换行解析。

{% html %}
<br>
<button class="btn btn-blue">蓝色</button>
<button class="btn btn-red">红色</button>
<br>
{% endhtml %}

```
{% html %}
  <br>
  <button class="btn btn-blue">蓝色</button>
  <button class="btn btn-red">红色</button>
  <br>
{% endhtml %}
```
