import './App.css';
import {Navbar} from './components';
import LogoCarousel from './components/Logocarousel/Logocarousel';
import {Figmaui, Spotlight, Whoami} from './containers';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Spotlight/>
      <LogoCarousel/>
      <Whoami/>
      <Figmaui/>
    </div>
  );
}

export default App;
