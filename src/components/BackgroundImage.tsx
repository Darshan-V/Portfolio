import React from "react"
import Image from "next/image"

const BackgroundImage = () => {
  return (
    <>
      <div className='flex justify-center items-center rounded-full w-fit h-fit'>
        <Image
          src='/caliper-removebg.png'
          alt='bg'
          width='190'
          height='190'
          className='rounded-full bg-transparent absolute mix-blend-overlay '
        />
        <Image
          src='/newwheelbg.png'
          alt='bg'
          width='280'
          height='280'
          className='rounded-full  relative animate-slow-spin mix-blend-duplex '
        />
      </div>
    </>
  )
}

export default BackgroundImage
