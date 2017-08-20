import uglify from 'rollup-plugin-uglify'

//common config settings
const defaultConfig = {
  // entry: 'src/fetch-inject.js',
  format: 'iife',
  plugins: []
}

//currently generated js files (switch to others as needed)
import { activeConfigs  } from './lib/rollup/tachyons/tachyons-001.js';

activeConfigs.forEach(activeConfig => {
  Object.assign(activeConfig, defaultConfig)
})

const minifiedConfigs = activeConfigs.reduce(
  (minifiedConfigs, activeConfig) => minifiedConfigs.concat(
    Object.assign({}, activeConfig, {
      plugins: [uglify({}), ...activeConfig.plugins],
      dest: activeConfig.dest.replace('js', 'min.js')
    })
  ),
  []
)

export default activeConfigs.concat(minifiedConfigs)
