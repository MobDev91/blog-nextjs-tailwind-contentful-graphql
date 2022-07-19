
export default async function Article(id) {
const res = await fetch("http://localhost:3000/api/posts")
const posts = await res.json()
if(id)
return posts.find(value => value.id == id)

}