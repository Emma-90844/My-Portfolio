import React  from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          linkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/onencan-emmanuel-857225225/",
      style: "rounded-tr-md, bg-yellow-400",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Emma-90844",
      style: " hover:bg-yellow-400",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox",
      style: "hover:bg-yellow-400",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./Resume.pdf",
      style: "rounded-br-md hover:bg-yellow-400",
      download: true,
    },
  ];
  return (
    <div>
      <ul className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        {/* single list */}

        {/* loop the link list */}
        {links.map(({ child, style, href, id, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
