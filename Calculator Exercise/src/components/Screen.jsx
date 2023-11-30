import React from 'react'
import UpperScreen from './UpperScreen'
import LowerScreen from './LowerScreen'

const Screen = ({lowerScreen,upperScreen}) => {
 return (
  <div className='flex flex-col bg-black w-full h-[180px] text-white rounded-[30px] p-[15px]'>
   <UpperScreen upperScreen={upperScreen}/>
   <LowerScreen lowerScreen={lowerScreen}/>
  </div>
 )
}

export default Screen