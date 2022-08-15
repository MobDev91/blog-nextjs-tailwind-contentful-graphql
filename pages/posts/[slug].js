import React from "react";
import Format from "../../layout/Format";
import Related from "../../components/Related";
import Image from "next/image";
import Link from "next/link";
import Author from "../../components/_child/Author";
import { getPosts, getPost } from "../../lib/contentfulApi";

export default function Page(props){
const {sys,slug,category,title,subtitle,published,postImage,author} = props.post;
  return (
        <Format>
            <section className="container mx-auto py-12 w-1/2">
                <div className="flex flex-col items-center">
                <div className="post py-10">
                <h1 className='font-bold text-4xl text-center pb-5'>{title}</h1>
                <p className='text-gray-500 text-xl text-center'>{subtitle}</p>
                <div className="py-4">
                    </div>
                    <Link href={"/"}><a className='text-orange-700 text-xl'>Category : {category.categoryName}</a></Link>
                    <Image src={`${postImage.url}`} width={800} height={600}></Image>
                    <div className="text-gray-600 text-lg flex flex-col gap-4">
                        <p className="text-left">{subtitle}</p>
                        <Author data={author}></Author>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-center">
                      <h1 className="font-bold text-3xl text-center">Related</h1>

                       <Related data = {category.categoryName}/>
                      
                    </div>
            </section>
        </Format>
    )
}


export async function getStaticPaths() {
  const {data} = await getPosts()
  const posts = data.postCollection.items;
  const paths = posts.map(post=>({params: {slug : post.slug}}))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const {data} = await getPost(slug)
  const post = data.postCollection.items[0]
  return { 
    props: {
     post,
     },
    }
}