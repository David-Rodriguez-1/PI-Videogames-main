import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

export const getVideoGames = () => {
    return async function (dispatch) {
        const dataGames = await axios.get("http://localhost:3001/videogames");
        const data = dataGames.data;
        dispatch({type:GET_VIDEOGAMES, payload: data})
    }
}