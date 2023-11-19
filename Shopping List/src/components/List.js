import React from 'react'

const List = ({ items }) => {
 return (
  <div>
   <ul>
    {items.map((i) => {
     return <li 
      style={{
       color: i.completed ? "grey" : "red",
       textDecoration: i.completed ? "line-through" : "none"
      }}>{i.item}</li>
    })}
   </ul>
  </div>
 )
}

export default List