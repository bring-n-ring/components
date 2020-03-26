const { createFilter } = require('rollup-pluginutils')
const { writeFileSync, mkdirSync, existsSync } = require('fs')
const { relative, resolve } = require('path')

module.exports = function({ target }) {
  let filter = createFilter(['**/*.css'])
  return {
    name: 'import-css',
    async transform(code, id) {
      if (!filter(id)) return
      const [base, _remove, file] = relative(resolve('./'), id).split('/')
      if (!(await existsSync(resolve('./', 'css')))) {
        await mkdirSync(resolve('./', 'css'))
      }
      const targetFile = resolve(`./css/${file}`)
      writeFileSync(targetFile, code)
      return ''
    }
  }
}
