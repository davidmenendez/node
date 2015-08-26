var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");

gulp.task('styles', function() {
    gulp.src('./source/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
});
gulp.task('uglify', function() {
    gulp.src('./source/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./source/sass/**/*.scss',['styles']);
	gulp.watch('./source/js/**/*.js',['uglify']);
});