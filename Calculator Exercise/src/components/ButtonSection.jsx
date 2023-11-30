import React from 'react'
import Button from './Button'

const ButtonSection = ({handleButtons}) => {
 const buttons = [
  "7","8","9","+",
  "4","5","6","-",
  "1","2","3","*",
  "","0","C","/",
 ]
 return (
  <div className='grid grid-cols-4 w-full h-[420px] p-[10px] text-[40px] bg-cyan-900 rounded-[20px]'>
   {buttons.map((button,index) => {
    return <Button key={index} button={button} handleButtons={handleButtons}/>
   })}
  </div>
 )
}

export default ButtonSection