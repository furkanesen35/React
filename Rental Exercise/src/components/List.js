import React from 'react'

const List = ({ properties }) => {
 return (
  <div className='container'>
   {properties.map((i) => {
    return (<div>
      <h3>{i.name}</h3>
      <h4>{i.rating}</h4>
      <h4>{i.price}🌟</h4>
     </div>)
   })}
  </div>
 )
}

export default List