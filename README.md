# 基于layui的PC端单页面应用框架
为了满足开发人员实现快速开发、工程一键构建等问题，设计出此spa系统架构。

# 更新日志

### 2017-03-22
1、更新框架的demo实例，列举了一些常用组件调用方法和异步加载数据的实现；
2、由于所有页面都是单页异步加载的方式，所以有些组件在引入的时候需要进行重新渲染或者初始化，具体实现方法如下：
``` bash
// 在common.js里面，将element暴露为全局的对象，初始化的方法：
element.init();

// form表单组件初始化的方法
layui.use('form',function(){
  var form = layui.form();
  form.render(); //更新表单
})
```

# 一、简介

## 1. 此架构使用技术

### 1.1 UI界面：layui

Layui 是一款采用自身模块规范编写的国产前端UI框架，遵循原生HTML/CSS/JS的书写与组织形式，门槛极低，拿来即用。非常适合界面的快速开发。Layui兼容除IE6/7以外的全部浏览器，并且多数结构支持响应式。
官网：http://www.layui.com

### 1.2 模版引擎：firefly-template.js

自主研发的html模板组件，语法简单，高效，快捷。
源码：https://github.com/hedongy/firefly-template

### 1.3 单页面应用：vipspa.js

一款支持IE8-浏览器的单页面hash监听机制组件，源码仅支持一个业务js，此系统已扩展支持多个业务js。
配置和使用方式下面会介绍。


## 2. 目录结构

``` bash

app
    |---css/ css文件夹
    |---images/ 图片/icon文件夹
    |---js/ js文件夹
        |---controllers/ 业务js文件夹
        |---common.js 公共js
        |---toon.tmpl.js 异步页面数据模板压缩js
        |---vipspa.router.js 页面路由配置js
    |---lib/ 依赖库
    |---templates/ 异步页面数据模板源码html文件
    |---views/ 页面路由视图
    |---gulpfile.js gulp构建js
    |---index.html 启动页面
    |---package.json 项目描述文件
    |---README.md 项目文档

```
# 二、快速开始

## 1. 安装依赖

``` bash

// 需要全局gulp环境
$ npm i -g gulp-cli

// 安装项目依赖
$ npm i

```

## 2. 启用本地server

``` bash

// 执行下面命令，浏览器会自动打开当前站点
$ gulp watch

```

# 三、业务开发

为了更好的让大家开发，这里举个例子。添加新功能

## 1. 创建新路由页面视图

在views/目录下创建demo.html，内容如下

``` bash

<div>
    <h3>这是一个demo</h3>
    <div id="demo-template"></div>
</div>

```

## 2. 创建新路由页面js

在js/controllers目录下 创建demo.js，内容如下

``` bash

$f({
  templateUrl: 'public/templates/demo-tmpl.html',
  data: {
    title: 'hello demo',
    list: [{
      name: 'demo1'
    }, {
      name: 'demo2'
    }, {
      name: 'demo3'
    }, {
      name: 'demo4'
    }, {
      name: 'demo5'
    }]
  },
  callback: function (err, html) {
    if (!err) {
      document.getElementById('demo-template').innerHTML = html;
    }
  }
});

```

## 3. 创建数据模板html

异步获取数据，然后用firefly-template.js将数据和页面整合输出完全html到DOM，代码如下

``` bash

<fieldset class="layui-elem-field layui-field-title">
    <legend>{{title}}</legend>
</fieldset>
{{for item in list i}}
    <blockquote class="layui-elem-quote">
        {{if i % 2 === 0}}
            <p style="color: red;">{{item.name}}</p>
        {{else}}
            <p>{{item.name}}</p>
        {{/if}}
    </blockquote>
{{/for}}

```

## 4. 配置路由

在js/vipspa.router.js中，配置你的页面路由，配置方式如下

``` bash

// templateUrl为你视图html文件
// controller为你业务js文件，也可以追加多个可用数组形式，如： ['a.js', 'b.js']顺序加载
'demo': {
  templateUrl: 'public/views/demo.html',
  controller: 'public/js/controllers/demo.js'
}

```

## 5. 添加菜单

以本架构中为例，可以再index.html中追加菜单，菜单菜单配置如下：

``` bash

<li class="layui-nav-item">
    <a href="#demo"><i class="layui-icon">&#xe610;</i>&nbsp;DEMO</a>
</li>

```



