import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import {
  orderCardsByRating,
  orderCardsByName,
  filterByGenres,
} from "../../Redux/actions";

const SideBar = () => {
  const dispatch = useDispatch();
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
      <select onChange={(e) => dispatch(filterByGenres(e.target.value))}>
        {["Filter by Genres", "Action", "Descendant"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default SideBar;
