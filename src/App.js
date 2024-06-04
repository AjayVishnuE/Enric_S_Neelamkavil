import './App.css';
import {Navbar} from './components';
import LogoCarousel from './components/Logocarousel/Logocarousel';
import {Spotlight, Whoami} from './containers';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Spotlight/>
      <LogoCarousel/>
      <Whoami/>
    </div>
  );
}

export default App;
