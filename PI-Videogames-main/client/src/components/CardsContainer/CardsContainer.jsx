import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const games = useSelector((state) => state.games);

  return (
    <div className={style.cardContainer}>
      {games.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            platform={game.platform}
            background_image={game.background_image}
            rating={game.rating}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
