import { useState } from "react";
import type { Tile, TileType } from "../../hooks/useBoard";
import "./Card.css";

type CardProps = Tile;
export const Card = ({ type, word }: CardProps) => {
  const [isUncovered, setIsUncovered] = useState(false);

  const handleCardClick = () => {
    setIsUncovered(!isUncovered);
  };

  return (
    <button onClick={handleCardClick}>
      {isUncovered ? <Card.Back type={type} /> : <Card.Face word={word} />}
    </button>
  );
};

Card.Back = ({ type }: { type: TileType }) => {
  const className = `card card--${type}`;
  return <div className={className}>{type}</div>;
};

Card.Face = ({ word }: { word: string }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__top">
          <img
            className="card__photo"
            src="https://www.pngkey.com/png/full/988-9886269_blank-person-facebook-no-profile.png"
          />
        </div>
        <div className="card__bottom">
          <div className="card__word">{word.toLocaleUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};
