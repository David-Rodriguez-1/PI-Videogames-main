import style from './SearchBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGameByName } from '../../Redux/actions'

const SearchBar = () => {
  const games = useSelector((state) => state.filteredGames)

  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleInput = (event) => {
    const value = event.target.value
    setInput(value)
    dispatch(getVideoGameByName(value))
  }

  return (
    <>
      <div className={style.textContainer}>
        <h1 className={style.h1}>VIDEOGAMES</h1>
      </div>
      <nav className={style.navBar}>
        <input
          type="text"
          className={style.input}
          name={input}
          onChange={handleInput}
          placeholder={`Search ${games.length} games`}
        />
        <div className={style.createDiv}>
          <Link to={'/createVideoGame'}>
            <button className={style.btnCreate}>Create game</button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default SearchBar
