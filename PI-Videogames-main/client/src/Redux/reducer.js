import { GET_VIDEOGAMES, GET_DETAILVIDEOGAME } from "./constants";

const initialState = {
  games: [],
  gameDetails: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { ...state, games: action.payload };
    case GET_DETAILVIDEOGAME:
      return { ...state, gameDetails: action.payload };

    default:
      return { ...state};
  }
};

export default rootReducer;
