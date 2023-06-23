import React from "react"
import PopOver from "./Popover"
import RandomIcon from "./RandomIcon"
import Link from "next/link"

const buttonArray = ["Home", "About", "Skills", "Contact"]

const Navigate = () => {
  return (
    <>
      <div className='flex flex-row-reverse w-full h-10 bg-yellow-600'>
        <RandomIcon />
        <div className='flex md:hidden absolute px-3 h-10 items-center hover:bg-yellow-500 cursor-pointer '>
          <PopOver />
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
    </>
  )
}

export default Navigate
