import React, { Component } from 'react';

class Board extends Component {
  renderSquare(i) {
    const color = (i % 2 === 0) ? 'white' : 'black';
    const style = {
      backgroundColor: color,
      width: '12.5%',
      height: '12.5%',
    };

    return (
      <div style={style}>
        {i}
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {squares}
      </div>
    );
  }
}

export default Board;
