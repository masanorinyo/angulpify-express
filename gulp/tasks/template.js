'use strict';

var gulp = require('gulp'),
    gulpif = require("gulp-if"),
    jade = require("gulp-jade"),
    minifyHTML = require('gulp-minify-html'),
    ngHtml2Js = require('gulp-ng-html2js');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('template', function () {
  return gulp.src([config.paths.src.templates, config.paths.src.templatesHTML])
    .pipe(gulpif(release,minifyHTML({
      empty: true,
      spare: true,
      quotes: true
    })))
    .pipe(ngHtml2Js({
      moduleName: MODULE_NAME
    }))
    .pipe(gulpif(release,gulp.dest(BUILD_FOLDER),gulp.dest(TMP_FOLDER)));
});
