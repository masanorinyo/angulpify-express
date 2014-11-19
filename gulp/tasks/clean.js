var gulp = require('gulp');
var del = require('del');

module.exports = gulp.task('clean', function (done) {
  del([
  	'.tmp',
  	'client/build'
  ],done);
});
