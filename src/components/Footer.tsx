import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className='mx-2 p-2'>
      <hr className='border border-none bg-[#9B9C9D] h-[1px] w-full m-auto' />
      <div className='flex justify-between items-center py-2 px-0 w-[90%] m-auto '>
        <p className='text-xl text-[#9B9C9D]'> © {new Date().getFullYear()}</p>
        <div className='flex justify-between items-center gap-x-2 gap-y-0 w-20'>
          <a
            href='https://github.com/Darshan-V'
            aria-label='Github'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-2xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/darshan-vijay-kumar-724949179/'
            aria-label='Linkedin'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='text-2xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
