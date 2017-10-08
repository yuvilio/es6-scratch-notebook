import React from 'react'

// a square will be one square in the tic tac toe board. we'll be able to set it's state to x or o
// Square is a "controlled component". doesn't keep it's own state (parent component Board does that for it)
class Square extends React.Component {
  render () {
    return (

      // since the state is managed by the parent (Board), a click is has the Square
      // component call the onClick function that was passed by Board to it
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

// a board renders the squares
class Board extends React.Component {
  constructor (props) {
    super(props)

    // this component's stte is managing other components (Square ones)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  // squares pass click events back to boroard to handle
  handleClick (i) {
    const squares = this.state.squares.slice() // copy the squares array instead of mutating the existing array
    // we do this to prefer immutable changes (replacing objects) rather than mutatint the same object
    squares[i] = 'x'
    this.setState({squares: squares})
  }

  renderSquare (i) {
    // let's communicate state downloard to child Square component
    // on
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render () {
    const status = 'Next player: X'

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

// the game uses our board component and will keep state related to it
class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export {Board, Game, Square}
