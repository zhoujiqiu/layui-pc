# firefly-template
javascript 模板引擎

# 特性
1. 支持所有主流浏览器；
2. 易用，语法简单；
3. 高效，模板文件异步加载，首次加载放入缓存队列；
4. 支持预编译，可将模板转换成为非常精简的 js 文件；
5. 支持grunt构建；

# 快速上手
## 1. 使用一个type="text/html"的script标签存放模板
``` bash
<script type="text/html" id="demo">
    <div>{{title}}</div>
    <div>
        {{for item in list i}}
            <span>{{item.name}}</span>&nbsp;&nbsp;
        {{/for}}
    </div>
</script>
```
## 模板渲染
``` bash
$f({
  id: 'demo',
  data: {
    title: '这是一个demo',
    list: []
  },
  callback: function (err, html) {
    if (!err) {
      // TODO
    }
  }
});
```
## 2. 使用一个html文件存放模板，a.html模板内容如下
``` bash
<div>
    <p>{{title}}</p>
    {{for item in list i}}
        <span>{{item.name}}</span>&nbsp;&nbsp;
    {{/for}}
</div>
```
## 模板渲染
``` bash
$f({
  templateUrl: './a.html',
  data: {
    title: '这是一个template 文件demo',
    list: []
  },
  callback: function (err, html) {
    if (!err) {
      // TODO
    }
  }
});
```
## 3. 模板语法
### for语法
``` bash
// for语法使用实例；
// item为列表中一个数据对象
// in 关键字
// list 为模板传递数据列表
// i 当前索引
{{for item in list i}}
    <!-- dom 渲染-->
{{/for}}
```
### if语法
``` bash
// if语法使用实例；
// if条件可以是表达式或者变量值
{{if true}}
    <!-- dom 渲染-->
{{/if}}
```

# 打包构建
你可以使用grunt、gulp、webpack等构建工具进行模板构建，将其压缩成一个.js文件，类似于angularJs模板js文件。文件内容格式如下：
``` bash
'use strict';

  $f.$templateCache.put('/templates/a.html',
    "<div class=\"panel panel-default\"> Hello</div>"
  );


  $f.$templateCache.put('/templates/b.html',
    "<div class=\"panel panel-default\"> World</div>"
  );
```
发布的时候可将模板js文件放在firefly-template.js后面，代码如下：
``` bash
  <script type="text/javascript" src="firefly-template.min.js"></script>
  <script type="text/javascript" src="***.tmpl.js"></script>
```
