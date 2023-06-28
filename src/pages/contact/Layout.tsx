import React from "react"
import Footer from "@/components/Footer"
import ContactBox from "./ContactBox"
const Layout = () => {
  return (
    <div className='flex flex-col w-full h-full mt-5 p-5'>
      <h1 className='md:text-2xl text-lg font-Sriracha'>Get in touch</h1>
      <div className='h-fit'>
        <ContactBox />
      </div>
    </div>
  )
}

export default Layout
