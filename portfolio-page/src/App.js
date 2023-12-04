import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
 return (
  <div className='flex flex-col items-center w-[100vw] h-[100vh] bg-black text-white'>
   <Header/>
   <Navbar/>
  </div>
 );
}

export default App;