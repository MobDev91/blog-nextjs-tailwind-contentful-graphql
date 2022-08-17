import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

import React from "react";

const PostT = ({ data }) => {
  const { sys, slug, category, title, subtitle, published, postImage, author } =
    data;
  const baseUrl = process.env.NEXT_PUBLIC_Base_POSTS_URL;
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image">
        <Link href={`${baseUrl}${slug}`}>
          <a>
            <Image src={`${postImage.url}`} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center pt-2 px-6 md:px-0 md:pt-4">
        <div>
          <Link href={"/"}>
            <a className="text-orange-700 text-sm">{category.categoryName}</a>
          </Link>
          <span className="text-black">-{published.slice(0, 10)}</span>
        </div>
        <div>
          <Link href={`${baseUrl}${slug}`}>
            <a className="text-3xl font-bold text-gray-800 hover:text-gray-600 md:text-6xl">
              {title}
            </a>
          </Link>
        </div>
        <div>
          <p className="text-gray-500 py-4">{subtitle}</p>
        </div>
        <Author data={author}></Author>
      </div>
    </div>
  );
};
export default PostT;
