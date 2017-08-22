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

// alternative approach with props in a class
// 003-props.jsx
class GreeterPropClass extends React.Component {
  render () {
    // props passed in by component are available to the instance object
    let name = this.props.name

    return (
      <div>
        <h1>DNA sequencing for: {name} </h1>
        <p>*File Closed*</p>
      </div>
    )
  }
}

export { GreeterPropClass }

// 003-props.jsx
class GreeterDefaultProps extends React.Component {
  render () {
    // props passed in by component are available to the instance object
    let equipment = this.props.equipment

    return (
      <div>
        <h1>Stellar: you'll need this equipment:</h1>
        <p>{equipment.join(', ')}</p>
      </div>
    )
  }
}

// add default props as fallbacks to use
// just add it as a property of the component itself
GreeterDefaultProps.defaultProps = {
  equipment: ['cyberjack', 'headset']
}

export { GreeterDefaultProps }

// 003-props.jsx
let GreeterFuncDefaultProps = (props) => {
  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Now orbiting: </h1>
      <p>{props.station}}</p>
    </div>
  )
}

GreeterFuncDefaultProps.defaultProps = {
  station: 'Delta Burksilon V Colony'
}

export { GreeterFuncDefaultProps }

// 003-props.jsx
let GreeterFuncVariablePassed = (props) => {
  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Your quarters location: </h1>
      <p>{props.quartersLocation}</p>
    </div>
  )
}

export { GreeterFuncVariablePassed }
