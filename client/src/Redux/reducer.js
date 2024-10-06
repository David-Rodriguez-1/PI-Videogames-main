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

const initialState = {
  allVideoGames: [],
  games: [],
  gameDetails: [],
  genres: JSON.parse(localStorage.getItem('genres')) || [],
  filteredGames: []
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideoGames: [...action.payload],
        games: [...action.payload],
        filteredGames: [...action.payload]
      }

    case GET_GENRES:
      localStorage.setItem('genres', JSON.stringify(action.payload))
      return {
        ...state,
        genres: [...action.payload]
      }

    case GET_DETAILVIDEOGAME:
      return { ...state, gameDetails: action.payload }

    case GET_VIDEOGAMESBYNAME:
      const input = action.payload.toLowerCase()
      return {
        ...state,
        filteredGames: state.allVideoGames.filter((game) =>
          game.name.toLowerCase().includes(input)
        )
      }

    case ORDER_BY_RATING:
      let gamesByRating = [...state.allVideoGames]
      return {
        ...state,
        filteredGames: gamesByRating.sort((a, b) => {
          if (action.payload === 'Ascendant') {
            return a.rating - b.rating
          } else if (action.payload === 'Descendant') {
            return b.rating - a.rating
          }
          return gamesByRating
        })
      }

    case ORDER_BY_NAME:
      const gamesByName = [...state.allVideoGames]
      return {
        ...state,
        filteredGames: gamesByName.sort((a, b) => {
          if (action.payload === 'Ascendant') {
            return b.name.localeCompare(a.name)
          } else if (action.payload === 'Descendant') {
            return a.name.localeCompare(b.name)
          }
          return gamesByName
        })
      }

    case FILTER_BY_GENRES:
      return {
        ...state,
        filteredGames: [
          ...state.games.filter((game) => game.genres.includes(action.payload))
        ]
      }

    case FILTER_BY_ORIGIN:
      return {
        ...state,
        filteredGames: [
          ...state.games.filter((game) => game.origin === action.payload)
        ]
      }

    case RESET_FILTER:
      return { ...state, filteredGames: [...state.games] }

    default:
      return { ...state }
  }
}

export default rootReducer
