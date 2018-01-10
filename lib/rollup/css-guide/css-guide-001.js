
//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [
	{
    input: './assets/js/css-guide/07/001-basic-formatting.js',
    output: {
      file: './dist/assets/js/css-guide/07/001-basic-formatting.js',
      format: 'iife',
      name: 'cssGuide001BasicFormatting',
      sourcemap: true
    }
  }
]


// overriding props for the rollup bundling
export let baseProps = { }

const activeConfigs = [
  {
    input: './assets/js/css-guide/07/001-basic-formatting.js',
    output: {
      file: './dist/assets/js/css-guide/07/001-basic-formatting.js',
      format: 'iife',
      name: 'cssGuide001BasicFormatting',
      sourcemap: true
    }
  }
]
export { activeConfigs };
