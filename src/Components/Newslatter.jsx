import React from 'react'

const Newslatter = () => {
  return (
    <>
    <div className='text-white flex flex-col md:flex-row md:justify-evenly py-42 text-start ml-3 md:ml-0 gap-4 '>
        <div className=''>
            <h1 className='md:text-3xl text-3xl md:w-102'>Want tips & tricks to optimize your flow ?</h1>
            <p className='text-m'>Sign up to our newslatter and stay up to date.</p>
        </div>
        <div className=''>
            <div className=''>
                <div className=''>
                    <input className='bg-white text-black rounded-md h-8 w-52' type="text" placeholder='Enter your email'/>
                    <button className='bg-[#00df9a] ml-2 px-2 py-1 rounded-md cursor-pointer mb-2 hover:bg-black hover:border border-white hover:text-white duration-200' type='submit'>Notify me</button>
                </div>
                
                <p>We care about the portection of your data. <br /> Read our <span className='text-[#00df9a] border-b border-b-[#00df9a] cursor-pointer '>Privacy Policy.</span></p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Newslatter