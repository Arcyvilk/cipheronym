import "./Card.css";

type CardProps = { word: string };

export const Card = ({ word }: CardProps) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__top">
          <img className="card__photo" src="" />
        </div>
        <div className="card__bottom">{word.toLocaleUpperCase()}</div>
      </div>
    </div>
  );
};
