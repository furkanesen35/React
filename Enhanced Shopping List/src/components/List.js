import React, { useState } from 'react'
import Form from './Form'
import { v4 as uuid } from "uuid"

const List = () => {
 const [items, setItems] = useState([
  {id:uuid(), product:"bananas", quantity:8},
  {id:uuid(), product:"eggs", quantity:12},
 ])
 const addItems = (item) => {
  setItems((items) => {
   return [...items, {...item, id:uuid()}]
  })
 }
 return (
  <div>
   <h3>Shopping List</h3>
   {items.map(i => 
     <li key={i.id}>{i.product} - {i.quantity}</li>
  )}
  <Form addItems={addItems}/>
  </div>
 )
}

export default List