import React, { useState } from 'react'
import "./RandomColor.css"

const RandomColor = ({ colors }) => {
 const [color, setColor] = useState("purple")
 const handleClick = () => {
  let rndm = Math.floor(Math.random() * 16)
  setColor(colors[rndm])
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