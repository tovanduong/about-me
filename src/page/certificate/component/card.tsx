import "./cardStyle.scss";

interface CardProps {
  image: string;
  info: string;
  title: string;
}
const CardCetificate = ({ image, info, title }: CardProps) => {
  let Background = image;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        <div className="flip-card-back">
          <p className="title">{title}</p>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCetificate;
