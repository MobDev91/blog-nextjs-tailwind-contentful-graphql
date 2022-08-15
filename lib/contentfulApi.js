const contentful_query = `query{
    postCollection(limit: 5, skip: 0, order: published_DESC) 
  {
    items {
      sys {
        id
      }
      slug,
      category{
        categoryName
      }
      title,
      subtitle,
      published,
      postImage{
          url
      }
      author {
        fullName
        designation
        authorImage{
          url
        }
      }
    }
  }
}`
export async function getPosts(){

  const response = await fetch("https://graphql.contentful.com/content/v1/spaces/lms7hjk7jprj?access_token=hnRgcTUgFZ3d6_baET9FI2WJ9u1K1ogaoo-WW4jeDoU", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query : contentful_query})
    })
    if(!response.ok){
        console.log("Cannot fetch data from contentful ")
        return {}
    }
    const posts = response.json();
    return posts
}

export async function getPost(slug){

  const response = await fetch("https://graphql.contentful.com/content/v1/spaces/lms7hjk7jprj?access_token=hnRgcTUgFZ3d6_baET9FI2WJ9u1K1ogaoo-WW4jeDoU", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query : 
      `query GetPost($slug : String!){
        postCollection(where : {
        slug: $slug})
        {
          items{
            sys{id}
            slug
            category{categoryName}
            title
            subtitle
            published
            postImage{url}
            author{fullName, designation, authorImage{url}}
            description{json}
          }
        }
      }`,
        variables : {slug : slug}
      })
    })
    if(!response.ok){
        console.log("Cannot get post from contentful ")
        return {}
    }
    const post = response.json();
    return post
}



export async function getCategory(categoryName){

  const response = await fetch("https://graphql.contentful.com/content/v1/spaces/lms7hjk7jprj?access_token=hnRgcTUgFZ3d6_baET9FI2WJ9u1K1ogaoo-WW4jeDoU", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query : 
      `query GetCategory($categoryName : String!){
        postCollection(where : {
        category : {categoryName : $categoryName}})
        {
          items{
            sys{id}
            slug
            category{categoryName}
            title
            published
            postImage{url}
          }
        }
      }`,
        variables : {categoryName : categoryName}
      })
    })
    if(!response.ok){
        console.log("Cannot get post from contentful ")
        return {}
    }
    const posts = response.json();
    return posts
}