import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'

const Post = ({data}) => {
  const {sys,slug,category,title,subtitle,published,postImage,author} = data;
  const baseUrl = process.env.NEXT_PUBLIC_Base_POSTS_URL;
  return (
    <div className='flex flex-col px-4 items-center'>
        <div>
        <Link href={`${baseUrl}${slug}`}><a><Image src={`${postImage.url}`} width={600} height={400}></Image></a></Link>
        </div>
        <div>
        <Link href={"/"}><a className='text-orange-700 text-sm'>{category.categoryName}</a></Link>
        <span className='text-black'>-{published.slice(0,10)}</span>
        </div>
        <div>
        <Link href={`${baseUrl}${slug}`}><a className='text-base font-bold text-gray-800 hover:text-gray-600 md:text-xl'>{title||"unknown"}</a></Link>
        </div>
        <div>
        <p className='text-gray-500 py-4'>{subtitle}</p>
        </div>
        {<Author data={author}></Author>}
    </div>

    
  )
}

export default Post