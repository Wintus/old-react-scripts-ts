import * as React from "react";
import "./Board.css";
import { OnClick, Squares } from "./Game";
import { Square } from "./Square";

interface IBoard {
  squares: Squares;
  handleClick: (i: number) => OnClick;
}

export class Board extends React.Component<IBoard> {
  render() {
    return (
      <div>
        <div className="board center-block">
          {this.props.squares.map((v, i) => (
            <Square value={v} onClick={this.props.handleClick(i)} />
          ))}
        </div>
      </div>
    );
  }
}
