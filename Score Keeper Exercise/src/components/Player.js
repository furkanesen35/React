import React from 'react'
import EachOne from './EachOne'

const Player = (props) => {
 const arr = new Array(props.numOfPlayers).fill(0)
 return (
  <div className='container'>
   {arr.map((i,index) => {
    return <EachOne key={index} winCond={props.winCond} q={index+1} />
   })}
  </div>
 )
}

export default Player