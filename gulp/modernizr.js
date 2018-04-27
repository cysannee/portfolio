var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
    return gulp.src(['./src/scss/**/*.scss', './src/js/**/*.js'])
        .pipe(modernizr({
            'options': [
                'setClasses'
            ]
        }))
        .pipe(gulp.dest('./src/js'));
});