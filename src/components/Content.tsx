import React from "react"
import Banner from "./Banner"
import RandomIcon from "./RandomIcon"
import Link from "next/link"
import { TiThMenu } from "react-icons/ti"
import PopoverDemo from "./Popover"

const Content = () => {
  const buttonArray = ["Home", "About", "Skills", "Contact"]

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row-reverse w-full h-10 bg-yellow-600'>
        <RandomIcon />
        <div className='flex md:hidden absolute px-3 h-10 items-center hover:bg-yellow-500 cursor-pointer'>
          <PopoverDemo />
        </div>
        <div className='hidden md:flex absolute h-10 justify-between px-3 space-x-4 '>
          {buttonArray.map((str, i) => (
            <Link
              href={`/${str.toLowerCase()}`}
              className=' font-Neucha font-thin text-xl hover:scale-125 m-auto'
              key={i}
            >
              {str}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex w-screen p-10'>
        <Banner />
      </div>
    </div>
  )
}

export default Content
