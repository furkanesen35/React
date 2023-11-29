import React, { useState } from 'react'
import Screen from './Screen'
import ButtonSection from './ButtonSection'

const Body = () => {
 const [upperScreen, setUpperScreen] = useState("")
 const [lowerScreen, setLowerScreen] = useState(0)
 const handleButtons = (digit) => {
  if (digit === "C"){
   setLowerScreen(0)
  } if (digit === "*") {
   setUpperScreen(lowerScreen)
   setLowerScreen(0)
  }
  setLowerScreen(prevDigits => {
   const newNum = parseInt(prevDigits + digit,10)
   return newNum
  })
  console.log(lowerScreen);
 }
 return (
  <div className="flex w-[450px] h-[675px] flex-col items-center bg-black rounded-[30px] p-[15px]">
   <Screen lowerScreen={lowerScreen}/>
   <ButtonSection handleButtons={handleButtons} />
  </div>
 )
}

export default Body