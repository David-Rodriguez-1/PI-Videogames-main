import style from './SearchBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoGameByName } from '../../Redux/actions';

const SearchBar = () => {

  const games = useSelector((state) => state.allVideoGames);

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  }
  const searchHandler = (event) => {
    event.preventDefault();
    dispatch(getVideoGameByName(input));
  };

  return (
    <>
      <div className={style.textContainer}>
        <h1 className={style.h1}>VIDEOGAMES by SOY HENRY</h1>
      </div>
      <nav className={style.navBar}>
        <input
          type="text"
          className={style.input}
          name={input}
          onChange={(event) => setInput(event.target.value)}
          onSubmit={handleInput}
          placeholder={`Search ${games.length} games`}
        />
        <button className={style.btnSearch} onClick={searchHandler}>
          Search
        </button>
        <div className={style.createDiv}>
          <Link to={"/createVideoGame"}>
            <button className={style.btnCreate}>Create game</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default SearchBar