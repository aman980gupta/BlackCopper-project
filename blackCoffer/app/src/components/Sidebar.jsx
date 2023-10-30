import React, { useEffect, useState, useContext } from 'react'
import {  NavLink, useNavigate } from "react-router-dom";
import { MdDashboard, MdOutlineTopic } from "react-icons/md";
import { GiCalendarHalfYear, GiWorld, GiMeteorImpact, GiPestleMortar, GiHoodie } from "react-icons/gi";
import { TbWorldSearch, TbBuildingCommunity } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MenuIconContext } from '../contexts/menuIconContext';

const Sidebar = () => {
  const navigate = useNavigate()
  const [isSmall, setIsSmall] = useState(false)
  const { isOpen, setIsOpen } = useContext(MenuIconContext);
  const navLinkClass = 'flex gap-2 justify-start items-center w-full border-opacity-0 rounded-xl cursor-pointer p-1';
  const mainNavlinkClass = "w-[300px] lg:w-[180px] flex flex-wrap justify-between items-center flex-row "

  const navlinks = [
    { path: "/root2/sector", text: "sector", component: <TbBuildingCommunity /> },
    { path: "/root2/topic", text: "topic", component: <MdOutlineTopic /> },
    { path: "/root2/end_year", text: "end_year", component: <GiCalendarHalfYear /> },
    { path: "/root2/region", text: "region", component: <GiWorld /> },
    { path: "/root2/start_year", text: "start_year", component: <GiCalendarHalfYear /> },
    { path: "/root2/country", text: "country", component: <TbWorldSearch /> },
    { path: "/root2/impact", text: "impact", component: <GiMeteorImpact /> },
    { path: "/root2/relevance", text: "relevance", component: <GiCalendarHalfYear /> },
    { path: "/root2/pestle", text: "pestle", component: <GiPestleMortar /> },
    { path: "/root2/likelihood", text: "likelihood", component: <GiHoodie /> },
  ]
  const gettingData = () => {

  }
  useEffect(() => gettingData(), [])

  return (
    <div className='w-full h-full flex flex-col relative items-center justify-between bg-green-400 p-2 '>
      <span className='absolute bottom-2 right-1' onClick={()=>setIsSmall(prev=>!prev)}>click</span>
      <div className='bg-orange-500 w-full h-12 flex justify-center'
      onClick={()=>navigate("/")}>
        <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-[#1e1d1c] text-white justify-center` : `${navLinkClass} justify-center`} to="/">
          <MdDashboard />
          <h3 className={""} >Dashboard</h3>
        </NavLink>
      </div>
      <section className='w-full '>
        <ul className='flex flex-col  '>
        <li>
        <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-[#1e1d1c] text-white` : `${navLinkClass}`} to="/catagory">
          <MdDashboard />
          <h3 className={""} >catagory</h3>
        </NavLink>
        </li>
          {navlinks.map((elem, i) => <li key={i} onClick={() => { }} >
            <NavLink className={({ isActive }) => isActive ? `${navLinkClass} bg-[#1e1d1c] text-white` : `${navLinkClass} `}
              to={`${elem.path}`} end>
              {elem.component}
              <h3 className={""} >{elem.text}</h3>
            </NavLink>
          </li>
          )}


        </ul>

      </section>
      <div className='flex flex-col w-full '>
        <span className='flex  items-center gap-2'>
          <AiFillSetting />
          <h4 className={isSmall ?"hidden" :"block"}>settings</h4>
        </span>
        <span className='flex  items-center gap-2'>
          <FaHandsHelping />
          <h4 className={isSmall ?"hidden" :"block"}>help & polices</h4>
        </span>
        <span className='flex  items-center gap-2'>
          <RiLogoutBoxLine />
          <h4 className={isSmall ?"hidden" :"block"}>logouts</h4>
        </span>

      </div>
    </div>
  )
}

export default Sidebar;