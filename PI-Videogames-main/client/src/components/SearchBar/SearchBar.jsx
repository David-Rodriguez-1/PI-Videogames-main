import style from './SearchBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoGameByName } from '../../Redux/actions';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  }
  const searchHandler = () => {
    dispatch(getVideoGameByName(input));
  };

    return (
      <nav className={style.navBar}>
        <input type="text" className={style.input} name={input} onChange={handleInput} placeholder='Search games' />
        <button className={style.btnSearch} onClick={searchHandler}>Search</button>
        <div className={style.createDiv}>
          <Link to={'/createVideoGame'}>
            <button className={style.btnCreate}>Create game</button>
          </Link>
        </div>
      </nav>
    );
}

export default SearchBar