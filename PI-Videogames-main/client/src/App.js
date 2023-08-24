import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import axios from 'axios'
// import { Route } from 'react-router-dom';

const URL = "http://localhost:3001/videogames";

function App() {

  const searchVG = () => {
    axios.get(`${URL}`).then(({ data }) => {
      return data
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home searchVG={ searchVG } />} />
      </Routes>
    </div>
  );
}

export default App;
