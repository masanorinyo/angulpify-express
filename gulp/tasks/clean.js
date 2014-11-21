var gulp = require('gulp'),
    del = require('del'),
    path;

module.exports = gulp.task('clean', function (done) {
  
  if(release){
    path = BUILD_FOLDER;
  }else{
    path = TMP_FOLDER;
  }
  del([path],done);
});
