var gulp =      require('gulp'),
    webpack =   require('webpack');

gulp.task('scripts', ['modernizr'], function(done) {
    webpack(require('../webpack.config'), function(err, stats) {
        if (err) {
            console.log(err.toString())
        }
        console.log(stats.toString());
        done();
    });
});