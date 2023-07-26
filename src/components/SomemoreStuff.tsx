/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"

const SomemoreStuff = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className='flex flex-col md:w-1/2 w-full h-full p-5  '>
      <div className=' bg-yellow-600  md:text-3xl text-xl font-Sigmarone text-center w-fit'>
        <span className=' text-white/75 px-2'>
          Creative Web Developer based in India
        </span>
      </div>
      <div className='flex w-full h-full my-8'>
        <div
          className='before:block w-fit md:px-3 relative inline-block font-Sriracha text-start tracking-wide md:leading-10 md:text-xl text-base leading-8'
          onClick={toggleReadMore}
        >
          <p
            className={`lg:line-clamp-none overflow-hidden md:line-clamp-none ${
              isExpanded
                ? "line-clamp-none"
                : "line-clamp-2 bg-gradient-to-b from-slate-900"
            }`}
          >
            I'm web developer, I'm very Passionate and dedicated to my work.
            With more than 1 years of experience as a
            <span className=' text-yellow-500 font-bold'>
              {" "}
              Full-stack web developer
            </span>
            , I have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every steps in development process, from
            discussion and collaboration
          </p>
        </div>
      </div>
    </div>
  )
}

export default SomemoreStuff
