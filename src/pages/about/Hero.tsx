import React from "react"

const Hero = () => {
  return (
    <div className='w-full h-40 md:h-96'>
      <div className='flex w-full h-full bg-gradient-to-b from-slate-700 relative'>
        <div className='flex md:w-1/2 md:h-16 items-center w-fit h-fit absolute inset-y-0 md:left-5 md:top-10 left-2 top-5  bg-gradient-to-r from-amber-600 group'>
          <span className='px-2  font-Sriracha md:text-4xl sm:text-3xl text-2xl'>
            This is me!
          </span>
          <span className=' animate-waving md:text-4xl sm:text-3xl text-2xl group-hover:scale-150'>
            👋🏻
          </span>
        </div>
        <img
          src='/me-withoutbg.png'
          alt='me'
          className='absolute inset-y-0 right-0 w-64 h-36 md:w-2/4 sm:w-3/5 sm:h-[50vh] sm:left-[60vw] md:h-[70vh] md:absolute md:inset-y-0 md:right-0 md:bottom-[10vh] '
        />
      </div>
    </div>
  )
}

export default Hero
