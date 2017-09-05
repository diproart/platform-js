// concat bulma sass for Kit
const path = require('path')
const gulp = require('gulp')
const concat = require('gulp-concat')

let rootPath = path.resolve(path.join(__dirname, '../../node_modules/bulma'))

let base = [
  'sass/base/minireset.sass',
  'sass/base/generic.sass',
  'sass/base/helpers.sass'
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let components = [
  "sass/components/breadcrumb.sass",
  "sass/components/card.sass",
  "sass/components/dropdown.sass",
  "sass/components/level.sass",
  "sass/components/media.sass",
  "sass/components/menu.sass",
  "sass/components/message.sass",
  "sass/components/modal.sass",
  "sass/components/nav.sass",
  "sass/components/navbar.sass",
  "sass/components/pagination.sass",
  "sass/components/panel.sass",
  "sass/components/tabs.sass"
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let elements = [
  "sass/elements/box.sass",
  "sass/elements/button.sass",
  "sass/elements/container.sass",
  "sass/elements/content.sass",
  "sass/elements/form.sass",
  "sass/elements/icon.sass",
  "sass/elements/image.sass",
  "sass/elements/notification.sass",
  "sass/elements/progress.sass",
  "sass/elements/table.sass",
  "sass/elements/tag.sass",
  "sass/elements/title.sass",
  "sass/elements/other.sass"
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let grid = [
  "sass/grid/columns.sass",
  "sass/grid/tiles.sass"
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let layout = [
  "saas/layout/hero.sass",
  "saas/layout/section.sass",
  "saas/layout/footer.sass",
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let utilities = [
  "sass/utilities/initial-variables.sass",
  "sass/utilities/functions.sass",
  "sass/utilities/derived-variables.sass",
  "sass/utilities/animations.sass",
  "sass/utilities/mixins.sass",
  "sass/utilities/controls.sass"
].map(function(p){
  return path.resolve(`${rootPath}/${p}`)
})

let bulma = [
  ...utilities,
  ...base,
  ...elements,
  ...components,
  ...grid,
  ...layout
]

gulp.task('bulma:utilities', () => {
  return gulp
    .src(utilities)
    .pipe(concat('_platform-bulma-utilities.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma:base', () => {
  return gulp
    .src(base)
    .pipe(concat('_platform-bulma-base.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma:elements', () => {
  return gulp
    .src(elements)
    .pipe(concat('_platform-bulma-elements.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma:components', () => {
  return gulp
    .src(components)
    .pipe(concat('_platform-bulma-components.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma:grid', () => {
  return gulp
    .src(grid)
    .pipe(concat('_platform-bulma-grid.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma:layout', () => {
  return gulp
    .src(components)
    .pipe(concat('_platform-bulma-layout.sass'))
    .pipe(gulp.dest('dist/sass'))
})

gulp.task('bulma', [
  'bulma:utilities',
  'bulma:base',
  'bulma:elements',
  'bulma:components',
  'bulma:grid',
  'bulma:layout'
], () => {
  return gulp
    .src(bulma)
    .pipe(concat('_platform-bulma.sass'))
    .pipe(gulp.dest('dist/sass'))
})
