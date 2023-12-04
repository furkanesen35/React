import React from 'react'

const Navbar = () => {
 return (
  <div className='flex flex-col justify-start items-center w-[900px] h-[70px] font-sans text-[25px] mobile-l:justify-evenly mobile-l:flex-row'>
   <span className='mobile-l:hidden'>Furkan Esen's Website</span>
   <li className='list-none m-[15px] cursor-pointer'>Contact</li>
   <li className='list-none m-[15px] cursor-pointer'>About</li>
   <li className='list-none m-[15px] bg-[#24a0ed] rounded-[15px] min-w-[180px] flex justify-center cursor-pointer'>Download Cv</li>
  </div>
 )
}

export default Navbar