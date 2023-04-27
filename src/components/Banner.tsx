import React from "react"

const Banner = () => {
  return (
    <div className='flex w-full mt-12 rounded-xl p-5 bg-gradient-to-b from-slate-700'>
      <div className='flex flex-col'>
        <p className=' font-Pacifico text-6xl'>Hello,</p>
        <br />
        <p className=' font-Amatic text-4xl'>
          I'm &nbsp;
          <span className=' bg-slate-600 rounded-md px-2 font-bold'>
            Darshan Vijaykumar,
          </span>
        </p>
        <br />
        <p className=' font-Amatic text-3xl first-letter:text-5xl first-letter:font-bold first-letter:text-red-500 bg-slate-600 rounded-lg w-fit px-2'>
          A Web Developer!
        </p>
      </div>
    </div>
  )
}

export default Banner
