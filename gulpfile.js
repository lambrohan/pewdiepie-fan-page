const concat = require('gulp-concat');
const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');


gulp.task('watch-js', function(){
  return watch('./js/lib/*.js',function(){
        gulp.src('./js/lib/*.js')
        .pipe(babel({
          presets:['@babel/env']
      }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/dist/'));
  })
})

