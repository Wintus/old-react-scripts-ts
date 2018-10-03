import * as React from "react";
import { Square, Value } from "./Square";

export type OnClick = () => void;

// prettier-ignore
type Squares = [
  Value, Value, Value,
  Value, Value, Value,
  Value, Value, Value
  ];

interface IBoard {
  squares: Squares;
}

export class Board extends React.Component<any, IBoard> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null) as Squares
    };
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  protected renderSquare(i: number) {
    return (
      <Square value={this.state.squares[i]} onClick={this.handleClick(i)} />
    );
  }

  protected handleClick = (i: number) => () => {
    const squares = [...this.state.squares] as Squares; // copy
    squares[i] = "X";
    this.setState({ squares });
  };
}
