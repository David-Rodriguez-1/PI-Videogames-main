import style from './Landing.module.css'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
      <main className={style.main}>
        <Link to={'/home'}>
          <button className={style.btnInsert}>
            <span>Insert coin</span>
          </button>
        </Link>
      </main>
    );
}

export default Landing