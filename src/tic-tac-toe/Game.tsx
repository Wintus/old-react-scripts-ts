import * as React from "react";
import { Board } from "./Board";
import "./Game.css";
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
  xIsNext: boolean;
}

export class Game extends React.Component<any, IGameState> {
  constructor(props: Readonly<any>) {
    super(props);

    this.state = {
      squares: Array(9).fill(null) as Squares,
      xIsNext: true // X first
    };
  }

  render() {
    const status = `Next player: ${this.nextPlayer()}`;

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
    squares[i] = this.nextPlayer();
    this.setState({ squares, xIsNext: !this.state.xIsNext });
  };

  private squares() {
    return this.state.squares;
  }

  private nextPlayer(): Value {
    return this.state.xIsNext ? "X" : "O";
  }
}
