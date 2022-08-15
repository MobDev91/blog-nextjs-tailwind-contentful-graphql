import React, {useState} from 'react'
import Post1 from './_child/Popular';
import { getPosts } from '../lib/contentfulApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loader from './Loader'


const Section3 = () => {
  const [posts, setPosts] = useState([]);
  getPosts().then(data=>setPosts(data.data.postCollection.items));
  if(posts.length == 0) return <Loader></Loader>  
  return (
    <section className='container mx-auto px-10'>
        <h1 className='text-3xl font-bold text-gray-800 text-center py-10'>Most Popular</h1>
    <Swiper
      slidesPerView={2}
      onSwiper={(swiper) => console.log(swiper)}
    >
       { posts.map((post)=>(
          <SwiperSlide key={post.sys.id}><Post1 data={post} key={post.sys.id}></Post1></SwiperSlide>
      ))}
    </Swiper>
    </section>
  )
}
export default Section3