import Navbar from "./Navbar"
import Footer from "./Footer"
import Navigate from "./Navigate"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigate />
      <main>{children}</main>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </>
  )
}

export default Layout
