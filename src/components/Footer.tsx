import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr className="border border-none bg-[#9B9C9D] h-[1px] w-[80%] m-0 m-auto " />
      <div className="flex justify-around items-center py-2 px-0 w-full ">
        <p className="text-xl text-[#9B9C9D]"> © {new Date().getFullYear()}</p>
        <div className="flex justify-between items-center gap-x-2 gap-y-0 ">
          <a
            href="https://github.com/Darshan-V"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/darshan-vijay-kumar-724949179/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
