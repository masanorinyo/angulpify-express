'use strict';
var gulp = require('gulp'),
		gulpif = require('gulp-if'),
		inject = require("gulp-inject"),
    filter = require("gulp-filter"),
    useref = require("gulp-useref"),
    ngAnnotate = require("gulp-ng-annotate"),
    rev = require("gulp-rev"),
    revReplace = require("gulp-rev-replace"),
    csso = require("gulp-csso"),
    uglify = require("gulp-uglify"),
    uglifySaveLicense = require("uglify-save-license"),
    minifyHtml = require("gulp-minify-html"),
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

 module.exports = gulp.task('inject:rev', function () {
  var htmlFilter = filter('*.html'),
      jsFilter = filter('*.js'),
      cssFilter = filter('*.css'),
      assets;

  return gulp.src(config.paths.build.index)
    .pipe(assets = useref.assets())
    .pipe(rev())
    .pipe(jsFilter)
    .pipe(ngAnnotate())
    .pipe(uglify({preserveComments: uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(revReplace())
    .pipe(htmlFilter)
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(BUILD_FOLDER))
    .pipe(size());
 });

