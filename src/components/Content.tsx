import React from "react"
import Banner from "./Banner"
import RandomIcon from "./RandomIcon"

const Content = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className=' w-full h-10 bg-yellow-600 rounded-md'>
        <RandomIcon />
      </div>
      <div className='w-full m-auto p-10'>
        <Banner />
      </div>
    </div>
  )
}

export default Content
