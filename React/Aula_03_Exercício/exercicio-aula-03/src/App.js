import './App.css';
import BoasVindas from './Components/BoasVindas';
import Sobre from './Components/Sobre';
document.body.style.background = '#0d192b';

function App() {
  return (
    <div className="App">
      <BoasVindas nome='Durval' />
      <Sobre />
    </div>
  );
}

export default App;
