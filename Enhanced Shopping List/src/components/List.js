import React, { useState } from 'react'
import Form from "./Form"

const List = () => {
 const [items, setItems] = useState([
  { id:3, product:"bananas", quantity:8 },
  { id:4, product:"Eggs", quantity:12 },
 ])
 const addItem = (item) => {
  setItems((items) => {
   return [...items, {...item, id: 9}]
  })
 }
 return (
  <div>
   {items.map(i => 
    <li key={i.id}>{i.product} - {i.quantity}</li>
   )}
   <Form addItem={addItem}/>
  </div>
 )
}

export default List