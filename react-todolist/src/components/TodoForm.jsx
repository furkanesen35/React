import React, { useState } from 'react'
import ListItem from "@mui/material/ListItem"
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Create from "@mui/icons-material/Create"

const TodoForm = ({addTodo}) => {
 const [text, setText] = useState("")
 const handleChange = (e) => {
  setText(e.target.value)
 }
 const handleSubmit = (e) => {
  e.preventDefault()
  addTodo(text)
  setText("")
 }
 return (
  <ListItem>
   <form action="" onSubmit={handleSubmit}>
    <TextField 
      id='outlined-basic' 
      label="New Todo" 
      variant='outlined' 
      onChange={handleChange} 
      value={text}
      InputProps={{
       endAdornment:(
        <InputAdornment position='end'>
         <IconButton aria-label='toggle password visibility' edge="end" type='submit'>
          <Create/>
         </IconButton>
        </InputAdornment>
       )
      }}
    />
   </form>
  </ListItem>
 )
}

export default TodoForm