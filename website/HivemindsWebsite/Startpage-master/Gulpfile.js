var gulp = require('gulp');
var sass = require('gulp-sass');

// Sass
gulp.task('styles', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

//Watch
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});
