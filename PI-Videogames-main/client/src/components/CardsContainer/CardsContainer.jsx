import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const games = useSelector((state) => state.games);

  return (
    <article className={style.cardContainer}>
      {games.map((game) => (
        <Link className={style.link} to={`/detail/${game.id}`} key={game.id}>
          <Card game={game} />
        </Link>
      ))}
    </article>
  );
};

export default CardsContainer;
