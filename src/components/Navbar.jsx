import Link from "next/link";

const Navbar = () => {
  return (
  <div className="flex">
      <div>
        <Link> Darshan's Portfolio</Link>
      </div>
      <button className="rounded-xl">Resume</button>
    </div>
  )
}

export default Navbar
