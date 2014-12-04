'use strict';

var gulp = require('gulp'),
		gulpif = require('gulp-if'),
		concat = require('gulp-concat-sourcemap'),
    uglify = require("gulp-uglify"),
  	dest,
  	bower = require('wiredep')({
  		directory: config.paths.src.vendors,
      exclude: ["/bootstrap-sass-official/", "/bootstrap.js/", "/bootstrap.css/"]
  	}),
    size = require('gulp-size');


// inject bower components
module.exports = gulp.task('wiredep', function () {
  
  // if it is for release, change the destination
  if(release){
  	dest = config.paths.dest.release.vendors;
  }else{
  	dest = config.paths.dest.build.vendors;
  }

  return gulp.src(bower.js)
    .pipe(concat('libs.js'))
    .pipe(gulpif(release,uglify()))
    .pipe(gulp.dest(dest))
    .pipe(size());

});
