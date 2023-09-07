import style from "./Card.module.css";

const Card = ({ game }) => {
  return (
    <div className={style.card}>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt="" />
      <p>{game.rating}</p>
      <p>{game.genres.map(g => g.name)}</p>
    </div>
  );
};

export default Card;
