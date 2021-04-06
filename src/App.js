import './App.css';
import { Header } from './components/Header'
import { Banniere } from './components/Banniere'
import { Portfolio } from "./components/Portfolio";
import Slider from "./components/Slider";
import { SlidingText } from "./components/SlidingText";

function App() {
  return (
    <>
      <Header />
      <Banniere />
      <Portfolio />
      <Slider />
      <SlidingText />
    </>
  );
}

export default App;
