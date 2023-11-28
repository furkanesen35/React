import React,{useState} from 'react'
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
 {id: 1, text:"walk the dog", completed: false},
 {id: 2, text:"walk the cat", completed: false},
 {id: 3, text:"do the dishes", completed: true},
]

export default function TodoList () {
 const [todos, setTodos] = useState(initialTodos)
 const removeTodo = (id) => {
  setTodos(prevTodos => {
   return prevTodos.filter(t => t.id !== id)
  })
 }
 const toggleTodo = (id) => {
  setTodos((prevTodos) => {
   return prevTodos.map((todo) => {
    if (todo.id === id) {
     return {...todo, completed: !todo.completed}
    } else {
     return todo
    }
   })
  })
 }
 const addTodo = (text) => {
  setTodos(prevTodos => {
   return [...prevTodos, {text:text, id: 8, completed:false}]
  })
 }
 return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   {todos.map((todo) => {
    return (
     <TodoItem 
       todo={todo} 
       key={todo} 
       removeTodo={() => removeTodo(todo.id)}
       toggleTodo={() => toggleTodo(todo.id)}
     />)
   })}
   <TodoForm addTodo={addTodo} />
  </List>
 )
}