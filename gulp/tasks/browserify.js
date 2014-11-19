'use strict';

var gulp = require('gulp'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		browserifyShim = require('browserify-shim'),
		coffeeify = require('coffeeify');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.scriptsGlob]
    })
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.build.scripts));
});
