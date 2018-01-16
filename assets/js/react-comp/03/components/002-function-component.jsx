// 002-function-component.jsx
import React from 'react' // even though React is not directly used in this file. it's being imported makes the jsx in this file not trigger an error

// component as function. it just is the render function
export let Greeter = (props) => {
  return (
    <div>
      <h1>Greetings Mananan</h1>
      <p>I'll go clean the kitchen</p>
    </div>
  )
}
