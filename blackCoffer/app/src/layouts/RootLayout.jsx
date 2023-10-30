import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar';
import { MenuIconContext } from '../contexts/menuIconContext';
import { SidebarContext } from '../contexts/sidebarContext';


const RootLayout = () => {
  const {isOpen,SetIsOpen} = useContext(MenuIconContext);
  const {isSmall, setIsSmall} = useContext(SidebarContext);
  const sideBarwidth = isSmall ? 5 :15
  console.log(isSmall)
  return (
    
    <div className='bg-[#d7f3fd] min-h-screen w-full flex  flex-col relative'>
      {/* <aside className="w-[100%] md:w-[15%] absolute left-0 h-full"  >
          <Sidebar />
        </aside> */}
     
      <Navbar />
      <Outlet />
      {/* <section className='p-1 flex  justify-center'>
      </section> */}
      <Footer />
      
    </div>
  )
}

export default RootLayout