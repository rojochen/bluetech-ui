var gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task('concat', function() {
    return gulp.src(['src/js/gulpBuildList.js', 'src/js/directive/*.js', 'src/js/service/*.js'])
        .pipe(concat('gulpBuild.js'))
        .pipe(gulp.dest('src/js/gulpBuild/'));
});