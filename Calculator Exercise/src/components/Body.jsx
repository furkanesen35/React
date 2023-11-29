import React from 'react'
import Screen from './Screen'
import ButtonSection from './ButtonSection'

const Body = () => {
 return (
  <div className="flex w-[450px] h-[600px] flex-col items-center bg-cyan-900 rounded-[30px] pt-[15px]">
   <Screen/>
   <ButtonSection/>
  </div>
 )
}

export default Body