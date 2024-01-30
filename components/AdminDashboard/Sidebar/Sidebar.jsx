"use client"


import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import AllUsers from "../AllUsers/AllUsers"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { FaUserFriends, FaUser } from 'react-icons/fa'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { usePathname } from "next/navigation"
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";

const Sidebar = () => {

    const [ show1, setShow1 ] = useState(false)
    const { user, currentUser } = useCurrentUser()
    const pathname = usePathname()

    console.log(user + " " + currentUser);

  return (
    <div className="sm:block sm:fixed">
        <div className='flex min-h-screen min-w-1/6 bg-slate-700 shadow-lg'>
        <div className='relative w-full rounded-r-[20px] flex flex-col gap-[10px] bg-back-light p-[24px]'>
            <div className='flex justify-center gap-[20px] border-b-2 border-[#f6f6f6] pb-[20px]'>
                <div className='w-[44px] h-[44px] rounded-[50%] overflow-hidden'>
                    <img src={`${ currentUser && currentUser?.image}`} alt={currentUser && currentUser?.lastname} className='w-full h-full object-cover' />
                </div>
                <div className='user-details my-auto'>
                    <p className='text-[16px] leading-2 font-medium text-[#ffffff]'>{currentUser && currentUser?.fullname}</p>
                    <p className='text-[10px] leading-2 font-bold text-center text-[#ffffff] uppercase'>{currentUser && currentUser?.role}</p>
                </div>
            </div>
            <div className='flex flex-col justify-between h-screen'>
                <div className='menu'>
                    <p className='text-[10px] leading-2 text-[#ffffff] uppercase'>Main</p>
                    <ul>
                        <li className="mb-[5px] text-[#fff] rounded-[10px] cursor-pointer">
                            <Link href={'/dashboard'} className="flex items-center gap-[10px] text-[14px] leading-2 text-[#ffffff]
                                                        py-[12px] px-[8px] rounded-[8px] transition-all duration-300
                                                        hover:text-[#000] hover:bg-[#f6f6f6] ">
                                <AiOutlineHome />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="mb-[5px] text-[#fff] rounded-[10px] cursor-pointer">
                            <nav className={`${show1 ? "bg-slate-500" : ""} mb-[5px] cursor-pointer flex items-center justify-between gap-[10px] text-[14px] leading-2 text-[#ffffff]
                                                        py-[12px] px-[8px] rounded-[8px] transition-all duration-300
                                                        hover:text-[#000] hover:bg-[#f6f6f6] `}
                                    onClick={() => setShow1(!show1)} >
                                <div className="flex gap-[10px]w-full items-center justify-center">
                                    <AiOutlineUser />
                                    <span >Acciones</span>
                                </div>
                                { show1 ? <FiChevronDown /> : <FiChevronUp />}
                            </nav>
                            {
                                show1 ? <ul className="submneu ">
                                <Link href={'/dashboard/users'} className={` ${pathname === '/dashboard/users' ? "bg-slate-500" : ""} flex w-[90%] text-slate-500 bg-[#f6f6f6] p-4 border-[#f6f6f6] rounded-[10px]
                                                 mb-[5px]
                                `}>
                                
                                        <span className="text-[14px] flex-1 font-bold">Usuarios</span>
                                        <FaUser className="h-6 w-6 text-slate-500"/>
                                    
                                </Link>
                
                                <Link href={'/dashboard/users'} className="flex w-[90%] text-slate-500 bg-[#f6f6f6] p-4 border-[#f6f6f6] rounded-[10px]
                                                 mb-[5px]
                                ">
                                
                                        <span className="text-[14px] flex-1 font-bold">Anuncios</span>
                                        <FaUser className="h-6 w-6 text-slate-500"/>
                                    
                                </Link>

                                <Link href={'/dashboard/users'} className="flex w-[90%] text-slate-500 bg-[#f6f6f6] p-4 border-[#f6f6f6] rounded-[10px]
                                                 mb-[5px]
                                ">
                                
                                        <span className="text-[14px] flex-1 font-bold">Users</span>
                                        <FaUser className="h-6 w-6 text-slate-500"/>
                                    
                                </Link>
                                
                            </ul> : ""
                            }
                        </li>
                    </ul>

                    

                </div>

                <Link href={'/'} className="flex mb-40 gap-1 items-center justify-center p-2 rounded-md text-white font-bold hover:opacity-75">
                    
                    <RiDeleteBack2Fill className="h-6 w-6"/>
                    <nav className="text-white" >Salir</nav>
                    
                </Link>
      
            </div>
        </div>
    </div>

    </div>
  )
}

export default Sidebar;