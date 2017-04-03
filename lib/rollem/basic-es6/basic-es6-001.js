
//past (inactive bundles). add to bundles and import to rollem to activate
let pastEntries = [
  {
    entry: './assets/js/functionaljs/01/001-example.js',
    dest: './dist/assets/js/functionaljs/01/001-example.js',
    moduleName: '001-example-js'
  },
  {
    entry: './assets/js/functionaljs/01/002-example.js',
    dest: './dist/assets/js/functionaljs/01/002-example.js',
    moduleName: '002-example-js'
  },
  {
    entry: './assets/js/basic-es6/01/001-init.js',
    dest: './dist/assets/js/basic-es6/01/001-init.js',
    moduleName: 'basic-es6-001-init'
  }
]


//current
let bundles = [
  {
    entry: './assets/js/basic-es6/01/002-arrow.js',
    dest: './dist/assets/js/basic-es6/01/002-arrow.js',
    moduleName: 'basic-es6-002-arrow'
  }
]

export { bundles };
