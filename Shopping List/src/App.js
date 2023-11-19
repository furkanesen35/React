import './App.css';
import Header from './components/Header';
import List from './components/List';


function App() {
 const data = [ 
  {item: "eggs", completed: false, quantity: 12},
  {item: "milk", completed: true, quantity: 1},
  {item: "chicken breast", completed: false, quantity: 4},
  {item: "carrots", completed: true, quantity: 6},
 ]
 return (
  <div className="App">
   <Header/>
   <List items={data} />
  </div>
 );
}

export default App;