let gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task('concat', () => {
    return gulp.src(['src/js/gulpBuildList.js', 'src/js/directive/*.js', 'src/js/service/*.js'])
        .pipe(concat('gulpBuild.js'))
        .pipe(gulp.dest('src/js/gulpBuild/'));
});