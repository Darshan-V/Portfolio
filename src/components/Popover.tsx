import React from "react"
import * as Popover from "@radix-ui/react-popover"
import { BsListNested } from "react-icons/bs"
import Link from "next/link"

const buttonArray = ["Home", "About", "Skills", "Contact"]

const PopOver = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className='text-black'>
        <BsListNested className='text-xl' />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className='bg-gradient-to-tr from-slate-600 h-screen'
        sideOffset={5}
      >
        <div className='flex md:hidden flex-col gap-y-5 bg-gradient-to-b from-slate-600 w-20 h-2/3 '>
          <fieldset className=' w-full flex flex-col gap-y-5 pt-3 rounded-sm'>
            {buttonArray.map((str, i) => (
              <Link
                href={`/${str.toLowerCase()}`}
                className=' font-Neucha font-thin text-xl hover:scale-125 m-auto'
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

export default PopOver
