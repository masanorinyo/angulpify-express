'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
  if (release) {
    runSequence(
      "clean",
      ["wiredep","template"],
      ["browserify","styles","images","misc",'fonts'],      
      "inject:rev" 
    );
  } else {
    runSequence(
      "clean",
      ["wiredep","html"],
      ["watchify","watch","styles","images",'fonts'],
      "inject",
      "serve"
    );
  }
});
