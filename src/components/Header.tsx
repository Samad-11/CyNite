'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const pathname = usePathname();
    const [isDashboard, setisDashboard] = useState(false)
    useEffect(() => {
        pathname.includes('dashboard') ? setisDashboard(true) : false
    }, [pathname])

    return (
        <>
            <button className={`btn btn-square btn-ghost absolute bg-black right-5 top-5 z-50 ${isDashboard && "hidden"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
            <button className={`btn btn-square btn-ghost absolute bg-black right-5 top-5 z-50 ${!isDashboard && "hidden"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
            <div className={`dropdown dropdown-left absolute right-5 top-5 z-50 ${!isDashboard && "hidden"}`} >
                <div tabIndex={0} role="button" className="btn m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>Filter
                        <ul>
                            <li><Link href={'/dashboard'}>All</Link></li>
                            <li><Link href={'/dashboard?verified=true'}>Verified</Link></li>
                            <li><Link href={'/dashboard?verified=false'}>Unverified</Link></li>
                        </ul>
                    </li>
                    <li><Link href={''}>Logout</Link></li>
                </ul>
            </div >

        </>
    )
}

export default Header