import Format from "../../layout/Format";
import Related from "../../components/Related";
import Image from "next/image";
import * as contentful from "contentful";
import Author from "../../components/_child/Author";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
export default function Page(props){
  const img = `http:${props.author.fields['authorImage'].fields.file['url']}`
  const name = props.author.fields.fullName
  const designation = props.author.fields.designation
  const author = {name,img,designation}
    return (
        <Format>
            <section className="container mx-auto py-12 w-1/2">
                <div className="flex flex-col items-center">
                <div className="post py-10">
                <h1 className='font-bold text-4xl text-center pb-5'>{props.title}</h1>
                <p className='text-gray-500 text-xl text-center'>{props.subtitle}</p>
                    <div className="py-10">
                    <Image src={`http:${props.postImage.fields.file.url}`} width={800} height={600}></Image>
                    </div>

                    <div className="text-gray-600 text-lg flex flex-col gap-4">
                        <p className="text-left">{props.description.content[0].content[0].value}</p>
                        <Author data={author}></Author>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-center">
                      <h1 className="font-bold text-3xl text-center">Related</h1>
                       <Related />
                       <Related />
                       <Related />
                       <Related />

                      
                    </div>
            </section>
        </Format>
    )
}


export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type : 'post',
  })
  const paths = res.items.map(post=>({params: {slug : post.fields.slug}}))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await client.getEntries({
    content_type : 'post',
    "fields.slug" : context.params.slug
  })
  return { 
    props: {
      error: !res.items.length && `No post with slug : ${context.params.slug}`,
      ...res?.items?.[0]?.fields,
     },
    }
}

