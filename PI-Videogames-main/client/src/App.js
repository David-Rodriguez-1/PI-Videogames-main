import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, SearchBar, DetailGame} from "./views";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <SearchBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<DetailGame />} />
      </Routes>
    </div>
  );
}

export default App;
