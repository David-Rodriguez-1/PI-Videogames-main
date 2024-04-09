import { Suspense, lazy } from 'react'
import style from './CardsContainer.module.css'
// import Card from "../Card/Card";
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lazy } from '../LazyLoad/LazyLoad'
import Pagination from '../Pagination/Pagination'
const Card = lazy(() => import('../Card/Card'))

const CardsContainer = () => {
  const games = useSelector((state) => state.filteredGames)

  const gamesAtPage = 15
  const pagesNumber = Math.ceil(games.length / gamesAtPage)
  const pagesArray = Array.from(
    { length: pagesNumber },
    (_, index) => index + 1
  )

  const [page, setPage] = useState(1)

  return (
    <>
      <article className={style.cardContainer}>
        {games
          .slice(gamesAtPage * (page - 1), gamesAtPage * page)
          .map((game) => (
            <Link
              className={style.link}
              to={`/detail/${game.id}`}
              key={game.id}>
              <Suspense fallback={<Lazy />}>
                <Card game={game} />
              </Suspense>
            </Link>
          ))}
      </article>
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          pagesArray={pagesArray}
          pagesNumber={pagesNumber}
        />
      </div>
    </>
  )
}

export default CardsContainer
