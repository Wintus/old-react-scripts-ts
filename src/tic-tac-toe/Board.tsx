import * as React from "react";
import "./Board.css";
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
        <div className="board center-block">
          {this.state.squares.map((v, i) => (
            <Square value={v} onClick={this.handleClick(i)} />
          ))}
        </div>
      </div>
    );
  }

  protected handleClick = (i: number) => () => {
    const squares = [...this.state.squares] as Squares; // copy
    squares[i] = "X";
    this.setState({ squares });
  };
}
