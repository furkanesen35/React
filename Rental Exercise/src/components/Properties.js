import React from 'react'

const Properties = ({name, price, rating, id}) => {
 return (
  <div>
   <h3>{name}</h3>
   <h4>{rating}🌟</h4>
   <h4>{price}</h4>
  </div>
 )
}

export default Properties