import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faCheckSquare, faCloud, faCloudSun, faCoffee, faSun } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card/Card';

library.add(faB, faCheckSquare, faCoffee, faCloud, faCloudSun);

function App() {
  return (
    <div>
      <NavBar />
      <Card />
    </div>
  );
};

export default App;
