'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import img from '../../public/prallax3.gif'
import { IoHome } from 'react-icons/io5'
import { LuGalleryHorizontalEnd, LuMessagesSquare } from 'react-icons/lu'
import { BsPatchQuestion } from 'react-icons/bs'

const Sidebar = ({ isDashboard }: { isDashboard: boolean }) => {
    const [isSideOpen, setIsSideOpen] = useState(false)
    const toggleRef = useRef<any>()
    const sideStatusChange = () => {
        setIsSideOpen(!isSideOpen)
    }
    const links = [
        {
            href: "/",
            label: "home",
            icon: <IoHome />
        },
        // {
        //     href: "contact",
        //     label: "gallery",
        //     icon: <LuGalleryHorizontalEnd />
        // },
        {
            href: "/contact",
            label: "contact us",
            icon: <LuMessagesSquare />
        },
        // {
        //     href: "",
        //     label: "faq",
        //     icon: <BsPatchQuestion />
        // }
    ]
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label ref={toggleRef} onClick={sideStatusChange} htmlFor="my-drawer-4" className={`swap swap-rotate drawer-button btn btn-circle btn-ghost border border-neutral-content fixed bg-accent right-5 top-5 z-50 ${isDashboard && "hidden"}`}>

                    {/* ${isDashboard && "hidden"} */}
                    {
                        isSideOpen ?
                            <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-5 h-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    }
                </label>
            </div>
            <div className="drawer-side z-[40]">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-screen min-h-full  text-base-content flex justify-center items-center
                bg-cover
                bg-opacity-85
                bg-base-100
                "
                // style={{ backgroundImage: `url(${img.src})` }}
                >
                    {/* Sidebar content here */}
                    <ul>
                        {
                            links.map((link) => (
                                <li key={link.href} className='flex justify-center items-start my-8' onClick={() => {
                                    toggleRef.current?.click()
                                }}>

                                    <Link href={link.href} className='cinzel  hover:bg-inherit font-extrabold text-2xl  sm:text-5xl link link-hover cursor-none uppercase flex items-center justify-center gap-7'>
                                        <i className=' pb-2 text-3xl md:text-5xl md:pb-3'>
                                            {link.icon}
                                        </i>
                                        {link.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebar