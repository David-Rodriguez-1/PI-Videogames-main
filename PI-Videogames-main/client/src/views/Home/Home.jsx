import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import style from './Home.module.css'
import { useDispatch } from "react-redux";
import {getVideoGames} from '../../Redux/actions'
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideoGames())
    },[dispatch])
    return (
        <div className={style.flex}>
            <aside className={style.aside}>
            <SideBar />
            </aside>
            <main className={style.cardsMain}>
            <CardsContainer/>
            </main>
        </div>
    )
}
export default Home;