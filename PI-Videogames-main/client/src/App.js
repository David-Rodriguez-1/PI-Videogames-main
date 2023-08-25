import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing, Home, CreateGame, DetailGame } from './views';
// import { Route } from 'react-router-dom';

const URL = "http://localhost:3001/videogames";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
