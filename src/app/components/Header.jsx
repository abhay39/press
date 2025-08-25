"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navigations = useRouter();

  return (
    <div className="bg-white fixed z-10 shadow-red-200 p-3 rounded-sm text-black  w-full flex justify-between  shadow-xl items-center">
      <h1 className="font-bold select-none text-3xl md:text-3xl text-red-900 hover:text-black duration-200 transition ease-in cursor-pointer">
        ADARSH OFFSET PRESS
      </h1>
      <div
        className=" md:hidden h-12 w-8 flex flex-col items-center justify-center cursor-pointer"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <div className=" border-black border-b-4 h-2 w-full" />
        <div className=" border-black border-b-4 h-2 w-full" />
        <div className=" border-black border-b-4 h-2 w-full" />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex">
          <li
            onClick={() => {
              navigations.push("/");
            }}
          >
            Home
          </li>
          
          <li
            onClick={() => {
              navigations.push("/about");
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              navigations.push("/contact");
            }}
          >
            Contact Us
          </li>
        </ul>
      </nav>
      {showNav &&
        <div className=" fixed select-none top-0 bg-slate-700 h-[100%] w-full z-10 left-0 right-0 flex flex-col items-center justify-center">
          <span
            className="fixed top-2 right-4 text-3xl text-white cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          >
            X
          </span>
          <ul className="">
            <li
              onClick={() => {
                navigations.push("/"), setShowNav(!showNav);
              }}
              className="text-3xl text-white text-center mb-8 duration-700 transition ease-in hover:text-red-600"
            >
              Home
            </li>
            
            <li
              onClick={() => {
                navigations.push("/about"), setShowNav(!showNav);
              }}
              className="text-3xl text-white text-center mb-8 hover:text-red-600"
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigations.push("/contact"), setShowNav(!showNav);
              }}
              className="text-3xl text-white text-center mb-8 hover:text-red-600"
            >
              Contact Us
            </li>
          </ul>
        </div>}
    </div>
  );
};

export default Header;
