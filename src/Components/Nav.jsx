import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Nav = () => {
  const [isOpen,setIsOpen] = useState(false)

  const handleOpen=() =>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
    <div className='flex justify-between h-12 items-center text-white max-w-[1280px] m-auto'>
      <h1 className='text-3xl font-bold text-[#00df9a] '>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='mx-3 cursor-pointer hover:text-[#00df9a] duration-400'>Home</li>
        <li className='mx-3 cursor-pointer hover:text-[#00df9a] duration-400'>Company</li>
        <li className='mx-3 cursor-pointer hover:text-[#00df9a] duration-400'>Resources</li>
        <li className='mx-3 cursor-pointer hover:text-[#00df9a] duration-400'>About</li>
        <li className='mx-3 cursor-pointer hover:text-[#00df9a] duration-400'>Contact</li>
      </ul>
      <div onClick={handleOpen} className='fixed right-3 md:hidden'>
        {!isOpen ? <RxHamburgerMenu/> : <IoMdClose />}
        
      </div>
      
      
      <div className={isOpen ? 'fixed left-0 top-0  text-white text-start h-[100%] z-30 w-[60%] border-r border-r-gray-800 bg-[#000300] ease-in-out duration-400' : 'fixed left-[-100%] ease-out duration-700'}>
        <h1 className='text-3xl font-bold text-[#00df9a] mt-9.5 ml-3'>REACT.</h1>
        <ul className=' uppercase'>
        <li className='p-4 border-b border-b-gray-800 mr-3'>Home</li>
        <li className='p-4 border-b border-b-gray-800 mr-3'>Company</li>
        <li className='p-4 border-b border-b-gray-800 mr-3'>Resources</li>
        <li className='p-4 border-b border-b-gray-800 mr-3'>About</li>
        <li className='p-4 '>Contact</li>
      </ul>
    </div>
    </div>
    
    </>
  )
}

export default Nav