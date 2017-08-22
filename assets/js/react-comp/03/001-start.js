// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// we'll keep all the imports of the examples up here for consistency
import { Greeter as Greeter2 } from './components/001-heyapp2.jsx'
import { Greeter as GreeterFunc } from './components/002-function-component.jsx'
import { Greeter as GreeterPropsFunc, GreeterPropClass, GreeterDefaultProps,
  GreeterFuncDefaultProps, GreeterFuncVariablePassed } from './components/003-props.jsx'

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
    <GreeterPropsFunc name='Wizard Mananan' />,
    document.querySelector('#heyApp04')
  )

  ReactDOM.render(
    <GreeterPropClass name='Nigel Rancid' />,
    document.querySelector('#heyApp05')
  )

  // notice we're not passing the component the 'equipment' prop that it uses
  // that's ok. it has a default
  ReactDOM.render(
    <GreeterDefaultProps />,
    document.querySelector('#heyApp06')
  )

  ReactDOM.render(
    <GreeterFuncDefaultProps />,
    document.querySelector('#heyApp07')
  )

  // let's pass a property value from a variable this time, rather than a string. we'll use a javascript
  // exppression in single brackets
  let yourQuarters = 'Converted Cargo Hold'
  ReactDOM.render(
    <GreeterFuncVariablePassed quartersLocation={yourQuarters} />,
    document.querySelector('#heyApp08')
  )
})
