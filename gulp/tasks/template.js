'use strict';

var gulp = require('gulp'),
    gulpif = require("gulp-if"),
    jade = require("gulp-jade"),
    header = require("gulp-header"),
    minifyHTML = require('gulp-minify-html'),
    templateCache = require('gulp-angular-templatecache'),
    size = require('gulp-size');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('template', function () {
  return gulp.src([config.paths.src.templates])
    .pipe(jade({ pretty: true }).on('error', handleError))
    .pipe(minifyHTML({empty: true, spare: true, quotes: true}))
    .pipe(templateCache({standalone:true,root:"modules"}))
    .pipe(header('module.exports = '))
    .pipe(gulp.dest(TMP_FOLDER))
    .pipe(size());
});