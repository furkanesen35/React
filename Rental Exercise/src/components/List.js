import React from 'react'
import Properties from './Properties'

const List = ({ properties }) => {
 return (
  <div className='container'>
   {properties.map((i) => {
    return <Properties {...i} key={i.id}/>;
   })}
  </div>
 )
}

export default List