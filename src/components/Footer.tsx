import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className=' bg-black mx-2 '>
      <hr className='border border-none bg-[#9B9C9D] h-[1px] w-full' />
      <div className='flex items-center py-2 w-full m-auto '>
        <div className='flex w-1/2 justify-start items-center px-5 md:text-xl text-[#9B9C9D] mr-auto'>
          {" "}
          © {new Date().getFullYear()}
        </div>
        <div className='flex w-1/2 justify-end items-center gap-x-10 gap-y-0 px-5'>
          <a
            href='https://github.com/Darshan-V'
            aria-label='Github'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='md:text-2xl text-xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/darshan-vijay-kumar-724949179/'
            aria-label='Linkedin'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='md:text-2xl text-xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
