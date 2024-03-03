'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

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
        },
        {
            href: "/about",
            label: "about"
        },
        {
            href: "/events",
            label: "events"
        },
        {
            href: "/contact",
            label: "contact us"
        },
        {
            href: "/faq",
            label: "faq"
        }
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
                {/* <button className={` btn btn-circle btn-ghost absolute bg-accent right-5 top-5 z-50 
                `}>
                     ${isDashboard && "hidden"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button> */}
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-screen min-h-full bg-accent text-base-content flex justify-center items-center">
                    {/* Sidebar content here */}
                    <ul>
                        {
                            links.map((link) => (
                                <li key={link.href} className='flex justify-center items-center my-4' onClick={() => {
                                    toggleRef.current?.click()
                                }}>
                                    <Link href={link.href} className='cinzel  hover:bg-inherit font-extrabold text-3xl  sm:text-5xl link link-hover cursor-none uppercase'>{link.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar