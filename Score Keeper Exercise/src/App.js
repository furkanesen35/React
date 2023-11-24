import './App.css';
import Header from './components/Header';
import Player from './components/Player';

function App() {
 return (
  <div className="App">
   <Header/>
   <Player numOfPlayers={4} winCond={10}/>
  </div>
 );
}

export default App;