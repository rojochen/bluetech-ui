const gulp = require('gulp'),
    gulpUglify = require('gulp-uglify'),
    concat = require('gulp-concat');



const btDirective = ["src/js/directive/directive.js", "src/js/directive/*.js"];

gulp.task('build-directive', () => gulp.src(btDirective)
    .pipe(concat('btDirective.js'))
    .pipe(gulp.dest('src/js/directive/dist/')));


const btService = ["src/js/service/service.js", "src/js/service/*.js"];

gulp.task('build-Service', () => gulp.src(btService)
    .pipe(concat('btService.js'))
    .pipe(gulp.dest('src/js/service/dist/')));

gulp.task('all', ['build-directive', 'build-Service']);