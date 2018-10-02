import * as React from "react";
import { Board, Squares } from "./Board";
import { OX } from "./Square";

export type OnClick = () => void;

interface IGameState {
  history: Squares[];
  step: number;
  xIsNext: boolean;
}

export const Players: [OX, OX] = ["O", "X"];

export class Game extends React.Component<any, IGameState> {
  constructor(props: Readonly<any>) {
    super(props);
    const squares = Array(9).fill(null) as Squares;
    this.state = {
      history: [squares],
      step: 0,
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
          <Board
            squares={this.squares()}
            handleClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>
            {this.state.history.map((_, move) => (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>
                  Go to {move === 0 ? "game start" : `move #${move}`}
                </button>
              </li>
            ))}
          </ol>
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

      const squares = [...this.squares()] as Squares; // copy
      squares[i] = this.nextPlayer();

      const h = this.history();

      this.setState({
        history: [...h, squares],
        step: h.length,
        xIsNext: !this.state.xIsNext
      });
    };
  }

  protected nextPlayer(): OX {
    return Players[Number(this.state.xIsNext)];
  }

  protected history() {
    const last = this.state.step + 1;
    return this.state.history.slice(0, last);
  }

  protected squares() {
    const [current] = this.history().slice(-1);
    return current;
  }

  protected winner() {
    return calculateWinner(this.squares());
  }

  protected jumpTo(step: number) {
    this.setState({
      step,
      xIsNext: step % 2 === 0
    });
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
