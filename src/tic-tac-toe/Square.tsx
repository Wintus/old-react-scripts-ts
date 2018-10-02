import * as React from "react";
import { ISquare } from "./index";

export const Square = ({ value, onClick }: ISquare) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
