import * as React from "react";
import { IOnClick } from "./Board";

export type Value = "X" | "O" | null;

export class Square extends React.Component<{ value: Value } & IOnClick> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
