import React from 'react'

const UpperScreen = ({upperScreen}) => {
 return (
  <div className='flex w-full h-[75px] justify-end items-end p-[2px] text-[30px] text-gray-400'>
   <span>{upperScreen}</span>
  </div>
 )
}

export default UpperScreen