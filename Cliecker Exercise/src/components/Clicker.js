import React from 'react'

const Clicker = (props) => {
 const handleClick = () => {
  alert(props.message)
 }
 return (
  <div>
   <div>
    <button onClick={handleClick}>{props.buttonText}</button>
   </div>
  </div>
 )
}

export default Clicker