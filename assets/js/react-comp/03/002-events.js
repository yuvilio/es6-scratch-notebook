// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'
import { CommanderGreetFunc } from './components/004-forms-and-events.jsx'
import { FormGreet } from './components/005-form-submit.jsx'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-events')

  ReactDOM.render(
    <CommanderGreetFunc />,
    document.querySelector('#ex001Form')
  )

  ReactDOM.render(
    <FormGreet />,
    document.querySelector('#ex001Form')
  )
})
