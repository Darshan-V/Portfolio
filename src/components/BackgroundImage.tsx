import React from "react"
import Image from "next/image"

const BackgroundImage = () => {
  return (
    <>
      <Image
        src='/bg.png'
        alt='bg'
        width='200'
        height='200'
        className='rounded-[50%]  animate-wiggle'
      />
    </>
  )
}

export default BackgroundImage
