
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'

//past (inactive bundles). add to bundles and import to rollem to activate
let pastEntries = [

]


//current
export let bundles = [
  {
    entry: './assets/js/react-comp/03/001-start.js',
    dest: './dist/assets/js/react-comp/03/001-start.js',
    moduleName: 'react-comp-001-start'
  }
]

// more react friendly rollup config (based on https://github.com/yamafaktory/babel-react-rollup-starter )
export let baseProps = {
  format: 'iife',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
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
