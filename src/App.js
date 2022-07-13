import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faCheckSquare, faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun, faCoffee, faSnowflake, faSun, faThunderstorm, faTornado } from '@fortawesome/free-solid-svg-icons';
import Cards from './components/Cards/Cards';
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About';

library.add(faB, faCheckSquare, faCoffee, faCloud, faCloudSun, faSun, faCloudShowersHeavy, faThunderstorm, faCloudRain, faSnowflake, faTornado);

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Cards />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
