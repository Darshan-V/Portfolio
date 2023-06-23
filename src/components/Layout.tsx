import Navbar from "./Navbar"
import Footer from "./Footer"
import Navigate from "./Navigate"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Navigate />
      <main>{children}</main>
      <div className='fixed bottom-0 w-full'></div>
    </>
  )
}

export default Layout
