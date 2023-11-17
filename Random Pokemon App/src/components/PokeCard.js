import React from 'react'

const PokeCard = () => {
 const num = Math.floor(Math.random() * 151) + 1
 return (
  <div>
   <h1>Pokemon #{num}</h1>
  </div>
 )
}

export default PokeCard