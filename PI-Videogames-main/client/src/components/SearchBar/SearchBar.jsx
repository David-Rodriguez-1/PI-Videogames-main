import style from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <nav className={style.navBar}>
        <input type="text" name="search" id="search" />
        </nav>
    )
}

export default SearchBar