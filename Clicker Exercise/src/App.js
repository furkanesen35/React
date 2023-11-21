import './App.css';
import Clicker from './components/Clicker';

function App() {
 return (
  <div className="App">
   <Clicker message={"Please Stop Clicking Me!"} buttonText={"do not click"}/>
   <Clicker message={"Hi!"} buttonText={"Click Me"}/>
  </div>
 );
}

export default App;