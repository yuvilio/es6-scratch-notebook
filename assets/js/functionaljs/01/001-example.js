import katex from 'katex'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-examplez ')

  console.log(katex.renderToString('c = \\pm\\sqrt{a^2 + b^2}'))
})
