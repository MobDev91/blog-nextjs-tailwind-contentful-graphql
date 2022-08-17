import React, { useState } from "react";
import { getPosts } from "../lib/contentfulApi";
import Loader from "./Loader";
import CatPost from "./_child/CatPost";

const Section4 = () => {
  const [posts, setPosts] = useState([]);
  getPosts().then((data) => setPosts(data.data.postCollection.items));
  if (posts.length == 0) return <Loader></Loader>;
  return (
    <section className="container mx-auto px-10">
      <div className="grid lg:grid-cols-3">
        <div className="item">
          <h1 className="text-2xl font-bold py-12 text-center">Business</h1>
          <div className="flex flex-col items-center gap-6">
            {posts.map((post) =>
              post.category.categoryName == "Business" ? (
                <CatPost data={post} key={`B${post.sys.id}`}></CatPost>
              ) : (
                <></>
              )
            )}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold py-12 text-center">Technology</h1>
          <div className="flex flex-col gap-6">
            {posts.map((post) =>
              post.category.categoryName == "Technology" ? (
                <CatPost data={post} key={`T${post.sys.id}`}></CatPost>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold py-12 text-center">General</h1>
          <div className="flex flex-col gap-4">
            {posts.map((post) =>
              post.category.categoryName == "General" ? (
                <CatPost data={post} key={`G${post.sys.id}`}></CatPost>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section4;
