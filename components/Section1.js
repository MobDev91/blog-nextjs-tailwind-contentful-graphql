import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
import fetcher from '../lib/fetcher'
import Loader from './Loader'
import Error from './Error'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';


const Section1 = () => {

  const {data, isLoading, isError} = fetcher('api/trending');
  if(isLoading) return <Loader></Loader>
  if(isError) return <Error></Error>

    SwiperCore.use([Autoplay]);
    const bg = {
        background : "url('/images/banner.png') no-repeat",
        backgroundPosition : "right"
        }
  return (
    <section className='py-16' style={bg}>
        <div className='container mx:auto md:px-15'>
        <h1 className='text-3xl font-bold text-center pb-6'>Trending</h1>
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay = {{
        delay:2000
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      { data.map((value,index)=>(
          <SwiperSlide><Slide data={value} key={index}></Slide></SwiperSlide>
      ))}
    </Swiper>
        
        </div>
    </section>
  )
}
export default Section1;

function Slide({data}){
  const {id,title,subtitle,category,img,published,author} = data;
return (
    <div className='grid md:grid-cols-2 gap-10'>
    <div className='image'>
    <Link href={"/"}><a><Image src={img||"/"} width={600} height={600}/></a></Link>
    </div>
    <div className='info flex flex-col justify-center pt-2 px-6 md:px-0 md:pt-4'>
    <div>
        <Link href={"/"}><a className='text-orange-700 text-sm'>{category||"unknown"}</a></Link>
        <span className='text-black'>-{published||"unknown"}</span>
    </div>
    <div>
       <Link href={"/"}><a className='text-3xl font-bold text-gray-800 hover:text-gray-600 md:text-6xl'>{title||"unknown"}</a></Link>
    </div>
    <div>
        <p className='text-gray-500 py-4'>{subtitle||"unknown"}</p>
    </div>
    {author?<Author data={author}></Author>:<></>}
    </div>
    </div>
)
}


