import style from "./Card.module.css";

const Card = ({ game }) => {
  return (
    <div className={style.card}>
      <img src={game.background_image} alt={game.name} />
      <h3>{game.name}</h3>
      <p className={style.rating}>⭐{game.rating}</p>
      <p>{game.genres.map(g => g.name)}</p>
    </div>
  );
};

export default Card;
