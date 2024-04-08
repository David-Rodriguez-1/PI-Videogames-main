import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Home, DetailGame, CreateGame } from "./views";



function App() {

  return (
    <div className="App">
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
