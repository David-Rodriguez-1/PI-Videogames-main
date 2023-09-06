import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  orderCardsByRating,
  orderCardsByName,
  filterByGenres,
} from "../../Redux/actions";
import axios from "axios";

const SideBar = () => {
  const dispatch = useDispatch();
  // const [games] = useSelector((state) => state.allVideoGames);
  // console.log(games);
  const [genres, setGenres] = useState([])
  console.log(genres);

  const genreHandler = (event) => {
    const genre = event.target.value;
    // const check = event.target.checked;
    console.log(genre);
    // if (check) {
    //   setGenres((prevState) => ({
    //     ...prevState,
    //     genres: genres.filter((x) => genre !== x)
    //   }))
    // }
    // if (genre !== "allGames") {
    //   dispatch(resetFilter());
    // } else {
      dispatch(filterByGenres(genre));
    // }
  };
  useEffect(() => {
    async function fnApi() {
      const { data } = await axios.get("http://localhost:3001/genres");
      setGenres(data)

    }
    fnApi()
  }, [genres]);



  return (
    <aside className={style.sideContainer}>
      <h1>Filters</h1>
      <select onChange={(e) => dispatch(orderCardsByRating(e.target.value))}>
        {["Order by Rating", "Ascendant", "Descendant"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      <select onChange={(e) => dispatch(orderCardsByName(e.target.value))}>
        {["Order by Name", "Ascendant", "Descendant"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      <br />
      {/* <select onChange={genreHandler}>
        <option value="allGames">Filter By Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select> */}
      {/* <select className={style.filterGenres} onChange={(e) => dispatch(filterByGenres(e.target.value))}>
        {genres.map((e, i) => (
          <option value={e.genres} key={i}>
            {e.name}
          </option>
        ))}
      </select> */}
      {genres.map((e, i) => (
        <label htmlFor={e.name} key={i} onChange={genreHandler} >
          {e.name}
          <input
            key={i}
            type="checkbox"
            value={e.name}
            name={e.name}
            id={e.name}
          />
          <br />
        </label>
      ))}
    </aside>
  );
};

export default SideBar;
