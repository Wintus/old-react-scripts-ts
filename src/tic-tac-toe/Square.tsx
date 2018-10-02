import * as React from "react";
import { OnClick } from "./Board";

export type Value = "X" | "O" | null;

interface ISquare {
  value: Value;
  onClick: OnClick;
}

export const Square = ({ value, onClick }: ISquare) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
