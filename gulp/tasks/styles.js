'use strict';
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer')


function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(sass({style: 'expanded'}))
    .on('error', handleError)
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulp.dest(TMP_FOLDER))
    .pipe(size());
});