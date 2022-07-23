import React from 'react'
import Post1 from './_child/Post1'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Fetcher from '../lib/Fetcher';
import Loader from './Loader'
import Error from './Error'


const Section3 = () => {
  const {data, isLoading, isError} = Fetcher('api/popular');
  if(isLoading) return <Loader></Loader>
  if(isError) return <Error></Error>
  return (
    <section className='container mx-auto px-10'>
        <h1 className='text-3xl font-bold text-gray-800 text-center py-10'>Most Popular</h1>
    <Swiper
      slidesPerView={2}
      onSwiper={(swiper) => console.log(swiper)}
    >
       { data.map((value,index)=>(
          <SwiperSlide key={index}><Post1 data={value} key={index}></Post1></SwiperSlide>
      ))}
    </Swiper>
    </section>
  )
}

export default Section3