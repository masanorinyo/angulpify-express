'use strict';
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    jade = require('gulp-jade'),
    header = require("gulp-header"),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    chalk = require('chalk'),
    jadeInheritance = require('gulp-jade-inheritance'),
    filter = require('gulp-filter');


module.exports = gulp.task('html', function() {
  gutil.log(  chalk.green('[html] : '+chalk.bold('Compiled')) );
    
    // create a template placehlder with empty contents
    gulp.src('')
    .pipe(templateCache({standalone:true,root:"modules"}))
    .pipe(header('module.exports = '))
    .pipe(gulp.dest(TMP_FOLDER));

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
