import './App.css';
import {Footer, Navbar, LogoCarousel} from './components';
import CopyrightsLine from './components/CopyrightsLine/CopyrightsLine';
import {ConnectSection, Figmaui, ResumeSection, Spotlight, Whoami} from './containers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Spotlight/>
      <LogoCarousel/>
      <Whoami/>
      <Figmaui/>
      <ResumeSection/>
      <ConnectSection/>
      <Footer/>
      <CopyrightsLine/>
    </div>
  );
}

export default App;
