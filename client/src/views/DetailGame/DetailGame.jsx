import style from './DetailGame.module.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getDetailVideoGame } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const DetailGame = () => {
  const dispatch = useDispatch()

  const { idVideogame } = useParams()

  const detailVideoGame = useSelector((state) => state.gameDetails)

  useEffect(() => {
    dispatch(getDetailVideoGame(idVideogame))
    return () => {
      dispatch(getDetailVideoGame())
    }
  }, [dispatch, idVideogame])

  return (
    <div className={style.detailContainer}>
      <img
        className={style.background_img}
        src={detailVideoGame.background_image_additional}
        alt=""
      />
      <Link to={'/home'}>
        <button className={style.btn_Back}>Back to Home</button>
      </Link>
      <h1 className={style.name}>{detailVideoGame.name}</h1>
      <img
        className={style.img}
        src={detailVideoGame.background_image}
        alt={detailVideoGame.name}
      />
      <p className={style.rating}>Rating : {detailVideoGame.rating}</p>
      <div className={style.info}>
        <p className={style.description_h3}>
          Description:
          <p
            className={style.description}
            dangerouslySetInnerHTML={{
              __html: detailVideoGame.description
            }}></p>
        </p>
        <div className={style.platforms_container}>
          <ul className={style.ul}>
            Genres:
            {detailVideoGame.genres?.map((genre) => {
              return <li key={detailVideoGame.id}>{genre}</li>
            })}
          </ul>
          <ul key={detailVideoGame.id} className={style.ul}>
            Platforms:
            {detailVideoGame.platforms?.map((p) => {
              return <li key={detailVideoGame.id}>{p}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default DetailGame
