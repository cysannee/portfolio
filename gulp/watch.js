var gulp =          require('gulp'),
    browserSync =   require('browser-sync').create();

gulp.task('default', function() {
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/index.html', function() {
        browserSync.reload();
    });

    gulp.watch('./src/scss/**/*.scss', function() {
        gulp.start('cssInject');        
    });

    gulp.watch('./src/js/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});  

gulp.task('cssInject', ['sass'], function() {
    return gulp.src('./src/scss/app.scss')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});