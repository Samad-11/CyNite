import Link from 'next/link'
import React from 'react'
import heroImg from '../../public/heroImg.jpg'
import Clock from './Clock'

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImg.src}) ` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Here a chance to get participation in most exciting IT fest <span className='text-2xl'>CyNite</span></p>
                    <Clock />
                    <Link href={'/registration'} className='btn btn-accent rounded-full'>Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
// <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>