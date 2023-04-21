import Link from "next/link";

const Navbar = () => {
  return (
  <div className="flex mx-5 h-full justify-between">
      <div className="w-full h-full p-5">
        <Link href='/' className="text-2xl font-bold font-italic text-yellow-500"> Darshan Vijaykumar</Link>
      </div>
    </div>
  )
}

export default Navbar
