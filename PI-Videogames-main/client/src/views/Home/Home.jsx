import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getVideoGames} from '../../Redux/actions'

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideoGames())
    },[dispatch])
    return (
        <div>
            <CardsContainer/>
        </div>
    )
}
export default Home;