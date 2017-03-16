/**
 * Created by Tuffy on 2017/3/1.
 */
'use strict';

// changeTabs
var employeeEvent = {
  changeTabs: function (index) {
    var that = this;
    var tmplArray = ['public/templates/employee-table.html', 'public/templates/employee-table-del.html'];
    Request.http({
      url: 'data/employee-list-' + (index || 0) + '.json',
      callback: function (err, result) {
        if (!err) {
          $f({
            templateUrl: tmplArray[index || 0],
            data: {
              list: result
            },
            callback: function (e, html) {
              if (!e) {
                document.getElementById('employee-' + (index || 0)).innerHTML = html;
              }
            }
          });
        }
      }
    });
  }
};

// init tab
employeeEvent.changeTabs();
// inint change tab

var element = layui.element();
element.init();
element.on('tab(employee-nav)', function (elem) {
  employeeEvent.changeTabs($(this).attr('index'));
});