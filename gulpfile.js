var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

gulp.task('views', function() {
    return gulp.src('*.pug')
        .pipe(pug())
        .pipe(gulp.dest('.'));
});

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function() {
    return gulp.src('styl/*.styl')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(stylus({
          'include css': true,
          compressed: true
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['views', 'scripts', 'styles'], function() {
    gulp.watch('*.pug', ['views']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('styl/*.styl', ['styles']);
});
