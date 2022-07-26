import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Author from './_child/Author';

const Related = () => {

  return (
    <div className='flex gap-5'>
        <div className='flex flex-col justify-start'>
        <Link href={"/"}><a><Image src="/images/img1.jpg" width={300} height={200}></Image></a></Link>        </div>
        <div className='flex flex-col justify-center'>
        <div>
        <Link href={"/"}><a className='text-orange-700 text-sm'>Business,Travel</a></Link>
        <span className='text-black'>-Jun 3, 2022</span>
        </div>
        <div>
        <Link href={"/"}><a className='text-base font-bold text-gray-800 hover:text-gray-600 lg:text-xl'>Your Most unhappy customers are your greatest source of learning</a></Link>
        </div>
        </div>
    </div>
  )
}

export default Related