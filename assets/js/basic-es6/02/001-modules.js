// we'll keep the modules used in the exmaples up here since
// "'import' and 'export' may only appear at the top level"
import { hello } from './modules/test-module.js'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-modules')

  // use a value fetched from a module
  console.log(hello) // hey there , from this module variable
})
