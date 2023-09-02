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
        <input type="text" name={input} onChange={handleInput} placeholder='Search by name' />
        <button onClick={searchHandler}>Search</button>
        <div>
          <Link to={'/createVideoGame'}>
            <button>
              <span>Create Video Game</span>
            </button>
          </Link>
        </div>
      </nav>
    );
}

export default SearchBar