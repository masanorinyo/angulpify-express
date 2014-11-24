var gulp = require('gulp'),
    size = require('gulp-size');

module.exports = gulp.task('misc', function () {
  return gulp.src(config.paths.src.misc)
    .pipe(gulp.dest(config.paths.dest.release.index))
    .pipe(size());
});