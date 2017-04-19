// rollem.config.js with ES6
import babel from 'rollup-plugin-babel' // "using Babel to transpile your ES6/7 code and Rollup to generate a standalone bundle", "Babel will respect .babelrc files"
import resolve from 'rollup-plugin-node-resolve' // "Locate modules using the Node resolution algorithm, for using third party modules in node_modules"
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'


// TODO: break up the config to different rollem modules, so not generating a lot of bundles on each refresh

let baseProps = {
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**' // "Ideally, you should only be transforming your own source code", not external dependencies
    }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: true
    }),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),

    // uglify()
  ],
};


//which bundles currently building. need to rebuild a bundle? add it
// to one of the modules and importithere to build
// import { bundles } from './lib/rollem/basic-es6/basic-es6-001.js';
import { bundles, baseProps as baseP } from './lib/rollem/react-comp/react-comp-001.js';
Object.assign(baseProps, baseP) //override config from the module config 

let currentBundles = bundles.map( bundle => Object.assign(baseProps, bundle)  )
export default currentBundles
