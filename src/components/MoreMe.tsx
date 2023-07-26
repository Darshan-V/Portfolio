import React from "react"

const description = [
  "Passionate software developer who is enthusiastic about learningand exploring new technologies",
  "A full-stack developer but like to code at the front-end, I like animation and design",
  "Love cars and bikes ( like to fix bikes )",
]

const MoreMe = () => {
  return (
    <div className='flex flex-col my-auto md:w-1/2 w-full h-full p-5 '>
      <div className=' bg-pink-700  md:text-3xl text-xl font-Sigmarone text-center w-fit'>
        <span className=' text-yellow-400 px-2 '>More about me!</span>
      </div>

      <div className='flex w-full h-full my-5 '>
        <div className='h-[fit] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100'></div>
        <div className='flex flex-col w-full items-center gap-y-3'>
          {description.map((me, i) => (
            <div
              className='flex w-full items-center'
              key={i}
            >
              <hr className='my-10 md:mx-2 mx-1 h-1 md:w-[3rem] w-[1rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />

              <div className='flex md:w-full w-full py-2 md:text-xl font-Handlee  roundedbg-slate-700'>
                <span className='relative text-white px-2 md:tracking-wider md:leading-2 italic leading-tight tracking-wide'>
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
