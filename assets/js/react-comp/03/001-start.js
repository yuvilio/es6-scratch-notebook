// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// we'll keep all the imports of the examples up here for consistency
import { Greeter as Greeter2 } from './components/001-heyapp2.jsx'
import { Greeter as GreeterFunc } from './components/002-function-component.jsx'
import { Greeter as GreeterProps } from './components/003-props.jsx'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-start')

  {
    // let's render a simple html element onto a react root node
    const root = document.querySelector('#heyApp01')
    ReactDOM.render(
      <h1 name='Nia'>Hey there!</h1>,
      root
    )
  }

  // we can render components that are classes (they )
  ReactDOM.render(
    <Greeter2 />,
    document.querySelector('#heyApp02')
  )

  // components also come in function flavor
  ReactDOM.render(
    <GreeterFunc />,
    document.querySelector('#heyApp03')
  )

  // passing a parameter to a component, using an attribute
  ReactDOM.render(
    <GreeterProps name='Wizard Mananan' />,
    document.querySelector('#heyApp04')
  )
})
