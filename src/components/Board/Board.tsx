import { useBoard, type Tile } from "../../hooks/useBoard";
import { Card } from "../Card/Card";
import "./Board.css";

type BoardProps = { size: number };

export const Board = ({ size }: BoardProps) => {
  const { board, generateBoard } = useBoard(size);

  const handleResetBoard = () => {
    generateBoard();
  };

  return (
    <>
      <button onClick={handleResetBoard}>Generate new board</button>

      {board.length > 0 ? (
        <div className="board">
          {board.map((tile: Tile) => {
            return <Card key={tile.word} word={tile.word} type={tile.type} />;
          })}
        </div>
      ) : null}
    </>
  );
};
