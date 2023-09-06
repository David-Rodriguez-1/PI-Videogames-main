import {
  GET_VIDEOGAMES,
  GET_DETAILVIDEOGAME,
  GET_VIDEOGAMESBYNAME,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  FILTER_BY_GENRES,
  GET_GENRES,
  FILTER_BY_ORIGIN,
  RESET_FILTER,
} from "./action_types";

const initialState = {
  games: [],
  allVideoGames: [],
  gameDetails: [],
  genres: [], 
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        games: action.payload,
      };
    
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      }

    case GET_DETAILVIDEOGAME:
      return { ...state, gameDetails: action.payload };

    case GET_VIDEOGAMESBYNAME:
      return { ...state, allVideoGames: action.payload };

    case ORDER_BY_RATING:
      const gamesByRating = [...state.allVideoGames];
      return {
        ...state,
        allVideoGames: gamesByRating.sort((a, b) => {
          if (action.payload === "Ascendant") {
            return b.rating - a.rating;
          } else if (action.payload === "Descendant") {
            return a.rating - b.rating;
          }
          return gamesByRating;
        }),
      };

    case ORDER_BY_NAME:
      const gamesByName = [...state.allVideoGames];
      return {
        ...state,
        allVideoGames: gamesByName.sort((a, b) => {
          if (action.payload === "Ascendant") {
            return b.name.localeCompare(a.name);
          } else if (action.payload === "Descendant") {
            return a.name.localeCompare(b.name);
          }
          return gamesByName;
        }),
      };

    case FILTER_BY_GENRES:
      return {
        ...state,
        allVideoGames: [
          ...state.games.filter((game) =>
            game.genres.includes(action.payload)
          ),
        ],
      };
    case RESET_FILTER:
      return{...state.allVideoGames}

    default:
      return { ...state };
  }
};

export default rootReducer;
