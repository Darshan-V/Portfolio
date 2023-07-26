import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <div className='w-full h-40 md:h-96'>
      <div className='flex w-full h-full bg-gradient-to-b from-slate-700 p-10'>
        <div className='flex md:w-1/2 md:h-16 items-center w-fit h-fit  left-2 top-5  bg-gradient-to-r from-amber-600 group'>
          <span className='px-2  font-Sriracha md:text-4xl sm:text-3xl text-2xl'>
            This is me!
          </span>
          <span className=' animate-waving md:text-4xl sm:text-3xl text-2xl group-hover:scale-150'>
            👋🏻
          </span>
        </div>
        {/* <Image
            src='/me-withoutbg.png'
            alt='me'
            width='200'
            height='200'
            className=' w-64 h-36  sm:w-3/5 sm:h-[50vh] sm:left-[60vw] '
          /> */}
      </div>
    </div>
  )
}

export default Hero
