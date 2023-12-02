import React from 'react'

const Navbar = () => {
 return (
  <div className='flex flex-col justify-start items-center w-[900px] h-[70px] font-sans text-[25px] mobile-l:justify-evenly mobile-l:flex-row'>
   <li className='list-none m-[15px]'>Contact</li>
   <li className='list-none m-[15px]'>About</li>
   <li className='flex list-none bg-[#24a0ed] m-[15px] rounded-[15px] min-w-[180px] justify-center'>Download Cv</li>
  </div>
 )
}

export default Navbar