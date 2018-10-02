import * as React from "react";
import { IOnClick } from "./Board";

export type Value = "X" | "O" | null;

export const Square = ({ value, onClick }: { value: Value } & IOnClick) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
