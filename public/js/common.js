/**
 * Created by Tuffy on 2017/3/10.
 */
'use strict';

(function () {
  /**
  * listen layui.cache.modules
  */
  // element
  Object.defineProperty(layui.cache.modules, 'element', {
    get: function () {},
    set: function (val) {console.log(val);}
  });
  // form
  Object.defineProperty(layui.cache.modules, 'form', {
    get: function () {},
    set: function (val) {console.log(val);}
  });

  /**
  * init tree select
  */
  var initTimer = setTimeout(function () {
    var hashStr = location.hash;
    $('ul[lay-filter="toon-tree"]').find('li').removeClass('layui-nav-itemed');
    var child = $('a[href="' + hashStr + '"]');
    if(child.parent().hasClass('layui-nav-item')){
      child.parent().addClass('layui-this');
    }else{
      child.addClass('layui-this');
      child.parents('li.layui-nav-item').addClass('layui-nav-itemed');
    }
    clearTimeout(initTimer);
  }, 0);
})();

layui.define(['element'], function(exports){
  var layer = layui.layer;

  layer.config({
    extend: 'skin.css', 
    skin: 'layer-ext-moon' 
  });

  $(document).on('mouseenter', '.user', function () {
    $(this).find('dl').addClass('layui-show');
  });
  $(document).on('mouseleave', '.user', function () {
    $(this).find('dl').removeClass('layui-show');
  });
});

/**
 * Get data with async requests
 * example Request.http({
 *    loading: //Boolean, default true, show loading icon,
 *    url: // String, the request url,
 *    type: // String, the request type, default get,
 *    params: // Object, the params for request,
 *    toast: // String, the msg which show pages when request back/fault with setTimeout,
 *    callback: // Function has tow arguments。the error first & result second
 * });
 * @type {{http: Request.http}}
 */
var Request = {
  http: function (option) {
    layui.use('layer', function () {
      var layer = layui.layer;
      if (option.loading !== false) {
        layer.load(2, {
          shade: [0.1, '#fff']
        });
      }
      $.ajax({
        url: option.url,
        type: option.type || 'get',
        data: option.params,
        dataType: 'json',
        cache: false,
        success: function (result) {
          closeLoading();
          if (option.toast) layer.msg(option.toast);
          if (option.callback) option.callback(null, result);
        },
        error: function (error) {
          closeLoading();
          if (option.callback) option.callback(error);
        }
      });

      // close loading when async callback, after callback the max timeout is 100ms
      function closeLoading() {
        setTimeout(function () {
          layer.closeAll('loading');
        }, 100);
      }
    });
  }
};