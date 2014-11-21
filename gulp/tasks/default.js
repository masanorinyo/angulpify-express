'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
  if (release) {
    runSequence(
      "clean",
      ["wiredep","template"],
      ["browserify"],
      "inject"
    );
  } else {
    runSequence(
      "clean",
      ["wiredep","template"],
      ["watchify","watch"],
      "inject",
      "serve"
    );
  }
});
