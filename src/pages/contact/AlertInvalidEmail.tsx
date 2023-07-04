import React from "react"

const AlertInvalidEmail = () => {
  return (
    <div
      className='flex items-center bg-orange-100 border-l-4 h-10 border-orange-500 text-orange-700 p-4 md:w-2/3'
      role='alert'
    >
      <span className='font-bold mr-auto'>Warning! </span>
      <span className='w-full px-5'> Enter valid Email</span>
    </div>
  )
}

export default AlertInvalidEmail
