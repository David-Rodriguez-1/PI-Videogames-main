import style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  orderCardsByRating,
  orderCardsByName,
  filterByGenres,
  getGenres,
  filterByOrigin,
  resetFilter,
} from "../../Redux/actions";

const SideBar = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handlesGenres = (event) => {
    const value = event.target.value;
    if (value === "resetFilter") {
      dispatch(resetFilter())
    } else {
      dispatch(filterByGenres(value));
    }
  };

  const handlerRating = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === "resetFilter") {
      dispatch(resetFilter());
    } else {
      dispatch(orderCardsByRating(value));
    }
  };
  const handlerName = (event) => {
    const value = event.target.value;
    if (value === "resetFilter") {
      dispatch(resetFilter())
    } else {
      dispatch(orderCardsByName(value));
    }
  };

  const handlerOrigin = (event) => {
    const value = event.target.value;
    if (value === "resetFilter") {
      dispatch(resetFilter())
    } else {
      dispatch(filterByOrigin(value));
    }
  };

  return (
    <aside className={style.sideContainer}>
      <h1>Filters</h1>
      <select onChange={handlerRating}>
        <option value="resetFilter">Order by Rating</option>
        <option value="Ascendant">Ascendant</option>
        <option value="Descendant">Descendant</option>
      </select>
      <br />
      <select onChange={handlerName}>
        <option value="resetFilter">Order by Name</option>
        <option value="Descendant">A-Z</option>
        <option value="Ascendant">Z-A</option>
      </select>
      <br />
      <select onChange={handlesGenres}>
        <option value="resetFilter">Filter By Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <br />
      <select onChange={handlerOrigin}>
        <option value="resetFilter">Filter By Origin</option>
        <option value="database">Database</option>
        <option value="api">Api</option>
      </select>
    </aside>
  );
};

export default SideBar;
