// rollem.config.js with ES6
import babel from 'rollup-plugin-babel' // "using Babel to transpile your ES6/7 code and Rollup to generate a standalone bundle", "Babel will respect .babelrc files"
import resolve from 'rollup-plugin-node-resolve' // "Locate modules using the Node resolution algorithm, for using third party modules in node_modules"
import commonjs from 'rollup-plugin-commonjs'

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

export default [
  //one object per bundle
  Object.assign(
    baseProps,
    {
      entry: './assets/js/functionaljs/01/001-example.js',
      dest: './dist/assets/js/functionaljs/01/001-example.js',
      moduleName: '001-example-js'
    }
  ),
  Object.assign(
    baseProps,
    {
      entry: './assets/js/functionaljs/01/002-example.js',
      dest: './dist/assets/js/functionaljs/01/002-example.js',
      moduleName: '002-example-js'
    }
  )

]
