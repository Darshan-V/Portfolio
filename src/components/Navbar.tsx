import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <Link
        href='/'
        className='sm:text-md md:text-2xl lg:text-4xl px-4 font-thin italic font-Sigmarone  text-white hover:text-[#a1e962] hover:animate-pulse'
      >
        Darshan
      </Link>
    </>
  )
}

export default Navbar
