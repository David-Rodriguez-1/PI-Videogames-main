import { GET_VIDEOGAMES, GET_DETAILVIDEOGAME, GET_VIDEOGAMESBYNAME } from "./action_types"

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
    case GET_VIDEOGAMESBYNAME:
      return {...state, games: action.payload}

    default:
      return { ...state};
  }
};

export default rootReducer;
