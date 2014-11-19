var gulp = require('gulp'),
		gulpif = require('gulp-if'),
		inject = require("gulp-inject"),
		dest_css,
		dest_js,
		dest;

if(release){
	dest_css = config.paths.dest.release.styles+"/*.css";
	dest_js = config.paths.dest.release.scripts+"/*.js";
	dest = BUILD_FOLDER;
}else{
	dest_css = config.paths.dest.build.styles+"/*.css";
	dest_js = config.paths.dest.build.scripts+"/*.js";
	dest = SRC_FOLDER;
}


module.exports = gulp.task('inject', function () {
  var target = gulp.src(config.paths.src.index);
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src([dest_css,dest_js], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest(dest));
});



// gulp.task('html', ['styles', 'scripts', 'partials'], function () {
//   var htmlFilter = $.filter('*.html');
//   var jsFilter = $.filter('**/*.js');
//   var cssFilter = $.filter('**/*.css');
//   var assets;

//   return gulp.src('src/*.html')
//     .pipe($.inject(gulp.src('.tmp/{app,components}/**/*.js'), {
//       read: false,
//       starttag: '<!-- inject:partials -->',
//       addRootSlash: false,
//       addPrefix: '../'
//     }))
//     .pipe(assets = $.useref.assets())
//     .pipe($.rev())
//     .pipe(jsFilter)
//     .pipe($.ngAnnotate())
//     .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
//     .pipe(jsFilter.restore())
//     .pipe(cssFilter)
//     .pipe($.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap','fonts'))
//     .pipe($.csso())
//     .pipe(cssFilter.restore())
//     .pipe(assets.restore())
//     .pipe($.useref())
//     .pipe($.revReplace())
//     .pipe(htmlFilter)
//     .pipe($.minifyHtml({
//       empty: true,
//       spare: true,
//       quotes: true
//     }))
//     .pipe(htmlFilter.restore())
//     .pipe(gulp.dest('dist'))
//     .pipe($.size());
// });