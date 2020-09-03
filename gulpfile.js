
var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});
gulp.task('default',gulp.series('browserSync'));
