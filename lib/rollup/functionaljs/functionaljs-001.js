//
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'


//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [

]

// overriding props for the rollup bundling
export let baseProps = {
  format: 'iife',
  plugins: [
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/katex/**',
        'node_modules/match-at/**',

      ]
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),

    // uglify()
  ],
};

const activeConfigs = [
  {
    entry: './assets/js/functionaljs/01/001-example.js',
    dest: './dist/assets/js/functionaljs/01/001-example.js',
    moduleName: 'functionaljs001Example'
  }
]

export { activeConfigs };
