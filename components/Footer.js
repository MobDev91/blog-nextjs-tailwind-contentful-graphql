import React from "react";
import Link from "next/link";
import Subscribe from "./Subscribe";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50 flex flex-col" style={bg}>
      <Subscribe />
      <div className="container mx-auto py-10">
        <div className="flex gap-6 text-slate-500 justify-center">
          <Link href={"/"}>
            <a>
              <FaFacebookSquare />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <FaTwitter />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <FaYoutube />
            </a>
          </Link>
        </div>
        <div className="text-center text-sm text-gray-500 ">
          <p className="hover:text-gray-800">
            Copyright ⓒ 2022 All rights reserved | This template is made with by
            Oussama Benyssef
          </p>
          <Link href={"/"}>
            <a className="hover:text-gray-800">Terms And Conditions</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
