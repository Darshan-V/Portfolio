import React from "react"
import Banner from "./Banner"
import MoreMe from "./MoreMe"
import SomemoreStuff from "./SomemoreStuff"

const Content = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex w-screen p-10'>
        <Banner />
      </div>
      <div className=' flex w-screen md:flex-row flex-col px-5 h-full'>
        <MoreMe />
        <SomemoreStuff />
      </div>
    </div>
  )
}

export default Content
