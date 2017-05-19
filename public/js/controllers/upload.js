/**
 * Created by zhoujiqiu on 2017/3/22.
 */
'use strict';

var options = {
  url: '上传接口url'
  ,success: function(res){
    console.log(res); //上传成功返回值，必须为json格式
  }
};

layui.use('upload',function(){
  layui.upload(options);
});