import React from 'react'

// example: https://reactjs.org/docs/forms.html
class FormGreet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // let's define a function we'll use to handle a submit
  // we'll call it from the jsx
  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    console.log('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    let name = this.props.name
    let message = this.props.message

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

FormGreet.defaultProps = {
  name: 'React',
  message: 'This is the default message!'
}

export {FormGreet}

// refs example https://reactjs.org/docs/refs-and-the-dom
