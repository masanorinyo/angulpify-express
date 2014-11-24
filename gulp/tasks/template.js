'use strict';

var gulp = require('gulp'),
    gulpif = require("gulp-if"),
    jade = require("gulp-jade"),
    header = require("gulp-header"),
    minifyHTML = require('gulp-minify-html'),
    templateCache = require('gulp-angular-templatecache');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// module.exports = gulp.task('template', function () {
//   return gulp.src([config.paths.src.templates])
//     .pipe(jade())
//     .pipe(gulpif(release,minifyHTML({
//       empty: true,
//       spare: true,
//       quotes: true
//     })))
//     .pipe(ngHtml2Js({
//       moduleName: MODULE_NAME
//     }))
//     .pipe(gulp.dest(TMP_FOLDER));
// });

module.exports = gulp.task('template', function () {
  return gulp.src([config.paths.src.templates])
    .pipe(jade({ pretty: true }).on('error', handleError))
    .pipe(minifyHTML({empty: true, spare: true, quotes: true}))
    .pipe(templateCache({ standalone: true }))
    .pipe(header('module.exports = '))
    .pipe(gulp.dest(BUILD_FOLDER));
});