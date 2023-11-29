import React from 'react'
import UpperScreen from './UpperScreen'
import LowerScreen from './LowerScreen'

const Screen = () => {
 return (
  <div className='flex flex-col bg-black w-[400px] h-[180px] text-white rounded-[30px] p-[15px]'>
   <UpperScreen/>
   <LowerScreen/>
  </div>
 )
}

export default Screen