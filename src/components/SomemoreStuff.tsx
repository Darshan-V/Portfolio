import React, { useState } from "react"

const SomemoreStuff = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className='flex flex-col md:w-1/2 w-full h-full p-5  '>
      <div className='md:before:block md:w-fit md:px-3 md:before:absolute md:before:-inset-1 md:before:-skew-y-2 md:before:bg-yellow-600 md:relative md:inline-block bg-yellow-600'>
        <span className='md:relative text-white md:text-2xl text-lg font-bold font-Amatic italic text-center tracking-wider px-1'>
          Creative Web Developer based in India
        </span>
      </div>
      <div className='flex w-full h-full my-8'>
        <div className='before:block w-fit md:px-3 relative inline-block font-Neucha text-start tracking-wide leading-10 md:text-xl text-base '>
          <p
            className={`lg:line-clamp-none line-clamp-${
              isExpanded ? "none" : "2"
            }`}
          >
            I'm web developer, I'm very Passionate and dedicated to my work.
            With more than 1 years of experience as a
            <br />
            <span className=' box-border shadow-inner rounded shadow-slate-700 bg-transparent p-2 m-1 text-yellow-500 font-bold'>
              {" "}
              Full-stack web developer
            </span>
            , I have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every steps in development process, from
            discussion and collaboration
          </p>
          <button
            onClick={toggleReadMore}
            className='lg:hidden underline decoration-yellow-500 text-yellow-500 underline-offset-8 text-sm md:text-lg'
          >
            {isExpanded ? "read less" : "read more..."}.
          </button>
        </div>
      </div>
    </div>
  )
}

export default SomemoreStuff
