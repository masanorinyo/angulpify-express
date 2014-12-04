'use strict';
var gulp = require('gulp'),
		gulpif = require('gulp-if'),
		inject = require("gulp-inject"),
    size = require("gulp-size"),
		dest_css,
		dest_js,
    dest_css_name,
    dest_js_name,
    dest_vendor,
		dest;

if(release){
	dest_css_name = config.filenames.release.styles;
  dest_css = config.paths.dest.release.styles+"/"+dest_css_name;
  dest_js_name = config.filenames.release.scripts;
	dest_js = config.paths.dest.release.scripts+"/"+dest_js_name;
  dest_vendor = config.paths.dest.release.scripts+"/libs.js";
	dest = BUILD_FOLDER;
}else{
  dest_css_name = config.filenames.build.styles;
	dest_css = config.paths.dest.build.styles+"/"+dest_css_name;
	dest_js_name = config.filenames.build.scripts;
  dest_js = config.paths.dest.build.scripts+"/"+dest_js_name;
  dest_vendor = config.paths.dest.build.scripts+"/libs.js";
	dest = SRC_FOLDER;
}

 
 module.exports = gulp.task('inject', function () {
   gulp.src(config.paths.src.index)
    .pipe(inject(
      gulp.src([dest_js,dest_css], {read: false}), {
        transform: function (filepath) {
          if (filepath.slice(-3) === '.js' || filepath.slice(-3) === '.css') {
            return  "<script src='libs.js'></script>"+
                    "<script src='modules/"+dest_js_name+"'></script>";
          }else{
            return "<link rel='stylesheet' type='text/css' href='modules/"+dest_css_name+"'>";
          }
          // Use the default transform as fallback:
          return inject.transform.apply(inject.transform, arguments);
        }
      }
    ))
    .pipe(gulp.dest(dest));
 });

 

