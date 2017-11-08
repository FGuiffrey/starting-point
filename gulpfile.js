//JS
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

//Sass converter
gulp.task('sass', function() {
    return gulp.src('website/assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('website/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//Browser watcher
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'website'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('website/assets/sass/partials/*.scss', ['sass']);
    // other watchers
});