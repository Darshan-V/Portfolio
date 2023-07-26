import React, { useState } from "react"
// import PopOver from "./Popover"
import Link from "next/link"
// import Navbar from "./Navbar"

import {
  FcBusinessman,
  FcAbout,
  FcWorkflow,
  FcBusinessContact,
} from "react-icons/fc"

const buttonArray = [
  {
    name: "Home",
    icon: (
      <FcBusinessman className='text-4xl w-full h-full hover:bg-slate-600 rounded-full p-2' />
    ),
  },
  {
    name: "About",
    icon: (
      <FcAbout className='text-4xl w-full h-full hover:bg-slate-600 rounded-full p-2' />
    ),
  },
  {
    name: "Skills",
    icon: (
      <FcWorkflow className='text-4xl w-full h-full hover:bg-slate-600 rounded-full p-2' />
    ),
  },
  {
    name: "Contact",
    icon: (
      <FcBusinessContact className='text-4xl w-full h-full hover:bg-slate-600 rounded-full p-2' />
    ),
  },
]

const Navigate = () => {
  const [triggerQuickBall, setTrigger] = useState(true)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)

    elem?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <div className='flex  w-20 h-full  bg-transparent fixed '>
        <div
          className={`w-10 h-10 bg-red-700 my-auto ${
            triggerQuickBall ? "hidden" : "block"
          }`}
        ></div>
        <div
          className={`flex flex-col  h-fit my-auto p-4 rounded-full  bg-gray-200 bg-opacity-30  space-y-10 top-[50%] ${
            triggerQuickBall ? "block" : "hidden"
          }`}
        >
          {buttonArray.map((str, i) => (
            <Link
              href={`#${str.name.toLowerCase()}`}
              className=' font-Handlee font-semibold text-white text-2xl hover:scale-125 m-auto  '
              onClick={handleScroll}
              key={i}
            >
              {str.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navigate
