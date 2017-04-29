// 003-props.jsx
import React from 'react'

export let Greeter = (props) => {
  let name = props.name // would be this.props.name if using component class ratherh than function

  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Greetings {name}</h1>
      <p>I'll go feed the chickens</p>
    </div>
  )
}
