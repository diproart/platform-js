const config = require('../gulp.config')
const _ = require('lodash')
const gulp = require('gulp')
const fs = require('fs');

const platform = _.merge(config.libs, config.bundles, config.styles)

/**
 * синхронная проверка
 * если файла нет будет ошибка
 *
 * пакеты не должны собираться
 * если файлов нет
 */
gulp.task('checklibs', (done) => {
  let errors = []
  _.each(platform, (lib, idx) => {
    console.log('check:' + idx)
    if(Array.isArray(lib) && lib.length > 0) {
      _.each(lib, (file) => {
        fs.statSync(file)
      })
    }
  })

  done()
})
