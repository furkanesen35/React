import React from 'react'

const RandomColor = ({colors}) => {
 return (
  <div>
   {colors.map((color) => {
    return <p>{color}</p>
   })}
  </div>
 )
}

export default RandomColor