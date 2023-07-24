import React from "react"
import PopOver from "./Popover"
import Link from "next/link"
import Navbar from "./Navbar"

const buttonArray = ["Home", "About", "Skills", "Contact"]

const Navigate = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)

    elem?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <div className='flex flex-row-reverse w-full h-20 bg-yellow-600 items-center sticky top-0 z-10 '>
        <div className='flex w-full flex-start'>
          <Navbar />
        </div>
        <div className='flex md:hidden absolute px-3 h-10 items-center hover:bg-yellow-500 cursor-pointer '>
          <PopOver />
        </div>

        <div className='hidden md:flex absolute h-10 justify-between px-3 space-x-10 '>
          {buttonArray.map((str, i) => (
            <Link
              href={`#${str.toLowerCase()}`}
              className=' font-Handlee font-semibold text-black text-2xl hover:scale-125 m-auto'
              onClick={handleScroll}
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
