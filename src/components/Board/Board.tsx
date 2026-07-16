import { Card } from "../Card/Card";
import { words } from "./words";
import "./Board.css";
import { shuffle } from "../../utils/shuffle";

type BoardProps = { size: number };

export const Board = ({ size }: BoardProps) => {
  const { board } = useBoard(size);

  return (
    <div className="board">
      {board.map((tile) => {
        return <Card key={tile.word} word={tile.word} type={tile.type} />;
      })}
    </div>
  );
};

const useBoard = (size: number) => {
  const generateBoard = () => {
    const shuffledWords = shuffle(words);
    const randomWords = shuffledWords
      .slice(0, size)
      .map((word: string) => ({ word, type: "red" }));
    return randomWords;
  };

  const board = generateBoard();

  return { board };
};
