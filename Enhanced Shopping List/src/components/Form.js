import React, { useState } from 'react'

const Form = () => {
 const [formData, setFormData] = useState({ product:"", quantity:"" })
 const handleChange = (e) => {
  const changedField = e.target.name
  const newValue = e.target.value
  setFormData(currData => {
   currData[changedField] = newValue
   return {...currData}
  })
 }
 console.log(formData);
 return (
  <div>
   <form action="">
    <label htmlFor="product">Product: </label>
    <input
      type="text"
      name='product'
      id='product'
      value={formData.product}
      onChange={handleChange}
    />
    <label htmlFor="quantity">Quantity: </label>
    <input
      type="number"
      name='quantity'
      id='quantity'
      value={formData.quantity}
      onChange={handleChange}
    />
    <button>Submit</button>
   </form>
  </div>
 )
}

export default Form