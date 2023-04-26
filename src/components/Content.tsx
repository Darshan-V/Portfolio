import React from "react"
import Banner from "./Banner"
import RandomIcon from "./RandomIcon"

const Content = () => {
  return (
    <div className='w-full h-full'>
      <div className=' w-full h-10 bg-yellow-500'>
        <RandomIcon />
      </div>
      <Banner />
    </div>
  )
}

export default Content
