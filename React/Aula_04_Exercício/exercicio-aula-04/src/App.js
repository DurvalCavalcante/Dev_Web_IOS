import './App.css';
import { Component } from 'react';
import Notas from './Components/Notas';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Notas />
      </div>
    );
  }
}

export default App;