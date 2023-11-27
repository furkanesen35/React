import React, { useState } from 'react'
import Form from './Form'

const List = () => {
 const [items, setItems] = useState([
  {id:1, product:"bananas", quantity:8},
  {id:2, product:"eggs", quantity:12},
 ])
 const addItems = (item) => {
  setItems((items) => {
   return [...items, {...item, id:9}]
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