"use strict";



var gulp = require('gulp');
var bs = require('browser-sync').create();
var gp = require('gulp-load-plugins')();
// var autoprefixer = require('gulp-autoprefixer')

gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: "src"
        }
    });

});

gulp.task('watch', function() {

    gulp.watch('src/sass/*.sass', gulp.series('sass')),
        gulp.watch("src/*.html ").on('change', bs.reload),
        gulp.watch("src/*.js").on('change', bs.reload)
})


gulp.task('sass', function() {
    return gulp.src('src/sass/*.sass')
        .pipe(gp.sass({
            'include css': true
        }))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .on("error", gp.notify.onError({
            title: "stile"
        }))
        .pipe(gp.concatCss('style.css'))
        .pipe(gulp.dest('src/css/'))
        .pipe(bs.reload({
            stream: true,
        }));
});



gulp.task('default', gulp.series(
    gulp.parallel('sass'),
    gulp.parallel('watch', 'serve')

));


gulp.task('build', gulp.series(
    gulp.parallel('sass'),
    gulp.parallel('watch', 'serve')

));