import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    
    <div className='w-full pb-40 md:pb-80'>
        <div className='max-w-[800px] w-full mt-62 mx-auto flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold '>GROWING WITH DATA ANALYTICS</h1>
            <p className='text-white font-bold text-4xl sm:text-6xl md:text-7xl'>Grow with data.</p>
            <div>
                <p className='text-white font-bold text-xl sm:text-4xl md:text-5xl'>Fast, flexible financing for <ReactTyped className='text-[#00df9a]' strings={["BTB","BTC","SASS"]} typeSpeed={200} loop={true}/></p> 
            </div>
            <p className='text-gray-500 md:mt-3 text-xl md:text-3xl '>Monitor your data analytics to increasee renevue for BTB, BTC & SASS platforms.</p>
            
        </div>
        <button className='px-10 py-2 rounded-md mt-5 font-bold text-gray-800 bg-[#00df9a] cursor-pointer hover:bg-black hover:border border-white hover:text-white duration-200'>Get Started</button>
    </div>
    
  )
}

export default Hero