import style from './SearchBar.module.css'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    return (
      <nav className={style.navBar}>
        <input type="text" name="search" id="search" />
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