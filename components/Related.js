import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategory } from "../lib/contentfulApi";

const Related = (categoryName) => {
  const baseUrl = process.env.NEXT_PUBLIC_Base_POSTS_URL;
  const [posts, setPosts] = useState([]);
  getCategory(categoryName.data).then((data) =>
    setPosts(data.data.postCollection.items)
  );
  return posts.map((Post) => (
    <div key={Post.sys.id} className="flex gap-5">
      <div className="flex flex-col justify-start">
        <Link href={`${baseUrl}${Post.slug}`}>
          <a>
            <Image
              src={`${Post.postImage.url}`}
              width={300}
              height={200}
            ></Image>
          </a>
        </Link>{" "}
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <Link href={`${baseUrl}${Post.slug}`}>
            <a className="text-orange-700 text-sm">
              {Post.category.categoryName}
            </a>
          </Link>
          <span className="text-black">-{Post.published.slice(0, 10)}</span>
        </div>
        <div>
          <Link href={`${baseUrl}${Post.slug}`}>
            <a className="text-base font-bold text-gray-800 hover:text-gray-600 lg:text-xl">
              {Post.title}
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default Related;
