import React from "react"
import Banner from "./Banner"
import RandomIcon from "./RandomIcon"
import Link from "next/link"

const Content = () => {
  const buttonArray = ["Home", "About", "Skills", "Contact"]

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row-reverse w-full h-10 bg-yellow-600 rounded-md'>
        <RandomIcon />
        <div className='flex absolute w-1/6 h-10 justify-between px-3'>
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
      <div className='w-full p-10'>
        <Banner />
      </div>
    </div>
  )
}

export default Content
