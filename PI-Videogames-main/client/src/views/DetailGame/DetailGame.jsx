import style from './DetailGame.module.css'

const DetailGame = ({ game }) => {
    console.log(game);
    return (
      <div className={style.detailContainer}>
        <h1>Esta es la vista de Detail</h1>
      </div>
    );
}
export default DetailGame;