'use strict';

var gulp = require('gulp'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    browserifyShim = require('browserify-shim'),
    coffeeify = require('coffeeify');

module.exports = gulp.task('watchify', function () {
  var bundler = watchify({
    entries: [config.paths.src.scripts],
    extensions: ['.coffee']
  });

  
  bundler.transform(coffeeify);
  bundler.transform(browserifyShim);

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle({ debug: true })
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
