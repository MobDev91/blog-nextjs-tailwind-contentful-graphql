import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/Author'
import fetcher from '../lib/fetcher'
import Loader from './Loader'
import Error from './Error'

const Section4 = () => {
  const {data, isLoading, isError} = fetcher('api/trending');
  if(isLoading) return <Loader></Loader>
  if(isError) return <Error></Error>
  return (
    <section className='container w-11/12 mr-auto ml-auto py-10'>
        <div className='grid lg:grid-cols-2'>
          <div className='item'>
            <h1 className='text-2xl font-bold py-12 text-center lg:text-start'>Business</h1>
            <div className='flex flex-col gap-6'>
             {data[1]?<CatPost data={data[1]}></CatPost>:<></>}
             {data[2]?<CatPost data={data[2]}></CatPost>:<></>}
             {data[3]?<CatPost data={data[3]}></CatPost>:<></>}
            </div>
          </div>

          <div>
          <h1 className='text-2xl font-bold py-12 text-center lg:text-start'>Travel</h1>
          <div className='flex flex-col gap-6'>
            {data[4]?<CatPost data={data[4]}></CatPost>:<></>}
             {data[3]?<CatPost data={data[3]}></CatPost>:<></>}
             {data[2]?<CatPost data={data[2]}></CatPost>:<></>}
            </div>
          </div>
        </div>

    </section>
  )
}

export default Section4


function CatPost({data}){
  const {id,title,category,img,published,author} = data;
return (
<div className='flex gap-5'>
        <div className='flex flex-col justify-start'>
        <Link href={"/"}><a><Image src={img||"/"} width={300} height={250}></Image></a></Link>        </div>
        <div className='flex flex-col justify-center'>
        <div>
        <Link href={"/"}><a className='text-orange-700 text-sm'>{category||"unknown"}</a></Link>
        <span className='text-black'>-{published||"unknown"}</span>
        </div>
        <div>
        <Link href={"/"}><a className='text-xl font-bold text-gray-800 hover:text-gray-600 md:text-xl'>{title||"unknown"}</a></Link>
        </div>
        {author? <Author data={author}></Author>:<></>}
        </div>
    </div>
)
}