const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const nodeSass = require("node-sass");
const themeKit = require("@shopify/themekit");
const sass = gulpSass(nodeSass);
const cleanCSS = require('gulp-clean-css');


gulp.task("sass", function () {
  return gulp.src("scss/global.scss")
  .pipe(sass())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("assets"));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'))
    themeKit.command('watch', {
        allowLive: true,
        env: 'development'
    })
});