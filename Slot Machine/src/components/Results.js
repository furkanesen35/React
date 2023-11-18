import React from 'react'

const Results = ({rand1,rand2,rand3}) => {
 const isWinner = rand1 === rand2 && rand2 === rand3
 return (
  <div>
   <h1>{rand1} {rand2} {rand3}</h1>
   {isWinner ? "You win!" : "You lose :("}
  </div>
 )
}

export default Results