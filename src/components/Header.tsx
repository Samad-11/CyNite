'use client'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ReactToPrint from 'react-to-print';
import Sidebar from './Sidebar';
import Image from 'next/image';
import jimsLogo from '../../public/logo/finalJimslogo.png'

const Header = () => {
    const pathname = usePathname();


    const [isDashboard, setisDashboard] = useState(false)
    useEffect(() => {
        pathname.includes('dashboard') ? setisDashboard(true) : setisDashboard(false)
    }, [pathname])

    return (
        <>
            <Sidebar isDashboard={isDashboard} />
            <Link href={'/'} className='z-50  absolute '>
                <Image src={jimsLogo} alt='jims Logo' width={100} />
            </Link>

            <div className={`dropdown dropdown-left fixed right-5 top-5 z-50 ${!isDashboard && "hidden"}`} >
                <div tabIndex={0} role="button" className="btn m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link href={'/dashboard'}>All</Link>
                    </li>
                    <li><Link href={'?last24hours=true'}>Last 24 Hours</Link></li>
                    <li>Filter by verification
                        <ul>
                            <li><Link href={'?verified=true'}>Verified</Link></li>
                            <li><Link href={'?verified=false'}>Unverified</Link></li>
                        </ul>
                    </li>
                    <li>Filter by Events
                        <ul>
                            <li><Link href={'?event=tezar_heist'}>Tezar heist</Link></li>
                            <li><Link href={'?event=ui_universe'}>UI Universe</Link></li>
                            <li><Link href={'?event=arcade_arena'}>Arcade Arena</Link></li>
                            <li><Link href={'?event=quiz_technopedia'}>Quiz Technopedia</Link></li>
                            <li><Link href={'?event=innovision_5'}>Innovision 5.0</Link></li>
                            <li><Link href={'?event=code_kalpana'}>Code Kalpana</Link></li>
                            <li><Link href={'?event=clipclash'}>ClipClash</Link></li>
                        </ul>
                    </li>
                    <li>
                        <button onClick={() => signOut()}>Sign out</button>
                    </li>
                </ul>
            </div >

        </>
    )
}

export default Header