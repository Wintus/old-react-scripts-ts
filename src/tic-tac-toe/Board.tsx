import * as React from "react";
import "./Board.css";
import { Square, Value } from "./Square";

export interface IOnClick {
  onClick: () => void;
}

export class Board extends React.Component<any, { squares: Value[] }> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
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
    const squares = [...this.state.squares]; // copy
    squares[i] = "X";
    this.setState({ squares });
  };
}
