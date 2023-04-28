import React from "react"
import Banner from "./Banner"
import RandomIcon from "./RandomIcon"

const Content = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row-reverse w-full h-10 bg-yellow-600 rounded-md'>
        <RandomIcon />
        <div className='flex absolute w-1/6 h-10 justify-between px-3'>
          <button className=' font-Neucha font-thin text-xl hover:scale-125'>
            Contact
          </button>
          <button className=' font-Neucha font-thin text-xl hover:scale-125'>
            About
          </button>
          <button className=' font-Neucha font-thin text-xl hover:scale-125 '>
            Skills
          </button>
        </div>
      </div>
      <div className='w-full p-10'>
        <Banner />
      </div>
    </div>
  )
}

export default Content
