import React from "react"
import BackgroundImage from "./BackgroundImage"

const Banner = () => {
  return (
    <div className='flex flex-auto w-full mt-12 rounded-xl p-5 bg-gradient-to-b from-slate-700 justify-between'>
      <div className='flex flex-col'>
        <p className=' font-Pacifico sm:text-xl md:text-2xl lg:text-4xl xl-text:5xl 2xl:text-6xl text-slate-400'>
          Hello,
        </p>
        <br />
        <p className=' font-Amatic sm:text-lg md:text-xl lg:text-2xl xl-text:3xl 2xl:text-4xl'>
          I'm &nbsp;
          <span className=' bg-slate-600 rounded-md px-2 font-bold'>
            Darshan Vijaykumar,
          </span>
        </p>
        <br />
        <p className=' font-Amatic sm:text-xl md:text-2xl lg:text-3xl xl-text:4xl 2xl:text-4xl first-letter:text-5xl first-letter:font-bold first-letter:text-red-500 bg-slate-600 rounded-lg w-fit px-2 animate-pulse'>
          A Web Developer!
        </p>
      </div>
      <div className='flex relative w-1/2 justify-center'>
        <BackgroundImage />
      </div>
    </div>
  )
}

export default Banner
