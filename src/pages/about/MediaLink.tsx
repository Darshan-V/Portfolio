import React from "react"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { GrMail } from "react-icons/gr"
import { HiDownload } from "react-icons/hi"
import Link from "next/link"

const MediaLink = () => {
  return (
    <div className='flex w-full h-full mx-auto '>
      <div className='grid  grid-cols-2 gird-rows-2 h-fit  rounded-lg gap-4 gap-y-4 w-1/7  md:m-auto p-5 relative sm:mr-auto m-auto'>
        <hr className='md:h-2 md:w-1/2 h-1 w-1/3 bg-white rounded-xl bg-gradient-to-r from-gray-400 to-purple-400 absolute'></hr>
        <hr className='md:w-2 md:h-1/3 h-1/3 w-1 bg-white absolute rounded-xl bg-gradient-to-b from-gray-400 to-purple-400'></hr>
        <Link
          href='https://www.linkedin.com/in/darshan-vijay-kumar-724949179/'
          aria-label='Linkedin'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col bg-slate-600 rounded-lg md:w-28 md:h-28 h-16 w-16  border-t-4 border-slate-400  shadow-lg shadow-slate-500/50 hover:border-gray-500 group'
        >
          <SiLinkedin className='m-auto md:w-16 md:h-16 w-12 h-6 group-hover:fill-blue-500' />
          <span className='mx-auto pb-1 md:text-2xl text-sm'>LinkedIn</span>
        </Link>

        <Link
          href='https://github.com/Darshan-V'
          aria-label='Github'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col bg-slate-600 rounded-lg  md:w-28 md:h-28 h-16 w-16 border-t-4 border-slate-400  shadow-lg shadow-slate-500/50 hover:border-gray-500 group'
        >
          <SiGithub className='m-auto md:w-16 md:h-16 w-12 h-6 group-hover:fill-black' />
          <span className='mx-auto pb-1 md:text-2xl text-sm'>Github</span>
        </Link>

        <Link
          href='mailto:gowdadarshanv@gmail.com'
          aria-label='Linkedin'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col bg-slate-600 rounded-lg  md:w-28 md:h-28 h-16 w-16 border-t-4 border-slate-400  shadow-lg shadow-slate-500/50 hover:border-gray-500 group'
        >
          <GrMail className='m-auto  md:w-16 md:h-16 w-12 h-6 group-hover:fill-red-500' />
          <span className='mx-auto pb-1 md:text-2xl text-sm'>Gmail</span>
        </Link>

        <Link
          className='flex flex-col bg-slate-600 rounded-lg  md:w-28 md:h-28 h-16 w-16 border-t-4 border-slate-400  shadow-lg shadow-slate-500/50 hover:border-gray-500 group'
          href='/Darshan V - Resume.pdf'
          download="Darshan's Resume"
          target='_blank'
          rel='noreferrer'
        >
          <HiDownload className='m-auto stroke-white md:w-16 md:h-16 w-12 h-6 group-hover:fill-blue-600' />
          <span className='mx-auto pb-1 md:text-2xl text-sm'>Resume</span>
        </Link>
      </div>
    </div>
  )
}

export default MediaLink
