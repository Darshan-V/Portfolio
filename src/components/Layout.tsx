import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
 return (
 <>
      <Navbar/>
      <main>{children}</main>
      <div className="fixed bottom-0 w-full">
      <Footer/>
    </div>
    </>
 ) 
}

export default Layout
