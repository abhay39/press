"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const navigations = useRouter();
  return (
    <div className="bg-slate-600 flex items-center justify-center flex-col p-6 rounded-md mt-4 text-center w-[100%]">
      <img
        src="https://dexen.smartdemowp.com/wp-content/uploads/2019/10/logo-1-2.svg"
        alt=""
        height={100}
        width={100}
      />
      <h1 className="text-4xl text-white font-bold mb-3 mt-3">ADARSH OFFSET PRESS</h1>
      <ul className="flex flex-col md:flex-row gap-4 ">
        <li
          onClick={() => {
            navigations.push("/");
          }}
          className="text-base  text-gray-200 text-center  duration-700 transition ease-in hover:text-red-600"
        >
          Home
        </li>
        
        <li
          onClick={() => {
            navigations.push("/about");
          }}
          className="text-base text-gray-200 text-center hover:text-red-600"
        >
          About Us
        </li>
        <li
          onClick={() => {
            navigations.push("/contact");
          }}
          className="text-base text-gray-200 text-center  hover:text-red-600"
        >
          Contact Us
        </li>
      </ul>
      <span className="font-bold text-white mt-4">
        &copy; ADARSH OFFSET PRESS | ALL RIGHT RESERVED @2024
      </span>
    </div>
  );
};

export default Footer;
