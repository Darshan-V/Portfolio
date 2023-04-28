import Link from "next/link"

const Navbar = () => {
  return (
    <div className='flex m-4 p-auto h-full sticky top-1'>
      <div className='flex w-full h-full px-3 hover:animate-bounce m-auto '>
        <Link
          href='/'
          className='sm:text-md md:text-lg lg:text-xl xl-text:2xl 2xl:text-3xl font-thin italic font-Pacifico  text-yellow-500  '
        >
          Darshan
        </Link>
      </div>
    </div>
  )
}

export default Navbar
