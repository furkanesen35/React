import React, { useState } from 'react'

const Form = ({addItems}) => {
 const [formData, setFormData] = useState({ product:"", quantity:"" })
 const handleChange = (e) => {
  const changedField = e.target.name
  const newValue = e.target.value
  setFormData(currData => {
   currData[changedField] = newValue
   return {...currData}
  })
 }
 const handleSubmit = (e) => {
  e.preventDefault()
  addItems(formData)
  setFormData({ product:"", quantity:"" })
 }
 return (
  <div>
   <form action="" onSubmit={handleSubmit}>
    <label htmlFor="product">Product: </label>
    <input
      type="text"
      name='product'
      id='product'
      value={formData.product}
      onChange={handleChange}
      required
    />
    <label htmlFor="quantity">Quantity: </label>
    <input
      type="number"
      name='quantity'
      id='quantity'
      value={formData.quantity}
      onChange={handleChange}
      required
    />
    <button>Submit</button>
   </form>
  </div>
 )
}

export default Form