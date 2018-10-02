import * as React from "react";
import { OnClick } from "./Game";

export type OX = "X" | "O" | null;

interface ISquare {
  value: OX;
  onClick: OnClick;
}

export const Square = ({ value, onClick }: ISquare) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
