/**
 * Created by Tuffy on 2017/2/27.
 */
'use strict';

var fs  = require('fs');
var gulp = require('gulp');
var webSever = require('gulp-webserver');
var listFiles = require('list-files');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// deploy
gulp.task('deploy', function () {
  var htmlCacheList = '/**Create by Tuffy*/\n\r\'use strict\';\n\r';
  listFiles(function (list) {
    list.map(function (item) {
      var htmlContent = '$f.$templateCache.put(\'' + item.replace('./', '') + '\', \'';
      var lines = fileLinesSync(item);
      lines.map(function (line) {
        htmlContent += line.replace(/'/gi, '\\\'');
      });
      htmlContent += '\');\n\r';
      htmlCacheList += htmlContent;
    });
    // writeFile
    fs.writeFile('./public/js/toon.tmpl.js', htmlCacheList);
  }, {
    dir: 'public/templates',
    name: 'html'
  });

  // get file line sync
  function fileLinesSync(path) {
    var fileObject = fs.readFileSync(path);
    var b = new Buffer(fileObject);
    var list = (b.toString() || '').split('\n');
    return list;
  }
});

// start
gulp.task('watch', function () {
  gulp.src('./').pipe(webSever({
    host: '127.0.0.1',
    port:'9091',
    livereload: true,
    open: true,
    fallback: './index.html'
  }));
  gulp.watch('public/templates/**.html', ['deploy']);
});

//压缩js文件
gulp.task('js-min',function(){
  gulp.src('public/lib/vipspa/vipspa.js')
    .pipe(uglify())
    .pipe(rename('vipspa.0.1.1.min.js'))
    .pipe(gulp.dest('public/lib/vipspa'));
});

