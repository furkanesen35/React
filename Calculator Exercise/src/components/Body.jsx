import React from 'react'
import Screen from './Screen'
import ButtonSection from './ButtonSection'

const Body = () => {
 return (
  <div className="flex w-[600px] h-[600px] flex-col items-center">
   <Screen/>
   <ButtonSection/>
  </div>
 )
}

export default Body