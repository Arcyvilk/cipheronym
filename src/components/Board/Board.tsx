import { Card } from "../Card/Card";
import "./Board.css";

type BoardProps = { nrOfCards: number };
export const Board = ({ nrOfCards }: BoardProps) => {
  return (
    <div className="board">
      {new Array(nrOfCards).fill(null).map((_, i) => {
        return <Card key={i} />;
      })}
    </div>
  );
};
