import React from "react"

const description = [
  "Passionate software developer who is enthusiastic about learningand exploring new technologies",
  "A full-stack developer but like to code at the front-end, I like animation and design",
  "Love cars and bikes ( like to fix bikes )",
]

const MoreMe = () => {
  return (
    <div className='flex flex-col my-auto md:w-1/2 w-full h-full p-5 '>
      <div className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block text-3xl font-bold font-Amatic italic text-center md:w-fit'>
        <span className='relative text-white px-2 '>More about me!</span>
      </div>

      <div className='flex w-full h-full my-5 '>
        <div className='h-[fit] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100'></div>
        <div className='flex flex-col w-full items-center gap-y-3'>
          {description.map((me, i) => (
            <div
              className='flex w-full items-center'
              key={i}
            >
              <hr className='my-10 mx-2 h-1 w-[3rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />

              <div className='flex md:w-fit py-2 text-xl italic font-thin font-Neucha  before:block before:-inset-1 before:skew-x-1 before:rounded before:bg-slate-700 before:absolute relative'>
                <span className='relative text-white px-2 tracking-wide'>
                  {me}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoreMe
