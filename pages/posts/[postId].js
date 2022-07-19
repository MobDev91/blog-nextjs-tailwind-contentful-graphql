import Author from "../../components/_child/Author";
import Format from "../../layout/Format";
import Related from "../../components/Related";
import Image from "next/image";
import Post from "../../lib/Article"
import Article from "../../lib/Article";

export default function Page({title,subtitle,img,description,author}){
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


export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const posts = await Article(1)
    console.log(posts);
    return {
      props: {posts},
    }
  }

export async function getStaticPaths() {
  const posts = await Article();
  const paths = posts.map(value => {
    return {
      params : {postId : value.id.toString()}
    }
  })
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}