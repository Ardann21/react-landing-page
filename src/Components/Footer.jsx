import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className='grid md:grid-cols-4 ml-3 gap-22 md:gap-0 text-start mt-22 md:ml-22 items-start'>
        <div className='text-start flex flex-col gap-5 '>
            <h1 className='text-3xl font-bold text-[#00df9a] '>REACT.</h1>
            <p className='text-white text-left md:text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
             quos voluptate similique dolor illum nihil provident eos doloribus.
             Quam quidem cum facere vel id rem quia illo numquam iusto ullam.</p>
             <div className='flex gap-2'>
             <FaFacebookSquare className='text-white hover:text-[#00df9a] cursor-pointer duration-400 hover:scale-120' size={30} />
             <FaInstagram className='text-white hover:text-[#00df9a] cursor-pointer duration-400 hover:scale-120' size={30}/>
             <FaSquareTwitter className='text-white hover:text-[#00df9a] cursor-pointer duration-400 hover:scale-120' size={30}/>
             <FaGithubSquare className='text-white hover:text-[#00df9a] cursor-pointer duration-400 hover:scale-120' size={30}/>
             </div>
             

        </div>
        <div className='text-white text-left flex flex-col gap-5 md:ml-8'>
            <h1 className='text-2xl text-[#00df9a]'>Solutions</h1>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Analyticx</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Marketing</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Commerce</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Insights</p>
        </div>
        <div className='text-white text-left flex flex-col gap-5'>
            <h1 className='text-2xl text-[#00df9a]'>Support</h1>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Pricing</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Documentation</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Guides</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>API Status</p>
        </div>
        <div className='text-white text-left flex flex-col gap-5 mb-22'>
            <h1 className='text-2xl text-[#00df9a]'>Company</h1>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>About</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Blog</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Jobs</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Press</p>
            <p className='cursor-pointer hover:text-[#00df9a] duration-400'>Partners</p>
        </div>
    </div>
    <p className='text-[#00df9a]'>@All rights reserved 2025</p>
    </>
  )
}

export default Footer