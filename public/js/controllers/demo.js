/**
 * Created by Tuffy on 2017/3/10.
 */
'use strict';

/**
 * 数据模板渲染
 */

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

var element = layui.element();
element.init();
