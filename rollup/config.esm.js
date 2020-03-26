const addPlugins = require('./plugins.js')
const components = require('./components.js')
import typescript from 'rollup-plugin-typescript'

const config = {
  input: components,
  output: {
    dir: 'bundle/esm',
    format: 'esm'
  },
  external: ['@ionic/react', 'react-dom', 'react']
}

module.exports = addPlugins(config)
