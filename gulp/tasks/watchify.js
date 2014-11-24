'use strict';

var gulp = require('gulp'),
    watchify = require('watchify'),
    gutil = require('gulp-util'),
    chalk = require('chalk'),
    source = require('vinyl-source-stream'),
    reload = require("browser-sync").reload;

module.exports = gulp.task('watchify', function () {
  var bundler = watchify({
    entries: [config.paths.src.module],
    extensions: ['.coffee']
  });

  bundler.on('update', rebundle);

  function rebundle() {
    gutil.log(  chalk.green('[Browserify] : '+chalk.bold('Compiled')) );
    return bundler.bundle({ debug: true })
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts))
      .pipe(reload({stream:true}));
  }

  return rebundle();
});
