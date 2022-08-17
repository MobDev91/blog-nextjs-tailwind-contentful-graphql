import React, { useState } from "react";
import { getPosts } from "../lib/contentfulApi";
import Post from "./_child/Latest";
import Loader from "./Loader";

const Section2 = () => {
  const [posts, setPosts] = useState([]);
  getPosts().then((data) => setPosts(data.data.postCollection.items));
  if (posts.length == 0) return <Loader></Loader>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center pb-10">
        Latest Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post data={post} key={post.sys.id}></Post>
        ))}
      </div>
    </section>
  );
};

export default Section2;
