//
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'

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
      namedExports: {
        // './node_modules/create-react-class/factory.js': ['default' ]
      },
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**',
        'node_modules/create-react-class/**'
      ]
    }),
    // globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),

    // uglify()
  ],
};

// ------------


//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [
  // {
  //   entry: './assets/js/tachyons/01/001-typography-basics.js',
  //   dest: './dist/assets/js/tachyons/01/001-typography-basics.js',
  //   moduleName: 'tachyons001TypographyBasics'
  // }
]


const activeConfigs = [
  {
    entry: './assets/js/react-comp/03/001-start.js',
    dest: './dist/assets/js/react-comp/03/001-start.js',
    moduleName: 'reactComp001Start'
  }
]

export { activeConfigs };