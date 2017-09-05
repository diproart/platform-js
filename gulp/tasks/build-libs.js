const config = require('../gulp.config')

/**
 * @TODO pull to local CDN
 */

const gulp = require('gulp')
const rimraf = require('rimraf')
const sequence = require('run-sequence')
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'autoprefixer']
})

const libs = config.libs
const bundles = config.bundles
const styles = config.styles

/**
 * clean
 */
gulp.task('platform:clean', ['checklibs'], done => rimraf('dist', done))

gulp.task('build:platform:libs', [
  'platform:libs:vue',
  'platform:libs:material',
  'platform:libs:angular',
  'platform:libs:media',
  'platform:libs:utils',
  'platform:vue:bundle',
  'platform:vue-slim:bundle',
  'platform:material:bundle',
  'platform:material-slim:bundle',
  'platform:material-legacy:bundle'
])

gulp.task('platform:libs:vue', () => {
  return gulp.src(libs['platform.vue.js'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.vue.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:libs:material', () => {
  return gulp.src(libs['platform.material.js'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.material.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:libs:angular', () => {
  return gulp.src(libs['platform.angular.js'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.angular.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:libs:media', () => {
  return gulp.src(libs['platform.media.js'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.media.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:libs:utils', () => {
  return gulp.src(libs['platform.utils.js'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.utils.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

/**
 * полная версия для platform
 * включая jquery.min.js
 */
gulp.task('platform:vue:bundle', () => {
  return gulp
    .src(bundles.vue)
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.vue.bundle.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

/**
 * тонкая версия
 * + jquery.slim.min.js
 */
gulp.task('platform:vue-slim:bundle', () => {
  return gulp
    .src(bundles['vue-slim'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.vue-slim.bundle.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:material:bundle', () => {
  return gulp.src(bundles.material)
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.material.bundle.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:material-slim:bundle', () => {
  return gulp.src(bundles['material-slim'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.material-slim.bundle.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:material-legacy:bundle', () => {
  return gulp.src(bundles['material-legacy'])
    .pipe($.sourcemaps.init())
    .pipe($.concat('platform.material-legacy.bundle.js'))
    .pipe($.size({
      pretty: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('platform:styles:material', () => {
  return gulp.src(styles['platform.material.css'])
    .pipe($.size({
      pretty: true
    }))
    .pipe(gulp.dest('dist/css'))
})

/**
 * стили для media библиотек
 */
gulp.task('platform:styles:media', () => {
  return gulp.src(styles['platform.media.css'])
    .pipe($.concat('platform.media.css'))
    .pipe($.size({
      pretty: true
    }))
    .pipe(gulp.dest('dist/css'))
})

/**
 * все стили подключаются в проекте
 * за исключением material и media: swiper, tether, tether-drop
 */
gulp.task('build:platform:styles',
  ['platform:styles:material', 'platform:styles:media'])

/**
 * все библиотеки будт в dist/{js,css}
 * нужно перенести, обновить в www/assets/platform
 */
gulp.task('build:platform',
  ['platform:clean'], done => sequence(['build:platform:libs', 'build:platform:styles', 'bulma']))

// @todo copy to branch
// gulp.task('platform:copy', () => {
//   return gulp.src([
//     'dist/js/**',
//     'dist/css/**'
//   ], {base: 'dist'}).pipe(gulp.dest('branch/www/assets/platform'))
// })
