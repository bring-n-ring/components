const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const typescript = require('rollup-plugin-typescript')
const css = require('./css-plugin')
module.exports = config => {
  const plugins = [
    resolve({ extensions: ['.ts', '.tsx'] }),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    css({
      target: config.output.dir
    })
  ]
  const c = config
  c.plugins = config.plugins || []
  c.plugins = c.plugins.concat(plugins)
  return c
}
