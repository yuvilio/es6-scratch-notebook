
//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [
  // {
  //   entry: './assets/js/tachyons/01/001-typography-basics.js',
  //   dest: './dist/assets/js/tachyons/01/001-typography-basics.js',
  //   moduleName: 'tachyons001TypographyBasics'
  // }
]

// overriding props for the rollup bundling
export let baseProps = { }

const activeConfigs = [
  {
    entry: './assets/js/tachyons/01/001-typography-basics.js',
    dest: './dist/assets/js/tachyons/01/001-typography-basics.js',
    moduleName: 'tachyons001TypographyBasics'
  }
]

export { activeConfigs };
