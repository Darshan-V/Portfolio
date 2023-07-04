import React from "react"
import ContactBox from "./ContactBox"
const Layout = () => {
  return (
    <div className='flex w-full h-full mt-5 p-5 '>
      <div className='flex flex-col w-full h-full overflow-scroll'>
        <div className=' md:w-1/2 w-full h-fit py-2 bg-gradient-to-r from-yellow-500 m-auto rounded -skew-x-2'>
          <h1 className='md:text-3xl text-lg font-Sriracha px-5 text-black'>
            Hire Me!
          </h1>
        </div>
        <ContactBox />
      </div>
      <div></div>
    </div>
  )
}

export default Layout
