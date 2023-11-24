import React, { useState } from 'react'

const Player = (props) => {
 const [scores, setScores] = useState(new Array(props.numOfPlayers).fill(0))
 const incrementScore = (idx) => {
  setScores(prevScores => {
   const copy = [...prevScores]
   copy[idx] += 1
   return copy
  })
 }
 const reset = () => {
  setScores(new Array(props.numOfPlayers).fill(0))
 }
 return (
  <div>
   {scores.map((score,idx) => {
    return <p key={idx}>Player {idx+1}: {score} <span>  </span>
     {(props.winCond === score && <span> Winner</span>)}
     <button onClick={()=>incrementScore(idx)}>+1</button></p>
   })}
   <button onClick={reset}>Reset</button>
  </div>
 )
}

export default Player