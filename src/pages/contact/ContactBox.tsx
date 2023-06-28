import React from "react"

const ContactBox = () => {
  return (
    <div className='flex flex-col gap-y-8 mt-5 w-1/2 h-fit px-5 '>
      <input
        placeholder='Name'
        type='text'
        className='bg-transparent'
      />
      <input
        placeholder='Email'
        type='email'
        className='bg-transparent'
      />
      <textarea
        placeholder='Message'
        className='bg-transparent resize-none w-full h-40 bg-slate-500'
      />
    </div>
  )
}

export default ContactBox
