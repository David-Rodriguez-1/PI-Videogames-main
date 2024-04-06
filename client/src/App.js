import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Home, DetailGame, CreateGame } from "./views";



function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname !== "/" && <SearchBar />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/detail/:idVideogame" element={<DetailGame />} />
        <Route path="/createVideoGame" element={<CreateGame/>} />
      </Routes>
    </div>
  );
}

export default App;
