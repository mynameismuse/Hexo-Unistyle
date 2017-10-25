# Hexo-Unistyle
A Hexo Theme for WoUI powered by China Unicom

# 安装

`WoUI-web`为联通样式库官方`markdown`解析网站生成器，通过本解析器，您只需要将您的`markdown`代码加入项目即可完成网站合并和生成工作，并参加到文档编写的工作中来。

## 什么是WoUI-web?
`WoUI-web`基于`hexo`核心包，在主题层面做了重构，同时借助`hexo`暴露的接口，封装了漂亮牛逼的`markdown`新语法来给高大尚的你们使用。

## 安装
安装`WoUI-web`只需几分钟时间，若您在安装过程中遇到问题或无法找到解决方式，请通过企业微信联系王昊，我会尽力解决您的问题。

## 安装前提
安装`WoUI-web`相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成`WoUI-web`的安装。

``` bash
$ npm install -g hexo-cli

```
为了运行WoUI-web您需要首先在全局安装hexo-cli插件，安装完成后您可以在内网`gitea`上下载项目。
``` bash
$ git clone http://192.168.7.53:3000/woUI/woUI-web.git

```
下载完成后，通过`termial`移动到下载好的`woUI-web`文件夹内执行依赖包安装
```bash
$ npm install
```

安装完成后，您就可以在本地启动项目开始编辑了。
```bash
$ hexo server
```

如果您想了解更多`hexo`底层实现代码，请到[官方网站](https://hexo.io/zh-cn/docs/)。