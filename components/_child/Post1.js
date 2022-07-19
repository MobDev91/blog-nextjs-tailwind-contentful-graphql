import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'

const Post1 = ({data}) => {
  const {id,title,subtitle,category,img,published,author} = data;
  return (
    <div className='flex flex-col px-4 justify-center'>
        <div>
         <Link href={"/"}><a><Image src={img||"/"} width={600} height={400}></Image></a></Link>
        </div>
        <div>
        <Link href={"/"}><a className='text-orange-700 text-sm'>{category||"unknown"}</a></Link>
        <span className='text-black'>-{published||"unknown"}</span>
        </div>
        <div>
        <Link href={"/"}><a className='text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-600'>{title||"unknown"}</a></Link>
        </div>
        <div>
        <p className='text-gray-500 py-4'>{subtitle||"unknown"}</p>
        </div>
        {author?<Author data={author}></Author>:<></>}

    </div>

    
  )
}

export default Post1