import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Cards = () => {
  return (
    <>
    <div className='bg-white pt-10 pb-25'>
         <div className='md:flex-row flex flex-col justify-center gap-7 mt-22 mb-12 mx-6'>
            <div className='p-7 w-full h-130 mt-12 rounded-2xl shadow-[0_10px_10px_#b6b6b6] cursor-pointer hover:scale-105 duration-300'>
                <img className='object-cover w-[120px] block mx-auto' src={single} alt="" />
                <h1 className='font-bold text-2xl mt-2 text-nowrap'>Single User</h1>
                <p className='text-3xl font-bold my-12'>149$</p>
                <div className='flex flex-col'>
                <p className='border-t border-t-gray-300'>500GB Storage</p>
                <p className='border-t border-t-gray-300'>1 User Allowed</p>
                <p className='border-t border-b border-b-gray-300 border-t-gray-300'>Send up to 2GB</p>
                </div>
                
                <button className='px-10 py-2 rounded-md mt-5 font-bold text-gray-800 bg-[#00df9a] cursor-pointer text-nowrap hover:bg-black hover:text-[#00df9a] duration-600'>Start Trail</button>
            </div>
             <div className='p-7 w-full h-130 mt-12 rounded-2xl shadow-[0_10px_10px_#b6b6b6] cursor-pointer hover:scale-105 duration-300'>
                <img className='object-cover w-[120px] block mx-auto' src={double} alt="" />
                <h1 className='font-bold text-2xl mt-2 text-nowrap'>Partnership</h1>
                <p className='text-3xl font-bold my-12'>199$</p>
                <div className='flex flex-col'>
                <p className='border-t border-t-gray-300'>1TB Storage</p>
                <p className='border-t border-t-gray-300'>3 User Allowed</p>
                <p className='border-t border-b border-b-gray-300 border-t-gray-300'>Send up to 10GB</p>
                </div>
                
                <button className='px-10 py-2 rounded-md mt-5 font-bold text-gray-800 bg-[#00df9a] cursor-pointer text-nowrap hover:bg-black hover:text-[#00df9a] duration-600'>Start Trail</button>
            </div>
             <div className='p-7 w-full h-130 mt-12 rounded-2xl shadow-[0_10px_10px_#b6b6b6] cursor-pointer hover:scale-105 duration-300'>
                <img className='object-cover w-[110px] block mx-auto' src={triple} alt="" />
                <h1 className='font-bold text-2xl mt-2 text-nowrap'>Group Account</h1>
                <p className='text-3xl font-bold my-12'>299$</p>
                <div className='flex flex-col'>
                <p className='border-t border-t-gray-300'>5TB Storage</p>
                <p className='border-t border-t-gray-300'>10 User Allowed</p>
                <p className='border-t border-b border-b-gray-300 border-t-gray-300'>Send up to 20GB</p>
                </div>
                
                <button className='px-10 py-2 rounded-md mt-5 font-bold text-gray-800 bg-[#00df9a] cursor-pointer text-nowrap hover:bg-black hover:text-[#00df9a] duration-600'>Start Trail</button>
            </div>
         </div>
    </div>
   
    </>
  )
}

export default Cards