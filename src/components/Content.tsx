import React from "react"
import Banner from "./Banner"
import MoreMe from "./MoreMe"

const Content = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex w-screen p-10'>
        <Banner />
      </div>
      <div className='hidden w-screen md:flex px-10 h-full'>
        <MoreMe />
      </div>
    </div>
  )
}

export default Content
