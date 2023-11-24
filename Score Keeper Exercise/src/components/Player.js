import React, { useState } from 'react'

const Player = () => {
 const [score, setScore] = useState(0)
 const handleClick = () => {
  setScore(score+1)
 }
 return (
  <div className='container'>
   <span>Player 1: {score}</span>
   <button onClick={handleClick}>+1</button>
  </div>
 )
}

export default Player