import React from 'react'
import Results from './Results'

const Slots = () => {
 const arr = ["😀","☹️","🤓"]
 const rand1 = arr[Math.floor(Math.random() * 3)]
 const rand2 = arr[Math.floor(Math.random() * 3)]
 const rand3 = arr[Math.floor(Math.random() * 3)]
 return (
  <div>
   <h3>Try your Luck!</h3>
   <Results rand1={rand1} rand2={rand2} rand3={rand3}/>
   <br />
   <button>Pull the Lever</button>
  </div>
 )
}

export default Slots