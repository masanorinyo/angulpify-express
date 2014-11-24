'use strict';
var gulp = require('gulp'),
    ngHtml2Js = require('gulp-ng-html2js'),
    jade = require('gulp-jade'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    jadeInheritance = require('gulp-jade-inheritance'),
    filter = require('gulp-filter');


module.exports = gulp.task('html', function() {
  return gulp.src(config.paths.src.templates)
    //only pass unchanged *main* files and *all* the partials
    .pipe(changed(config.paths.src.templates, {extension: '.html'}))

    //filter out unchanged partials, but it only works when watching
    .pipe(gulpif(release,cached('jade')))

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        return !/\/_/.test(file.path) || !/^_/.test(file.relative);
    }))
    
    //find files that depend on the files that have changed
    .pipe(jadeInheritance({basedir:'client/src'}))

    //filter out unchanged partials, but it only works when watching
    .pipe(jade())
    //process jade templates
    // .pipe(ngHtml2Js({
    //   moduleName: MODULE_NAME
    // }))

    //save all the files
    .pipe(gulp.dest(config.paths.dest.build.html));
});
