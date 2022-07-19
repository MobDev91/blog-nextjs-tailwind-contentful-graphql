import Author from "../../components/_child/Author";
import Format from "../../layout/Format";
import Related from "../../components/Related";
import Image from "next/image";

export default function Page({post}){
  const {title,subtitle,img,description,author} = post
    return (
        <Format>
            <section className="container mx-auto py-12 w-1/2">
                <div className="flex flex-col items-center">
                {author?<Author data={author}></Author>:<></>}
                </div>
                <div className="post py-10">
                <h1 className='font-bold text-4xl text-center pb-5'>{title||"unknown"}</h1>
                <p className='text-gray-500 text-xl text-center'>{subtitle||"unknown"}</p>
                    <div className="py-10">
                        <Image src={img||"/"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        <p>{description||"unknown"}</p>
                  
                    </div>
                    </div>
                    <div className="flex flex-col gap-10">
                    <Related/>
                    <Related/>
                    <Related/>
                    <Related/>
                    </div>
            </section>
        </Format>
    )
}
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/posts');
    const posts = await res.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((value) => ({
      params: { postId: value.id},
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/posts/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }