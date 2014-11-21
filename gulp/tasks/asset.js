var gulp = require('gulp'),
    size = require('gulp-size');

gulp.task('misc', function () {
  return gulp.src('src/**/*.ico')
    .pipe(gulp.dest('dist'))
    .pipe(size());
});