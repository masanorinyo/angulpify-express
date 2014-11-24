'use strict';
var gulp = require('gulp'),
    size = require('gulp-size');


gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size());
});
