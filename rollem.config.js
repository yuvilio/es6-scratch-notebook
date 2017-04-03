// rollem.config.js with ES6
import babel from 'rollup-plugin-babel' // "using Babel to transpile your ES6/7 code and Rollup to generate a standalone bundle", "Babel will respect .babelrc files"
import resolve from 'rollup-plugin-node-resolve' // "Locate modules using the Node resolution algorithm, for using third party modules in node_modules"
import commonjs from 'rollup-plugin-commonjs'

// TODO: break up the config to different rollem modules, so not generating a lot of bundles on each refresh

var baseProps = {
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
      main: true
    }),

    // uglify()
  ],
};

//which bundles currently building
import { bundles } from './lib/rollem/basic-es6/basic-es6-001.js';
bundles.forEach( bundle => Object.assign(baseProps, bundle)  )

export default bundles
