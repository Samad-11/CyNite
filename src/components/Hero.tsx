'use client'
import Link from 'next/link'
import React from 'react'
import heroImg from '../../public/heroImg.jpg'
import Clock from './Clock'
import HeroText from './HeroText'
import HeroSocialLinks from './HeroSocialLinks'

const Hero = () => {
    return (
        <div className="hero min-h-screen bgTransition " style={{ backgroundImage: `url(${heroImg.src}) ` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    {/* <h1 className="mb-5 lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel">CYNET</h1> */}
                    <HeroText />
                    <div className='flex justify-center items-center'>

                        <Link href='' className='flex justify-center items-center gap-3 animate-bounce  w-fit'>

                            <p className="mb-5 md:text-2xl text-sm font-semibold  faunaOne  tracking-wider">HURRY UP !
                            </p>
                            <p className='pb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                </svg>
                            </p>
                        </Link>
                    </div>
                    <Clock />
                    <Link href={'/registration'} className='btn btn-accent rounded-tr-full rounded-bl-full px-10 text-neutral-content cursor-none cinzel font-light tracking-wide'>Register Now</Link>
                </div>
                <HeroSocialLinks />
            </div>
        </div>
    )
}

export default Hero
