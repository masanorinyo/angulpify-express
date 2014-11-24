'use strict';
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    gulpif = require('gulp-if'),
    cache = require('gulp-cache'),
    size = require('gulp-size');


module.exports = gulp.task('images', function () {
  return gulp.src(config.paths.src.images)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulpif(release,
      gulp.dest(config.paths.dest.release.images),
      gulp.dest(config.paths.dest.build.images)
    ))
    .pipe(size());
});
