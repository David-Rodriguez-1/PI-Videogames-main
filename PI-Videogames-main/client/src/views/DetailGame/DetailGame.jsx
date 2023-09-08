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
      <img
        className={style.img}
        src={detailVideoGame.background_image}
        alt=""
      />
      <div className={style.info}>
        <p className={style.description}>{detailVideoGame.description}</p>
        <ul className={style.genres}>
          Genres:
          {detailVideoGame.genres?.map(genre => {
            return (
              <li key={detailVideoGame.id}>{ genre }</li>
              )
            })}
            </ul>
        <ul key={detailVideoGame.id} className={style.platforms}>
          Platforms:
          {detailVideoGame.platforms?.map((p) => {
            return <li key={detailVideoGame.id}>{p}</li>;
          })}
        </ul>
        <p className={style.rating}>Rating:{detailVideoGame.rating}</p>
      </div>
    </div>
  );
};
export default DetailGame;
