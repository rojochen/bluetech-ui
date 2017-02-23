let gulp = require('gulp'),
    concat = require('gulp-concat'),
    war = require('gulp-war'),
    zip = require('gulp-zip');

var fs = require('fs');
var package = JSON.parse(fs.readFileSync('package.json'));


gulp.task('concat', () => {
    return gulp.src(['src/js/directive/*.js', 'src/js/service/*.js'])
        .pipe(concat('gulpBuild.js'))
        .pipe(gulp.dest('src/js/gulpBuild/'));
});


gulp.task('build-war', function() {
    gulp.src(["./demo/**"])
        .pipe(war({
            welcome: 'index.html',
            displayName: package.version, //form package.json.version
            version: package.version //form package.json.version
        }))
        .pipe(zip(package.name + '.war'))
        .pipe(gulp.dest("./war"));
});