import React from "react"
import Image from "next/image"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"

const BackgroundImage = () => {
  return (
    <>
      <AspectRatio.Root
        ratio={16 / 6}
        className='flex justify-center items-center rounded-[50%] hover:animate-pulse bg-gradient-to-b from-slate-700 shadow-[#8a8989] shadow-inner w-fit h-fit'
      >
        <Image
          src='/bg.png'
          alt='bg'
          width='200'
          height='200'
          className='rounded-[50%] hover:animate-none'
        />
      </AspectRatio.Root>
    </>
  )
}

export default BackgroundImage
