import React from "react"
import * as Popover from "@radix-ui/react-popover"
import { BsListNested } from "react-icons/bs"
import Link from "next/link"

const buttonArray = ["Home", "About", "Skills", "Contact"]

const PopOver = ({ handleScroll }: any) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='text-black'>
          <BsListNested className='text-xl' />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className=' h-fit w-screen mt-2'
          sideOffset={5}
        >
          <div className='flex md:hidden flex-row gap-y-5 bg-gradient-to-b from-yellow-600 w-full h-full '>
            <fieldset className=' w-full flex flex-row gap-x-5 md:py-3 rounded-sm'>
              {buttonArray.map((str, i) => (
                <Link
                  href={`#${str.toLowerCase()}`}
                  className=' font-Handlee font-semibold text-black text-2xl hover:scale-125 m-auto'
                  // onClick={handleScroll}
                  key={i}
                >
                  <Popover.Close
                    className='PopoverClose'
                    aria-label='Close'
                  >
                    {str}
                  </Popover.Close>
                </Link>
              ))}
            </fieldset>
          </div>

          <Popover.Arrow className='hidden' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopOver
