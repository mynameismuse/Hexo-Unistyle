---
title: 文档结构
---

# 文档结构

{% note info 文档维护人: 王昊 %}
{% endnote %}

项目结构包含了多个文件夹和配置文件，接下来将详细讲解每个文件夹的用途和配置信息。

## 根文件结构

项目的根文件结构。

文件名 | 用途
---|---
`_config.yml` | `hexo`配置文件
`source` | 资源文件夹
`themes` | 主题文件夹

`_config.yml`配置了hexo的相关配置项，如愿了解请访问[官方网站](https://hexo.io/zh-cn/docs/)。

## `source`文件夹

`source`文件夹结构。

文件名 | 用途
---|---
`_data` | 菜单配置和侧边栏配置
`docs` | 存放指南相关`markdown`
`resource` | 存放资源相关`markdown`
`component` | 存放组件相关`markdown`
`about` | 存放关于相关`markdown`

## `_data`文件夹

菜单配置项和侧边栏配置。


文件名 | 用途
---|---
`menu.yml` | `nav`标题栏`item`配置
`sidebar.yml` | 每个菜单中侧边栏标题配置

{% note info menu.yml %}
`menu.yml`中的配置项需要对应`source`中的文件夹名称，文件夹可以持续创建并参与配置。
{% endnote %}

{% note info menu.yml %}
`sidebar.yml`中的配置项需要对应`menu.yml`中配置的文件夹内`markdown`名称同时以`html`作为后缀。
{% endnote %}


## `themes`文件夹

`themes`文件夹结构。


文件夹 | 用途
---|---
`muse` | `WoUI-web`自定义主题包

## `muse`文件夹

`muse`文件夹结构。


文件名  | 用途
---|---
`_config.yml` | `muse`主题配置文件
`layout` | `ejs`模板
`scripts` | `hexo`扩展`js`模块 
`source` | `css` 和 `图片` 资源

## `_config.yml`文件

`muse`主题配置文件，详细说明请参看文件内注释。





