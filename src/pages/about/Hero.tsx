import React from "react"

const Hero = () => {
  return (
    <div className='flex flex-row w-full h-full  mt-5 p-5 bg-gradient-to-b from-slate-700 justify-between mix-blend-lighten relative'>
      <div className='w-1/2 rounded-full'>
        <div className='w-1/3 bg-gradient-to-r from-orange-950 skew-x-12'>
          <h1 className='text-3xl p-5'>
            This is me! {String.fromCodePoint(0x1f603)}
          </h1>
        </div>
      </div>
      <div className='flex w-1/2 h-full justify-end  items-start '>
        <img
          src='/me-withoutbg.png'
          alt='me'
          className=''
        />
      </div>
    </div>
  )
}

export default Hero
