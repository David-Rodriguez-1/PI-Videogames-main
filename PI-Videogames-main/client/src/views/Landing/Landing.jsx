import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className={style.main}>
      <div className={style.textContainer}>
      <h1 className={style.h1}>VIDEOGAMES by SOY HENRY</h1>
      </div>
        <Link to={"/home"}>
          <button className={style.btnInsert}>Insert coin!</button>
        </Link>
    </main>
  );
};

export default Landing;
