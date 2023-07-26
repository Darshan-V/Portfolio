/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import BackgroundImage from "./BackgroundImage"

const Banner = () => {
  return (
    <div className='flex flex-auto h-fit mt-5  p-5 bg-gradient-to-b from-slate-700 justify-between mix-blend-lighten w-full'>
      <div className='flex flex-col w-full text-2xl gap-y-2 '>
        <p className=' font-Pacifico  md:text-2xl lg:text-4xl xl-text:5xl 2xl:text-6xl text-slate-400 w-fit'>
          Hello,
        </p>
        <span className=' font-Flamenco md:text-xl lg:text-2xl xl-text:3xl 2xl:text-4xl gap-y-2 '>
          I'm &nbsp;
          <span className='hidden md:inline-block shadow-inner shadow-slate-700 rounded-md px-2 my-2 font-bold w-fit md:tracking-widest '>
            Darshan Vijaykumar,
          </span>
          <p className='md:hidden inline-block shadow-inner shadow-slate-800 rounded-md px-2 font-extrabold w-fit md:tracking-widest text-lg '>
            Darshan Vijaykumar,
          </p>
        </span>
        <p className=' font-Handlee  md:text-lg lg:text-xl xl-text:2xl 2xl:text-3xl md:first-letter:text-3xl py-2 text-sm first-letter:font-bold first-letter:text-red-500 bg-slate-600 rounded-lg w-fit px-2 animate-pulse tracking-wide'>
          A Web Developer!
        </p>
      </div>
      <div className='hidden md:flex relative md:w-1/2 justify-center h-full '>
        <BackgroundImage />
      </div>
      <div className='flex md:hidden w-1/2 h-full relative items-center  '>
        <BackgroundImage />
      </div>
    </div>
  )
}

export default Banner
