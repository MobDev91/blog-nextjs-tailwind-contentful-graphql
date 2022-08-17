import React from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-50 pt-6 pb-4">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center items-center py-4 sm:py-0">
          <input type="text" placeholder="Search..." className="searchbar" />
        </div>
        <div className="shrink w-80 sm:order-2 text-center">
          <Link href={"/"}>
            <a className="uppercase font-bold text-2xl">Design</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6 text-slate-500">
            <Link href={"https://www.facebook.com/oussama.benyssef"}>
              <a>
                <FaFacebookSquare />
              </a>
            </Link>
            <Link href={"https://www.twitter.com"}>
              <a>
                <FaTwitter />
              </a>
            </Link>
            <Link href={"https://www.youtube.com"}>
              <a>
                <FaYoutube />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
