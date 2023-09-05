import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_DETAILVIDEOGAME,
  GET_VIDEOGAMESBYNAME,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  FILTER_BY_GENRES,
} from "./action_types";

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

const getVideoGameByName = (search) => {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL}?search=${search}`);
    dispatch({ type: GET_VIDEOGAMESBYNAME, payload: data });
  };
};

const orderCardsByRating = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_RATING, payload: order });
  }
}

const orderCardsByName = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_NAME, payload: order });
  };
};

const filterByGenres = (filter) => {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_GENRES, payload: filter });
  }
}
  
export {
  getVideoGames,
  getDetailVideoGame,
  getVideoGameByName,
  orderCardsByRating,
  orderCardsByName,
  filterByGenres,
};
