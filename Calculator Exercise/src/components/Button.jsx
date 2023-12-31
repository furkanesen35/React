import React from 'react'

const Button = ({button,handleButtons}) => {
 return (
  <div className='flex w-[95px] h-[95px] bg-white m-[2px] rounded-[55%] justify-center items-center cursor-pointer hover:bg-sky-700' 
    onClick={(e)=>handleButtons(e.target.innerHTML)}
  >
   {button}
  </div>
 )
}

export default Button