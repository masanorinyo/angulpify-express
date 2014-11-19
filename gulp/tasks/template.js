'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    templateCache = require('gulp-angular-templatecache'),
    dest;

if(release){
  dest = BUILD_FOLDER;
}else{
  dest = TMP_FOLDER;
}

exports.module = gulp.task('template', function () {
  gulp.src(config.paths.src.templates)
    .pipe(jade())
    .pipe(templateCache())
    .pipe(gulp.dest(dest));
});