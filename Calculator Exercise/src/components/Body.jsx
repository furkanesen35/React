import React, { useState } from 'react'
import Screen from './Screen'
import ButtonSection from './ButtonSection'

const Body = () => {
 const [upperScreen, setUpperScreen] = useState(0)
 const [lowerScreen, setLowerScreen] = useState(0)
 const handleButtons = (digit) => {
  if (digit === "C"){
   setLowerScreen(0)
   setUpperScreen(0)
  } else if (digit === "+") {
   setUpperScreen(prev => {
    return prev + lowerScreen
   })
   setLowerScreen(0)
  } else if (digit === "-") {
     if (upperScreen === 0) {
      setUpperScreen(prev => {
       return lowerScreen - prev
      })
     } else {
      setUpperScreen(prev => {
       return prev - lowerScreen
      })
     }
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
   <Screen lowerScreen={lowerScreen} upperScreen={upperScreen}/>
   <ButtonSection handleButtons={handleButtons} />
  </div>
 )
}

export default Body