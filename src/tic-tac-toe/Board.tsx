import * as React from "react";
import "./Board.css";
import { Square, Value } from "./Square";

export interface IOnClick {
  onClick: () => void;
}

interface IState {
  squares: Value[];
  xIsNext: boolean;
}

export class Board extends React.Component<any, IState> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  render() {
    const status = `Next player: ${this.nextValue()}`;

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
    const squares = [...this.state.squares]; // copy
    squares[i] = this.nextValue();
    this.setState({ squares, xIsNext: !this.state.xIsNext });
  };

  protected nextValue(): Value {
    return this.state.xIsNext ? "X" : "O";
  }
}
