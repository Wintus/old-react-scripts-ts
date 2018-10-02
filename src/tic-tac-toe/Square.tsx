import * as React from "react";
import { OnClick } from "./Game";

export type OX = "X" | "O" | null;

export const Square = ({
  value,
  onClick
}: { value: OX } & { onClick: OnClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
