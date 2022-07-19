import React from 'react'

const Subscribe = () => {
  return (
    <div className='grid grid-row-3 bg-gray-50 gap-4'>
        <div className='mt-6 flex justify-center items-center'>
            <h1 className='text-2xl font-bold text-center'>Subscribe Newslatter</h1>
        </div>
        <div className='flex justify-center items-center'>
            <input type="text" placeholder='Enter Your Email' className='w-1/2 placeholder:text-gray-400  placeholder:pl-2 focus:border-sky-400 focus:outline-none focus:ring-2 shadow-sm '/>
        </div>
        <div className='mb-6 flex justify-center items-center'>
            <button type="submit" className=' bg-orange-400 text-white text-base rounded-full border-3 px-20 py-1  border-orange-400'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe