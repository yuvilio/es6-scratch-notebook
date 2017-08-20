//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [
  {
    entry: './assets/js/functionaljs/01/001-example.js',
    dest: './dist/assets/js/functionaljs/01/001-example.js',
    moduleName: '001ExampleJs'
  },
  {
    entry: './assets/js/functionaljs/01/002-example.js',
    dest: './dist/assets/js/functionaljs/01/002-example.js',
    moduleName: '002ExampleJs'
  },
  {
    entry: './assets/js/basic-es6/01/001-init.js',
    dest: './dist/assets/js/basic-es6/01/001-init.js',
    moduleName: 'basicEs6001Init'
  },
  {
    entry: './assets/js/basic-es6/01/002-arrow.js',
    dest: './dist/assets/js/basic-es6/01/002-arrow.js',
    moduleName: 'basicEs6002Arrow'
  },
  {
    entry: './assets/js/basic-es6/01/003-literals.js',
    dest: './dist/assets/js/basic-es6/01/003-literals.js',
    moduleName: 'basicEs6003Literals'
  },
  {
    entry: './assets/js/basic-es6/02/001-modules.js',
    dest: './dist/assets/js/basic-es6/02/001-modules.js',
    moduleName: 'basicEs6001Modules'
  }
]

// overriding props for the rollup bundling
export let baseProps = { }

const activeConfigs = [
  {
    entry: './assets/js/basic-es6/02/002-classes.js',
    dest: './dist/assets/js/basic-es6/02/002-classes.js',
    moduleName: 'basicEs6002Classes'
  }
]

export { activeConfigs };
