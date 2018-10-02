import * as React from "react";
import "./Board.css";
import { OX, Square } from "./Square";

export type OnClick = () => void;

interface IState {
  squares: OX[];
  xIsNext: boolean;
}

export class Board extends React.Component<any, IState> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true // X first
    };
  }

  shouldComponentUpdate() {
    return !Boolean(this.winner()); // no winner yet
  }

  render() {
    const winner = this.winner();
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.nextValue()}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board center-block">
          {this.squares().map((v, i) => (
            <Square value={v} onClick={this.handleClick(i)} />
          ))}
        </div>
      </div>
    );
  }

  protected handleClick(i: number): OnClick {
    return () => {
      // guard: filled or game-over
      if (this.squares()[i] || this.winner()) {
        return;
      }

      const squares = [...this.squares()]; // copy
      squares[i] = this.nextValue();
      this.setState({ squares, xIsNext: !this.state.xIsNext });
    };
  }

  protected nextValue(): OX {
    return this.state.xIsNext ? "X" : "O";
  }

  protected squares() {
    return this.state.squares;
  }

  protected winner() {
    return calculateWinner(this.squares());
  }
}

function calculateWinner(squares: OX[]): OX {
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
