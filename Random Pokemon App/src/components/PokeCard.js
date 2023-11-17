import React from 'react'
import "./PokeCard.css"

const PokeCard = () => {
 const num = Math.floor(Math.random() * 151) + 1
 const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
 return (
  <div className='randomPokemon'>
   <h1>Pokemon #{num}</h1>
   <img src={url} alt="" />
  </div>
 )
}

export default PokeCard