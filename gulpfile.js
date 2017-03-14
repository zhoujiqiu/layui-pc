/**
 * Created by Tuffy on 2017/2/27.
 */
'use strict';

var fs  = require('fs');
var gulp = require('gulp');
var webSever = require('gulp-webserver');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var angularTemplatecache = require('gulp-angular-templatecache');
var replace = require('gulp-replace');

// deploy
gulp.task('deploy', function () {
  gulp.src('public/templates/**/*.html')
    .pipe(angularTemplatecache())
    .pipe(rename('toon.tmpl.js'))
    .pipe(replace('angular.module(\'templates\').run([\'$templateCache\', function($templateCache) {', ''))
    .pipe(replace('}]);', ''))
    .pipe(replace('$templateCache', '$f.$templateCache'))
    .pipe(gulp.dest('public/js'));
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

