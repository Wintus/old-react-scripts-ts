import * as React from "react";
import { OnClick } from "./Board";

export type Value = "X" | "O" | null;

interface ISquare {
  value: Value;
  onClick: OnClick;
}

export class Square extends React.Component<ISquare> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
