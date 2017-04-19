// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-start')

  {
    // let's render a simple html element onto a react root node
    const root = document.querySelector('#heyApp01')
    ReactDOM.render(
      <h1>Hey there!</h1>,
      root
    )
  }
})
