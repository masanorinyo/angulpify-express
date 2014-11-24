'use strict';
var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    flatten = require('gulp-flatten'),
    size = require('gulp-size');

module.exports = gulp.task('fonts', function () {
  return gulp.src(mainBowerFiles())
    .pipe(filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(flatten())
    .pipe(gulpif(release,
      gulp.dest(config.paths.dest.release.fonts),
      gulp.dest(config.paths.dest.build.fonts)
    ))
    .pipe(size());
});