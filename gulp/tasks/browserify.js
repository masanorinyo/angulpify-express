'use strict';

var gulp = require('gulp'),
		browserify = require('browserify'),
    browserifyShim = require('browserify-shim'),
    coffeeify = require('coffeeify'),
    uglify = require("gulp-uglify"),
		source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    ngAnnotate = require("gulp-ng-annotate");


module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.module],
      extensions: ['.coffee']
    })
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dest.release.scripts));

});
