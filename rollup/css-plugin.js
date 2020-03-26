const { createFilter } = require('rollup-pluginutils')
const { writeFileSync, mkdirSync } = require('fs')
const { relative, resolve, join } = require('path')

module.exports = function({ target }) {
  let filter = createFilter(['**/*.css'])
  return {
    name: 'import-css',
    async transform(code, id) {
      if (!filter(id)) return
      const [base, _remove, file] = relative(resolve('./'), id).split('/')
      mkdirSync(resolve('./', join(target, `${base}`)), { recursive: true })
      const targetFile = resolve('./', join(target, `${base}/${file}`))
      writeFileSync(targetFile, code)
      return ''
    }
  }
}
