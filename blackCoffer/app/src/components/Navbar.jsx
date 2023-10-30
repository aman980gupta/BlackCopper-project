import React, { useContext, useState } from 'react';
import { Link,NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { MenuIconContext } from '../contexts/menuIconContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navLinks = ["profile", "about", "home"];
    const {isOpen,setIsOpen} = useContext(MenuIconContext);
    const navigate = useNavigate()
    const navLinkClass = 'flex gap-2 justify-start items-center  border-opacity-0 rounded-xl cursor-pointer p-1';
    //console.log(isOpen)
    return (
        <header className='w-[100%] h-[8vh] bg-[#abffe8] flex  items-center justify-between p-1'>
            <div className='lg:hidden px-3'>
                {isOpen ?
                 <CgMenu onClick={()=>setIsOpen(prev=>!prev)}/>
                 :<CgClose onClick={()=>setIsOpen(prev=>!prev)}/>}
            </div>
            <div><Link to="/">
                <img alt='LOGO' />
            </Link>
            </div>
            <nav className='hidden lg:flex'>
                <ul className='flex gap-2'>

                    <li className='capitalize cursor-pointer'>
                        <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-zinc-600 text-white` : `${navLinkClass} `} to="/">home
                        </NavLink>
                    </li>
                    <li className='capitalize cursor-pointer'>
                        <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-zinc-600 text-white` : `${navLinkClass} `} to="/profile">Profile
                        </NavLink>
                    </li>
                    <li className='capitalize cursor-pointer'>
                        <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-zinc-600 text-white` : `${navLinkClass} `} to="/about">Table
                        </NavLink>
                    </li>

                </ul>
            </nav>
            <div className='flex justify-center items-center gap-2'>

                <Link to="/profile">
                    <img className='w-[30px] h-[30px] bg-cover border rounded-[50%] cursor-pointer' src='profile.png' />
                </Link>
                <span className=''>Logout</span>
            </div>
        </header>
    )
}

export default Navbar