'use strict';

var gulp = require('gulp'),
		browserify = require('browserify'),
    browserifyShim = require('browserify-shim'),
    coffeeify = require('coffeeify'),
		source = require('vinyl-source-stream');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.module],
      extensions: ['.coffee']
    })
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts))
});
