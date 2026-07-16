import { Card } from "../Card/Card";
import "./Board.css";
import { words } from "./words";

type BoardProps = { nrOfCards: number };
export const Board = ({ nrOfCards }: BoardProps) => {
  const getRandomWords = () => {
    const nrOfWords = words.length;
    const randomWords = new Array(nrOfCards).fill(null).map(() => {
      const randomIndex = Math.floor(Math.random() * nrOfWords);
      return words[randomIndex];
    });
    return randomWords;
  };

  const randomWords = getRandomWords();

  return (
    <div className="board">
      {new Array(nrOfCards).fill(null).map((_, i) => {
        return <Card key={i} word={randomWords[i]} />;
      })}
    </div>
  );
};
