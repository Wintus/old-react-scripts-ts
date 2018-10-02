import * as React from "react";
import { IOnClick } from "./Board";

export type OX = "X" | "O" | null;

export const Square = ({ value, onClick }: { value: OX } & IOnClick) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
