import React from "react";
import HeroImage from "../assets/heroImage-2.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b 
    from-black via-black to-gray-800"
      name="home"
    >
      <div
        className=" max-w-screen-lg  mx-auto flex 
      flex-col justify-center  items-center px-4
      h-full md:flex-row  "
      >
        <div className="">
            {/* added mt */}
          <h2 className="text-4xl  sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience buiding and designing software user
            interfaces. Currently, i love to work on web applications using
            technologies like Javascript ( Node JS )/Express JS , React JS/Next JS, Redux/Context, Tailwind CSS/CSS, Sanity/MongoDB/Firebase, 
             Wordpress and HTML5.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="mr-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl 
           mx-auto w-2/3 md:w-full  md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
