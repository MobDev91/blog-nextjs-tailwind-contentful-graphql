import Link from "next/link";
import Image from "next/image";
function CatPost({data}){
    const {sys,slug,category,title,subtitle,published,postImage,author} = data;
    const baseUrl = process.env.NEXT_PUBLIC_Base_POSTS_URL;
  return (
  <div className='flex flex-col gap-5'>
          <div className=''>
          <Link href={`${baseUrl}${slug}`}><a><Image src={`${postImage.url}`} width={350} height={250}></Image></a></Link>
          </div>
          <div className='flex flex-col justify-center'>
          <div>
          <Link href={"/"}><a className='text-orange-700 text-sm'>{category.categoryName}</a></Link>
          <span className='text-black'>-{published.slice(0,10)}</span>
          </div>
          <div>
          <Link href={`${baseUrl}${slug}`}><a className='text-sm font-bold text-gray-800 hover:text-gray-600'>{title}</a></Link>
          </div>
          </div>
      </div>
  )
  }
  export default CatPost;