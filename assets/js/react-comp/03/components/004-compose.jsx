// 003-props.jsx
import React from 'react'

// this is a simple component, it renders an h2 with a name in it
export let CloakMember = (props) => {
  let name = props.name

  return (
    <h2>{name}</h2>
  )
}

// this is a a component that is composed with another component (CloakMember).
class BlackCloakSociety extends React.Component {
  render () {
    let names = this.props.names.split(',')

    // this is the composition. We'll use the CloakMember component to render each name
    let listItems = names.map((name) =>
      <CloakMember name={name} />
    )

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

export { BlackCloakSociety }
