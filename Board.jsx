class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
      </div>
                <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
      </div>
                <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
      </div>
                <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
      </div>
                <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
      </div>
        
        </div>
    );
  }
}
