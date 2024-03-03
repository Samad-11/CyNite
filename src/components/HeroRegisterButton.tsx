import Link from 'next/link'
import React from 'react'

const HeroRegisterButton = () => {
    return (
        <Link href={'/registration'} className='btn btn-accent rounded-tr-full rounded-bl-full px-10 text-neutral-content cursor-none cinzel font-light tracking-wide mb-5 border-r-4 border-r-neutral-content border-t-4 border-t-neutral-content
    border-l-4 border-l-neutral-content
    border-b-4 border-b-accent
    hover:border-b-neutral-content
    transition-all
    duration-700
    '>Register Now</Link>
    )
}

export default HeroRegisterButton