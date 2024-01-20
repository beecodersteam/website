const gulp = require('gulp');
const imageResize = require('gulp-image-resize');

function resize() {
  return gulp.src('./public/images/logos/*.png')
    .pipe(imageResize({
      width: 300,
      height: 300,
      upscale: true
    }))
    .pipe(gulp.dest('./public/images/logos/mini'));
}

gulp.task('default', gulp.series(resize));
