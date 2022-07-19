import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Author = ({data}) => {
  const {name, img, designation} = data
  return (
    <div className='flex'>
        <div>
        <Image src={img||"/"} width={"50"} height={"50"} className='rounded-full'></Image>
        </div>
        <div className='flex flex-col justify-center'>
           <Link href={"/"}><a className='font-bold text-base text-gray-800 hover:text-gray-600'>{name||"unknown"}</a></Link>
            <h3 className='font-bold text-base text-gray-500'>{designation||"unknown"}</h3>
        </div>
    </div>
  )
}

export default Author