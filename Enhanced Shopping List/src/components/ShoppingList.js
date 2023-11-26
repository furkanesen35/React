import React, { useState } from 'react'

const ShoppingList = () => {
 const [first, setfirst] = useState([
  { id:1, product:"Bananas", quantity:8 },
  { id:2, product:"Eggs", quantity:12 },
  { id:3, product:"pomagranate", quantity:2 },
 ])
 return (
  <div>
   <h1>Shopping List</h1>
  </div>
 )
}

export default ShoppingList