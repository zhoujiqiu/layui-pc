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
    'impexp': {
      templateUrl: 'public/views/impexp.html',
      controller: 'public/js/controllers/impexp.js'
    },
    'demo': {
      templateUrl: 'public/views/demo.html',
      controller: 'public/js/controllers/demo.js'
    },
    'defaults': 'home', //默认路由
    errorTemplateId: '#error'
  }
});