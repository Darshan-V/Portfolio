import Content from "@/components/Content"
import React from "react"
import About from "./about"
import Skills from "./skills"
import Contact from "./contact"

const Layout = () => {
  return (
    <div>
      <Content />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Layout
