
var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
    browserSync.init({
        server: {
            baseDir: './test'
        }
    });
    gulp.watch('test/*.*').on('change', browserSync.reload);
});

gulp.task('default',gulp.series('browserSync'));
