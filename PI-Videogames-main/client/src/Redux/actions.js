import axios from "axios";
import { GET_VIDEOGAMES, GET_DETAILVIDEOGAME } from "./constants";

const URL = "http://localhost:3001/videogames";

const getVideoGames = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL);
    dispatch({ type: GET_VIDEOGAMES, payload: data });
  };
};

const getDetailVideoGame = (idVideogame) => {
  console.log(idVideogame);
  return async function (dispatch) {
    const { data } = await axios.get(`${URL}/${idVideogame}`);
    console.log(data);
    dispatch({ type: GET_DETAILVIDEOGAME, payload: data[0] });
  };
};
  
export { getVideoGames, getDetailVideoGame };
