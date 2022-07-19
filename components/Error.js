import React from 'react'
import Image from 'next/image'

const Error = () => {
  return (
    <div className='container mx-auto flex flex-col items-center py-10'>

        <h1 className='text-3xl font-bold'>Error 404</h1>
        <Image src="/images/404_Not_found.png"  width={300} height={200}></Image>

    </div>
  )
}

export default Error