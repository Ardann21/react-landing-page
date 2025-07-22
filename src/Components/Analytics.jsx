import React from 'react'
import analytic from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className=' bg-white py-16  mt-12'>
        <div className='grid md:grid-cols-2 '>
            <img className='z-3 object-cover w-[500px] mx-auto' src={analytic} alt="analytic" />
        
        <div className='text-left flex flex-col justify-center mx-2 md:mx-0'>
            <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
            <h1 className='font-bold text-2xl'>Manage Data Analytics Centerally</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.a
             Voluptatibus accusantium laudantium quisquam vel dicta optio
             non quia deleniti quasi voluptas quo inventore exercitationem
             blanditiis quos, eveniet vero expedita, pariatur iste?</p>
             <button className='bg-black text-[#00df9a] hover:bg-[#00df9a] hover:text-black duration-600 px-5 w-[200px] py-3 mx-auto mt-4 md:mx-0 rounded-md font-bold cursor-pointer'>Get Started </button>
        </div>
        </div>
    </div>
  )
}

export default Analytics