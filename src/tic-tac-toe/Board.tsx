import * as React from "react";
import "./Board.css";
import { OnClick } from "./Game";
import { OX, Square } from "./Square";

export type Squares = [OX, OX, OX, OX, OX, OX, OX, OX, OX]; // x9

export interface IBoard {
  squares: Squares;
  handleClick: (i: number) => OnClick;
}

export class Board extends React.Component<IBoard> {
  render() {
    return (
      <div className="board center-block">
        {this.props.squares.map((v, i) => (
          <Square value={v} onClick={this.props.handleClick(i)} />
        ))}
      </div>
    );
  }
}
