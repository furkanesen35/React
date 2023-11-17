import React from 'react'

const PokeCard = () => {
 const num = Math.floor(Math.random() * 151) + 1
 const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
 return (
  <div>
   <h1>Pokemon #{num}</h1>
   <img src={url} alt="" />
  </div>
 )
}

export default PokeCard