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
gulp.task('platform:clean', ['checklibs'], done => rimraf('dist/{css,sass,js}', done))

gulp.task('build:platform:libs', [
  'platform:libs:vue',
  'platform:libs:media',
  'platform:libs:utils',
  'platform:vue:bundle',
  'platform:vue-slim:bundle'
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
  ['platform:styles:media'])

/**
 * все библиотеки будт в dist/{js,css}
 * нужно перенести, обновить в www/assets/platform
 */
gulp.task('build:platform',
  ['platform:clean'], done => sequence(['build:platform:libs', 'build:platform:styles', 'bulma']))

