'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch');

module.exports = gulp.task('watch', function () {
  // gulp.watch(config.paths.src.styles, ['styles']);
  // gulp.watch(config.paths.src.images, ['images']);
  gulp.watch(config.paths.src.templates, ['html']);
  gulp.watch('bower.json', ['wiredep']);
});
