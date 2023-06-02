import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className='fixed bottom-0 w-full'></div>
    </>
  )
}

export default Layout
