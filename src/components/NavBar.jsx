import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"



const NavBar = () => {
  // state for mobile menu
  const [nav, setNav] = useState(false);

  // nav bar links
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between px-4 items-center w-full h-20 text-white fixed bg-black">
      
      <div className="flex justify-center items-center ml-5">
        {/* <h1 className="text-5xl font-signature ml-2">Emmanuel Onencan</h1> */}
        <img className=" mt-3 w-40" src="http://logos.textgiraffe.com/logos/logo-name/Emma-designstyle-boots-m.png" alt="" />
      <span className="hidden md:flex text-5xl font-signature ml-4 mt-4">Onencan</span>
      
      
      </div>

      {/* navbar list */}
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>{link} </Link>
          </li>
        ))}
      </ul>

      {/* icons */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* mobile menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-6 text-4xl"
            >
              <Link onClick={() =>setNav(!nav)} to={link} smooth duration={500}>{link} </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
