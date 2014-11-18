'use strict';

var gulp = require('gulp'),
		gulpif = require('gulp-if'),
		concat = require('gulp-concat-sourcemap'),
  	dest,
  	bower = require('wiredep')({
  		directory: config.paths.src.vendors,
      exclude: ["/bootstrap-sass-official/", "/bootstrap.js/", "/bootstrap.css/"]
  	});


// inject bower components
module.exports = gulp.task('wiredep', function () {
  
  // if it is for release, change the destination
  if(release){
  	dest = config.paths.dest.release.scripts;
  }else{
  	dest = config.paths.dest.build.scripts;
  }

  return gulp.src(bower.js)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(dest));
});
