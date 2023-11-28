import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './components/TodoList'

function App() {
 return (
  <>
   <CssBaseline/>
   <h1>Todos</h1>
   <TodoList/>
  </>
 )
}

export default App