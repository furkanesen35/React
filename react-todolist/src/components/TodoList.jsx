import React,{useEffect, useState} from 'react'
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialTodos = () => {
  const data = JSON.parse(localStorage.getItem("todos"))
  if (!data) return []
  return data
}

export default function TodoList () {
 const [todos, setTodos] = useState(getInitialTodos)
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
   return [...prevTodos, {text:text, id: crypto.randomUUID(), completed:false}]
  })
 }
 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])
 return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   {todos.map((todo) => {
    return (
     <TodoItem 
       todo={todo} 
       key={todo.id} 
       removeTodo={() => removeTodo(todo.id)}
       toggleTodo={() => toggleTodo(todo.id)}
     />)
   })}
   <TodoForm addTodo={addTodo} />
  </List>
 )
}