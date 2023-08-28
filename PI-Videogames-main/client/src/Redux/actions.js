import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

const getVideoGames = () => {
      return async function (dispatch) {
        const { data } = await axios.get("http://localhost:3001/videogames");
        dispatch({ type: GET_VIDEOGAMES, payload: data });
      };
};

export default getVideoGames;
