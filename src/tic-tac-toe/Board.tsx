import * as React from "react";
import "./Board.css";
import { OnClick, Squares } from "./Game";
import { Square } from "./Square";

interface IBoard {
  squares: Squares;
  handleClick: (i: number) => OnClick;
}

export const Board = ({ squares, handleClick }: IBoard) => (
  <div className="board center-block">
    {squares.map((v, i) => (
      <Square key={i} value={v} onClick={handleClick(i)} />
    ))}
  </div>
);
