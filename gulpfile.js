var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var sass = require('gulp-sass');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss', function () {
  return gulp.src('./app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
});