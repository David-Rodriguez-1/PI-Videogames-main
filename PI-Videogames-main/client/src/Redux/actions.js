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
  return async function (dispatch) {
    const { data } = await axios.get(`${URL}/${idVideogame}`);
    dispatch({ type: GET_DETAILVIDEOGAME, payload: data[0] });
  };
};

const postVideoGame = (payload) => {
  return async function () {
    const result = await axios.post("http://localhost:3001/videogames", payload);
    return result;
  };
}

export { getVideoGames, getDetailVideoGame, postVideoGame };
