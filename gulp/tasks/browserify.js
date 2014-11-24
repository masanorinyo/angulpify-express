'use strict';

var gulp = require('gulp'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.scriptsGlob]
    })
    .bundle()
    .pipe(source(config.filenames.build.scripts,config.paths.src.templatesJS))
    .pipe(gulp.dest(config.paths.dest.release.scripts))
});
