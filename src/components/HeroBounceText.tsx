import Link from 'next/link'
import React from 'react'

const HeroBounceText = () => {
    return (
        <Link href={'#events'} className='flex justify-center items-center'>
            <h1 className='flex justify-center items-center gap-3 animate-bounce  w-fit'>
                <p className="mb-5 md:text-2xl text-sm font-semibold  faunaOne  tracking-wider">HURRY UP !
                </p>
                <p className='pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </p>
            </h1>
        </Link>
    )
}

export default HeroBounceText