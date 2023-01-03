import "./cardprjStyle.scss";

interface CardProps {
  image: string;
  desc: string;
  title: string;
}
const CardPrj = ({ image, desc, title }: CardProps) => {
  let Background = image;

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="category">{title}</div>
      <div className="heading">
        {desc}
        <div className="author">
          By <span className="name">Duong</span> 6 month ago
        </div>
      </div>
    </div>
  );
};

export default CardPrj;
