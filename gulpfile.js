var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");
var nodemon = require("gulp-nodemon");

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

gulp.task("start", function(){
	nodemon({
		script: "app.js"
	});
});

gulp.task("watch", function(){
	gulp.watch('./source/sass/**/*.scss',['styles']);
	gulp.watch('./source/js/**/*.js',['uglify']);
});

//Watch task
gulp.task('default',["watch", "start"]);