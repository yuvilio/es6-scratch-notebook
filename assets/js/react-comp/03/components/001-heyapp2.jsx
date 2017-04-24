// 001-heyapp2.jsx
import React from 'react'

// component class
class Greeter extends React.Component {
  render () {
    // the component itself  is written in JSX (javascript expression)
    // notice its like html (we use the parenthes to span multiple lines)
    return (
      <div>
        <h1>Greetings Mananan</h1>
        <p>I'll get the clay bowl and wooden spoon</p>
      </div>
    )
  }
}

export { Greeter }
