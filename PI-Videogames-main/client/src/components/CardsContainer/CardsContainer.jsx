import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const games = useSelector((state) => state.games);

  return (
    <div className={style.cardContainer}>
      {games.map((game) => (
        <Card key={game.id} games={game} />
      ))}
    </div>
  );
};

export default CardsContainer;
