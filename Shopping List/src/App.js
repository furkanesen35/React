import './App.css';
import Header from './components/Header';
import List from './components/List';


function App() {
 const data = [ 
  {id:1, item: "eggs", completed: false, quantity: 12},
  {id:2, item: "milk", completed: true, quantity: 1},
  {id:3, item: "chicken breast", completed: false, quantity: 4},
  {id:4, item: "carrots", completed: true, quantity: 6},
 ]
 return (
  <div className="App">
   <Header/>
   <List items={data}/>
  </div>
 );
}

export default App;