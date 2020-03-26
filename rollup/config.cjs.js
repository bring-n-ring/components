const addPlugins = require('./plugins.js')
const components = require('./components.js')
import typescript from 'rollup-plugin-typescript'

const config = {
  input: components,
  output: {
    dir: 'bundle/cjs',
    format: 'cjs'
  },
  external: ['@ionic/react', 'react-dom', 'react']
}

module.exports = addPlugins(config)
