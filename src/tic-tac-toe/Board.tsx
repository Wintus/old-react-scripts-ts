import * as React from "react";
import "./Board.css";
import { IBoard } from "./index";
import { Square } from "./Square";

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
