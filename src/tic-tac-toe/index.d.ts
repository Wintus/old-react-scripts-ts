export type OX = "X" | "O" | null;

export type OnClick = () => void;

export interface IGameState {
  history: Squares[];
  step: number;
  xIsNext: boolean;
}

export interface ISquare {
  value: OX;
  onClick: OnClick;
}

// prettier-ignore
// x9
export type Squares = [
  OX, OX, OX,
  OX, OX, OX,
  OX, OX, OX
];

export interface IBoard {
  squares: Squares;
  handleClick: (i: number) => OnClick;
}
