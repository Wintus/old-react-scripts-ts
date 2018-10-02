import * as React from "react";

class Square extends React.Component<{ value: number }> {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  static renderSquare(i: number) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {Board.renderSquare(0)}
          {Board.renderSquare(1)}
          {Board.renderSquare(2)}
        </div>
        <div className="board-row">
          {Board.renderSquare(3)}
          {Board.renderSquare(4)}
          {Board.renderSquare(5)}
        </div>
        <div className="board-row">
          {Board.renderSquare(6)}
          {Board.renderSquare(7)}
          {Board.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
