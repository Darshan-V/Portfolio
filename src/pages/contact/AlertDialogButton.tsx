import React from "react"
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const AlertDialogButton = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className='w-fit'>
        <div className='w-fit'>
          <a
            href='#_'
            className='relative inline-flex items-center justify-center md:px-10 md:py-5 px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group'
          >
            <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
            <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
            <span className='relative md:text-xl font-Sriracha font-thin'>
              Submit
            </span>
          </a>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
        <AlertDialog.Content className='data-[state=open]:animate-contentShow fixed bottom-[10%] right-[5%]'>
          <AlertDialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className='text-mauve11 mt-4 mb-5 text-[15px] leading-normal'>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <div className='flex justify-end gap-[25px]'>
            <AlertDialog.Cancel asChild>
              <button className='text-red bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className='text-red bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
                Yes, delete account
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AlertDialogButton
