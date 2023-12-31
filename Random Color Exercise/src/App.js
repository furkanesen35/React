import './App.css';
import ColorGrid from './components/ColorGrid';
import Header from './components/Header';

function App() {
 const colors=["#E53935","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722"]
 return (
  <div className="App">
   <Header/>
   <ColorGrid colors={colors}/>
  </div>
 );
}

export default App;
