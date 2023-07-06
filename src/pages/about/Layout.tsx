import React from "react"
import Hero from "./Hero"
import MediaLink from "./MediaLink"

const Layout = () => {
  return (
    <div className='flex flex-col space-y-3 h-full '>
      <Hero />
      <MediaLink />
    </div>
  )
}

export default Layout
