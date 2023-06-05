import React from "react"
import Image from "next/image"

const BackgroundImage = () => {
  return (
    <>
      <div className='flex justify-center items-center rounded-[50%] hover:animate-pulse bg-gradient-to-b from-slate-700 shadow-[#8a8989] shadow-inner'>
        <Image
          src='/bg.png'
          alt='bg'
          width='200'
          height='200'
          className='rounded-[50%] hover:animate-none'
        />
      </div>
    </>
  )
}

export default BackgroundImage
