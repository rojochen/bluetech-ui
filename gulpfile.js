var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

gulp.task('build-js', function() {
    return gulp.src('src/js/directive/*.js')
        .pipe(concat('bluetech-ui.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync']);
