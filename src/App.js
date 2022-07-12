import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faCheckSquare, faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun, faCoffee, faSnowflake, faSun, faThunderstorm, faTornado } from '@fortawesome/free-solid-svg-icons';
import Cards from './components/Cards/Cards';

library.add(faB, faCheckSquare, faCoffee, faCloud, faCloudSun, faSun, faCloudShowersHeavy, faThunderstorm, faCloudRain, faSnowflake, faTornado);

function App() {
  return (
    <div>
      <NavBar />
      <Cards />
    </div>
  );
};

export default App;
