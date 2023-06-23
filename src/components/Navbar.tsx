import Link from "next/link"

const Navbar = () => {
  return (
    <div className='flex p-auto h-full sticky top-0 bg-black z-10'>
      <div className='flex m-4 w-full h-full px-3 hover:animate-pulse'>
        <Link
          href='/'
          className='sm:text-md md:text-lg lg:text-xl xl-text:2xl 2xl:text-3xl font-thin italic font-Pacifico  text-yellow-500 hover:text-[#a1e962] '
        >
          Darshan
        </Link>
      </div>
    </div>
  )
}

export default Navbar
