import axios from 'axios'
import {
  GET_VIDEOGAMES,
  GET_DETAILVIDEOGAME,
  GET_VIDEOGAMESBYNAME,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  FILTER_BY_GENRES,
  GET_GENRES,
  FILTER_BY_ORIGIN,
  RESET_FILTER
} from './action_types'

const URL_GAMES = 'https://videogames-prod.vercel.app/videogames'
const URL_GENRES = 'https://videogames-prod.vercel.app/genres'

const getVideoGames = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_GAMES)
    dispatch({ type: GET_VIDEOGAMES, payload: data })
  }
}

const getGenres = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_GENRES)
    dispatch({ type: GET_GENRES, payload: data })
  }
}

const getDetailVideoGame = (idVideogame) => {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL_GAMES}/${idVideogame}`)
    dispatch({ type: GET_DETAILVIDEOGAME, payload: data[0] })
  }
}

const getVideoGameByName = (value) => {
  return {
    type: GET_VIDEOGAMESBYNAME,
    payload: value
  }
}

const orderCardsByRating = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_RATING, payload: order })
  }
}

const orderCardsByName = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_NAME, payload: order })
  }
}

const filterByGenres = (filter) => {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_GENRES, payload: filter })
  }
}

const filterByOrigin = (filter) => {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_ORIGIN, payload: filter })
  }
}

const resetFilter = () => {
  return { type: RESET_FILTER }
}

export {
  getVideoGames,
  getDetailVideoGame,
  getVideoGameByName,
  orderCardsByRating,
  orderCardsByName,
  filterByGenres,
  getGenres,
  filterByOrigin,
  resetFilter
}
