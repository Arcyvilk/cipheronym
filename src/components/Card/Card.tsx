import "./Card.css";

type CardProps = { word: string };
export const Card = ({ word }: CardProps) => {
  return <div className="card">{word.toLocaleUpperCase()}</div>;
};
