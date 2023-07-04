import React from "react"
import AlertInvalidEmail from "./AlertInvalidEmail"

const SubmitButton = ({ handleSubmit }: any) => {
  return (
    <div className='w-fit'>
      <a
        href='#_'
        className='relative inline-flex items-center justify-center md:px-10 md:py-5 px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group'
        onClick={() => {
          handleSubmit()
        }}
      >
        <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
        <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
        <span className='relative md:text-xl font-Sriracha font-thin'>
          Submit
        </span>
      </a>
    </div>
  )
}

export default SubmitButton
