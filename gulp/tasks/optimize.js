'strict'

var gulp = require('gulp'),
    filter = require("gulp-filter"),
    ngAnnotate = require("gulp-ng-annotate"),
    rev = require("gulp-rev"),
    revReplace = require("gulp-rev-replace"),
    csso = require("gulp-csso"),
    uglify = require("gulp-uglify"),
    uglifySaveLicense = require("uglify-save-license"),
    minifyHtml = require("gulp-minify-html");

module.exports = gulp.task('optimize', function () {
  

  var htmlFilter = filter('*.html'),
      jsFilter = filter('*.js'),
      cssFilter = filter('*.css'),
      assets;

  return gulp.src(BUILD_FOLDER)
    .pipe(jsFilter)
    .pipe(rev())
    .pipe(ngAnnotate())
    .pipe(uglify({preserveComments: uglifySaveLicense}))
    // .pipe(cssFilter)
    // .pipe(csso())
    // .pipe(revReplace())
    // .pipe(htmlFilter)
    // .pipe(minifyHtml({
    //   empty: true,
    //   spare: true,
    //   quotes: true
    // }))
    // .pipe(htmlFilter.restore())
    .pipe(gulp.dest(BUILD_FOLDER));
 });