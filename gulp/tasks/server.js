'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    util = require('util'),
    middleware = require('./proxy');


function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === 'client/src' || (util.isArray(baseDir) && baseDir.indexOf('client/src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/vendors': 'vendors'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: middleware,
      routes: routes
    },
    browser: browser
  });

}

module.exports = gulp.task('serve', function () {
  browserSyncInit([
    'client/src',
    '.tmp'
  ], [
    'client/src/*.html',
    '.tmp/{app,components}/**/*.css',
    '.tmp/{app,components}/**/*.html',
    '.tmp/*.js',
    '.tmp/assets/images/**/*'
  ]);
});

module.exports = gulp.task('serve:build',  function () {
  browserSyncInit('client/build');
});

module.exports = gulp.task('serve:e2e', function () {
  browserSyncInit(['client/src', '.tmp'], null, []);
});

module.exports = gulp.task('serve:e2e-build', function () {
  browserSyncInit('client/build', null, []);
});
