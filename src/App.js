import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import {Banner} from "./components/Banner/Banner";
import {Cards} from "./components/Cards/Cards"
import {Why} from "./components/Why/Why"
import { Conhecimento } from './components/Conhecimento/Conhecimento';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Why/>
      </div>
      <div>
        <Conhecimento/>
      </div>
    </div>  
  );
}

export default App;