'use strict';
var gulp = require('gulp'),
    ngHtml2Js = require('gulp-ng-html2js'),
    jade = require('gulp-jade'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter');


module.exports = gulp.task('html', function() {
  return gulp.src(config.paths.src.templates)
    //only pass unchanged *main* files and *all* the partials
    .pipe(changed(TMP_FOLDER, {extension: '.js'}))

    //filter out unchanged partials, but it only works when watching
    .pipe(cached('jade'))

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        return !/\/_/.test(file.path) || !/^_/.test(file.relative);
    }))

    //process jade templates
    .pipe(ngHtml2Js({
      moduleName: MODULE_NAME
    }))

    //save all the files
    .pipe(gulp.dest(TMP_FOLDER));
});
