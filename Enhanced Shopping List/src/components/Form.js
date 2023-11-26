import React, { useState } from 'react'

const Form = () => {
 const [input, setInput] = useState({product: "", quantity: ""})
 const handleInput = (e) => {
  const changeField = e.target.name
  const newValue = e.target.value
  setInput((currData) => {
   return {
    ...currData,
    [changeField]: newValue
   }
  })
 }
 console.log(input);
 return (
  <div>
   <form action="">
    <label htmlFor="product">Product Name: </label>
    <input type="text" name="product" id="product" value={input.product} onChange={(e)=>handleInput(e)} /><br />
    <label htmlFor="quantity">Quantity: </label>
    <input type="number" name="quantity" id="quantity" value={input.quantity}  onChange={handleInput} />
   </form>
  </div>
 )
}

export default Form