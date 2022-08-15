import React from 'react'
import {useState } from 'react'
import PostT from './_child/Trending'
import { getPosts } from '../lib/contentfulApi'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';
import Loader from './Loader'

const Section1 = () => {
  SwiperCore.use([Autoplay]);
  const [posts, setPosts] = useState([])
  getPosts().then(data=>setPosts(data.data.postCollection.items));
  if(posts.length == 0) return <Loader></Loader>
  return (
    <section className='section1_bg py-16' >
        <div className='container mx:auto md:px-15'>
        <h1 className='text-3xl font-bold text-center pb-6'>Trending</h1>
    <Swiper modules={[Autoplay]} slidesPerView={1} autoplay = {{delay:2000}}>
      {posts.slice(0,5).map((post)=>(
          <SwiperSlide key={post.sys.id}>
            <PostT data={post}></PostT>
          </SwiperSlide>
      ))}
    </Swiper>
        
        </div>
    </section>
  )
}
export default Section1;

