import './App.css';
import {Footer, Navbar, LogoCarousel} from './components';
import {ConnectSection, Figmaui, MeInSheet, Spotlight, Whoami} from './containers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Spotlight/>
      <LogoCarousel/>
      <Whoami/>
      <Figmaui/>
      <MeInSheet/>
      <ConnectSection/>
      <Footer/>
    </div>
  );
}

export default App;
