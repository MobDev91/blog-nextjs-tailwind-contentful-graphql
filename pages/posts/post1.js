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
  const authorImage = `http:${props.author.fields['authorImage'].fields.file['url']}`
  const authorName = props.author.fields.fullName
  const authorDesign = props.author.fields.designation
  const author = {authorName,authorImage,authorDesign}
  console.log(author);

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

                    <div className="content text-left text-gray-600 text-lg flex flex-col gap-4">
                        <p>{props.description.content[0].content[0].value}</p>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-col gap-10">
                      <Author data={author}></Author>
                    </div>
            </section>
        </Format>
    )
}

export async function getStaticProps() {
  const res = await client.getEntry('6Ntfu59BEHvSQ9aVRqRvci')
  return { 
    props: {
      ...res.fields,
     },
    }
}

