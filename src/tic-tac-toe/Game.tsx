import * as React from "react";
import { Board } from "./Board";
import { Value } from "./Square";

export type OnClick = () => void;

// prettier-ignore
export type Squares = [
  Value, Value, Value,
  Value, Value, Value,
  Value, Value, Value
  ];

interface IGameState {
  squares: Squares;
}

export class Game extends React.Component<any, IGameState> {
  constructor(props: Readonly<any>) {
    super(props);

    this.state = {
      squares: Array(9).fill(null) as Squares
    };
  }

  render() {
    const status = "Next player: X";

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.squares()} handleClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

  protected handleClick: (i: number) => OnClick = i => () => {
    const squares = [...this.squares()] as Squares; // copy
    squares[i] = "X";
    this.setState({ squares });
  };

  private squares() {
    return this.state.squares;
  }
}
