import * as React from "react";
import { Board } from "./Board";
import "./Game.css";
import { OX } from "./Square";

export type OnClick = () => void;

// prettier-ignore
export type Squares = [
  OX, OX, OX,
  OX, OX, OX,
  OX, OX, OX
  ];

interface IGameState {
  history: Squares[];
  xIsNext: boolean;
}

export const Players: [OX, OX] = ["O", "X"];

export class Game extends React.Component<any, IGameState> {
  constructor(props: Readonly<any>) {
    super(props);

    const squares = Array(9).fill(null) as Squares;
    this.state = {
      history: [squares],
      xIsNext: true // X first
    };
  }

  render() {
    const winner = this.winner();
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.nextPlayer()}`;

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
    // guard: filled or game-over
    if (this.squares()[i] || this.winner()) {
      return;
    }

    const squares = [...this.squares()] as Squares; // copy
    squares[i] = this.nextPlayer();

    const { history, xIsNext } = this.state;
    this.setState({
      history: [...history, squares],
      xIsNext: !xIsNext
    });
  };

  private squares() {
    const [current] = this.state.history.slice(-1);
    return current;
  }

  private nextPlayer(): OX {
    return Players[Number(this.state.xIsNext)];
  }

  private winner() {
    return calculateWinner(this.squares());
  }
}

export function calculateWinner(squares: Squares): OX {
  const lines = [
    // -
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // |
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // x
    [0, 4, 8],
    [2, 4, 6]
  ];

  const found = lines
    .map(([a, b, c]) => [squares[a], squares[b], squares[c]])
    .filter(vs => vs.some(v => v !== null)) // non-null
    .find(vs => vs.every(v => v === vs[0])); // all same

  return found ? found[0] : null;
}
