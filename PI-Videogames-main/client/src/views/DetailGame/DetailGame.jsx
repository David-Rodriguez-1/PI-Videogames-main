import style from "./DetailGame.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailVideoGame } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DetailGame = () => {
  const dispatch = useDispatch();
  
  const { idVideogame } = useParams();

  const detailVideoGame = useSelector((state) => state.gameDetails);
  
  useEffect(() => {
    dispatch(getDetailVideoGame(idVideogame));
  }, [dispatch, idVideogame]);
  
  return (
    <div className={style.detailContainer}>
      <h1>{detailVideoGame.name}</h1>
      <img src={detailVideoGame.background_image} alt="" />
      <p>{detailVideoGame.description}</p>
      <p>Rating:{detailVideoGame.rating}</p>
      <h4>Genres:{detailVideoGame.genres}</h4>
      <p>Platforms:</p>
      <p>{ detailVideoGame.platforms }</p>
    </div>
  );
};
export default DetailGame;
