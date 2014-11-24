'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    dest,
    css_dest,
    css_dest_name,
    sassStyle;


if(release){
  css_dest = config.paths.dest.release.scripts;
  css_dest_name = config.filenames.release.styles;
  sassStyle = "compressed";
  dest = config.paths.dest.release.styles;
}else{
  css_dest = config.paths.dest.build.scripts;
  css_dest_name = config.filenames.build.styles;
  sassStyle = "nested";
  dest = config.paths.dest.build.styles;
}

module.exports = gulp.task('styles', function(){
  return gulp.src(config.paths.src.stylesGlob)
    .pipe(gulpif(!release,sourcemaps.init()))
    .pipe(sass({
        includePaths: require('node-bourbon').includePaths,
        outputStyle: sassStyle
      }))
    .pipe(gulpif(!release,sourcemaps.write()))
    .pipe(gulpif(release, prefix("last 1 version", "> 1%", "ie 8", "ie 7")))
    .pipe(rename(css_dest_name))
    .pipe(gulp.dest(dest));
});