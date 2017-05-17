var gulp = require('gulp');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
  return gulp.src('frontend/index.html')
    .pipe(gulp.dest('target'));
});

gulp.task('css', function(){
  return gulp.src('frontend/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('target'));
});

gulp.task('assets', function(){
  return gulp.src('frontend/assets/**/*')
    .pipe(gulp.dest('target/assets'));
});


gulp.task('default', [ 'html', 'css', 'assets' ]);
