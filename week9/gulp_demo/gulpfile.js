var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('server', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe( connect.reload() );
});

gulp.task('sass', function() {
  gulp.src('./*.scss')
    .pipe( sass() )
    .pipe( autoprefixer() )
    .pipe( gulp.dest('css') )
    .pipe( connect.reload() );
});

gulp.task('watch', function() {
  gulp.watch('./*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
});

// gulp.task('minify', function() {
//   gulp.src('./css/*.css')
//     .pipe( uglify() )
//     .pipe( gulp.dest('css') );
// });

gulp.task('default', ['server', 'watch']);
