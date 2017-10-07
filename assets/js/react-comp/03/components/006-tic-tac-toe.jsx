import React from 'react'

// a square will be one square in the tic tac toe board. we'll be able to set it's state to x or o
class Square extends React.Component {
  // we use he class constructor to initialize state
  constructor (props) {
    // since this is a subclass (of class React.Component)
    // let's get the passed in properies processed by the superclass first and available
    super(props)

    // the state is private to this component
    this.state = {
      value: null // 'x' or 'o' . starts as neither
    }
  }

  render () {
    return (
      // when clicking on these buttons (the scquare, a stte change happens)
      // we defined value (above) as one part of the state that can change
      // a click causes the component to merge it's current statue with this new state
      // the component then calls it's render() again
      <button className='square' onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    )
  }
}

// a board renders the squares
class Board extends React.Component {
  renderSquare (i) {
    return <Square value={i} />
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
