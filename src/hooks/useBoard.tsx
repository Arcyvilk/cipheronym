import { useState } from "react";
import { shuffle } from "../utils/shuffle";
import { words } from "../components/Board/words";

export type TileType = "red" | "blue" | "neutral" | "assassin";
export type Tile = { type: TileType; word: string };

export const useBoard = (size: number) => {
  const [board, setBoard] = useState<Tile[]>([]);

  const generateBoard = () => {
    const shuffledWords = shuffle(words);
    const newBoard: Tile[] = shuffledWords
      .slice(0, size)
      .map((word: string) => ({ word, type: "red" }));
    setBoard(newBoard);
  };

  return { board, generateBoard };
};
