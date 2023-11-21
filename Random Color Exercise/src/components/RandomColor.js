import React, { useState } from 'react'
import "./RandomColor.css"

const randomChoice = (arr) => {
 const idx = Math.floor(Math.random() * arr.length)
 return arr[idx]
}

const RandomColor = ({ colors }) => {
 const [color, setColor] = useState(randomChoice(colors))
 const handleClick = () => {
  setColor(randomChoice(colors))
 }
 return (
  <div
    className='ColorBox' 
    onClick={handleClick} 
    style={{ backgroundColor: color }}
  ></div>
 )
}

export default RandomColor