/**
 * Created by Tuffy on 2017/3/1.
 */
'use strict';

vipspa.start({
  view: '#ui-view',
  router: {
    'home': {
      templateUrl: 'public/views/home.html',
      controller: ['public/lib/echarts/echarts.min.js', 'public/js/controllers/home.js']
    },
    'employee': {
      templateUrl: 'public/views/employee.html',
      controller: 'public/js/controllers/employee.js'
    },
    'crumb': {
      templateUrl: 'public/views/crumb.html',
      controller: 'public/js/controllers/crumb.js'
    },
    'button': {
      templateUrl: 'public/views/button.html',
      controller: ''
    },
    'form': {
      templateUrl: 'public/views/form.html',
      controller: 'public/js/controllers/form.js'
    },
    'table': {
      templateUrl: 'public/views/table.html',
      controller: ''
    },
    'demo': {
      templateUrl: 'public/views/demo.html',
      controller: 'public/js/controllers/demo.js'
    },
    'tree': {
      templateUrl: 'public/views/tree.html',
      controller: 'public/js/controllers/tree.js'
    },
    'upload': {
      templateUrl: 'public/views/upload.html',
      controller: 'public/js/controllers/upload.js'
    },
    'defaults': 'home', //默认路由
    errorTemplateId: '#error'
  }
});