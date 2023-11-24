import React, { useState } from 'react'

const EachOne = (props) => {
 const [score, setScore] = useState(0)
 return (
  <div>
   Player {props.q}: {score}
   <button onClick={()=>setScore(score+1)}>+1</button>
   {score === props.winCond && ( <span>Winner</span>)}
  </div>
 )
}

export default EachOne