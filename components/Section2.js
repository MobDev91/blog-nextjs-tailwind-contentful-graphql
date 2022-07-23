import React from 'react'
import Post from './_child/Post'
import Fetcher from '../lib/Fetcher'
import Loader from './Loader'
import Error from './Error'

const Section2= () => {
  const {data, isLoading, isError} = Fetcher('api/posts');
  if(isLoading) return <Loader></Loader>
  if(isError) return <Error></Error>
  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='text-3xl font-bold text-gray-800 text-center pb-10'>Latest Posts</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
            data.map((value, index)=>(
              <Post data={value} key={index}></Post>
            ))
            }
        </div>
    </section>
  )
}

export default Section2
