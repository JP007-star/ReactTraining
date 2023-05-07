const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babelify = require('babelify');

function compile(watch) {
  const bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babelify, { presets: ['@babel/preset-env', '@babel/preset-react'] }));

  function rebundle() {
    bundler.bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(rename('bundle.min.js'))
      .pipe(gulp.dest('./public'));
  }

  if (watch) {
    bundler.on('update', rebundle);
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', () => compile());
gulp.task('watch', () => watch());

gulp.task('default', gulp.series('build'));
